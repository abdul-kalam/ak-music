import styled from 'styled-components';

export const SongListContainer = styled.ul``

export const Song = styled.li`
  cursor: pointer;
  display: flex;
  padding: 10px;
  border-radius: 4px;
  &:nth-child(even) {
    background-color: rgba(255,255,255,0.02);;
  }
  &:nth-child(odd) {
    background-color: var(--background-color-primary);
  }
  &:hover {
    background-color: rgba(255,255,255,0.06);
  }
  @media only screen and (max-width: 540px) {
    color: #fff;
  }
  &.active {
    background-color: #fa2d48;
  }
`

export const Count = styled.span`
 
  margin-right: 10px;
  color: #aba5a5;
`

export const Track = styled.span`
   white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width:100%;
`



export const TrackTime = styled.span`

`