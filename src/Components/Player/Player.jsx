import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { PlayerContainer, Audio } from './Player.style';
import {
  getActiveSong,
  getAllSongsOfAlbum,
} from '../../Store/Reducers/albumSlice';

export const Player = React.forwardRef((prop, ref) => {
  let activeSong = useSelector(getActiveSong);
  let albumSongs = useSelector((state) => getAllSongsOfAlbum(state, prop.id));
  if (!activeSong) {
    activeSong = {
      activeSong: albumSongs[0].previewUrl,
    };
  }

  useEffect(() => {
    ref.current.load();
  });

  return (
    <PlayerContainer>
      <Audio data-testid="audio-player" controls ref={ref}>
        <source src={activeSong.activeSong} type="audio/x-m4a"></source>
        Your browser does not support the audio element.
      </Audio>
    </PlayerContainer>
  );
});
