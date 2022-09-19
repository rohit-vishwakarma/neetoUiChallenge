import { buildSelectOptions } from "utils";
import * as yup from "yup";

export const CONTACTS_FROM_INITIAL_VALUES = {
  firstName: "",
  secondName: "",
  email: "",
  role: null,
};

export const CONTACT_DETAILS_DATA = [
  {
    id: 0,
    firstName: "Oliver",
    lastName: "Smith",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
  {
    id: 1,
    firstName: "John",
    lastName: "Carter",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
  {
    id: 2,
    firstName: "Steven",
    lastName: "Strange",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
  {
    id: 3,
    firstName: "Ronald",
    lastName: "Richards",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
  {
    id: 4,
    firstName: "Jacob",
    lastName: "Jones",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
  {
    id: 5,
    firstName: "Ronald",
    lastName: "Richards",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
  {
    id: 6,
    firstName: "Jacob",
    lastName: "Jones",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
  {
    id: 7,
    firstName: "Steven",
    lastName: "Strange",
    email: "albert@borer.com",
    role: "Admin",
    createdAt: "Feb 15, 2021",
  },
];

export const ROLES = buildSelectOptions(["Admin", "Non Admin"]);

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("Title is required"),
  lastName: yup.string().required("Description is required"),
  email: yup
    .string()
    .required("Email address is required.")
    .email("Invalid email address"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES.map(role => role.label)),
      value: yup.string().oneOf(ROLES.map(role => role.value)),
    })
    .required("Role is required."),
});

export const MenuBarBlocks = {
  main: [
    {
      label: "All",
      active: true,
      count: 0,
    },
    {
      label: "Archived",
      active: false,
      count: 0,
    },
    {
      label: "Completed",
      active: false,
      count: 0,
    },
    {
      label: "Phase 2",
      active: false,
      count: 0,
    },
  ],
  segments: [],
  tags: [],
};
