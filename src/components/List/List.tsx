import React from 'react';
import { IState as IProps } from '../../App';
import styles from './List.module.scss';

function List({ people }: IProps) {
  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => (
      <li className={styles['List']} key={index}>
        <div className={styles['List-header']}>
          <div className={styles['List-img']}>
            <img alt={person.name} src={person.url} />
          </div>

          <h2>{person.name}</h2>
        </div>

        <p>{person.age} years old</p>
        <p className={styles['List-note']}>{person.note} </p>
      </li>
    ));
  };

  return <ul>{renderList()}</ul>;
}

export default List;
