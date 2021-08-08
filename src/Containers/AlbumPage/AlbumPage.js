import React from 'react'

import { useParams } from 'react-router-dom'

import { AlbumPageContainer } from './AlbumPage.style'

import { AlbumPageContent } from './AlbumPageContent'

export const AlbumPage = () => {
  let { id } = useParams()

  return (
    <AlbumPageContainer>
      <AlbumPageContent id={id} />
    </AlbumPageContainer>
  )
}
