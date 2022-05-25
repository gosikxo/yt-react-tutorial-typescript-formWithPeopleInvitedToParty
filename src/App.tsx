import React, { useState } from 'react';
import './App.css';
import { List } from './components/List';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "data:image/jpeg;base64,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",
      age: 36,
      note: "Allergic to peanuts"
    }
  ])

  return (
    <div className="App">
      <h1>People invited to our party</h1>
      <List people={people}/>

    </div>
  );
}

export default App;
