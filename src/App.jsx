import TasksOne from "./features/tasks/TasksOne";
import TasksTwo from "./features/tasks/TasksTwo";

const App = () => {
  return (
    <main>
      <h1>My Task List</h1>
      <div>
        <TasksOne />
        <TasksTwo />
      </div>
    </main>
  )
}

export default App;