import React from 'react';
import {Loading} from './Loader.style';

export const Loader = (props) => {
  return (
    <Loading>{props.children}</Loading>
  );
};
