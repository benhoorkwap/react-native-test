import {createSlice} from '@reduxjs/toolkit';

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    visiblePortfolio: {
      title: '',
    },
  },
  reducers: {
    setVisiblePortfolio: (state, action) => {
      state.visiblePortfolio = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setVisiblePortfolio} = portfolioSlice.actions;

export default portfolioSlice.reducer;
