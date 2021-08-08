import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { jsonp } from '../../api/client';
import { getLocalStorageValue } from '../../Modules/utils';

const FAVORITE_ALBUMS = 'favorite-albums';

const initialState = {
  feed: {},
  status: 'idle',
  error: null,
  filter: {
    category: { id: 'all' },
    dateRange: {
      startDate: '',
      endDate: '',
    },
    searchTerm:''
  },
};

export const fetchMusic = createAsyncThunk('music/fetchMusic', async () => {
  const response = await jsonp(
    'https://itunes.apple.com/us/rss/topalbums/limit=100/json'
  );
  return response.feed;
});

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setDateRange(state, action) {
      const { startDate, endDate } = action.payload;
      state.filter.dateRange = {
        startDate: startDate,
        endDate: endDate,
      };
    },
    setCategory(state, action) {
      state.filter.category.id = action.payload.id;
    },
    setSearchTerm(state, action) {
      state.filter.searchTerm = action.payload.searchTerm || '';
    },
    addFavorite(state, action) {
      const { id } = action.payload;
      if (state.feed.entry) {
        for (let item of state.feed.entry) {
          if (item.id.attributes['im:id'] === id) {
            item.isFavorite = true;
          }
        }
      }
    },
    removeFavorite(state, action) {
      const { id } = action.payload;
      if (state.feed.entry) {
        for (let item of state.feed.entry) {
          if (item.id.attributes['im:id'] === id) {
            item.isFavorite = false;
          }
        }
      }
    },
    filterOnSearch(state, action) {
      const { activeList } = action.payload;
      state.feed.entry = state.feed.entry.filter((music) => {
        const id = music.id.attributes['im:id'];
        const isExist = activeList.find((music) => music.id === id);
        return isExist > 0 ? true : false;
      });
    },
  },
  extraReducers: {
    [fetchMusic.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchMusic.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      let favorites = getLocalStorageValue(FAVORITE_ALBUMS) || [];
      if (favorites.length > 0) {
        for (let album of favorites) {
          let id = album.id.attributes['im:id'];
          action.payload.entry.forEach((item) => {
            if (item.id.attributes['im:id'] === id) {
              item.isFavorite = true;
            }
          });
        }
      }
      state.feed = action.payload;
    },
    [fetchMusic.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const {
  filterOnSearch,
  setCategory,
  setDateRange,
  addFavorite,
  removeFavorite,
  setSearchTerm,
} = musicSlice.actions;

export default musicSlice.reducer;

export const selectAllMusic = (state) => {
  let category = state.music.filter.category;
  let searchTerm = state.music.filter.searchTerm;
  let { startDate, endDate } = state.music.filter.dateRange;
  let entries = state.music.feed.entry || [];
  if(searchTerm !==''){
    entries = entries.filter((item) => {
      let name = item['im:name'].label;
      return name.toLowerCase().includes(searchTerm.toLowerCase())
    });
  }
  if (category && category.id !== 'all') {
    entries = entries.filter(
      (item) => item.category.attributes['im:id'] === category.id
    );
  }

  if (startDate && endDate) {
    entries = entries.filter((item) => {
      let releaseDate = item['im:releaseDate'].label;
      return (
        new Date(releaseDate) >= new Date(startDate) &&
        new Date(releaseDate) <= new Date(endDate)
      );
    });
  }

  return entries;
};

export const selectAllFavoriteMusic = (state) => {
  let list = [];
  if (state.music.feed.entry) {
    list = state.music.feed.entry.filter((music) => music.isFavorite);
    return list;
  }

  list = getLocalStorageValue(FAVORITE_ALBUMS);

  return list;
};

export const selectAlbumById = (state, musicId) =>
  state.music.feed.entry.find(
    (music) => music.id.attributes['im:id'] === musicId
  );

export const selectTittleList = (state) =>{
  let results = []
  if(state.music.feed.entry){
    results =  state.music.feed.entry.map((music) => {
      return {
        id: music.id.attributes['im:id'],
        name: music['im:name'].label,
        image: music['im:image'][0].label,
      };
    });
  }
 return results;
}
 

export const getCategoryList = (state) => {
  const result = [];
  const map = new Map();
  const array = state.music.feed.entry;
  for (const item of array) {
    const id = item.category.attributes['im:id'];
    if (!map.has(id)) {
      map.set(id, true);
      result.push({
        id: id,
        name: item.category.attributes.label,
      });
    }
  }

  return result;
};

export const getFilterData = (state) => state.music.filter

