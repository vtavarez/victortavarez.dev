"use client";
import React, { useState } from "react";
import { useFocusedFields } from "@/lib/hooks";
import { useForm, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
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
import type { Inputs, SentMessage, RecaptchaResponse } from "@/lib/types";
import { schema } from "@/lib/utils";
import { verify } from "@/actions/recaptcha";
import { send } from "@/actions/email";

export function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const { register, handleSubmit, reset, control } = useForm<Inputs>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(schema()),
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const { dirtyFields, isSubmitting, errors, isValidating } = useFormState({
    control,
  });

  const { focusedFields, setFocusedFields } = useFocusedFields({
    name: false,
    email: false,
    message: false,
  });

  function handleFocusEvent(
    e:
      | React.FocusEvent<HTMLTextAreaElement>
      | React.FocusEvent<HTMLInputElement>,
  ) {
    setFocusedFields(e.currentTarget);
  }

  async function onSubmit(data: Inputs) {
    const token: string = executeRecaptcha
      ? await executeRecaptcha("submit")
      : "";
    const verified: RecaptchaResponse = token ? await verify(token) : {};

    if (verified?.success) {
      const res: Error | SentMessage = await send(data);

      res?.accepted.length > 0
        ? (setIsSuccess(true),
          setTimeout(() => setIsSuccess(false), 5000),
          reset())
        : console.error(res);
      return;
    }

    console.error(verified.error);
  }

  return (
    <Form
      className="w-full px-6 pb-24 pt-16 lg:w-1/2 xl:py-48"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FieldGroup className="relative pt-12">
        <Label
          className={`absolute inset-0 transition-all duration-300 ${
            focusedFields?.name || dirtyFields?.name
              ? "translate-x-0 translate-y-4 text-base"
              : "translate-x-3 translate-y-14 text-lg text-black"
          } h-fit w-fit font-medium mix-blend-normal`}
          htmlFor="name"
        >
          Name
        </Label>
        <Field
          className="relative bg-transparent text-black after:absolute after:inset-0 after:z-[-1] after:border-4 after:border-primary after:bg-white after:shadow-project after:content-[''] focus-within:shadow-outline"
          id="name"
          type="text"
          required
          aria-required
          aria-invalid={Boolean(errors.name?.message)}
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
            focusedFields?.email || dirtyFields?.email
              ? "translate-x-0 translate-y-4 text-base"
              : "translate-x-3 translate-y-14 text-lg text-black"
          } h-fit w-fit font-medium mix-blend-normal`}
          htmlFor="email"
        >
          Email
        </Label>
        <Field
          className="relative bg-transparent text-black after:absolute after:inset-0 after:z-[-1] after:border-4 after:border-primary after:bg-white after:shadow-project after:content-[''] focus-within:shadow-outline"
          id="email"
          type="email"
          required
          aria-required
          aria-invalid={Boolean(errors.email?.message)}
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
            focusedFields?.message || dirtyFields?.message
              ? "translate-x-0 translate-y-4 text-base"
              : "translate-x-3 translate-y-14 text-lg text-black"
          } h-fit w-fit font-medium mix-blend-normal`}
          htmlFor="message"
        >
          Message
        </Label>
        <TextArea
          className="relative bg-transparent text-black after:absolute after:inset-0 after:z-[-1] after:border-4 after:border-primary after:bg-white after:shadow-project after:content-[''] focus-within:shadow-outline"
          id="message"
          rows={5}
          required
          aria-required
          aria-invalid={Boolean(errors.message?.message)}
          onFocus={handleFocusEvent}
          {...register("message", { onBlur: handleFocusEvent })}
        />
        {errors.message?.message && (
          <ErrorMessage>{errors.message?.message}</ErrorMessage>
        )}
      </FieldGroup>
      <SubmitButton
        disabled={isSubmitting || isValidating}
        aria-disabled={isSubmitting || isValidating}
      >
        Send
      </SubmitButton>
      {isSuccess && (
        <SuccessMessage>
          Thanks for reaching out! Will be in touch shortly.
        </SuccessMessage>
      )}
    </Form>
  );
}
