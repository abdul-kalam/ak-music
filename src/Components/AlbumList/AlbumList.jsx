import React from 'react';
import { AlbumListWrapper } from './AlbumList.style';
import { Album } from '../Album/Album';

export const AlbumList = (prop) => {
  const { showList } = prop;

  const renderedListItems = showList.map((album) => {
    const id = album.id.attributes['im:id'];
    return <Album key={id} data-id={id} album={album} />;
  });

  return <AlbumListWrapper>{renderedListItems}</AlbumListWrapper>;
};
