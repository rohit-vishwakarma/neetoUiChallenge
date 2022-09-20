import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

const Create = ({ showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a New Contact
        </Typography>
      </Pane.Header>
      <Form onClose={onClose} />
    </Pane>
  );
};

export default Create;
