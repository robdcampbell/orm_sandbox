import React, { useRef } from "react";

const AddNote = ({ setShowModal }) => {
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(titleRef.current.value);
    setShowModal(false);
  };

  return (
    <form className="add__modal">
      <button
        className="close__modal"
        type="button"
        onClick={(e) => setShowModal(false)}
      >
        x
      </button>
      <input type="text" placeholder="Title" ref={titleRef} />
      <input type="text" placeholder="Description" />
      <button type="button" onClick={(e) => handleSubmit(e)}>
        Add Note
      </button>
    </form>
  );
};

export default AddNote;
