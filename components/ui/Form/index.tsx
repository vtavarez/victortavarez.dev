export function Form({
  children,
  ...props
}: { children: React.ReactNode } & React.FormHTMLAttributes<HTMLFormElement>) {
  return <form {...props}>{children}</form>;
}

export function FieldGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col space-y-4">{children}</div>;
}

export function Label({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props}>{children}</label>;
}

export function Field(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="field">
      <input {...props} />
    </div>
  );
}

export function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>,
) {
  return (
    <div className="field">
      <textarea {...props} />
    </div>
  );
}

export function ErrorMessage({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className="text-red-500"
      {...props}
    >
      {children}
    </p>
  );
}
