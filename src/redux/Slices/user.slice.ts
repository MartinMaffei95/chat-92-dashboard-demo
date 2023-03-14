// ==> Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// ==> TS Interfaces
import { User } from '../../models';
import { login } from '../../pages/Login/services';

const initialState: User = {
  username: '',
  password: '',
  email: '',
  number: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<User>): void => {
      // Excec login service
      // ==>> login()

      console.log(action);
    },
  },
});

export default userSlice.reducer;
