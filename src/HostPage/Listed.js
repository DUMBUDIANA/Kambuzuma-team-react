
              
              
const Listed = (props) => {
    return (
      <div className='all--container'>
              
              <div className="edit--vans">
  
                <div className="img--type--day">
                  <img src={ require( '../Images/' + props.image)} alt="" />
  
                   <div className="type--day">
                     <p className="type--bold">{props.type}</p>
                     <div className="price--day">
                      <p>${props.price}</p>
                      <p>{props.day}</p>
                     </div>
                    
                   </div>
  
                </div>
  
                
        
              </div>
  
  
      </div>
    )
  }
  
  export default Listed;