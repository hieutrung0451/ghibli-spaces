import React, { useState, useContext } from "react";
import "./Note.css";
import AppPostNote from "./AppPostNote";
import EditInput from "./EditInput";
import ColorContext from "../../contexts/ColorContext";

const Note = (props) => {
  const color = useContext(ColorContext);
  // State
  let emptyNote = {
    noteText: "",
    author: "",
  };
  const [note, setNote] = useState(emptyNote);
  const [allNote, setAllNote] = useLocalStorage("note", []);
  // Function
  function onNoteChange(e) {
    let { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        id: Date.now().toString(),
      };
    });
  }
  function onNoteSubmit(e) {
    e.preventDefault();
    setAllNote((prevNote) => {
      return [note, ...prevNote];
    });
    setNote(emptyNote);
  }
  function onNoteDelete(id) {
    setAllNote(
      allNote.filter((note) => {
        return note.id !== id;
      })
    );
  }

  // Edit
  const [editInput, setEditInput] = useState(null);
  function onNoteEdit(id) {
    let thisNote = allNote.filter((note) => note.id === id);
    setEditInput({
      noteText: thisNote[0].noteText,
      author: thisNote[0].author,
    });
    onNoteDelete(id);
  }
  function onNoteEditChange(e) {
    let { name, value } = e.target;
    setEditInput((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        id: Date.now().toString(),
      };
    });
  }
  function onNoteEditSubmit(e) {
    e.preventDefault();
    setAllNote((prevNote) => {
      return [editInput, ...prevNote];
    });
    setNote(emptyNote);
    setEditInput(null);
  }
  let editElement = null;
  if (!!editInput) {
    editElement = (
      <EditInput
        editInput={editInput}
        setEditInput={setEditInput}
        onNoteEditChange={onNoteEditChange}
        onNoteEditSubmit={onNoteEditSubmit}
      />
    );
  }

  let noteElements = allNote.map((theNote) => {
    return (
      <AppPostNote
        key={theNote.id}
        id={theNote.id}
        noteText={theNote.noteText}
        author={theNote.author}
        onNoteDelete={onNoteDelete}
        onNoteEdit={onNoteEdit}
      />
    );
  });
  // Return
  return (
    <div className="note" style={{ backgroundColor: color.color }}>
      <h3>Note Editor</h3>
      <form onSubmit={onNoteSubmit}>
        <input
          type="text"
          name="author"
          placeholder={props.translation("enterTitle.1")}
          value={note.author}
          onChange={onNoteChange}
          classNam="input-title"
          maxLength="10"
        />

        <textarea
          row="3"
          name="noteText"
          placeholder={props.translation("enterMess.1")}
          value={note.noteText}
          onChange={onNoteChange}
          maxLength="30"
        />

        <button type="submit" style={{ backgroundColor: color.color }}>
          {props.translation("add.1")}
        </button>
      </form>
      {noteElements}
      {editElement}
    </div>
  );
};

export default Note;

// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
