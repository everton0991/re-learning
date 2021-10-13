import React from 'react';
import { IState as IProps } from '../App';

function List({ people }: IProps) {
  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => (
      <li className='List' key={index}>
        <div className='List-header'>
          <div className='List-img'>
            <img alt={person.name} src={person.url} />
          </div>

          <h2>{person.name}</h2>
        </div>

        <p>{person.age} years old</p>
        <p className='List-note'>{person.note} </p>
      </li>
    ));
  };

  return <ul>{renderList()}</ul>;
}

export default List;
