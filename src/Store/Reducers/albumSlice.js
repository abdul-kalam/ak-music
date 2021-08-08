import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { jsonp } from '../../api/client';

const initialState = {
  songs: {},
  status: 'idle',
  error: null,
  activeSong: '',
};

export const fetchAlbum = createAsyncThunk('music/fetchAlbum', async (id) => {
  const response = await jsonp(
    `https://itunes.apple.com/us/lookup?id=${id}&entity=song`
  );
  return response.results;
});

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    updateStatus(state, action) {
      if (state.status === 'succeeded') {
        state.status = action.payload;
      }
    },
    setActiveSong(state, action) {
      state.activeSong = action.payload;
    },
    unSetActiveSong(state, action) {
      state.activeSong = '';
    },
  },
  extraReducers: {
    [fetchAlbum.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchAlbum.fulfilled]: (state, action) => {
      state.status = 'succeeded';

      let res = action.payload;

      state.songs[res[0].collectionId] = res;
    },
    [fetchAlbum.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { updateStatus, setActiveSong, unSetActiveSong } = albumSlice.actions;
export default albumSlice.reducer;

export const getAlbumDetails = (state, id) => {
  return state.album.songs[id][0];
};

export const getAllSongsOfAlbum = (state, id) => {
  return state.album.songs[id].slice(1);
};

export const getActiveSong = (state) => {
  return state.album.activeSong;
};
