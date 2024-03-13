import { ReCaptchaProvider } from '@/lib/context/recaptcha';
import { ValueProp, ContactForm } from '@/components/theme';

export function Contact() {
	return (
		<section>
			<div className="h-[44px] py-24 text-2xl lg:h-auto lg:pb-24 lg:pl-[14rem] lg:pt-0">
				<ValueProp>
					If you would like to get in touch, please feel free to reach out.
				</ValueProp>
			</div>
			<div className="flex items-center justify-center">
				<ReCaptchaProvider>
					<ContactForm />
				</ReCaptchaProvider>
			</div>
		</section>
	);
}
