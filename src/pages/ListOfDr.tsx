import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
interface Props {
    token: string | null;
    onLogout: () => void;
}

const ListOfDr: React.FC<Props> = ({ token, onLogout }) => {
  const [data, setData] = useState<string[]>([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<string[]>('https://psl-test2-b8593d29856b.herokuapp.com/api/v1/doctors', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setData(response.data); // Assuming response.data is an array of strings
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchData();
  }, [token]);
 
  return (
    <div>
      <h1>List of Doctors</h1>
      <ul>
        {data.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
    
  );
};
 
export default ListOfDr;