import React from 'react';
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from 'react-country-state-city';
import 'react-country-state-city/dist/react-country-state-city.css';
import './ListCountries.css';

interface ListCountriesProps {
  countryid: string;
  setCountryid: (id: string) => void;
  stateid: string;
  setStateid: (id: string) => void;
}

const ListCountries: React.FC<ListCountriesProps> = ({
  countryid,
  setCountryid,
  stateid,
  setStateid,
}) => {
  return (
    <div className="text">
      <div className="title">Where are you travelling to?</div>
      <div className="subtitle">Country</div>
      <CountrySelect
        onChange={(e: { id: string }) => {
          setCountryid(e.id);
        }}
        placeHolder="Select Country"
      />
      <div className="subtitle">State</div>
      <StateSelect
        countryid={countryid}
        onChange={(e: { id: string }) => {
          setStateid(e.id);
        }}
        placeHolder="Select State"
      />
    </div>
  );
};

export default ListCountries;