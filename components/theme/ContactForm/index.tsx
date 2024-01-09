"use client";
import { useState } from "react";
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

export function ContactForm() {
  const [errors, setErrors] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <Form
      className="lg:w-1/2"
      onSubmit={handleSubmit}
    >
      <FieldGroup className="relative mb-12 text-black">
        <Label
          className="absolute inset-0 translate-x-3 translate-y-2 font-medium text-black"
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
        />
        {errors && <ErrorMessage>This field is required</ErrorMessage>}
      </FieldGroup>
      <FieldGroup className="relative mb-12 text-black">
        <Label
          className="absolute inset-0 translate-x-3 translate-y-2 font-medium text-black"
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
        />
        {errors && <ErrorMessage>This field is required</ErrorMessage>}
      </FieldGroup>
      <FieldGroup className="group relative mb-12 text-black">
        <Label
          className="absolute inset-0 translate-x-3 translate-y-2 font-medium text-black"
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
        />
        {errors && <ErrorMessage>This field is required</ErrorMessage>}
      </FieldGroup>
      <SubmitButton>Send</SubmitButton>
    </Form>
  );
}
