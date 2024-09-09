import React from 'react';
// import Card from '../components/Database/Database';
import arrow from "../images 2/Arrow 1.png";
import useSWR from 'swr';
import { Link } from 'react-router-dom';



// export default function VansDetails () {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  
  const Swr = () => {
    
    // const { vanId } = useParams();
    const { data: van,
       error, isValidating
       } = useSWR(`http://localhost:8002/api/vans/fetch`, fetcher);


    
    

    if (error) return <div className='failed'>failed to load</div>;
    if (isValidating) return <div className="Loading">Loading...</div>;


  // const van = Card.find (item => item.id === parseInt(id));
  return(
    <>
    <div className='allcars--2'>
       
      <div>

        <Link to="/Vans" className='back'><img src={arrow} alt="arrow" /><span>Back to all vans</span></Link>

            {van && (
            <>
              <img src={`http://localhost:8002${van.image}`} alt={van.type} className="images" />
              <div className="button2" style={{ backgroundColor: van.color }}>
                <Link className='detail-btn' to="../pages/VansDetails.js">{van.button}</Link>
              </div>
              <h2>{van.type}</h2>
              <p><span className='bold'>${van.price}</span>{van.day}</p>
              <p className='description'>{van.description}</p>
              <div className="button3">
                <Link to="/Login">Rent this van</Link>
              </div>
            </>
          )}
      </div>

    </div>
    
    <div className="footer">
      <p>Ⓒ 2022 #VANLIFE</p>
    </div>
  </>
  )
}

export default Swr;