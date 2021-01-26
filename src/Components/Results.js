import React from 'react';

const Results = (props) => {

    const { repos } = props;
    //console.log('repos is ', repos.data);

    const listRepos = repos.length !==0 ?
        repos.data.map((item) => <li key={item.id}> {item.name} </li>) : (
          <br />);

    return (
    < h2 > {listRepos} </h2 >
    );
        
};

export default Results;