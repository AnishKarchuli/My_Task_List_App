import { useSelector } from 'react-redux';

const TasksTwo = () => {
    const tasks = useSelector((state) => {
        return state.tasksTwo;
    });

    return (
        <div>
            <h2>16/07/2024</h2>
            <ul>
                {
                    tasks.tasksTwo.map((task) => (
                        <li key={task.taskId}>
                            {task.taskName}
                            <br /><br />
                            Status: {task.taskStatus}
                            <br /><br />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TasksTwo;