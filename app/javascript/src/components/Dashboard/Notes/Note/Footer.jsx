import React from "react";

import { Clock } from "neetoicons";
import { Button, Avatar, Typography } from "neetoui";

import { formatDateToWeekDay, calculateCreatedAgo } from "../utils";

const Footer = ({ note }) => (
  <div className="flex items-center justify-between">
    <Button className="mx-2 mt-3" label="Getting Started" style="secondary" />
    <span className="flex justify-between">
      <Clock className="mx-1 mt-3" />
      <Typography className="mx-1 mt-4" style="body3">
        Created {calculateCreatedAgo(note.created_at)} -{" "}
        {formatDateToWeekDay(note.created_at)}
      </Typography>
      <Avatar
        className="mx-1 mt-3"
        size="small"
        user={{
          imageUrl: "https://i.pravatar.cc/300",
        }}
      />
    </span>
  </div>
);

export default Footer;
