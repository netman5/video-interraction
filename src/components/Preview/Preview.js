import React from 'react';
import { useLocation } from 'react-router-dom';
import Draggable from './Draggable';
import VideoPreview from './VideoPreview';

function Preview() {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="preview">
      <Draggable />
      <VideoPreview data={data} />
    </div>
  );
}

export default Preview;
