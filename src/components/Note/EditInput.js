import React from "react";

const EditInput = ({
  editInput,
  setEditInput,
  onNoteEditChange,
  onNoteEditSubmit,
}) => {
  return (
    <div className="edit-input">
      <form onSubmit={onNoteEditSubmit}>
        <input
          type="text"
          name="author"
          placeholder="Enter your name"
          value={editInput.author}
          onChange={onNoteEditChange}
        />

        <textarea
          row="3"
          name="noteText"
          placeholder="Enter your message"
          value={editInput.noteText}
          onChange={onNoteEditChange}
        />

        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default EditInput;
