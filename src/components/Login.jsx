import { useState } from 'react';
import { useNavigate, useLocation, Link } from "react-router-dom";
import ApiService from './ApiService'; // Import the API service

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
     await ApiService.login(userName,email, password);
      // Handle successful login (e.g., store user data in context or local storage)
      navigate(from, { replace: true });
    } catch (error) {
      setErrorMessage(error.message || 'Login failed');
    }
  };

  return (
    <>
      <div className='Host-page-container'>
        <h2 className='hostTwo--h1'>Sign in to your Account</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder='Username'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <p>{errorMessage}</p>}
          <button type="submit" className='link-HostTwo'>Sign in</button>
        </form>
        <span className='signup-btn'>
          Don't have an account?
          <Link onClick={props.toggleForm} to="/SignUp" className='HostTwo--span'>Create one now</Link>
        </span>
      </div>
      <div className="footer">
        <p>Ⓒ 2022 #VANLIFE</p>
      </div>
    </>
  );
};

export default Login;