import React from 'react';
import {MessageBox, Message} from './MessageBanner.style';


export const MessageBanner = (props) => {
  return (
    <MessageBox type={props.type}>
     <Message>{props.children}</Message>
    </MessageBox>
  );
};
