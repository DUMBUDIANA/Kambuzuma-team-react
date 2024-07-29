import { Link } from "react-router-dom"
import React from 'react'

function Host() {
  return (
<<<<<<< HEAD
    <div className="host">
      <h1 className="host-one">Sign in to your account</h1>

      <div className="form">
      <input type="text" name='Eamil Address' />
      <input type="text" name='Password' />
      </div>

      <Link to="HostTwo" className="link-HostTwo">return to home</Link>
      <p className="first-p-host">Don’t have an account? <span className="first-span-host">Create one now</span></p>
      <div className="foot">
        <p>Ⓒ 2022 #VANLIFE</p>
        </div>
 
 
=======
    <div>
    <div>Host</div>
    <h1>sign up</h1>
>>>>>>> bcbbd5f (host sign up)
    </div>
  )
}

export default Host