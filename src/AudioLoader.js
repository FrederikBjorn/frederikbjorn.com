import React, { Component } from 'react';

class AudioLoader extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  playAudio = () => {
    if (this.audioRef.current) {
      this.audioRef.current.play().catch(error => {
        console.error("Audio autoplay failed:", error);
      });
    }
  };

  
  stopAudio = () => {
    if (this.audioRef.current) {
      this.audioRef.current.pause();
      this.audioRef.current.currentTime = 0; // Reset to the beginning
    }
  };


  render() {
    return (
      <div>
        {/* Hide the audio player */}
        <audio ref={this.audioRef} style={{ display: 'none' }}>
          <source src={`${process.env.PUBLIC_URL}/sortstov.mp3`} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <br />
        {/* Show only the play button */}
        <button onClick={this.playAudio}>Play Audio</button>
        <button onClick={this.stopAudio}>Stop Audio</button>

      </div>
    );
  }
}

export default AudioLoader;
