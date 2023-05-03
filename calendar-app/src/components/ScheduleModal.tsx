import { useEffect, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addMeeting } from "../store/slices/MeetingSlice";
import { addNewMeeting } from "../api";
interface modalProps {
  open: string;
  top: string;
  left: string;
  setOpen: any;
  date: string;
}

const ScheduleModal = ({ open, top, left, setOpen, date }: modalProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setOpen(open);
    setBooking({
      time: "06:00",
      duration: 50,
      fee: 100,
      client: "",
      location: "Location: Unassigned",
      service: "90834 Psycotherapy, 45 min",
    });
  }, [open]);

  const [booking, setBooking] = useState({
    time: "06:00",
    duration: 50,
    client: "",
    location: "Location: Unassigned",
    service: "90834 Psycotherapy, 45 min",
    fee: 100,
  });

  const handleSubmit = async () => {
    const newMeeting = { ...booking, date: date };
    console.log(newMeeting);
    const res = await addNewMeeting(newMeeting);
    dispatch(addMeeting(res));
    setOpen("none");
    setBooking({
      time: "06:00",
      duration: 50,
      fee: 100,
      client: "",
      location: "Location: Unassigned",
      service: "90834 Psycotherapy",
    });
  };

  return (
    <div className="modal" style={{ left: left, top: top, display: open }}>
      <div className="modal-header">New Appointment</div>
      <div className="type-select">
        <input type="radio" name="type-select" checked id="client" />
        <label htmlFor="client">Client Appointment</label>
        <input type="radio" name="type-select" id="other" disabled />
        <label htmlFor="other">Other</label>
      </div>
      <div className="client-select">
        <div className="client-drop">
          <select
            name="client"
            id="client-choice"
            className="dropdown"
            onChange={(e) => {
              setBooking({ ...booking, client: e.target.value });
            }}
            required
            value={booking.client}
          >
            <option
              value="none"
              selected={booking.client == "" ? true : false}
              hidden
            >
              Search
            </option>
            <option value="Brad Pitt">Brad Pitt</option>
            <option value="Adam Cohen">Adam Cohen</option>
            <option value="Angela Simpson">Angela Simpson</option>
          </select>
        </div>
        <button className="client-new">+ New Client</button>
      </div>
      <div className="line"></div>

      <div className="schedule">
        <div className="one">
          <input type="checkbox" id="allDay" name="allDay" />
          <label htmlFor="allDay">All day</label>
        </div>
        <div className="two">
          <div className="date-time">
            <input type="date" value={date} />
            <input
              type="time"
              value={booking.time}
              onChange={(e) => {
                setBooking({ ...booking, time: e.target.value });
              }}
            />
          </div>
          <div className="duration-box">
            <input
              type="number"
              id="duration"
              name="duration"
              className="num-input"
              min={5}
              value={booking.duration}
              onChange={(e) => {
                setBooking({ ...booking, duration: e.target.valueAsNumber });
              }}
            />
            <label htmlFor="duration">min</label>
          </div>
        </div>
        <div className="three">
          <select
            name="location"
            id="location"
            value={booking.location}
            onChange={(e) => {
              setBooking({ ...booking, location: e.target.value });
            }}
          >
            <option value="Location: Unassigned">Location: Unassigned</option>
            <option value="Telehealth: Video Office">
              Telehealth: Video Office
            </option>
          </select>
        </div>
        <div className="four">
          <input type="checkbox" id="repeat" name="repeat" />
          <label htmlFor="repeat">Repeat </label>
        </div>
      </div>
      <div className="line"></div>
      {booking.client != "" ? (
        <>
          <div className="services">
            <div className="service-select">
              <label htmlFor="service">Services</label>
              <select
                name="service"
                id="service"
                value={booking.service}
                onChange={(e) => {
                  setBooking({ ...booking, service: e.target.value });
                }}
                className="dropdown"
              >
                <option value="90834 Psycotherapy" selected>
                  90834 Psycotherapy
                </option>
                <option value="90837 Psycotherapy">90837 Psycotherapy</option>
              </select>
            </div>
            <div className="service-fee">
              <label htmlFor="fee">Fee</label>
              <input
                type="number"
                id="fee"
                name="fee"
                className="num-input"
                value={booking.fee}
                onChange={(e) =>
                  setBooking({ ...booking, fee: e.target.valueAsNumber })
                }
              />
            </div>
          </div>
          <div className="line"></div>
          <div className="billing">
            <div className="billing-type">
              <span>
                <b>Billing Type</b>
              </span>
              <span>Self-pay</span>
            </div>
            <div className="total">
              <span>
                <b>Appointment Total</b>
              </span>
              <span>${booking.fee}</span>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="final">
        <button
          onClick={() => {
            setOpen("none");
            setBooking({
              time: "06:00",
              duration: 50,
              fee: 100,
              client: "",
              location: "Location: Unassigned",
              service: "90834 Psycotherapy",
            });
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            handleSubmit();
          }}
          disabled={booking.client == "" ? true : false}
        >
          Done
        </button>
      </div>
    </div>
  );
};

ScheduleModal.propTypes = {};

export default ScheduleModal;
