import { ReCaptchaProvider } from "@/lib/providers/recaptcha";
import { ContactForm } from "@/components/theme";

export function LetsConnect() {
  return (
    <ReCaptchaProvider>
      <div className="flex items-center justify-center">
        <ContactForm />
      </div>
    </ReCaptchaProvider>
  );
}
