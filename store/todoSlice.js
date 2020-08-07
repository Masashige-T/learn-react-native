import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: "todo",
  initialState: { todo: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload)
      return state
    },
  },
})

export const { addTodo } = todoSlice.actions

export default todoSlice
