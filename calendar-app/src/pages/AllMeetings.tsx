import { useAppSelector } from "../store/hooks";

const AllMeetings = () => {
  const meetings = useAppSelector((state) => {
    return state.meetings;
  });
  let tableRows = meetings.map((meeting) => {
    return (
      <tr>
        <td className="client-name">{meeting.client}</td>
        <td>{meeting.date}</td>
        <td className="contact-info">{meeting.time}</td>
        <td className="relation">{meeting.duration} min</td>
        <td>{meeting.location}</td>
        <td>{meeting.service}</td>
        <td>${meeting.fee}</td>
      </tr>
    );
  });

  return (
    <div className="meetings-wrapper">
      <div className="clients-head">All Scheduled Meetings</div>
      <div className="total-clients">Total meetings: {meetings.length}</div>
      <div className="clients-tools">
        <div className="tool-left">
          <input type="text" className="client-search" placeholder="Search" />
        </div>
        <div className="tool-right">
          <select name="sort" id="sort" className="sort-drop dropdown">
            <option value="First Name">Sort: First Name</option>
            <option value="Last Name">Sort: Last Name</option>
          </select>
        </div>
      </div>
      <table className="client-table meeting-table">
        <tbody>
          <tr className="table-head">
            <th>Name</th>
            <th>Date</th>
            <th>Contact info</th>
            <th>Duration</th>
            <th>Location</th>
            <th>Service</th>
            <th>Fee</th>
          </tr>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
};

export default AllMeetings;
