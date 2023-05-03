import { useState } from "react";

const Clients = () => {
  const [clients, _] = useState([
    {
      name: "Brad Pitt",
      seniority: "Adult",
      contact: {
        mobile: "1234567890",
        email: "bp@gmail.com",
      },
      relationship: "Clinician: John Doe",
    },
    {
      name: "Adam cohen",
      seniority: "Adult",
      contact: {
        mobile: "1234567890",
        email: "ac@gmail.com",
      },
      relationship: "Clinician: John Doe",
    },
    {
      name: "Angela Simpson",
      seniority: "Adult",
      contact: {
        mobile: "1234567890",
        email: "as@gmail.com",
      },
      relationship: "Clinician: John Doe",
    },
  ]);
  let tableRows = clients.map((client) => {
    return (
      <tr>
        <td className="client-name">{client.name}</td>
        <td>
          <span className="seniority-tag">{client.seniority}</span>
        </td>
        <td className="contact-info">
          {client.contact.mobile} <br /> {client.contact.email}
        </td>
        <td className="relation">{client.relationship}</td>
        <td>
          <button className="manage-client">
            Manage <i className="fa-solid fa-angle-down"></i>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="clients-head">Clients and contacts</div>
      <div className="total-clients">Total clients: {clients.length}</div>
      <div className="clients-tools">
        <div className="tool-left">
          <input type="text" className="client-search" placeholder="Search" />
          <button className="client-btn">
            <i className="fa-solid fa-user-group"></i> Clients
          </button>
        </div>
        <div className="tool-right">
          <select name="sort" id="sort" className="sort-drop dropdown">
            <option value="First Name">Sort: First Name</option>
            <option value="Last Name">Sort: Last Name</option>
          </select>
        </div>
      </div>
      <table className="client-table">
        <tbody>
          <tr className="table-head">
            <th>Name</th>
            <th></th>
            <th>Contact info</th>
            <th>Relationship</th>
            <th></th>
          </tr>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
