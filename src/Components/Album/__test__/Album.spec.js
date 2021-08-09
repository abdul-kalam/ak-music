import React from 'react';
import { render, screen } from '../../../Modules/test-utils';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Album } from './../Album';
import { mockTopAlbum} from './../../../mocks';
import userEvent from '@testing-library/user-event';



describe('Album component', () => {
  test('component should render with passed data', () => {
    const mockAlbum = mockTopAlbum.feed.entry[0];

    render(<Album album={mockAlbum} />);

    expect(screen.getAllByAltText('Welcome 2 America')).toHaveLength(1);
  });

  test('component should navigate to album details page on clicking', () => {
    const mockAlbum = mockTopAlbum.feed.entry[0];
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Album album={mockAlbum} />)
      </Router>
    );

    const album = screen.getByText('Welcome 2 America');
    expect(album).toBeInTheDocument();
    userEvent.click(album);
    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe(
      '/album/welcome-2-america/1561643530'
    );
  });

  test('component should toggle favorite state of album on clicking', () => {
    const mockAlbum = mockTopAlbum.feed.entry[0];

    const { asFragment } = render(<Album album={mockAlbum} />);

    const favorite = screen.getAllByTitle('Favorite');
    expect(favorite[0]).toBeInTheDocument();
    userEvent.click(favorite[0]);
    const unfavorite = screen.getByTitle('UnFavorite');
    expect(unfavorite).toBeInTheDocument();
    expect(favorite[0]).not.toBeInTheDocument();
    userEvent.click(unfavorite);
    expect(screen.getAllByTitle('Favorite')[0]).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
