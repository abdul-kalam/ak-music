import styled from 'styled-components'

export const AutoCompleteContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 24px;
`

export const AutoCompleteInput = styled.input`
  width: 500px;
  height: 50px;
  padding: 5px;
  border: 2px solid var(--background-color-primary);
  box-sizing: border-box;
  background-color: var(--background-color-light);
  padding-left: 50px;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:focus {
    border: 2px solid #fa2d48;
  }
  @media only screen and (max-width: 540px) {
    width: 100%;
  }
`

export const SuggestionBox = styled.div`
  position: relative;
  width: 500px;
  @media only screen and (max-width: 540px) {
    width: 100%;
  }
`

export const SuggestionListContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: absolute;
  border: 2px solid #fa2d48;
  border-top: none;
  box-shadow: 0px 4px 8px 0px #ddd;
  border-radius: 10px;
  max-height: 200px;
  overflow: auto;
  width: 100%;
  z-index: 999;
  background: rgba(45, 45, 45);
`

export const SuggestionList = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  list-style-type: none;
  min-height: 40px;
  padding: 5px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &.active {
    background-color: #fff;
    color: var(--background-color-primary);
  }
`
export const SearchIconWrapper = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  color: #fa2d48 !important;
`

export const SuggestionIcon = styled.img`
  margin-left: 2px;
  margin-right: 4px;
`
