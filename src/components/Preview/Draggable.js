import React, { useState, useRef } from 'react';

function Draggable() {
  const [dragElements, setDragElements] = useState([]);

  // const dragItem = useRef();
  // const dragOverItem = useRef();
  const createElemnt = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const element = createElemnt.current.value;
    setDragElements((current) => [...current, ...[element]]);
    createElemnt.current.value = '';
  };

  console.log(dragElements);

  return (
    <div className="drag">
      <h2>Create draggable elements</h2>
      <div className="elements">
        <input
          type="text"
          placeholder="create new element"
          ref={createElemnt}
        />
        <button type="button" onClick={(e) => handleSubmit(e)} className="btn btn-outline-primary">Create Element</button>
      </div>
    </div>
  );
}

export default Draggable;
