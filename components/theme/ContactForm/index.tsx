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
import { schema } from "@/lib/utils/";
import { cn } from "@/lib/utils";

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

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
      onSubmit={handleSubmit}
    >
      <FieldGroup className="relative text-black">
        <Label
          className={`absolute inset-0 transition-transform ${
            inputsFocusState.name
              ? "-translate-y-8 translate-x-0 text-base"
              : "translate-x-3 translate-y-2 text-lg"
          } h-fit w-fit font-medium text-black`}
          htmlFor="name"
        >
          Name
        </Label>
        <Field
          className="focus-within:shadow-outline relative rounded-md bg-transparent after:absolute after:inset-0 after:z-[-1] after:rounded-md after:bg-white after:shadow-project after:content-['']"
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
      <FieldGroup className="relative pt-12 text-black">
        <Label
          className={`absolute inset-0 transition-transform ${
            inputsFocusState.email
              ? "translate-x-0 translate-y-4 text-base"
              : "translate-x-3 translate-y-14 text-lg"
          } h-fit w-fit font-medium text-black`}
          htmlFor="email"
        >
          Email
        </Label>
        <Field
          className="focus-within:shadow-outline relative rounded-md bg-transparent after:absolute after:inset-0 after:z-[-1] after:rounded-md after:bg-white after:shadow-project after:content-['']"
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
      <FieldGroup className="group relative mb-12 pt-12 text-black">
        <Label
          className={`absolute inset-0 transition-transform ${
            inputsFocusState.message
              ? "translate-x-0 translate-y-4 text-base"
              : "translate-x-3 translate-y-14 text-lg"
          } h-fit w-fit font-medium text-black`}
          htmlFor="message"
        >
          Message
        </Label>
        <TextArea
          className="focus-within:shadow-outline group relative rounded-md bg-transparent after:absolute after:inset-0 after:z-[-1] after:rounded-md after:bg-white after:shadow-project after:content-['']"
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
