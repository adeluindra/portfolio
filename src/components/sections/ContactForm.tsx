"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CONTACT_EMAIL } from "@/data/socials";

type Status = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Accessible contact form with client-side validation and clear
 * loading/success/error states (docs/ai-rules.md → Forms).
 *
 * Submission opens the user's email client via a mailto: link (no backend).
 * Swap `handleSubmit` for an API/route handler when a backend is available.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(data: {
    name: string;
    email: string;
    message: string;
  }): FormErrors {
    const next: FormErrors = {};
    if (!data.name.trim()) next.name = "Please enter your name.";
    if (!data.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!EMAIL_REGEX.test(data.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!data.message.trim()) {
      next.message = "Please enter a message.";
    } else if (data.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const validationErrors = validate(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    try {
      const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
          Name
        </label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <p id="name-error" className="mt-1.5 text-sm text-red-500">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? (
          <p id="email-error" className="mt-1.5 text-sm text-red-500">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-red-500">
            {errors.message}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            <Send aria-hidden="true" />
            Send Message
          </>
        )}
      </Button>

      {/* Status messages (announced to assistive tech) */}
      <div aria-live="polite">
        {status === "success" ? (
          <p className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
            <CheckCircle2 aria-hidden="true" className="size-4" />
            Your email client should open. Thanks for reaching out!
          </p>
        ) : null}
        {status === "error" ? (
          <p className="flex items-center gap-2 text-sm text-red-500">
            <AlertCircle aria-hidden="true" className="size-4" />
            Something went wrong. Please email me directly at {CONTACT_EMAIL}.
          </p>
        ) : null}
      </div>
    </form>
  );
}
