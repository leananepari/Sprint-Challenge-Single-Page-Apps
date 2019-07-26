import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results)
        setCharacterList(response.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, [])

  return (
    <section className='character-list grid-view'>
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characterList.map((character, index) => (
         <CharacterCard key={index} character={character} />
      ))}
    </section>
  );
}
