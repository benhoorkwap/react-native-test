import {createSlice} from '@reduxjs/toolkit';

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    visiblePortfolio: {
      id: 1,
      title: 'Aggressive Portfolio',
      assetAllocation: {
        voo: 55,
        ijh: 10,
        Ijr: 5,
        ixus: 30,
      },
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
