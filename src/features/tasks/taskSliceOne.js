import { createSlice } from '@reduxjs/toolkit';

export const taskSliceOne = createSlice({
    name: "tasksOne",
    initialState: {
        tasksOne: [
            {
                taskId: "T001",
                taskName: "Get Groceries from the market.",
                taskStatus: "Pending"
            },
            {
                taskId: "T002",
                taskName: "Go to Gym.",
                taskStatus: "Completed"
            },
            {
                taskId: "T003",
                taskName: "Water the plants.",
                taskStatus: "Completed"
            }
        ]
    },
    reducers: {}
});

export default taskSliceOne.reducer;