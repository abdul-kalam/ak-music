import reducer, {
  updateStatus,
  setActiveSong,
  unSetActiveSong,
} from '../albumSlice';

const initialState = {
  songs: {},
  status: 'idle',
  error: null,
  activeSong: '',
};

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('should handle status correctly', () => {
  const prevState = {
    songs: {},
    status: 'succeeded',
    error: null,
    activeSong: '',
  };

  expect(reducer(prevState, updateStatus('loading'))).toEqual({
    songs: {},
    status: 'loading',
    error: null,
    activeSong: '',
  });

  expect(reducer(prevState, updateStatus('idle'))).toEqual({
    songs: {},
    status: 'idle',
    error: null,
    activeSong: '',
  });
});

test('should set active song correctly', () => {
  let prevState = {
    songs: {},
    status: 'succeeded',
    error: null,
    activeSong: '',
  };

  expect(reducer(prevState, setActiveSong('https://songs.come/test.mp4'))).toEqual({
    songs: {},
    status: 'succeeded',
    error: null,
    activeSong: 'https://songs.come/test.mp4',
  });

  prevState = {
    songs: {},
    status: 'succeeded',
    error: null,
    activeSong: 'https://songs.come/test.mp4'
  };

  expect(reducer(prevState, unSetActiveSong())).toEqual({
    songs: {},
    status: 'succeeded',
    error: null,
    activeSong: '',
  });


});

