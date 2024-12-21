import React, { useEffect } from "react";
import { FaCog, FaTrashAlt } from "react-icons/fa";
import './home.css'
import { useNavigate } from "react-router-dom";
const Home = () => {
  const data = [
    {
      id: 1,
      name: "Michael Holz",
      dateCreated: "04/10/2013",
      role: "Admin",
      status: "Active",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      name: "Paula Wilson",
      dateCreated: "05/08/2014",
      role: "Publisher",
      status: "Active",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg",
    },
    {
      id: 3,
      name: "Antonio Moreno",
      dateCreated: "11/05/2015",
      role: "Publisher",
      status: "Suspended",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3mgc0Z0vW1mNCCkJU824xScyjEiygQ7UsA&s",
    },
    {
      id: 4,
      name: "Mary Saveley",
      dateCreated: "06/09/2016",
      role: "Reviewer",
      status: "Active",
      image:
        "https://t4.ftcdn.net/jpg/06/40/07/03/360_F_640070383_9LJ3eTRSvOiwKyrmBYgcjhSlckDnNcxl.jpg",
    },
    {
      id: 5,
      name: "Martin Sommer",
      dateCreated: "12/08/2017",
      role: "Moderator",
      status: "Inactive",
      image: "https://www.stockvault.net/data/2020/12/13/281611/preview16.jpg",
    },
  ];

  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user === null) {
      navigate('/login')
    }
  }, [])
  return (
    <div className="table-container" >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead className="thead">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  {item.name}
                </div>
              </td>
              <td>{item.dateCreated}</td>
              <td>{item.role}</td>
              <td>
                <span
                  style={{
                    color:
                      item.status === "Active"
                        ? "green"
                        : item.status === "Suspended"
                        ? "orange"
                        : "gray",
                  }}
                >
                  ● {item.status}
                </span>
              </td>
              <td>
                <FaCog style={{ marginRight: "10px", cursor: "pointer" }} />
                <FaTrashAlt style={{ cursor: "pointer", color: "red" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
