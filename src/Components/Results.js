/* eslint react/prop-types: 0 */
import React from 'react';

const Results = (props) => {
  const { repos } = props;

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((item) => <li key={item.id}> {item.name} </li>)
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
