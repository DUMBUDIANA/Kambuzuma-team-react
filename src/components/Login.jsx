import {useState} from 'react' // to pick data from the input of the user 
import userLogin from '../auth/userLogin'
import { useNavigate, useLocation, Link } from "react-router-dom"
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null)

    const navigate = useNavigate ();
    const location = useLocation ();

    const from = location.state?.from?.pathname || "/host";

    // this the error we brought in from firebase 
    const {error, login} = userLogin();

    const handleLogin = async (e) => {
      e.preventDefault(); // this means that it should not refresh this page every time we click the btn to submit 
      await login(email, password);
      if(!error) {
        navigate(from, {replace: true});
        setEmail("");
        setPassword("");
        return
      } else {
        // this the error we brought in from firebase 
        setErrorMessage(error)
      }
    }

  return (
    <div className='Host-page-container'>
    <h2 className='hostTwo--h1'>Sign in to your Account</h2>
  <form onSubmit={handleLogin}>
    <input type="email" placeholder='email' 
    value={email} 
    // (e) -> this is an anonymous function so it handles everything that the user types in and the target it gets everthing that the user is typing in
    onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" placeholder='password'
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    {/* // this the error we brought in from firebase  */}
    {error && <p>{errorMessage}</p>} 
    <button type="submit" className='link-HostTwo'>Login</button>
  </form>
  <Link to="/SignUp" className='HostTwo--span'>Have no Account?</Link>
  <button onClick={props.toggleForm}>Sign Up</button>
  </div>
  )
}

export default Login
