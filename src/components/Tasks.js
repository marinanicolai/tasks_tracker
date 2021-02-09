import { useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Send a letter',
            day: 'Feb 5th',
            reminder: true,
        },
        {
            id: 2,
            text: 'Code the project',
            day: 'Feb 5th',
            reminder: true,
        },
        {
            id: 3,
            text: 'Pick up the children',
            day: 'Feb 5th',
            reminder: true,
        },
    ]
    )

    return (
        <>
            {tasks.map((task) =>
                <h3 key={task.id}>{task.text}</h3>
            )}
        </>
    )
}

export default Tasks