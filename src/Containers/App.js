import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../Components/GlobalStyle';
import styled from 'styled-components';
import { Navbar } from '../Components/NavBar/Navbar';
import { MusicLibrary } from './../Containers/MusicLibrary/MusicLibrary';
import { AlbumPage } from './../Containers/AlbumPage/AlbumPage';
import {FavoriteAlbums} from './../Containers/FavoriteAlbums/FavoriteAlbums';

export const MainContent = styled.main`
  margin: 0 auto;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  max-width: 75rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 2rem 0.5rem 1.5rem 0.5rem;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <MainContent>
        <Switch>
          <Route exact path="/" component={MusicLibrary} />
          <Route exact path="/album/:title/:id" component={AlbumPage} />
          <Route exact path="/favorite-albums" component={FavoriteAlbums} />
        </Switch>
      </MainContent>
    </Router>
  );
}

export default App;
