import React from 'react';

export default ImageLoader;

function ImageLoader({ url }) {
  return (
    <div>
      <h2>Hest from provided URL:</h2>

      {url && (
        <img src={url} alt="Loaded from provided URL" style={{ maxWidth: '100%', height: 'auto' }} />
      )}
    </div>
  );
}

