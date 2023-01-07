import React from "react";

const AppPostNote = (props) => {
  const { id, noteText, author, onNoteDelete, onNoteEdit } = props;
  return (
    <div className="app-post-note">
      <p className="post-content">{noteText}</p>
      <div className="button">
        <button
          onClick={() => {
            onNoteEdit(id);
          }}
          className="edit-button"
        >
          Edit
        </button>
        <button
          onClick={() => {
            onNoteDelete(id);
          }}
          className="delete-button"
        >
          Delete
        </button>
      </div>
      <p className="post-author">{author}</p>
    </div>
  );
};

export default AppPostNote;
