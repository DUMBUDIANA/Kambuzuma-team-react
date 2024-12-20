import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import arrow from "../images 2/Arrow 1.png";

// Fetcher function for SWR
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const VansDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // API URLs
  const apiBaseUrlProduction = 'https://kambuzuma-vanlife-backend-production.up.railway.app';
  const apiBaseUrlLocal = 'http://localhost:5000';

  // Determine the appropriate API base URL
  const apiUrl = window.location.hostname === 'localhost' ? apiBaseUrlLocal : apiBaseUrlProduction;

  // Fetching van details
  const { data: van, error } = useSWR(`${apiUrl}/vans/${id}`, fetcher); // Use the selected API URL

  if (error) return <div>Failed to load van details</div>;
  if (!van) return <div>Loading...</div>;

  return (
    <>
      <div className="details-vans">
        <Link to='/Users' className='back'>
          <img src={arrow} alt="arrow" /><span>Back to vans</span>
        </Link>

        <div className="allcars--2">
          <img src={`${apiUrl}${van.image}`} alt={van.name} className="detail-image" /> {/* Use the selected API URL */}
          <div className="van-info">
            <span className='button2' style={{ backgroundColor: van.color }}>
              <i className={`van-type ${van.button.toLowerCase()}`}>{van.button}</i>
            </span>
            <h2>{van.name}</h2>
            <p><span className='bold'>${van.price}</span>/day</p>
            <p className='description'>{van.description}</p>
            <button onClick={() => navigate('/paymentt', { replace: true })} className="button3">
              Rent this van
            </button>
          </div>
        </div>
      </div>
      <div className="footerB">
        <p>Ⓒ 2022 #VANLIFE</p>
      </div>
    </>
  );
};

export default VansDetails;
