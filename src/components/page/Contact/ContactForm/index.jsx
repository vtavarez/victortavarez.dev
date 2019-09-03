import React from 'react'
import { Form, withFormik, FastField, ErrorMessage } from 'formik'
import Recaptcha from 'react-google-recaptcha'
import * as Yup from 'yup'
import { Button, Input } from 'Common'
import { recaptcha_key } from 'Data'
import { Error, Center, InputField } from './styles'

const ContactForm = ({
	setFieldValue,
	isSubmitting,
	values,
	errors,
	touched,
}) => (
	<Form
		name="victor-portfolio"
		method="post"
		data-netlify="true"
		data-netlify-recaptcha="true"
		data-netlify-honeypot="bot-field"
	>
		<InputField>
			<Input
				as={FastField}
				type="text"
				name="name"
				component="input"
				aria-label="name"
				placeholder="Your name"
				error={touched.name && errors.name}
			/>
			<ErrorMessage component={Error} name="name" />
		</InputField>
		<InputField>
			<Input
				as={FastField}
				type="text"
				name="digits"
				component="input"
				aria-label="phone number"
				placeholder="Your digits"
				error={touched.digits && errors.digits}
			/>
			<ErrorMessage component={Error} name="digits" />
		</InputField>
		<InputField>
			<Input
				id="email"
				aria-label="email"
				component="input"
				as={FastField}
				type="email"
				name="email"
				placeholder="Your email address"
				error={touched.email && errors.email}
			/>
			<ErrorMessage component={Error} name="email" />
		</InputField>
		<InputField>
			<Input
				as={FastField}
				component="textarea"
				aria-label="message"
				id="message"
				rows="8"
				type="text"
				name="message"
				placeholder="Name of project or brief description"
				error={touched.message && errors.message}
			/>
			<ErrorMessage component={Error} name="message" />
		</InputField>
		<InputField>
			<Input
				as={FastField}
				type="text"
				name="budget"
				component="input"
				aria-label="Project budget"
				placeholder="Project budget"
				error={touched.budget && errors.budget}
			/>
			<ErrorMessage component={Error} name="budget" />
		</InputField>
		<InputField>
			<Input
				as={FastField}
				type="text"
				name="turnaround"
				component="input"
				aria-label="Project turnaround time"
				placeholder="Project turnaround time"
				error={touched.turnaround && errors.turnaround}
			/>
			<ErrorMessage component={Error} name="turnaround" />
		</InputField>
		{values.name &&
			values.digits &&
			values.email &&
			values.message &&
			values.budget &&
			values.turnaround && (
			<InputField>
				<FastField
					component={Recaptcha}
					sitekey={recaptcha_key}
					name="recaptcha"
					onChange={value => setFieldValue('recaptcha', value)}
				/>
				<ErrorMessage component={Error} name="recaptcha" />
			</InputField>
		)}
		{values.success && (
			<InputField>
				<Center>
					<h4>
						Your message has been successfully sent, I will get back to you
						ASAP!
					</h4>
				</Center>
			</InputField>
		)}
		<Center>
			<Button type="submit" disabled={isSubmitting}>
				Lets do this!
			</Button>
		</Center>
	</Form>
)

export default withFormik({
	mapPropsToValues: () => ({
		name: '',
		digits: '',
		email: '',
		message: '',
		budget: '',
		turnaround: '',
		recaptcha: '',
		success: false,
	}),
	validationSchema: () =>
		Yup.object().shape({
			name: Yup.string().required(
				"Whoops! Pretty sure I'll need your name. 😅"
			),
			digits: Yup.string().required(
				"Whoops! Pretty sure I'll need your name. 😅"
			),
			email: Yup.string()
				.email()
				.required('Pssst.. I think you forgot somthing! ☝️'),
			message: Yup.string().required("You sure you've got nothing to say? 🙂"),
			budget: Yup.string().required(
				"Don't worry doesn't need to be an exact number! 😋"
			),
			turnaround: Yup.string().required(
				"As much as I'd looove a project with no deadline 😂"
			),
			recaptcha: Yup.string().required('Robots are not welcome yet!'),
		}),
	handleSubmit: async (
		{ name, digits, email, message, budget, turnaround, recaptcha },
		{ setSubmitting, resetForm, setFieldValue }
	) => {
		try {
			const encode = data => {
				return Object.keys(data)
					.map(
						key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
					)
					.join('&')
			}
			await fetch('/?no-cache=1', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: encode({
					'form-name': 'victor-portfolio',
					name,
					digits,
					email,
					message,
					budget,
					turnaround,
					'g-recaptcha-response': recaptcha,
				}),
			})
			await setSubmitting(false)
			await setFieldValue('success', true)
			setTimeout(() => resetForm(), 2000)
		} catch (err) {
			setSubmitting(false)
			setFieldValue('success', false)
			alert('Something went wrong, please try again!') // eslint-disable-line
		}
	},
})(ContactForm)
