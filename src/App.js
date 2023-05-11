import React from 'react';
import './App.css';
import BackwardCounter from './components/Counters/BackwardCounter';
import ForwardCounter from './components/Counters/ForwardCounter';

function App() {

  return (
    <>
      <ForwardCounter />
      <BackwardCounter />
    </>
  );
}

export default App;