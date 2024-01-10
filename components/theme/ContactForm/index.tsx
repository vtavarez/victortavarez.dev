"use client";
import React, { useState } from "react";
import {
  Form,
  FieldGroup,
  Label,
  Field,
  TextArea,
  ErrorMessage,
  SubmitButton,
} from "@/components/ui/";
import { send } from "@/actions/email";

type InputsFocusState = {
  name: boolean;
  email: boolean;
  message: boolean;
  [key: string]: boolean;
};

export function ContactForm() {
  const [errors, setErrors] = useState(false);
  const [inputsFocusState, setInputsFocusState] = useState<InputsFocusState>({
    name: false,
    email: false,
    message: false,
  });

  function handleFocusEvent(
    e:
      | React.FocusEvent<HTMLTextAreaElement>
      | React.FocusEvent<HTMLInputElement>,
  ) {
    const { name } = e.currentTarget;
    setInputsFocusState({
      ...inputsFocusState,
      [name]: !inputsFocusState[name],
    });
  }

  return (
    <Form
      className="lg:w-1/2"
      action={send}
    >
      <FieldGroup className="relative pt-12">
        <Label
          className={`absolute inset-0 transition-all duration-300 ${
            inputsFocusState.name
              ? "translate-x-0 translate-y-4 text-base"
              : "translate-x-3 translate-y-14 text-lg text-black"
          } h-fit w-fit font-medium mix-blend-normal`}
          htmlFor="name"
        >
          Name
        </Label>
        <Field
          className="relative rounded-md bg-transparent after:absolute after:inset-0 after:z-[-1] after:rounded-md after:border-4 after:border-primary after:bg-white after:shadow-project after:content-[''] focus-within:shadow-outline"
          id="name"
          type="text"
          name="name"
          required
          aria-required
          onFocus={handleFocusEvent}
          onBlur={handleFocusEvent}
        />
        {errors && <ErrorMessage>This field is required</ErrorMessage>}
      </FieldGroup>
      <FieldGroup className="relative pt-12">
        <Label
          className={`absolute inset-0 transition-all duration-300 ${
            inputsFocusState.email
              ? "translate-x-0 translate-y-4 text-base"
              : "translate-x-3 translate-y-14 text-lg text-black"
          } h-fit w-fit font-medium mix-blend-normal`}
          htmlFor="email"
        >
          Email
        </Label>
        <Field
          className="relative rounded-md bg-transparent after:absolute after:inset-0 after:z-[-1] after:rounded-md after:border-4 after:border-primary after:bg-white after:shadow-project after:content-[''] focus-within:shadow-outline"
          id="email"
          type="email"
          name="email"
          required
          aria-required
          onFocus={handleFocusEvent}
          onBlur={handleFocusEvent}
        />
        {errors && <ErrorMessage>This field is required</ErrorMessage>}
      </FieldGroup>
      <FieldGroup className="relative mb-12 pt-12">
        <Label
          className={`absolute inset-0 transition-all duration-300 ${
            inputsFocusState.message
              ? "translate-x-0 translate-y-4 text-base"
              : "translate-x-3 translate-y-14 text-lg text-black"
          } h-fit w-fit font-medium mix-blend-normal`}
          htmlFor="message"
        >
          Message
        </Label>
        <TextArea
          className="relative rounded-md bg-transparent after:absolute after:inset-0 after:z-[-1] after:rounded-md after:border-4 after:border-primary after:bg-white after:shadow-project after:content-[''] focus-within:shadow-outline"
          id="message"
          name="message"
          rows={5}
          required
          aria-required
          onFocus={handleFocusEvent}
          onBlur={handleFocusEvent}
        />
        {errors && <ErrorMessage>This field is required</ErrorMessage>}
      </FieldGroup>
      <SubmitButton>Send</SubmitButton>
    </Form>
  );
}
