
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useSWR from 'swr';
import arrow from "../images 2/Arrow 1.png"

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const VansDetails = () => {
  const { id } = useParams();
  

  const { data: van, error } = useSWR(`http://localhost:5000/vans/${id}`, fetcher);

  if (error) return <div>Failed to load van details</div>;
  if (!van) return <div>Loading...</div>;

  return (
    <><div className="details-vans">
      
      <Link to='/Users' className='back'> <img src={arrow} alt="arrow" /><span >Back to vans</span> </Link>

      <div className="van-details-content">
        <img src={`http://localhost:5000${van.image}`} alt={van.name} className="detail-image" />
        <div className="allcars--2">
          <span className='button2'  style={{ backgroundColor: van.color }}><i className={`van-type ${van.button.toLowerCase()}`}>{van.button}</i></span>
          <h2>{van.name}</h2>
          <p ><span className='bold' >${van.price}</span>/day</p>
          <p className='description'>{van.description}</p>
          <button className="button3 ">Rent this van</button>
        </div>
      </div>
    </div>
    
    <div className="footerB">
        <p>Ⓒ 2022 #VANLIFE</p>
    </div></>
  );
};

export default VansDetails;