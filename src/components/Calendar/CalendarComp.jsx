import { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

export default function CalendarComp() {
  const [date, setDate] = useState(new Date());
  return (
    <section>
      <div>
        <Calendar onChange={setDate} value={date} />
      </div>
    </section>
  );
}
