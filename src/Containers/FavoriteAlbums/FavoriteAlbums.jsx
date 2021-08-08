import React from 'react';
import { AlbumList } from '../../Components/AlbumList/AlbumList';
import { useSelector } from 'react-redux';
import { selectAllFavoriteMusic } from '../../Store/Reducers/musicSlice';
import { FavoriteAlbumsContainer, Link } from './FavoriteAlbums.style';
import { MessageBanner } from '../../Components/MessageBanner/MessageBanner';
import { useHistory } from 'react-router-dom';

export const FavoriteAlbums = () => {
  let showList = useSelector(selectAllFavoriteMusic);
  const history = useHistory();
  const onClickHandler = (e) =>{
    e.preventDefault();
    history.push('/');
  } 
  return (
    <FavoriteAlbumsContainer>
      {showList.length ? (
        <AlbumList showList={showList} />
      ) : (
        <MessageBanner type="info">
          You don't have any favorite albums.{' '}
          <Link href ='#' onClick={onClickHandler}>Click here to select favorite</Link>
        </MessageBanner>
      )}
    </FavoriteAlbumsContainer>
  );
};
