import React from 'react';
import { render, screen } from '../../../Modules/test-utils';
import { AlbumList } from './../AlbumList';
import { mockTopAlbum } from './../../../mocks';

describe('Album List component', () => {
  test('component should render list of albums correctly', () => {
    const mockAlbum = mockTopAlbum.feed.entry;

    const { asFragment } = render(<AlbumList showList={mockAlbum} />);

    expect(screen.getAllByAltText('Welcome 2 America')).toHaveLength(1);
    expect(screen.getByAltText('Into The Mystery')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
