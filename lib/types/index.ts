/**
 * Represents the inputs for a form submission.
 */

export type Inputs = {
  name: string;
  email: string;
  message: string;
};

export type InputsFocusState = {
  name: boolean;
  email: boolean;
  message: boolean;
  [key: string]: boolean;
};
