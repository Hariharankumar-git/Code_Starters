// src/App.js
import React from 'react';
import './App.css';
import ResumeDisplay from './documentDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Document Rendering</h1>
      </header>
      <main>
        <ResumeDisplay />
      </main>
    </div>
  );
}

export default App;
