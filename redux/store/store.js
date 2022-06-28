import {configureStore} from '@reduxjs/toolkit';
import portfolioReducer from '../features/portfolioSlicer';

export default configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});
