import Login from "../components/Login";
import SignUp from "../components/SignUp";
import {useState} from 'react';

function Authentication() {
    const [toggle, setToggle] = useState(true);
    const handleToggle = () => {
        setToggle(!toggle);
    };;
  return (
    <div>
        {toggle ? (
        <Login toggleForm={handleToggle}/>
         ) : (
        <SignUp  toggleForm={handleToggle}/>
    
        )}
      
      
    </div>
  )
}

export default Authentication;
