import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard';
import axios from 'axios';

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect
  const [episodesList, setEpisodesList] = useState([]);

  useEffect(() => {
    console.log('inside effect episodes!!')
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(response => {
        setEpisodesList(response.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, [])

  return (
    <section className='grid-view'>
      {episodesList.map((episode, index) => (
         <EpisodeCard key={index} episode={episode} />
      ))}
    </section>
  );
}