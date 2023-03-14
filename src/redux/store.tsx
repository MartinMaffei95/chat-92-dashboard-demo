import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slices/user.slice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
