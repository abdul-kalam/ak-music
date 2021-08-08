import React from 'react';
import { AlbumDetails } from './../AlbumDetails';
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

jest.mock('../../../Components/SongList/SongList', () => ({
  SongList: () => {
    return (
      <ul>
        <li>song1</li>
        <li>song2</li>
        <li>song3</li>
        <li>song4</li>
      </ul>
    );
  },
}));

jest.mock('../../../Components/Player/Player', () => ({
  Player: () => {
    return (
      <div>HTML5 audio player loaded</div>
    );
  },
}));

describe('Album Details page', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  test('component should render details of an album', () => {
    useSelectorMock.mockReturnValue(mockAlbumSongs.results[0]);
    const useRefSpy = jest.spyOn(React, 'createRef').mockReturnValueOnce({ current: null });
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    const { asFragment, container } = render(<AlbumDetails />);
    expect(screen.getByAltText('Famous Friends')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
