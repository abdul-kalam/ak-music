import React from 'react';
import { SongList } from './../SongList';
import { mockAlbumSongs } from '../../../mocks';
import { render, screen } from '../../../Modules/test-utils';
import * as reactRedux from 'react-redux';
import userEvent from '@testing-library/user-event';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '1234',
  }),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockImplementationOnce(() => {
    return jest.fn();
  }),
}));

describe('Song list component', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  test('component should render with list of songs', () => {
    useSelectorMock.mockReturnValue(mockAlbumSongs.results.slice(1));
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    const { asFragment, container } = render(<SongList />);
    const songList = container.querySelectorAll('li');
    expect(songList).toHaveLength(3);
    const song = screen.getByText('Raised on Country');
    userEvent.click(song);
    expect(dummyDispatch).toHaveBeenCalled();
    //expect(asFragment()).toMatchSnapshot();
  });
});
