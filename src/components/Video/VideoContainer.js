import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VideoContainer() {
  const [videoFile, setVideoFile] = useState('');
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setVideoFile(URL.createObjectURL(file));
  };

  const handleNavigate = () => {
    navigate('/preview', { state: { link: videoFile, youtube: url } });
  };

  return (
    <div className="video">
      <div>
        <label htmlFor="link" className="vidlink-form">
          Url Link:
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter Youtube video url link or upload video from your computer"
              name="link"
              className="form-control form-control-sm"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </label>
        <label htmlFor="file">
          <input
            type="file"
            accept="image/*,audio/*,gif/*,video/mp4,video/x-m4v,video/*"
            onChange={(e) => handleFileChange(e)}
          />
        </label>
      </div>
      <button type="button" className="btn btn-outline-primary" onClick={handleNavigate}>Click Next</button>
    </div>
  );
}

export default VideoContainer;
