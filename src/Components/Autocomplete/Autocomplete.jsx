import React, { useState, useRef } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { SearchIcon } from '../../Assets/searchIcon';
import {
  AutoCompleteContainer,
  AutoCompleteInput,
  SuggestionBox,
  SuggestionListContainer,
  SuggestionList,
  SearchIconWrapper,
  SuggestionIcon,
} from './AutoComplete.style';

export const Autocomplete = (props) => {
  let dataList = props.dataList;
  let [showSuggestion, setShowSuggestion] = useState(false);
  let [filteredList, setFilteredList] = useState([]);
  let [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  let [searchText, setSearchText] = useState(props.defaultVal || '');
  let ref = useRef(null);
  let boxRef = useRef(null);
  let activeRef = useRef(null);

  const onInputChange = (e) => {
    let value = e.currentTarget.value;
    setSearchText(value);
    props.onSearch(value);
    let suggestedList = dataList.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(suggestedList);

    if (searchText !== '') {
      setShowSuggestion(true);
    }
  };

  const onClickInput = (e) => {
    let name = activeRef.current.dataset.value;
    setSearchText(name);
    props.onSearch(name);
    setFilteredList([]);
    setShowSuggestion(false);
    setActiveSuggestionIndex(0);
  };

  useOutsideClick(ref, setShowSuggestion);

  const onKeyDown = (e) => {
    if (e.keyCode === 38) {
      //up arrow
      if (activeSuggestionIndex === 0) return;
      setActiveSuggestionIndex((prevSate) => prevSate - 1);
      scrollToFocusedOptionRef('up');
    } else if (e.keyCode === 40) {
      //down arrow
      if (activeSuggestionIndex === filteredList.length - 1) {
        scrollToFocusedOptionRef('last');
        return;
      }
      setActiveSuggestionIndex((prevSate) => prevSate + 1);
      scrollToFocusedOptionRef('down');
    } else if (e.keyCode === 13) {
      //enter key
      onClickInput(e);
    }
  };

  const scrollToFocusedOptionRef = (direction) => {
    if (boxRef.current && activeRef.current) {
      const listRef = boxRef.current;
      const optionRef = activeRef.current;
      const focusedOptionRect = optionRef.getBoundingClientRect();
      const listOptionRect = listRef.getBoundingClientRect();
      //scroll down

      if (
        listOptionRect.bottom - focusedOptionRect.bottom <
          optionRef.offsetHeight &&
        direction === 'down'
      ) {
        listRef.scrollTop = Math.min(optionRef.offsetTop - 40);
      } else if (
        focusedOptionRect.top - listOptionRect.top < optionRef.offsetHeight &&
        direction === 'up'
      ) {
        listRef.scrollTop = Math.max(
          optionRef.offsetTop - optionRef.offsetHeight,
          0
        );
      } else if (direction === 'last') {
        listRef.scrollTop = 0;
        setActiveSuggestionIndex(0);
      }
    }
  };

  return (
    <AutoCompleteContainer ref={ref}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <AutoCompleteInput
        value={searchText}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        placeholder="Search album"
      />
      {showSuggestion && (
        <SuggestionBox>
          <SuggestionListContainer ref={boxRef}>
            {filteredList.map((item, index) => {
              let activeClass = index === activeSuggestionIndex ? 'active' : '';

              return (
                <SuggestionList
                  ref={index === activeSuggestionIndex ? activeRef : null}
                  className={activeClass}
                  key={index + '-' + item.id}
                  onClick={onClickInput}
                  data-value={item.name}
                  data-index={index}
                >
                  <SuggestionIcon src={item.image} width="30px" height="30px" />{' '}
                  {item.name}
                </SuggestionList>
              );
            })}
          </SuggestionListContainer>
        </SuggestionBox>
      )}
    </AutoCompleteContainer>
  );
};
