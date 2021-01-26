import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('');
    const [repo, setRepo] = useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleOnClick = async () => {
        //console.log(searchInput);
        try {
            const result = await axios(`https://api.github.com/users/${searchInput}/repos`)
            setRepo(result);
        } catch (error) {
            console.log(error)
        }
    };
       
    return (
        <>
        <div>
            <input type="text"
                placeholder="Type user name"
                value={searchInput} onChange={handleChange} />
            <button onClick={handleOnClick} >Search</button>
        </div>
            <Results repos={repo} />
        </>
        ); 
   
}

export default SearchBar;