
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState('');
  const [allButton, setAllButton] = useState(false);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/${searchCharacter}`)
      .then(response => {
        console.log(response)
        setCharacterList(response.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, [searchCharacter, allButton])

  function onSearch(e, name) {
    e.preventDefault();
    setSearchCharacter(`?name=${name}`)
  }

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <section className='character-list grid-view'>
        {characterList.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </section>
    </div>
  );
}
