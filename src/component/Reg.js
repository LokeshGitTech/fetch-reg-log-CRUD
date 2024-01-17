import React, { useState, useEffect } from 'react';

function Reg() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = { ...formData };
    setUsers(prevUsers => [...prevUsers, newUser]);
    setFormData({ name: '', email: '', password: '' });
    console.log('Form data submitted:', newUser);
    window.location.assign("Log")
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
export default Reg