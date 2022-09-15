import dayjs from "lib/dayjs";

export const calculateCreatedAgo = dateTime => dayjs(dateTime).fromNow();

export const formatDateToWeekDay = dateTime =>
  dayjs(dateTime).format("dddd, hh:mmA");
