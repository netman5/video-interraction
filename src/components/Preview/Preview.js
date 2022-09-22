import React from 'react';
import Draggable from './Draggable';
import VideoPreview from './VideoPreview';

function Preview() {
  return (
    <div className="preview">
      <Draggable />
      <VideoPreview />
    </div>
  );
}

export default Preview;
