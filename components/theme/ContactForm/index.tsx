"use client";
import React, { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FieldGroup,
  Label,
  Field,
  TextArea,
  ErrorMessage,
  SuccessMessage,
  SubmitButton,
} from "@/components/ui/";
import { Inputs, InputsFocusState } from "@/lib/types";
import { schema } from "@/lib/utils";
import { send } from "@/actions/email";

export function ContactForm() {
  const { register, handleSubmit, reset, control } = useForm<Inputs>({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(schema()),
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const { dirtyFields, errors, isSubmitting, isValidating } = useFormState({
    control,
  });

  const [focusedFields, setFocusedFields] = useState<InputsFocusState>({
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
    setFocusedFields({
      ...focusedFields,
      [name]: !focusedFields[name],
    });
  }

  async function onSubmit(data: Inputs) {
    const { name, email, message } = data;
    // const res = send.bind(null, data);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
    reset();
  }

  return (
    <Form
      className="my-48 w-full px-6 lg:w-1/2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FieldGroup className="relative pt-12">
        <Label
          className={`absolute inset-0 transition-all duration-300 ${
            dirtyFields?.name || focusedFields?.name
              ? "translate-x-0 translate-y-4 text-base"
              : "translate-x-3 translate-y-14 text-lg text-black"
          } h-fit w-fit font-medium mix-blend-normal`}
          htmlFor="name"
        >
          Name
        </Label>
        <Field
          className="relative rounded-md bg-transparent text-black after:absolute after:inset-0 after:z-[-1] after:rounded-md after:border-4 after:border-primary after:bg-white after:shadow-project after:content-[''] focus-within:shadow-outline"
          id="name"
          type="text"
          required
          aria-required
          onFocus={handleFocusEvent}
          {...register("name", { onBlur: handleFocusEvent })}
        />
        {errors.name?.message && (
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        )}
      </FieldGroup>
      <FieldGroup className="relative pt-12">
        <Label
          className={`absolute inset-0 transition-all duration-300 ${
            dirtyFields?.email || focusedFields?.email
              ? "translate-x-0 translate-y-4 text-base"
              : "translate-x-3 translate-y-14 text-lg text-black"
          } h-fit w-fit font-medium mix-blend-normal`}
          htmlFor="email"
        >
          Email
        </Label>
        <Field
          className="relative rounded-md bg-transparent text-black after:absolute after:inset-0 after:z-[-1] after:rounded-md after:border-4 after:border-primary after:bg-white after:shadow-project after:content-[''] focus-within:shadow-outline"
          id="email"
          type="email"
          required
          aria-required
          onFocus={handleFocusEvent}
          {...register("email", { onBlur: handleFocusEvent })}
        />
        {errors.email?.message && (
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        )}
      </FieldGroup>
      <FieldGroup className="relative mb-12 pt-12">
        <Label
          className={`absolute inset-0 transition-all duration-300 ${
            dirtyFields?.message || focusedFields?.message
              ? "translate-x-0 translate-y-4 text-base"
              : "translate-x-3 translate-y-14 text-lg text-black"
          } h-fit w-fit font-medium mix-blend-normal`}
          htmlFor="message"
        >
          Message
        </Label>
        <TextArea
          className="relative rounded-md bg-transparent text-black after:absolute after:inset-0 after:z-[-1] after:rounded-md after:border-4 after:border-primary after:bg-white after:shadow-project after:content-[''] focus-within:shadow-outline"
          id="message"
          rows={5}
          required
          aria-required
          onFocus={handleFocusEvent}
          {...register("message", { onBlur: handleFocusEvent })}
        />
        {errors.message?.message && (
          <ErrorMessage>{errors.message?.message}</ErrorMessage>
        )}
      </FieldGroup>
      <SubmitButton disabled={isSubmitting || isValidating}>Send</SubmitButton>
      {isSuccess && (
        <SuccessMessage>
          Thanks for reaching out! Will be in touch shortly.
        </SuccessMessage>
      )}
    </Form>
  );
}
