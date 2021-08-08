import React from 'react';
import renderer from 'react-test-renderer';
import { AlbumListing } from './../AlbumListing';
import { mockTopAlbum } from '../../../mocks';
import { render, screen } from '../../../Modules/test-utils';
import * as reactRedux from 'react-redux'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockImplementationOnce(() => {
    return jest.fn();
  }),
}));

jest.mock('./../../../Components/Album/Album', () => ({
  Album: () => {
    return <div>Album List rendered</div>;
  },
}));

jest.mock('../../../Components/Autocomplete/Autocomplete', () => ({
  Autocomplete: () => {
    return (
      <select>
        <option value="all">All</option>
        <option value="10">Rock</option>
        <option value="12">Zazz</option>
      </select>
    );
  },
}));

jest.mock('../../../Components/Filter/filter', () => ({
  Filter: () => {
    return <div>Filter rendered</div>;
  },
}));

describe('Album listing page', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
  beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
  })
  test('component should render with list of albums', () => {
    useSelectorMock.mockReturnValue(mockTopAlbum.feed.entry)
    const { asFragment } = render(<AlbumListing />);

    expect(screen.getAllByText('Album List rendered')).toHaveLength(3);
    expect(asFragment()).toMatchSnapshot();
  });

  test('component should render with message info if albums not available', () => {
    useSelectorMock.mockReturnValue([])
    const { asFragment } = render(<AlbumListing />);

    expect(screen.getByText('Albums not available for selected criteria. Try something else!')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });


});
