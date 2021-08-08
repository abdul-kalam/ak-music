import React from 'react';

import { FavoriteBtn, ButtonTxt } from './FavoriteButton.style';
import { FavoriteSaved } from '../../Assets/FavoriteSaved';

export const FavoriteButton = (props) => {
  return (
    <FavoriteBtn>
      <FavoriteSaved />
      <ButtonTxt>Favorite</ButtonTxt>
    </FavoriteBtn>
  );
};
