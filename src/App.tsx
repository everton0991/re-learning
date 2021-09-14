import React, { useState } from 'react';
import './App.css';

interface IState { 
  people: {
    age: number
    name: string
    url: string
    note?: string 
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([])

  people.map(person => {
    return person.age
  })

  return (
    <div className="App">
      <h1>People invited to our Party</h1>
    </div>
  );
}

export default App;
