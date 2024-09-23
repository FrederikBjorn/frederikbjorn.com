// src/App.js
import React from 'react';
import './App.css';
import ImageLoader from './ImageLoader'; 
import VideoLoader from './VideoLoader';
import AudioLoader from './AudioLoader';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VideoLoader />
        <AudioLoader />
      </header>
    </div>
  );
}

export default App;