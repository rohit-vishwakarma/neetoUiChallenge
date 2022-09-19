import React, { useState } from "react";

import DeleteAlert from "./DeleteAlert";
import Note from "./Note";
import EditNotePane from "./Pane/Edit";

const List = ({ notes, fetchNotes }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedDeleteNote, setSelectedDeleteNote] = useState({});

  const handleEdit = note => {
    setSelectedNote(note);
    setShowEdit(true);
  };

  const handleDelete = note => {
    setSelectedDeleteNote(note);
    setShowDeleteAlert(true);
  };

  return (
    <>
      <div className="flex w-full flex-col">
        {notes.map(note => (
          <Note
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            key={note.id}
            note={note}
          />
        ))}
      </div>
      <EditNotePane
        fetchNotes={fetchNotes}
        note={selectedNote}
        setShowPane={setShowEdit}
        showPane={showEdit}
      />
      {showDeleteAlert && (
        <DeleteAlert
          refetch={fetchNotes}
          selectedDeleteNote={selectedDeleteNote}
          setSelectedDeleteNote={setSelectedDeleteNote}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </>
  );
};

export default List;
