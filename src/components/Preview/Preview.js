import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Draggable from './Draggable';
import VideoPreview from './VideoPreview';

function Preview() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <button type="button" onClick={() => navigate(-1)} className="btn btn-outline-secondary">Go back</button>
      <div className="preview">
        <Draggable />
        <VideoPreview data={data} />
      </div>
    </div>
  );
}

export default Preview;
