import "./Kanban.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockData from "../mockData";
import { useState } from "react";
import Card from "./Card";

const Kanban = () => {
  const [data, setData] = useState(mockData);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex(
        (col) => col.id === source.droppableId
      );
      const destColIndex = data.findIndex(
        (col) => col.id === destination.droppableId
      );

      const sourceCol = data[sourceColIndex];
      const destCol = data[destColIndex];

      const sourceTasks = [...sourceCol.tasks];
      const destTasks = [...destCol.tasks];

      const [removed] = sourceTasks.splice(source.index, 1);
      destTasks.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTasks;
      data[destColIndex].tasks = destTasks;

      setData(data);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban">
        {data.map((section) => (
          <Droppable droppableId={section.id} key={section.id}>
            {(provided) => (
              <div
                className="kanban__section"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="kanban__section__title">
                  <h3 style={{textAlign:'center', color:'#d4d4d4'}}>{section.title}</h3>
                </div>
                <div className="kanban__section__content">
                  {section.tasks.map((task, index) => (
                    <Draggable
                      draggableId={task.id}
                      index={index}
                      key={task.id}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? 0.5 : 1,
                          }}
                        >
                          <Card title={task.title} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Kanban;
