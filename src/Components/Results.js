/* eslint-disable react/jsx-key */
/* eslint react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => {
  const { repos } = props;

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((item) => (
        <Link to={{ pathname: `/repo/${item.id}` }}>
          <li key={item.id}> {item.name} </li>
        </Link>
      ))
    ) : (
      <div> No repos </div>
    );

  return (
    <div>
      <h2> {listRepos} </h2>
    </div>
  );
};

export default Results;
