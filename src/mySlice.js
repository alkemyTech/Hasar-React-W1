import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Aquí puedes definir el estado inicial de tu slice
};

const mySlice = createSlice({
  name: "mySlice",
  initialState,
  reducers: {
    // Aquí puedes definir tus acciones y cómo cambian el estado del slice
  },
});

export const { actions, reducer } = mySlice;
