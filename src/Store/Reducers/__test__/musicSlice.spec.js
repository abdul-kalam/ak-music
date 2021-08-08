import reducer, { setCategory, setDateRange, setSearchTerm } from '../musicSlice';

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
    searchTerm: '',
  },
};

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('should handle category being set', () => {
  expect(reducer(initialState, setCategory({ id: '15' }))).toEqual({
    feed: {},
    status: 'idle',
    error: null,
    filter: {
      category: { id: '15' },
      dateRange: {
        startDate: '',
        endDate: '',
      },
      searchTerm: '',
    },
  });
});

test('should handle date range being set', () => {
  expect(
    reducer(
      initialState,
      setDateRange({
        startDate: '2021-08-01T12:00:00+05:30',
        endDate: '2021-08-05T12:00:00+05:30',
      })
    )
  ).toEqual({
    feed: {},
    status: 'idle',
    error: null,
    filter: {
      category: { id: 'all' },
      dateRange: {
        startDate: '2021-08-01T12:00:00+05:30',
        endDate: '2021-08-05T12:00:00+05:30',
      },
      searchTerm: '',
    },
  });
});

test('should handle search key being set', () => {
  expect(reducer(initialState, setSearchTerm({ searchTerm: 'welcome' }))).toEqual({
    feed: {},
    status: 'idle',
    error: null,
    filter: {
      category: { id: 'all' },
      dateRange: {
        startDate: '',
        endDate: '',
      },
      searchTerm: 'welcome',
    },
  });
});
