import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  AlbumInfo,
  AlbumHeader,
  AlbumHeaderDetails,
  AlbumMeta,
  AlbumTitle,
  Artist,
  AlbumFooter,
  PreviewButton,
  ReleaseDate,
  TotalSongs,
  CopyRight,
  AlbumCover,
} from './AlbumPage.style';
import { getAlbumDetails } from '../../Store/Reducers/albumSlice';
import { SongList } from './../../Components/SongList/SongList';
import { Player } from '../../Components/Player/Player';

export const AlbumDetails = () => {
  let { id } = useParams();
  let albumInfo = useSelector((state) => getAlbumDetails(state, id));
  const ref = React.createRef();
  let year = new Date(albumInfo.releaseDate).getFullYear();

  return (
    <AlbumInfo>
      <Player previewUrl={'test.mp4'} id={id} ref={ref} />
      <AlbumHeader>
        <AlbumCover alt={albumInfo.collectionName} src={albumInfo.artworkUrl100} width="270" height="270" />
        <AlbumHeaderDetails>
          <AlbumTitle>{albumInfo.collectionName}</AlbumTitle>
          <Artist>{albumInfo.artistName}</Artist>
          <AlbumMeta>
            {albumInfo.primaryGenreName}.{year}
          </AlbumMeta>
          <PreviewButton
            onClick={() => {
              ref.current.play();
            }}
          >
            Preview
          </PreviewButton>
        </AlbumHeaderDetails>
      </AlbumHeader>
      <SongList playerRef={ref} />
      <AlbumFooter>
        <ReleaseDate>
          {new Date(albumInfo.releaseDate).toDateString()}
        </ReleaseDate>
        <TotalSongs>Total songs {albumInfo.trackCount}</TotalSongs>
        <CopyRight>{albumInfo.copyright}</CopyRight>
      </AlbumFooter>
    </AlbumInfo>
  );
};
