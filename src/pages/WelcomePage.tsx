import React from 'react';
import { useNavigate } from 'react-router-dom';

interface WelcomePageProps {
  token: string | null;
  onLogout: () => void;
}
 

const WelcomePage: React.FC<WelcomePageProps> = ({ token, onLogout }) => {
  const navigate = useNavigate();
  const listOfDr=()=>{
      navigate('/list')
  }
  const createDr=()=>{
    navigate('/createDr')
  }
  const createQua=()=>{
    navigate('/createQua')
  }
  //console.log(token)
  return (
    <div>
      <h2>Welcome</h2>
      <p>Token: {token}</p>
      <button onClick={listOfDr}>List of doctors</button>
      <button onClick={createDr}>Create Doctor</button>
      <button onClick={createQua}></button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
 
export default WelcomePage;
