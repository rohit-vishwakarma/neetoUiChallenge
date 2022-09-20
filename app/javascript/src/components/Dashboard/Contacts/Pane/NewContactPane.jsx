import React from "react";

import { Pane, Typography } from "neetoui";

import ContactForm from "./ContactForm";

const NewContactPane = ({ showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a New Contact
        </Typography>
      </Pane.Header>
      <ContactForm onClose={onClose} />
    </Pane>
  );
};

export default NewContactPane;
