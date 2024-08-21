import {useState} from 'react'
import userSignUp from '../auth/userSignUp'
import { useNavigate, useLocation } from "react-router-dom"


const SignUp = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/host"

    const {error, signUp} = userSignUp(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signUp(email, password);

        if (!error) {
            navigate(from, { replace: true })
            setEmail("");
            setPassword("");
            return;
        } else {
            setErrorMessage(error)
        }
    }
  return (
    <>
    <h2>Create your account</h2>
  <form onSubmit={handleSubmit}>
    <input type="email" placeholder='Email address'
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    <input type="password" placeholder='Password'
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    {error && <p>{errorMessage}</p>}
    <button className='link-HostTwo' type="submit">Sign up</button>
  </form>
  <p>Have an Account?</p>
  <button className='link-HostTwo' onClick={props.toggleForm}>Sign in</button>
  </>
  )
}

export default SignUp
