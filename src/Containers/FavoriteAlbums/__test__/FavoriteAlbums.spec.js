import React from 'react';
import { FavoriteAlbums } from './../FavoriteAlbums';
import { mockTopAlbum } from '../../../mocks';
import { render, screen } from '../../../Modules/test-utils';
import * as reactRedux from 'react-redux';
import userEvent from '@testing-library/user-event';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockImplementationOnce(() => {
    return jest.fn();
  }),
}));

jest.mock('../../../Components/AlbumList/AlbumList', () => ({
  AlbumList: () => {
    return <div>Favorite album list rendered</div>;
  },
}));

describe('Favorite Album page', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  test('Should render list of favorite albums', () => {
    useSelectorMock.mockReturnValue(
      mockTopAlbum.feed.entry.filter((item) => item.isFavorite)
    );

    const { asFragment } = render(<FavoriteAlbums />);
    expect(
      screen.getByText('Favorite album list rendered')
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
  test('Should show message when there is no favorite', () => {
    useSelectorMock.mockReturnValue([]);

    const { asFragment } = render(<FavoriteAlbums />);
    expect(
      screen.getByText("You don't have any favorite albums.")
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
