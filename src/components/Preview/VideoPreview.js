/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */

import React from 'react';

const Video = ({ link, youtube }) => (
  <video controls width="100%">
    <source src={link || youtube} type="video/mp4" />
    Sorry, your browser does not support embedded videos.
  </video>
);

function VideoPreview(props) {
  const { link, youtube } = props.data;
  return (
    <div className="video-prev">
      <h2>Preview Video</h2>
      <Video link={link || youtube} />
    </div>
  );
}

export default VideoPreview;
