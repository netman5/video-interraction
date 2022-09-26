/* eslint-disable react/no-array-index-key */
import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Draggable() {
  const [dragElements, setDragElements] = useState([]);

  // const dragItem = useRef();
  // const dragOverItem = useRef();
  const createElemnt = useRef();
  const elementType = useRef();
  const image = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const element = createElemnt.current.value;
    const type = elementType.current.value;
    const elementObj = {
      id: uuidv4(),
      title: element,
      type,
    };
    setDragElements([...dragElements, elementObj]);
    createElemnt.current.value = '';
    elementType.current.value = '';
  };

  // const createElement = (type, title) => {
  //   switch (type) {
  //     case 'text':
  //       return <p>{title}</p>;
  //     case 'image':
  //       return <img src={title} alt="img" />;
  //     default:
  //       return <p>{title}</p>;
  //   } // end switch
  // };

  const createElement = (type, title) => {
    if (type === 'img') {
      <input type="text" placeholder="image url" ref={image} />;
      return <img src={image} alt={title} />;
    }
    return React.createElement(type, {}, title);
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
        <input
          type="text"
          placeholder="Element type h1, h2, h3, p, span"
          ref={elementType}
        />

        {/* {elementType === 'img' && <input type="text" placeholder="image url" ref={image} />} */}

        <button
          type="button"
          onClick={(e) => handleSubmit(e)}
          className="btn btn-outline-primary"
        >
          Create Element
        </button>
      </div>

      <div>
        {dragElements && dragElements.map((el) => (
          <div key={el.id} draggable>
            {createElement(el.type, el.title)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Draggable;
