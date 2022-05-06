import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IPageViews {
  allTime: number;
  last30Days: number;
  last24Hours: number;
}

interface InitialState {
  pageviews: IPageViews;
}

const initialState: InitialState = {
  pageviews: {
    allTime: 0,
    last30Days: 0,
    last24Hours: 0,
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
    setPageViewsLast24Hours: (state, action: PayloadAction<number>) => {
      state.pageviews.last24Hours = action.payload;
    },
  },
});

export const {
  setPageViewsAllTime,
  setPageViewsLast30Days,
  setPageViewsLast24Hours,
} = umamiSlice.actions;
export default umamiSlice.reducer;
