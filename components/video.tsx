import React from 'react';

export default function Video({ url }) {
    return (
      <video controls>
        <source src={url} type="video/mp4" />
      </video>
    );
  }
  