import dayjs from "lib/dayjs";

export const calculateCreatedAgo = dateTime => dayjs(dateTime).fromNow();

export const formatDateToWeekDay = dateTime =>
  dayjs(dateTime).format("dddd, hh:mmA");

export const convertNoteToFormFormat = note => ({
  title: note.title,
  description: note.description,
  contact: null,
  tags: [],
});
