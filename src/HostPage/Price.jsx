import React from 'react'

function Price( {price}) {
  return (

    <div className="pricelist">
        { price.map((prices) => (
                <div className="price-more" key={prices.id}>
               <h1>${prices.title}</h1>
               <p>{prices.date}</p>
                </div>
            ))
        }
    </div>

  )
}

export default Price