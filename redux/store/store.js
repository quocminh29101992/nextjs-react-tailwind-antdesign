import { configureStore } from "@reduxjs/toolkit";

import tasks from "../slices/taskSlice";
const store = configureStore({
  reducer: {
    tasks,
  },
});

export default store;
