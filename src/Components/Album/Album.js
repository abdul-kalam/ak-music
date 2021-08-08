import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  AlbumContainer,
  AlbumItem,
  Details,
  DetailsContent,
  Title,
  Artist,
  AlbumImage,
  AlbumCover,
  Favorite,
} from './Album.style';
import { FavoriteUnSaved } from '../../Assets/FavoriteUnSaved';
import { FavoriteSaved } from '../../Assets/FavoriteSaved';
import { addFavorite, removeFavorite } from '../../Store/Reducers/musicSlice';
import {
  setLocalStorageValue,
  getLocalStorageValue,
} from '../../Modules/utils';

const FAVORITE_ALBUMS = 'favorite-albums';

export const Album = ({ album }) => {

  const [isFavorite, setIsFavorite] = useState(album.isFavorite || false);
  const dispatch = useDispatch();
  const history = useHistory();
  const id = album.id.attributes['im:id'];
  const title = album['im:name'].label;
  const img = album['im:image'][2]['label'];
  const artist = album['im:artist'].label;

  const handleOnClick = () =>
    history.push(`/album/${title.toLowerCase().split(' ').join('-')}/${id}`);

  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      let favorites = getLocalStorageValue(FAVORITE_ALBUMS) || [];
      favorites = favorites.filter(
        (album) => album.id.attributes['im:id'] !== id
      );
      setLocalStorageValue(FAVORITE_ALBUMS, favorites);
      dispatch(removeFavorite({ id: id }));
    } else {
      let favorites = getLocalStorageValue(FAVORITE_ALBUMS) || [];
      favorites.push({ ...album, ...{ isFavorite: true } });
      setLocalStorageValue(FAVORITE_ALBUMS, favorites);
      dispatch(addFavorite({ id: id }));
    }
  };

  return (
    <AlbumContainer onClick={handleOnClick} data-testid='album'>
      <AlbumItem>
        <AlbumImage>
          <AlbumCover alt={title} src={img} loading="lazy" />
        </AlbumImage>
        <Details>
          <DetailsContent>
            <Title>{title}</Title>
            <Artist>{artist}</Artist>
          </DetailsContent>
          <Favorite onClick={handleFavorite}>
            {isFavorite ? <FavoriteSaved /> : <FavoriteUnSaved />}
          </Favorite>
        </Details>
      </AlbumItem>
    </AlbumContainer>
  );
};
