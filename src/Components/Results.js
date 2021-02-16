/* eslint-disable react/jsx-key */
/* eslint react/prop-types: 0 */
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Results = (props) => {
  const { repos } = props;

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((item) => (
        <BrowserRouter>
          <Link to={{ pathname: `/repo/${item.full_name}` }} key={item.id}>
            <li>{item.name} </li>
          </Link>
        </BrowserRouter>
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
