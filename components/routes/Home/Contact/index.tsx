import { ReCaptchaProvider } from '@/lib/context/recaptcha';
import { ValueProp, EyebrowText, ContactForm } from '@/components/theme';

export function Contact() {
	return (
		<section>
			<ValueProp className="h-[44px] py-24 text-2xl lg:h-auto lg:pb-8 lg:pt-0">
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
