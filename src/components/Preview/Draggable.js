/* eslint-disable react/no-array-index-key */
import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Draggable() {
  const [dragElements, setDragElements] = useState([]);

  // const dragItem = useRef();
  // const dragOverItem = useRef();
  const createElemnt = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const element = createElemnt.current.value;
    const elementObj = {
      id: uuidv4(),
      title: element,
    };
    setDragElements([...dragElements, elementObj]);
    createElemnt.current.value = '';
  };

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

      <div>
        {dragElements && dragElements.map((el) => (
          <ul key={el.id}>
            <li>{el.title}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Draggable;
