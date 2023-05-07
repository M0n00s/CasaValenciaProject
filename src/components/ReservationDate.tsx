import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";

export const ReservationDate = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      color: "#ff6349",
      key: "selection",
    },
  ]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-9 ">
      <div className="col-span-1 md:col-span-5 bg-red-300 ">
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          minDate={new Date()}
          direction="horizontal"
          months={2}
        />
      </div>
      <div className="col-span-1 md:col-span-4 bg-red-600">d</div>
    </div>
  );
};
