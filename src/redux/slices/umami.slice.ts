import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  pageviews: number;
}

const initialState: InitialState = {
  pageviews: 0,
};

export const umamiSlice = createSlice({
  name: 'umami',
  initialState,
  reducers: {
    setPageViews: (state, action: PayloadAction<number>) => {
      state.pageviews = action.payload;
    },
  },
});

export const { setPageViews } = umamiSlice.actions;
export default umamiSlice.reducer;
