import React from "react";

 function CreateAcc() {
    
    
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
             
             name="Email Address" 
             
             placeholder="Enter Your Email Address" 
             
            
             />

             <input type="password" 
             
             name="PassWord" 
             
             placeholder="Enter Password" 
             
            
             />
         </form>   
                 <button type="submit" className="link-HostTwo">Sign Up</button>

            <div className="foot">
            <p>Ⓒ 2022 #VANLIFE</p>
           </div>

        </div>
    );
}

export default CreateAcc;
