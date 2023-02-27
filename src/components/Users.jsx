// import "../App.css";
// import React, { useState, useEffect } from "react";

// function UsersPage() {
//   const [users, setUsers] = useState(
//     localStorage.getItem("users")
//       ? JSON.parse(localStorage.getItem("users"))
//       : []
//   );
//   const [searchValue, setSearchValue] = useState("");

//   useEffect(() => {
//     fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
//       .then((response) => response.json())
//       .then((data) => {
//         localStorage.setItem("users", JSON.stringify(data));
//         setUsers(data);
//       });
//   }, []);

//   function handleSearchInputChange(e) {
//     e.preventDefault();
//   setSearchValue(e.target.value) 
//   }

//   function handleResetClick() {
//     setSearchValue("");
//   }

//   const filteredUsers = users.filter((user) => {
//     const fullName = `${user.fullName}`;
//     return fullName.toLowerCase().includes(searchValue);
//   });

//   return (
//     <section id="users-page">
//       <label htmlFor="search" className="page-header">
//         Users
//       </label>
//       <form action="" className="search-form">
//         <input
//           type="text"
//           name="search"
//           id="search"
//           placeholder="Search by Name"
//           value={searchValue}
//           onChange={handleSearchInputChange}
//         />
//         <button type="button" id="reset" onClick={handleResetClick}>
//           Reset
//         </button>
//       </form>
//       <div id="users-table">
//         <table>
//           <thead>
//             <tr>
//               <th className="userId">ID</th>
//               <th className="avatar">User Avatar</th>
//               <th>Full Name</th>
//               <th>DoB</th>
//               <th>Gender</th>
//               <th>Current Location</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map((user) => (
//               <tr key={user.id}>
//                 <td className="unique userId">{user.id}</td>
//                 <td className="avatar">
//                   <img src={user.profilePic} alt="User avatar" />
//                 </td>
//                 <td className="unique">
//                   {user.fullName}
//                 </td>
//                 <td>{user.dob}</td>
//                 <td className="unique">{user.gender}</td>
//                 <td className="unique">
//                   {user.currentCity}, {user.currentCountry}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }

// export default UsersPage;

import React, { Component } from "react";
import "../App.css";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users"))
        : [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("users", JSON.stringify(data));
        this.setState({ users: data });
      });
  }

  handleSearchInputChange = (e) => {
    e.preventDefault();
    this.setState({ searchValue: e.target.value });
  };

  handleResetClick = () => {
    this.setState({ searchValue: "" });
  };

  render() {
    const { users, searchValue } = this.state;

    const filteredUsers = users.filter((user) => {
      const fullName = `${user.fullName}`;
      return fullName.toLowerCase().includes(searchValue);
    });

    return (
      <section id="users-page">
        <label htmlFor="search" className="page-header">
          Users
        </label>
        <form action="" className="search-form">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search by Name"
            value={searchValue}
            onChange={this.handleSearchInputChange}
          />
          <button type="button" id="reset" onClick={this.handleResetClick}>
            Reset
          </button>
        </form>
        <div id="users-table">
          <table>
            <thead>
              <tr>
                <th className="userId">ID</th>
                <th className="avatar">User Avatar</th>
                <th>Full Name</th>
                <th>DoB</th>
                <th>Gender</th>
                <th>Current Location</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="unique userId">{user.id}</td>
                  <td className="avatar">
                    <img src={user.profilePic} alt="User avatar" />
                  </td>
                  <td className="unique">{user.fullName}</td>
                  <td>{user.dob}</td>
                  <td className="unique">{user.gender}</td>
                  <td className="unique">
                    {user.currentCity}, {user.currentCountry}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Users;

