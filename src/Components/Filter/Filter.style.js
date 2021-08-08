import styled from 'styled-components'

export const FilterContainer = styled.section`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 540px) {
    width: 100%;
  }
`

export const Category = styled.div`
  width: 400px;
  margin-right: 20px;
  @media only screen and (max-width: 768px) {

    margin-bottom: 24px;
  }
  @media only screen and (max-width: 540px) {
    width: 100%;

  }
`

export const FilterLabel = styled.label`
  display: block;
  font-size: 17px;
  line-height: 1.29412;
  font-weight: 700;
  margin-bottom: 10px;
  color: #fa2d48;
`

export const CategorySelect = styled.select`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  option {
    font-size: 16px;
  }
`

export const DateRange = styled.div`
  .DateRangePicker {
    display: block;
  }
  .DateRangePicker_picker {
    z-index: 99;
  }
  .DateRangePickerInput__withBorder {
    border-radius: 10px;
  }
  .DateInput {
    background: none;
  }
  input#start_date_id {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  input#end_date_id {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`
