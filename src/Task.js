import React, { useState, useEffect } from "react";
import "../src/App.css";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      handleModalClose();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleModalClose();
    }
  };

  const handleSearchChange = event => {
    setSearchText(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="tableStyle">
    <div>
        <input type="text" value={searchText} onChange={handleSearchChange} placeholder="Search by name" />
      </div>
      <table className="users">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id} onClick={() => handleRowClick(user)}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div
          className="modal"
          onClick={handleModalClick}
          onKeyDown={handleKeyDown}
        >
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <h3>{selectedUser.name}</h3>
            <p>
              Address: {selectedUser.address.suite},{" "}
              {selectedUser.address.street}, {selectedUser.address.city}{" "}
              {selectedUser.address.zipcode}
            </p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Geo Latitude: {selectedUser.address.geo.lat}</p>
            <p>Geo Longitude: {selectedUser.address.geo.lng}</p>
            <p>Website: {selectedUser.website}</p>
            <h3>Company Details</h3>
            <p>Company Name: {selectedUser.company.name}</p>
            <p>catchPhrase: {selectedUser.company.catchPhrase}</p>
            <p>bs: {selectedUser.company.bs}</p>
            <p>Company website: {selectedUser.website}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
