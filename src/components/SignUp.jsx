import {useState} from 'react'
import userSignUp from '../auth/userSignUp'
import { useNavigate, useLocation } from "react-router-dom"


const SignUp = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/Dashboard"

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

    <div className='Host-page-container'>
    <h2 className='hostTwo--h1'>Create your account</h2>
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
    <button onClick={props.toggleForm} className='link-HostTwo' type="submit">Sign up</button>
  </form>
  {/* <p>Have an Account?</p>
  <button  className='link-HostTwo'>Sign in</button> */}

  <div className="footer">
      <p>Ⓒ 2022 #VANLIFE</p>
    </div>

    </div>
  </>
  )
}

export default SignUp
