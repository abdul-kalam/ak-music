import { configureStore } from '@reduxjs/toolkit'

import musicReducer from './Reducers/musicSlice'
import albumReducer from './Reducers/albumSlice';

export default configureStore({
  reducer: {
    music: musicReducer,
    album: albumReducer
  },
})
