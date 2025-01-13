import { useSelector } from 'react-redux';

const TasksOne = () => {
    const tasks = useSelector((state) => {
        return state.tasksOne;
    });

    return (
        <div>
            <h2>15/07/2024</h2>
            <ul>
                {
                    tasks.tasksOne.map((task) => (
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

export default TasksOne;