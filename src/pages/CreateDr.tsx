import React, { useState } from 'react';
import axios from 'axios';

interface Props {
    token: string | null;
}

const CreateDr: React.FC<Props> = ({ token }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
    contactNumber: ''
  });
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await axios.post('https://psl-test2-b8593d29856b.herokuapp.com/api/v1/doctors', 
        formData,
        {
            headers: {
              Authorization: `Bearer ${token}`
            }
        } 
        );
      console.log('Data sent successfully:', response.data);
      //reset form fields after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
        contactNumber: ''
      });
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
 
  return (
    <div>
      <h2>Doctor Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
 
export default CreateDr;