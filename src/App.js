import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import CounterTwo from './components/Counter/CounterTwo';
import User from './components/user/User';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter>
      <CounterTwo></CounterTwo> */}
      <User></User>
    </div>
  );
}

export default App;
