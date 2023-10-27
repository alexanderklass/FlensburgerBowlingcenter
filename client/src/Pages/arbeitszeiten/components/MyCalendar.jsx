import MainButton from "../../../Components/MainButton";
import FullCalendar from "@fullcalendar/react";
import deLocale from "@fullcalendar/core/locales/de";
import dayGridPlugin from "@fullcalendar/daygrid";

const MyCalendar = () => {
  const events = [
    {
      id: 2,
      title: "Mitarbeiter-2",
      date: "2023-08-09",
    },
    {
      id: 3,
      title: "Mitarbeiter-3",
      date: "2023-08-10",
    },
  ];

  return (
    <div className="p-5">
      <FullCalendar
        locale={deLocale}
        dayCellClassNames={"h-32"}
        height={"auto"}
        events={events}
        plugins={[dayGridPlugin]}
        hiddenDays={[1, 2]}
      />
      <MainButton color="bg-blue-800">Hinzufügen</MainButton>
    </div>
  );
};

export default MyCalendar;
