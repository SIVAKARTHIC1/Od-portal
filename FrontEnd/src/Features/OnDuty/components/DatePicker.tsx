import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';

const DatePicker = () => {
  const [state, setState] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  // Handle when the date range is selected
  function handleSelect(ranges) {
    setState({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
    });
    console.log('Start Date:', ranges.selection.startDate);
    console.log('End Date:', ranges.selection.endDate);
  }

  const selectionRange = {
    startDate: state.startDate,
    endDate: state.endDate,
    key: 'selection',
  };

  return (
    <div className="mx-auto">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        months={1}
        minDate={new Date()}
      />
    </div>
  );
};

export default DatePicker;
