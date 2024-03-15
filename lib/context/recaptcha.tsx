'use client';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
	return (
		<GoogleReCaptchaProvider
			reCaptchaKey="6LdpWE8pAAAAAFOiaw3g6Pia4mT1pHtfWpHlePIi"
			scriptProps={{
				async: false,
				defer: true,
				appendTo: 'head',
				nonce: undefined,
			}}
		>
			{children}
		</GoogleReCaptchaProvider>
	);
}
