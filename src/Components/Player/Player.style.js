import styled from 'styled-components';

export const PlayerContainer = styled.div`
position: fixed;
top: 10px;
z-index: 1002;
left: 50%;
transform: translate(-50%, 0px);
@media only screen and (max-width: 768px) {
  top: unset;
  bottom: 0%;
}
`

export const Audio = styled.audio`
  width: 400px;
  @media only screen and (max-width: 540px) {
    width:100%;
    min-width: 320px;
  }
`