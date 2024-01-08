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

export function Contact() {
  const [errors, setErrors] = useState({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FieldGroup>
        <Label htmlFor="name">Name</Label>
        <Field
          id="name"
          type="text"
          name="name"
          required
          aria-required
        />
        {errors && <ErrorMessage>This field is required</ErrorMessage>}
      </FieldGroup>
      <FieldGroup>
        <Label htmlFor="email">Email</Label>
        <Field
          id="email"
          type="email"
          name="email"
          required
          aria-required
        />
        {errors && <ErrorMessage>This field is required</ErrorMessage>}
      </FieldGroup>
      <FieldGroup>
        <Label htmlFor="message">Message</Label>
        <TextArea
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
