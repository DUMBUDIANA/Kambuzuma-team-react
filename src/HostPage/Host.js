


const Host = (props) => {
    return (
      <div className='all--container'>
              
              <div className="edit--vans">
  
                <div className="img--type--day">
                  <img src={ require( '../images 2/' + props.image)} alt="" />
  
                   <div className="type--day">
                     <p className="type--bold">{props.type}</p>
                     <div className="price--day">
                      <p>${props.price}</p>
                      <p>{props.day}</p>
                     </div>
                    
                   </div>
  
                </div>
  
                <p>Edit</p>
        
              </div>
  
  
      </div>
    )
  }
  
  export default Host