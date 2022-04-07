import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Oprah Winfrey",
      age: 68,
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSFfGocW9ksVq05n5MNceO4QJPkrlEDwmtsUfRTqVbEiC7KsRX2",
      note: "Oprah Winfrey is the first black woman billionaire and the richest African-American woman.",
    },
    {
      name: "Lionel Messi",
      age: 34,
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g"
    }
  ])

  return ( 
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;