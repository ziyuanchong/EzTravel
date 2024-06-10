import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListCountries from './ListCountries';
import './Home.css';

const Home: React.FC = () => {
  const [countryid, setCountryid] = useState('');
  const [stateid, setStateid] = useState('');
  const navigate = useNavigate();
  const [error, setErrorMessage] = useState('');

  const handleButtonClick = () => {
    if (canNavigate) {
      navigate('/planning');
    } else {
      setErrorMessage('Please Update Your Destination before Proceeding');
    }
  };

  const canNavigate = stateid !== '' && countryid !== '';
  
  return (
    <div className="Home">
      <div className="Title">EzTravel</div>
      <div className="Subtitle">Travelling Made Simpler</div>
      <div className="ListCountry">
        <ListCountries
          countryid={countryid}
          setCountryid={setCountryid}
          stateid={stateid}
          setStateid={setStateid}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button onClick={handleButtonClick}>Proceed</button>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Home;