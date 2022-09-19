import { buildSelectOptions } from "utils";
import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  contact: null,
  tag: "",
};

export const ASSIGNED_CONTACT = buildSelectOptions(["Admin", "Non Admin"]);

export const TAGS = buildSelectOptions([
  "Getting Started",
  "Meeting",
  "Learning",
  "Onboarding",
  "Leaves and Hoildays",
]);

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required."),
  description: yup.string().required("Description is required."),
  contact: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ASSIGNED_CONTACT.map(contact => contact.label)),
      value: yup.string().oneOf(ASSIGNED_CONTACT.map(contact => contact.value)),
    })
    .required("Assigned contact is required."),
  tag: yup
    .array(
      yup
        .object()
        .nullable()
        .shape({
          label: yup.string().oneOf(TAGS.map(tag => tag.label)),
          value: yup.number().oneOf(TAGS.map(tag => tag.value)),
        })
    )
    .min(1, "Tag is required")
    .required("Tag is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const MenuBarBlocks = {
  main: [
    {
      label: "All",
      count: 80,
      active: true,
    },
    {
      label: "Users",
      count: 60,
      active: false,
    },
    {
      label: "Labels",
      count: 60,
      active: false,
    },
    {
      label: "Visitors",
      count: 40,
      active: false,
    },
  ],
  segments: [
    {
      label: "Europe",
      count: 80,
    },
    {
      label: "Middle-East",
      count: 60,
    },
    {
      label: "Asia",
      count: 60,
    },
  ],
  tags: [
    {
      label: "Getting Started",
      count: 80,
    },
    {
      label: "Learning",
      count: 60,
    },
    {
      label: "Meeting",
      count: 60,
    },
  ],
};
