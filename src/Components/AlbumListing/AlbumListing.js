import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AlbumList } from '../AlbumList/AlbumList';
import {
  selectAllMusic,
  selectTittleList,
  setSearchTerm,
  getFilterData,
} from '../../Store/Reducers/musicSlice';
import { Autocomplete } from '../Autocomplete/Autocomplete';
import { Filter } from '../Filter/filter';
import {
  AlbumListContainer,
  AlbumWrapper,
  SearchWrapper,
} from './AlbumListing.style';
import { MessageBanner } from '../../Components/MessageBanner/MessageBanner';

export const AlbumListing = () => {
  const dispatch = useDispatch();
  const albums = useSelector(selectAllMusic);
  const titleList = useSelector(selectTittleList);
  const { searchTerm } = useSelector(getFilterData);

  const onAutoCompleteChange = (searchText) => {
    dispatch(setSearchTerm({ searchTerm: searchText }));
  };

  return (
    <AlbumWrapper>
      <SearchWrapper>
        <Autocomplete
          defaultVal={searchTerm}
          dataList={titleList}
          onSearch={onAutoCompleteChange}
        />
      </SearchWrapper>
      <Filter />
      <AlbumListContainer>
        {albums.length ? (
          <AlbumList showList={albums} />
        ) : (
          <MessageBanner type="info">
            Albums not available for selected criteria. Try something else!
          </MessageBanner>
        )}
      </AlbumListContainer>
    </AlbumWrapper>
  );
};
