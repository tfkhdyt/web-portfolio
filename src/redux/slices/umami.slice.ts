import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPageViews {
  allTime: number;
  last30Days: number;
}

interface InitialState {
  pageviews: IPageViews;
}

const initialState: InitialState = {
  pageviews: {
    allTime: 0,
    last30Days: 0,
  },
};

export const umamiSlice = createSlice({
  name: 'umami',
  initialState,
  reducers: {
    setPageViewsAllTime: (state, action: PayloadAction<number>) => {
      state.pageviews.allTime = action.payload;
    },
    setPageViewsLast30Days: (state, action: PayloadAction<number>) => {
      state.pageviews.last30Days = action.payload;
    },
  },
});

export const { setPageViewsAllTime, setPageViewsLast30Days } =
  umamiSlice.actions;
export default umamiSlice.reducer;
