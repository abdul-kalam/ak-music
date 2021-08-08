import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AlbumPageContainer } from './AlbumPage.style';
import { fetchAlbum, updateStatus } from '../../Store/Reducers/albumSlice';
import { AlbumDetails } from './AlbumDetails';
import { Loader } from './../../Components/Loader/Loader';
import { MessageBanner } from './../../Components/MessageBanner/MessageBanner';

export const AlbumPageContent = (prop) => {
  const [id] = useState(prop.id);
  const dispatch = useDispatch();
  const albumStatus = useSelector((state) => state.album.status);
  const error = useSelector((state) => state.album.error);

  useEffect(() => {
    dispatch(fetchAlbum(id));

    return () => dispatch(updateStatus({ status: 'idle' }));
  }, [dispatch, id]);

  let content;
  if (albumStatus === 'loading') {
    content = <Loader>Loading albums...</Loader>;
  } else if (albumStatus === 'succeeded') {
    content = <AlbumDetails />;
  } else if (albumStatus === 'failed') {
    content = (
      <MessageBanner type={'error'}>Something went wrong! {error}</MessageBanner>
    );
  }

  return <AlbumPageContainer>{content}</AlbumPageContainer>;
};
