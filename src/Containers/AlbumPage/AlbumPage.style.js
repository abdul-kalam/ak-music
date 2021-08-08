import styled from 'styled-components';

export const AlbumPageContainer = styled.section`
  display: flex;
  margin-top: 48px;
  margin-bottom: 24px;
  width: 100%;
`

export const AlbumInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const AlbumHeader = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media only screen and (max-width: 540px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
  }
`
export const AlbumCover = styled.img`
  border-radius: 5px;
  @media only screen and (max-width: 540px) {
    width: 200px;
    height: 200px;
    margin-bottom: 8px;
  }
`

export const AlbumHeaderDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  align-items: flex-start;
  margin-left: 32px;
  @media only screen and (max-width: 540px) {
    align-items: center;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
  }
`

export const AlbumTitle = styled.h1`
  margin-bottom: 32px;
  align-items: baseline;
  color: rgba(255, 255, 255, 0.85);
  font-size: 26px;
  @media only screen and (max-width: 540px) {
    margin-bottom: 8px;
    color: #fff;
  }
`

export const Artist = styled.div`
  width: 100%;
  color: #fa2d48;
  font-size: 26px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 8px;
  @media only screen and (max-width: 540px) {
    text-align: center;
  }
`

export const AlbumMeta = styled.div`
  text-transform: uppercase;
  display: inline;
  color: rgba(255, 255, 255, 0.55);
  @media only screen and (max-width: 540px) {
    color: #fff;
    margin-bottom: 8px;
  }
`

export const PreviewButton = styled.button`
  background-color: #fa2d48;
  border-radius: 5px;
  padding: 5px 15px;
  margin-top: 24px;
  color: #fff;
  cursor: pointer;
  border: none;
  @media only screen and (max-width: 540px) {
    margin-top: 8px;
    padding: 8px 15px;
    color: #fff;
  }
`

export const AlbumFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`

export const ReleaseDate = styled.p`
  margin: 5px;
`
export const TotalSongs = styled.p`
  margin: 5px;
`
export const CopyRight = styled.p`
  margin: 5px;
`
