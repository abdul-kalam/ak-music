import styled from 'styled-components'

export const AlbumContainer = styled.li`
  width: 206px;
  margin: 10px;
  cursor: pointer;
  user-select: none;
`
export const AlbumItem = styled.div`
  width: 100%;
  height: 100%;
  &:hover {
    transform: scale(1.1);
  }
  transition: transform 0.1s ease-in;
`

export const AlbumImage = styled.div`
  margin: 0;
  position: relative;
  display: block;
  border-radius: 6px;
  box-shadow: 0 4px 14px rgb(0 0 0 / 10%);
  width: 100%;
`

export const Details = styled.div`
  height: 50px;
  padding-top: 6px;
  word-break: break-word;
  display: flex;
  font-size: 12px;
  line-height: 1.25;
  font-weight: 400;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 0.55);
`

export const DetailsContent = styled.div`
  flex: 1;
`
export const Title = styled.span`
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;

  text-decoration: none !important;
  color: rgba(255, 255, 255, 0.85);
`

export const Artist = styled.div`
  flex: 1;
`

export const AlbumCover = styled.img`
  margin: 0;
  display: block;
  border-radius: 6px;
  width: 206px;
  opacity: 1;
  &:hover {
    opacity: 0.85;
  }
  transition: opacity 0.1s ease-in;
`

export const Favorite = styled.div`

`;

