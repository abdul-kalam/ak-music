import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryList } from '../../Store/Reducers/musicSlice';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import {
  FilterContainer,
  DateRange,
  Category,
  CategorySelect,
  FilterLabel,
} from './Filter.style';
import {
  setCategory,
  setDateRange,
  getFilterData,
} from '../../Store/Reducers/musicSlice';
import moment from 'moment';

export const Filter = (props) => {
  const categoryOptions = useSelector(getCategoryList);
  const { category, dateRange } = useSelector(getFilterData);
  const [startDate, setStartDate] = useState(
    (dateRange.startDate && moment(dateRange.startDate)) || null
  );
  const [endDate, setEndDate] = useState(
    (dateRange.endDate && moment(dateRange.endDate)) || null
  );
  const [focusedInput, setFocusedInput] = React.useState();
  const dispatch = useDispatch();
  const ref = useRef();

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      console.log(start.format());
      dispatch(
        setDateRange({
          startDate: start.format(),
          endDate: end.format(),
        })
      );
    }
  };

  let OptionList = [];
  OptionList = categoryOptions.map((option) => (
    <option key={option.id} value={option.id}>
      {option.name}
    </option>
  ));
  OptionList.unshift(
    <option key={'all'} value={'all'}>
      All
    </option>
  );

  return (
    <FilterContainer>
      <Category>
        <FilterLabel>Category</FilterLabel>
        <CategorySelect
          ref={ref}
          onChange={(e) => {
            const element = e.target;
            const id = element.value;
            dispatch(setCategory({ id }));
          }}
          defaultValue={category.id}
        >
          {OptionList}
        </CategorySelect>
      </Category>
      <DateRange>
        <FilterLabel>Release Date</FilterLabel>
        <DateRangePicker
          startDate={startDate}
          startDateId="start_date_id"
          endDate={endDate}
          endDateId="end_date_id"
          numberOfMonths={1}
          onDatesChange={({ startDate, endDate }) => {
            handleDateChange(startDate, endDate);
          }}
          isOutsideRange={() => false}
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        />
      </DateRange>
    </FilterContainer>
  );
};
