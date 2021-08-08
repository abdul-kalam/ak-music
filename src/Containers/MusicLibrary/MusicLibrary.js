import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMusic } from '../../Store/Reducers/musicSlice';
import { AlbumListing } from '../../Components/AlbumListing/AlbumListing';
import { BackToTop } from './../../Components/BackToTop/BackToTop';
import { MessageBanner } from './../../Components/MessageBanner/MessageBanner';
import {Loader} from './../../Components/Loader/Loader';

const MusicLibraryContainer = styled.section`
  margin-top: 80px;
`;
export const MusicLibrary = () => {
  const dispatch = useDispatch();
  const musicStatus = useSelector((state) => state.music.status);
  const error = useSelector((state) => state.music.error);

  useEffect(() => {
    if (musicStatus === 'idle') {
      dispatch(fetchMusic());
    }
  }, [musicStatus, dispatch]);

  let content;
  if (musicStatus === 'loading') {
    content = <Loader>Loading albums...</Loader>;
  } else if (musicStatus === 'succeeded') {
    content = <AlbumListing />;
  } else if (musicStatus === 'failed') {
    content = (
      <MessageBanner type={'error'}>Something went wrong! {error}</MessageBanner>
    );
  }

  return (
    <MusicLibraryContainer>
      {content}
      <BackToTop />
    </MusicLibraryContainer>
  );
};
