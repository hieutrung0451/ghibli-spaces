import React, { useState } from "react";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

const Calendar = () => {
  const calendarComponentRef = React.createRef();
  const [events, setEvents] = useLocalStorage("events", [{}]);

  const handleSelectedDates = (info) => {
    const title = prompt("What's the name of the title");
    console.log(info);
    if (title != null) {
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr,
      };

      const data = [...events, newEvent];
      console.log("here", data);
      setEvents(data);
    } else {
      console.log("nothing");
    }
  };

  return (
    <div className="calendar">
      <FullCalendar
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        ref={calendarComponentRef}
        defaultView="dayGridMonth"
        displayEventTime={true}
        header={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        selectable={true}
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
          resourceTimeGridPlugin,
        ]}
        eventClick={(event) => {
          console.log(event.event._def.publicId);
        }}
        events={events}
        select={handleSelectedDates}
        eventLimit={3}
      />
    </div>
  );
};

export default Calendar;

// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
