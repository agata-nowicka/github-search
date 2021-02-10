import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Repo = () => {
  const { author, name } = useParams();
  const [languages, setLanguages] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios(`https://api.github.com/repos/${author}/${name}/languages`);
      setLanguages(Object.keys(res.data));
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
      Choosen repo is {name}. The author is {author}
      <br />
      Used languages are: {languages.join(', ')}
    </div>
  );
};

export default Repo;
