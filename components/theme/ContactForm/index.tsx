'use client';
import React, { useState } from 'react';
import { useFocusedFields } from '@/lib/hooks';
import { useForm, useFormState } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import {
	Form,
	FieldGroup,
	Label,
	Field,
	TextArea,
	ErrorMessage,
	SuccessMessage,
	SubmitButton,
	BouncingLoader,
} from '@/components/ui/';
import type { Inputs, SentMessageType, RecaptchaType } from '@/lib/types';
import { contactSchema } from '@/lib/schema';
import { verify } from '@/app/actions/recaptcha';
import { send } from '@/app/actions/email';

export function ContactForm() {
	const { executeRecaptcha } = useGoogleReCaptcha();

	const { register, handleSubmit, reset, control } = useForm<Inputs>({
		mode: 'onSubmit',
		reValidateMode: 'onSubmit',
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
		resolver: zodResolver(contactSchema),
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
		const token = executeRecaptcha && (await executeRecaptcha('submit'));
		const verified: RecaptchaType = token && (await verify(token));

		if (verified.success) {
			const res: SentMessageType = await send(data);

			'rejected' in res
				? console.error(res.error?.message, 'Response: ' + res.rejected)
				: (setIsSuccess(true),
					setTimeout(() => setIsSuccess(false), 5000),
					reset());
			return;
		}

		return console.error(verified.error);
	}

	return (
		<Form
			className="w-[658px] max-w-full pb-24 pt-8 xl:pb-48 xl:pt-0"
			onSubmit={handleSubmit(onSubmit)}
		>
			<FieldGroup className="relative z-10">
				<Label
					className={`absolute inset-0 transition-all duration-300 ${
						focusedFields?.name || dirtyFields?.name
							? '-translate-x-0 -translate-y-8 text-base'
							: 'translate-x-3 translate-y-2 text-lg'
					} h-fit w-fit transform-gpu font-medium mix-blend-normal will-change-transform`}
					htmlFor="name"
				>
					Name
				</Label>
				<Field
					autoComplete="name"
					className="relative bg-transparent font-medium text-primary after:absolute after:inset-0 after:-z-10 after:border-4 after:border-primary after:bg-background after:shadow-project after:content-[''] focus-within:shadow-outline"
					id="name"
					type="text"
					required
					aria-required
					aria-invalid={Boolean(errors.name?.message)}
					onFocus={handleFocusEvent}
					{...register('name', { onBlur: handleFocusEvent })}
				/>
				{errors.name?.message && (
					<ErrorMessage>{errors.name?.message}</ErrorMessage>
				)}
			</FieldGroup>
			<FieldGroup className="relative z-10 pt-12">
				<Label
					className={`absolute inset-0 transition-all duration-300 ${
						focusedFields?.email || dirtyFields?.email
							? 'translate-x-0 translate-y-4 text-base'
							: 'translate-x-3 translate-y-14 text-lg'
					} h-fit w-fit transform-gpu font-medium mix-blend-normal will-change-transform`}
					htmlFor="email"
				>
					Email
				</Label>
				<Field
					autoComplete="email"
					className="relative bg-transparent font-medium text-primary after:absolute after:inset-0 after:-z-10 after:border-4 after:border-primary after:bg-background after:shadow-project after:content-[''] focus-within:shadow-outline"
					id="email"
					type="email"
					required
					aria-required
					aria-invalid={Boolean(errors.email?.message)}
					onFocus={handleFocusEvent}
					{...register('email', { onBlur: handleFocusEvent })}
				/>
				{errors.email?.message && (
					<ErrorMessage>{errors.email?.message}</ErrorMessage>
				)}
			</FieldGroup>
			<FieldGroup className="relative z-10 mb-12 pt-12">
				<Label
					className={`absolute inset-0 transition-all duration-300 ${
						focusedFields?.message || dirtyFields?.message
							? 'translate-x-0 translate-y-4 text-base'
							: 'translate-x-3 translate-y-14 text-lg'
					} h-fit w-fit transform-gpu font-medium mix-blend-normal will-change-transform`}
					htmlFor="message"
				>
					Message
				</Label>
				<TextArea
					className="relative bg-transparent font-medium text-primary after:absolute after:inset-0 after:-z-10 after:border-4 after:border-primary after:bg-background after:shadow-project after:content-[''] focus-within:shadow-outline"
					id="message"
					rows={8}
					required
					aria-required
					aria-invalid={Boolean(errors.message?.message)}
					onFocus={handleFocusEvent}
					{...register('message', { onBlur: handleFocusEvent })}
				/>
				{errors.message?.message && (
					<ErrorMessage>{errors.message?.message}</ErrorMessage>
				)}
			</FieldGroup>
			<SubmitButton
				disabled={isSubmitting || isValidating}
				aria-disabled={isSubmitting || isValidating}
			>
				{isSubmitting || isValidating ? <BouncingLoader /> : 'Send'}
			</SubmitButton>
			{isSuccess && (
				<SuccessMessage>
					Thanks for reaching out I will be in touch.
				</SuccessMessage>
			)}
		</Form>
	);
}
