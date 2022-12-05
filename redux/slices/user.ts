import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseUsers } from '../../utils/api/types';

export interface UserState {
  data: ResponseUsers | null;
}

const initialState: UserState = {
  data: null,
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<ResponseUsers>) {
      state.data = action.payload;
    },
  },
});

export const { setUserData } = userReducer.actions;

export const selectUserData = (state: RootState) => state.user.data;

export default userReducer.reducer;
