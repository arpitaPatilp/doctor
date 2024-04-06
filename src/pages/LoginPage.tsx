import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { string } from 'yup';
import { tokenToString } from 'typescript';
 
interface LoginPageProps {
  onLogin: (authToken: string) => void;
}
 
const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await axios.post('https://psl-test2-b8593d29856b.herokuapp.com/api/v1/session',
               { "user": {
                "email":username,
                "password":password,
                "role":"admin"}});
      //  console.log(response.data.user.authentication.token);
      const token  = response.data.user.authentication.token;
      console.log(token)
      onLogin(token.toString());
      navigate('/welcome'); // Redirect to welcome page after successful login
    } catch (error) {
      if (error) {
        //setError(error.response.data.message);
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };
 
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};
 
export default LoginPage;