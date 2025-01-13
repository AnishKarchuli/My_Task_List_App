import { configureStore } from "@reduxjs/toolkit";
import { taskSliceOne } from "../features/tasks/taskSliceOne";
import { taskSliceTwo } from "../features/tasks/taskSliceTwo";

export default configureStore({
    reducer: {
        tasksOne: taskSliceOne.reducer,
        tasksTwo: taskSliceTwo.reducer
    }
})