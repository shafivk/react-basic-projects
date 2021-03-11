import React, {useState} from 'react';
import data from './data';
import List from './list';

function App() {
  const [people,setPeople] =useState(data);

  return (
    <main >
      <section className="container">
        <h2>{people.length}  B'days today</h2>
        <List people ={people} />
        <button onClick= { () => setPeople ([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
