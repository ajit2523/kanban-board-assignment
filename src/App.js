import "./App.css";
import { DragDropContext } from "react-beautiful-dnd";
import Kanban from "./components/Kanban";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ marginBottom: "20px", textAlign:'center'}} >Kanban Board</h1>
      <Kanban />
    </div>
  );
}

export default App;
