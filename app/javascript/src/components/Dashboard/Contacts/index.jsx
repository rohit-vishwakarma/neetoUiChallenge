import React, { useState } from "react";

import { Button, Alert, Toastr, Pagination } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import Menu from "./Menu";
import CreatePane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleDelete = () => {
    setShowDeleteAlert(prevState => !prevState);
    Toastr.success("Contact deleted Successfully.");
  };

  const handleShowDeleteAlert = () => {
    setShowDeleteAlert(prevState => !prevState);
  };

  return (
    <>
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(prevState => !prevState)}
          title="Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Contact"
              onClick={() => setShowNewContactPane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table showDeleteAlert={() => handleShowDeleteAlert()} />
        <div className="flex w-full flex-row justify-end">
          <Pagination count={50} navigate={() => {}} pageNo={3} pageSize={10} />
        </div>
        <Alert
          isOpen={showDeleteAlert}
          message="Are you sure you want to continue? This cannot be undone."
          title="Delete Contact"
          onClose={() => setShowDeleteAlert(false)}
          onSubmit={() => handleDelete()}
        />
        <CreatePane
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
      </Container>
    </>
  );
};

export default Contacts;
