import React, { Component } from 'react';

class VideoLoader extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.autoPlayVideo();
  }

  autoPlayVideo() {
    if (this.videoRef.current) {
      this.videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }

  render() {
    return (
      <div>
        <video ref={this.videoRef} width="1500" autoplay muted loop>
          <source src={`${process.env.PUBLIC_URL}/video_yellow.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default VideoLoader;
