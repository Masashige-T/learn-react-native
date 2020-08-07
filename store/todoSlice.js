import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: "todo",
  initialState: { todo: [{ id: "1dwhuaig", title: "hoge", text: "hoga" }] },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload)
      return state
    },
  },
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer
