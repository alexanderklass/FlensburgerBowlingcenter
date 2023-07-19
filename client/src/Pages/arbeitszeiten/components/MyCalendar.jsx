import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/de";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { useState, useCallback } from "react";
moment.locale("de", {
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
  },
});

const MyCalendar = () => {
  const [myEvents, setMyEvents] = useState([
    {
      id: 1,
      title: "Meeting",
      start: new Date(2023, 6, 18, 10, 0),
      end: new Date(2023, 6, 18, 12, 0),
    },
  ]);

  const moveEvent = useCallback(
    ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
      const { allDay } = event;
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true;
      }

      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end, allDay }];
      });
    },
    [setMyEvents]
  );

  const resizeEvent = useCallback(
    ({ event, start, end }) => {
      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end }]
      })
    },
    [setMyEvents]
  )
  const DnDCalendar = withDragAndDrop(Calendar);
  const localizer = momentLocalizer(moment);
  const messages = {
    allDay: "Ganztägig",
    previous: "Zurück",
    next: "Weiter",
    today: "Heute",
    month: "Monat",
    week: "Woche",
    day: "Tag",
    agenda: "Agenda",
    date: "Datum",
    time: "Uhrzeit",
    event: "Termin",
  };

  return (
    <div>
      <DnDCalendar
        localizer={localizer}
        messages={messages}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        popup
        resizable
        events={myEvents}
        defaultDate={new Date()}
        defaultView="week"
        style={{ height: 1000, width: 1200 }}
      />
    </div>
  );
};

export default MyCalendar;
