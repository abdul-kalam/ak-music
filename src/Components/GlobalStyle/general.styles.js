import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GeneralStyles = createGlobalStyle`
${reset}
:root {
  --background-color-primary: #1f1f1f;
  --background-color-light: rgba(45, 45, 45);
  --redux-color: #764abc;
}
*{
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
  }
  body {
    font-size: 16px;
    background-color: var(--background-color-primary);
    color: rgba(255, 255, 255, 0.85);
  }
  .ellipses {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  sup{
    vertical-align: super;
  }
  sub{
    vertical-align: sub;
  }
  em{
    font-style: italic;
  }
  pre{
    white-space: pre-wrap;
  }
  li {
    list-style: none;
  }
  *:focus {outline:none;}

`;

