import { useState } from "react";
import { format, addMinutes } from "date-fns";
import "./App.css";

function App() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(addMinutes(new Date(), 60)); // Initialize "To Date" with a default duration of 60 minutes
  const [duration, setDuration] = useState(60);

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  const handleDurationChange = (event) => {
    const newDuration = parseInt(event.target.value);
    const calculatedToDate = isNaN(newDuration)
      ? addMinutes(fromDate, 0) // Set "To Date" to the same as "From Date" if duration is not a valid number
      : addMinutes(fromDate, newDuration);

    setDuration(isNaN(newDuration) ? "" : newDuration);
    setToDate(calculatedToDate);
  };

  return (
    <div className="date-page">
      <div className="input-group">
        <label htmlFor="from-date">From Date : </label>
        <input
          type="datetime-local"
          id="from-date"
          value={format(fromDate, "yyyy-MM-dd'T'HH:mm")}
          onChange={(e) => handleFromDateChange(new Date(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label htmlFor="duration">Duration (in minutes) : </label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={handleDurationChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="to-date">To Date : </label>
        <input
          type="datetime-local"
          id="to-date"
          value={format(toDate, "yyyy-MM-dd'T'HH:mm")}
          disabled
        />
      </div>
    </div>
  );
}

export default App;
