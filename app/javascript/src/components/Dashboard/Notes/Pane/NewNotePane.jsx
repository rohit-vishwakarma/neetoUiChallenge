import React from "react";

import { Pane, Typography } from "neetoui";

import NoteForm from "./NoteForm";

import { NOTES_FORM_INITIAL_FORM_VALUES } from "../constants";

const NewNotePane = ({ fetchNotes, showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a New Note
        </Typography>
      </Pane.Header>
      <NoteForm
        isEdit={false}
        note={NOTES_FORM_INITIAL_FORM_VALUES}
        refetch={fetchNotes}
        onClose={onClose}
      />
    </Pane>
  );
};

export default NewNotePane;
