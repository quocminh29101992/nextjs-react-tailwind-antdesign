import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTodoList } from '../../services/v1/task'
// import axios from "axios";

// const config = {
//   headers: {
//     Authorization: `Token ${process.env.REACT_APP_GITHUB_TOKEN}`,
//   },
// };


export const getTodoListAction = createAsyncThunk(
  "tasks/getTodoList",
  async () => {
    try {
      const  data  = await getTodoList()
   
      return data.json();
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const tasksSlices = createSlice({
  name: "tasks",
  initialState: {},
  extraReducers: builder => {
    builder.addCase(getTodoListAction.pending, (state, action) => {

      state.loading = true;
    });
    builder.addCase(getTodoListAction.fulfilled, (state, action) => {

      state.taskList = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(getTodoListAction.rejected, (state, action) => {

      state.loading = false;
      state.error = action?.payload;
      state.taskList = undefined;
    });
  
  },
});

export default tasksSlices.reducer;
