import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  SongListContainer,
  Song,
  Count,
  TrackTime,
  Track,
} from './SongList.style';
import {
  getAllSongsOfAlbum,
  setActiveSong,
} from '../../Store/Reducers/albumSlice';
import moment from 'moment';

export const SongList = (prop) => {
  let { id } = useParams();
  const dispatch = useDispatch();
  let songList = useSelector((state) => getAllSongsOfAlbum(state, id));
  let url = songList[0].previewUrl;
  let [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    dispatch(setActiveSong({ activeSong: url }));
  }, [dispatch, url]);

  return (
    <React.Fragment>
      <SongListContainer>
        {songList.map((song, index) => {
          let time = song.trackTimeMillis;
          let tempTime = moment.duration(time);
          let trackTime = `${tempTime.minutes()}:${tempTime.seconds()}`;
          let activeClass = index === activeIndex ? 'active' : '';

          return (
            <Song
              key={song.trackId}
              data-previewurl={song.previewUrl}
              className={activeClass}
              onClick={(e) => {
                dispatch(
                  setActiveSong({
                    activeSong: e.currentTarget.dataset.previewurl,
                  })
                );
                prop.playerRef && prop.playerRef.current.pause();
                setTimeout(() => {
                  prop.playerRef && prop.playerRef.current.play();
                }, 500);
                setActiveIndex(index);
              }}
            >
              <Count>{index + 1}</Count>
              <Track>{song.trackName}</Track>
              <TrackTime>{trackTime}</TrackTime>
            </Song>
          );
        })}
      </SongListContainer>
    </React.Fragment>
  );
};
