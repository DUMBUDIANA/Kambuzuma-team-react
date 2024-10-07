
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const VansDetails = () => {
  const { id } = useParams();
  

  const { data: van, error } = useSWR(`http://kambuzuma-vanlife-backend-production.up.railway.app/vans/${id}`, fetcher);

  if (error) return <div>Failed to load van details</div>;
  if (!van) return <div>Loading...</div>;

  return (
    <><div className="van-details">
      
      <Link to='/Users'> <span>Back to vans</span>
      </Link>

      <div className="van-details-content">
        <img src={`http://kambuzuma-vanlife-backend-production.up.railway.app${van.image}`} alt={van.name} className="images" />
        <div className="van-info">
          <i className={`van-type ${van.button.toLowerCase()}`}>{van.button}</i>
          <h2>{van.name}</h2>
          <p className='bold'><span>${van.price}</span>/day</p>
          <p className='description'>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      </div>
    </div>
    
    <div className="footer">
        <p>Ⓒ 2022 #VANLIFE</p>
    </div></>
  );
};

export default VansDetails;