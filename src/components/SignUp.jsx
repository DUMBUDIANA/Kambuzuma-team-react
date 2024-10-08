import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import ApiService from './ApiService'; // Import the API service

const SignUp = (props) => {
  const [Name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/Dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ApiService.signup(username, email, password);
      // Handle successful signup (e.g., store user data in context or local storage)
      navigate(from, { replace: true });
    } catch (error) {
      setErrorMessage(error.message || 'Signup failed');
    }
  };

  return (
    <>
      <div className='Host-page-container'>
        <h2 className='hostTwo--h2'>Create your account</h2>
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Name'
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="text" 
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <button onClick={props.toggleForm} className='link-HostTwo' type="submit">Sign up</button>
        </form>
      </div>
      <div className="footer">
        <p>Ⓒ 2022 #VANLIFE</p>
      </div>
    </>
  );
};

export default SignUp;