import './App.css';
import React, { Component } from 'react';
import { List } from './NameList';

const name = ['Таня', 'Маша', 'Петя'];

function App() {
  /*   let result = name.map(function (elem) {
    return <div key={elem}>{elem}</div>;
  });

  console.log(result); */

  return (
    <div className="App">
      {/* {result} */}
      <List items={name} />
    </div>
  );
}

export default App;
