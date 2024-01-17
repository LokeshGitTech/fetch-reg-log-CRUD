import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import "./App.css"
import "./Crud.css"


const Crud = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3003/data'); // Assuming you have an API endpoint to fetch data from db.json
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3003/data', formData); // Assuming you have an API endpoint to save data to db.json
      fetchData();
      setFormData({
        name: '',
        email: '',
        address: '',
      });
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3003/data/${id}`); // Assuming you have an API endpoint to delete data from db.json
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id) => {
    const item = data.find((item) => item.id === id);
    if (item) {
      setFormData({
        name: item.name,
        email: item.email,
        address: item.address,
      });
      setShowForm(true);
    }
  };

  const handleAddUser = () => {
    setShowForm(true);
  };

  return (
    <div>
      <h1>User data</h1>
      <button onClick={handleAddUser}>Add User</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}<br/><br/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
