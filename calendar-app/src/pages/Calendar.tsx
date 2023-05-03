import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ScheduleModal from "../components/ScheduleModal";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { getAllMeetings } from "../api";
import { getMeeting } from "../store/slices/MeetingSlice";
import { MeetingState } from "../store/slices/MeetingSlice";

interface Event {
  title: string;
  start: string;
}

interface CalendarProps {
  open: string;
  setOpen: any;
}
// interface InfoObj {}

const Calendar = ({ open, setOpen }: CalendarProps) => {
  const dispatch = useAppDispatch();
  const meetings = useAppSelector((state) => {
    return state.meetings;
  });

  const events: Event[] = meetings.map((meet: MeetingState) => {
    return {
      title: meet.client
        .split(" ")
        .map((word) => word.charAt(0))
        .join("."),
      start: meet.date + " " + meet.time,
    };
  });
  const handleLoad = async () => {
    const allmeets = await getAllMeetings();
    dispatch(getMeeting(allmeets));

    // console.log(allmeets);
  };
  useEffect(() => {
    if (meetings.length === 0) handleLoad();
  }, []);

  // const [modalOpen, setModalOpen] = useState(false);
  const [modalLeft, setModalLeft] = useState("100px");
  const [modalTop, setModalTop] = useState("100px");
  const [date, setDate] = useState("");
  const openModal = (info: any) => {
    // setModalOpen(!modalOpen);
    setOpen("block");
    if (info.jsEvent.clientX < 370) {
      setModalLeft("190px");
    }
    if (info.jsEvent.clientX < 700) {
      setModalLeft(info.jsEvent.clientX - 170 + "px");
    } else {
      setModalLeft(info.jsEvent.clientX - 700 + "px");
    }

    if (info.jsEvent.clientY < 270) {
      setModalTop("10px");
    }
    if (info.jsEvent.clientY > 380) {
      setModalTop("165px");
    } else {
      setModalTop(info.jsEvent.clientY - 205 + "px");
    }
    setDate(info.dateStr);
  };

  return (
    <div>
      <ScheduleModal
        open={open}
        top={modalTop}
        left={modalLeft}
        setOpen={setOpen}
        date={date}
      />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        height={"88vh"}
        handleWindowResize={false}
        events={events}
        headerToolbar={{
          start: "today,prev,next,title",
          end: "",
          center: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        selectable={true}
        dateClick={(info) => {
          console.log(info);
          openModal(info);
        }}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
        }}
      />
    </div>
  );
};
// function renderEventContent(eventInfo: Event) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   );
// }

Calendar.propTypes = {};

export default Calendar;
