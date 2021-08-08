import styled from 'styled-components';

export const FavoriteBtn = styled.button`
  -webkit-box-align: center;
  align-items: center;
  border-radius: 2rem;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 1.25rem;
  padding: 0.5rem 0.875rem;
  border: 2px solid #fa2d48;
  line-height: 1;
  margin: 0px;
  overflow: visible;
  text-transform: none;
  appearance: button;
  cursor: pointer;
  background-color: var(--background-color-light);
  color: rgb(255, 255, 255);
  &:hover{
    transform: scale(1.1);
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ButtonTxt = styled.span`
  display: inline-block;
  margin-left: 4px;
`;
