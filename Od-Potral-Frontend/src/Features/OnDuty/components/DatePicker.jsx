import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

const DatePicker = ({ onDateChange, selectedDate }) => {
  const [state, setState] = useState(selectedDate);

  // Handle when the date range is selected
  function handleSelect(ranges) {
    const date = {
      fromDate: ranges.selection.startDate,
      toDate: ranges.selection.endDate,
    };
    setState(date);
    onDateChange(date);
  }

  const selectionRange = {
    startDate: state.fromDate,
    endDate: state.toDate,
    key: "selection",
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
