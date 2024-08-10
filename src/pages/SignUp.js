import React from "react";
import { useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './Firebase';
import  {useState} from 'react'

 function CreateAcc() {
    
        const navigate = useNavigate();
     
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('');
     
        const onSubmit = async (e) => {
          e.preventDefault()
         
          await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/login")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
     
       
        }
    
    return (
        <div className="Host-page-container">
            
            <h1 className="hostTwo--h1">Create an account</h1>  
         <form  >

         <input 
            
             type="text" 
             
             name="Names" 
             
             placeholder="Enter Your First Name" 
             
             required
           
            />

           <input 
            type="text" 
            name="Names" 
            placeholder="Enter Your Last Name"
            required 
           />



             <input type="email" 
             label="Email address"
             value={email}
             onChange={(e) => setEmail(e.target.value)}  
             required                                    
             placeholder="Email address"    
             />

             <input 
             type="password" 
             label="Create password"
             value={password}
             onChange={(e) => setPassword(e.target.value)} 
             required                                 
             placeholder="Password"              
        
             
            
             />
         </form>   
                 <button type="submit" className="link-HostTwo" onClick={onSubmit} >Sign Up</button>

            <div className="foot">
            <p>Ⓒ 2022 #VANLIFE</p>
           </div>

        </div>
    );
}

export default CreateAcc;


 