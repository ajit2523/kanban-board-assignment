import { v4 as uuidv4 } from 'uuid';

const mockData = [
    {
        id: uuidv4(),
        title: 'Design',
        tasks: [
            {
                id: uuidv4(),
                title: 'Old fashioned recipe for preventing allergies and chemical sensitivities'
            },
            {
                id: uuidv4(),
                title: 'Home business advertising ideas'
            },
            {
                id: uuidv4(),
                title: 'Cosmetic surgery abroad making the right choice'
            }
        ]
    },
    {
        id: uuidv4(),
        title: 'Prototype',
        tasks: [
            {
                id: uuidv4(),
                title: 'Unmatched toner cartridge quality 20 less than oem price'
            },
            {
                id: uuidv4(),
                title: 'There is no competition'
            }
        ]
    },
    {
        id: uuidv4(),
        title: 'Trello',
        tasks: [
            {
                id: uuidv4(),
                title: 'Types of paper in catalog printing'
            },
            {
                id: uuidv4(),
                title: 'Learn Express.js'
            }
        ]
    }
];

export default mockData;
