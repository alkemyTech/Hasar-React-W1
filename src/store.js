import { configureStore } from '@reduxjs/toolkit';
import { reducer as mySliceReducer } from './mySlice';

const store = configureStore({
  reducer: {
    mySlice: mySliceReducer
  }
});

export default store;