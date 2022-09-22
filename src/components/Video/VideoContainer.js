import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VideoContainer() {
  const [file, setFile] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNavigate = () => {
    navigate('/preview');
  };

  console.log(file);

  return (
    <div className="video">
      <div>
        <label htmlFor="link" className="vidlink-form">
          Url Link:
          <div className="input-container">
            <input type="text" placeholder="Enter Youtube video url link or upload video from your computer" name="link" className="form-control" aria-describedby="inputGroup-sizing-default" />
          </div>
        </label>
        <label htmlFor="file">
          <input
            type="file"
            id="file"
            accept=".png, .jpeg, .jpg"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <button type="button" className="btn btn-outline-primary" onClick={handleNavigate}>Click Next</button>
    </div>
  );
}

export default VideoContainer;
