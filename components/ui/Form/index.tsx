import React from "react";
import { cn } from "@/lib/utils";

export function Form({
  children,
  ...props
}: { children: React.ReactNode } & React.FormHTMLAttributes<HTMLFormElement>) {
  return <form {...props}>{children}</form>;
}

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

export function Field({
  className,
  ...props
}: { clssName?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={cn("field", className)}>
      <input
        className="w-full bg-transparent p-3 outline-none"
        {...props}
      />
    </div>
  );
}

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
    <div className={cn("field", className)}>
      <textarea
        className="w-full bg-transparent p-3 outline-none"
        ref={ref}
        {...props}
      />
    </div>
  );
});

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
      className={cn("text-red-500", className)}
      {...props}
    >
      {children}
    </p>
  );
}
