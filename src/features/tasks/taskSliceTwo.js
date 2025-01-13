import { createSlice } from "@reduxjs/toolkit";

export const taskSliceTwo = createSlice({
    name: 'tasksTwo',
    initialState: {
        tasksTwo: [
            {
                taskId: "T001",
                taskName: "Go to the park.",
                taskStatus: "Completed"
            },
            {
                taskId: "T002",
                taskName: "Get my room cleaned.",
                taskStatus: "Pending"
            }
        ]
    },
    reducers: {}
})

export default taskSliceTwo.reducer;