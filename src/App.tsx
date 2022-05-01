import React, { useState } from 'react';
import List from './components/List/List';
import AddToList from './components/AddToList/AddToList';

import './App.scss';

export interface IState {
  people: {
    age: number;
    name: string;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'LeBron James',
      url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      age: 36,
      note: 'Allergic to staying on the same team',
    },
  ]);

  people.map((person) => {
    return person.age;
  });

  return (
    <div className='App'>
      <h1>People invited to our Party</h1>

      <List people={people} />

      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
