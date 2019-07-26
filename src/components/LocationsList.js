import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locationsList, setLocationsList] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(response => {
        console.log(response.data.results)
        setLocationsList(response.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, [])

  return (
    <section className='grid-view'>
      {locationsList.map((location, index) => (
         <LocationCard key={index} location={location} />
      ))}
    </section>
  );
}
