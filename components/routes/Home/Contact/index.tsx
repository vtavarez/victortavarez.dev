import { ReCaptchaProvider } from '@/lib/context/recaptcha';
import { ValueProp, EyebrowText, ContactForm } from '@/components/theme';

export function Contact() {
	return (
		<section>
			<EyebrowText>Lets connect</EyebrowText>
			<ValueProp
				className="h-[368px] py-24 text-2xl xl:pb-8 xl:pt-0"
				number="004"
			>
				If you would like to get in touch, please feel free to reach out.
			</ValueProp>
			<ReCaptchaProvider>
				<div className="flex items-center justify-center">
					<ContactForm />
				</div>
			</ReCaptchaProvider>
		</section>
	);
}
