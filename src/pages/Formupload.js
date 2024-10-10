import React from 'react'

const Formupload = () => {
  return (
    <div>
        <div className='payments--container'>
      <p className='p--payment'>Upload Van</p>
      {/* <p className='select--pay'>Select payment method below</p> */}
      <form className='submit--payment'>
        <div className='payment--id'>
  
          <input
          placeholder='Name'
          className='payment--form'
            type="text"
            name="paymentId"
            required
          />
        </div>
        <div className='amount--type'>
        
          <input
          placeholder=''
          className='amount'
            type="number"
            name="amount"
            required
            // min="0" // Prevent negative numbers
          />
        </div>

        <div className='payment--id'>
  
          <input
          placeholder='Description'
          className='payment--form'
            type="text"
            name="paymentId"
            required
          />
        </div>

        <div className='paymentmethod--type'>
          <p> Type </p>

          <select className='paymentmethod' name="paymentMethod">
            <option value="credit card">Simple</option>
            <option value="paypal">Rugged</option>
            <option value="bank transfer">Luxury</option>
          </select>
        </div>

        <div className='currency--container'>
        <p> Choose a payment method </p>
        </div>

        <div className='userid--containe'>
          
          <input
          placeholder='your id for example user 847'
          className='userid'
            type="text"
            name="userId"
            required
          />
        </div>

        <div className='email--container'>
        
          <input
          placeholder='your email'
          className='email'
            type="email"
            name="email"
            required
          />
        </div>

        <button className='button--submit' type="submit">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Formupload
