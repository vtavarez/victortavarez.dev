import React from 'react';
import { cn } from '@/lib/utils';

export const Form = React.forwardRef<
  HTMLFormElement,
  { children: React.ReactNode } & React.FormHTMLAttributes<HTMLFormElement>
>(function (
  {
    children,
    ...props
  }: { children: React.ReactNode } & React.FormHTMLAttributes<HTMLFormElement>,
  ref,
) {
  return (
    <form
      ref={ref}
      {...props}
    >
      {children}
    </form>
  );
});

Form.displayName = 'Form';

export function FieldGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}

export function Label({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(className)}
      {...props}
    >
      {children}
    </label>
  );
}

export const Field = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function (
  {
    className,
    ...props
  }: { clssName?: string } & React.InputHTMLAttributes<HTMLInputElement>,
  ref,
) {
  return (
    <div className={cn('field', className)}>
      <input
        className="w-full bg-transparent p-3 outline-none"
        ref={ref}
        {...props}
      />
    </div>
  );
});

Field.displayName = 'Field';

export const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function (
  {
    className,
    ...props
  }: {
    className?: string;
  } & React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  ref,
) {
  return (
    <div className={cn('field', className)}>
      <textarea
        className="w-full bg-transparent p-3 outline-none"
        ref={ref}
        {...props}
      />
    </div>
  );
});

TextArea.displayName = 'TextArea';

export function ErrorMessage({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('mt-5 text-red-500', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function SuccessMessage({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('mt-5 text-primary', className)}
      {...props}
    >
      {children}
    </p>
  );
}
