"use client";

import { ArrowRight, Send } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "company", label: "Company", type: "text", placeholder: "Company name" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+91" },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com" },
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-semibold text-navy dark:text-white">
            {field.label}
            <input
              required
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              className="h-12 rounded-md border border-border bg-background px-4 text-sm font-medium outline-none transition placeholder:text-muted-foreground focus:border-corporate focus:ring-2 focus:ring-corporate/20"
            />
          </label>
        ))}
      </div>
      <label className="grid gap-2 text-sm font-semibold text-navy dark:text-white">
        Workforce Requirement
        <textarea
          required
          name="requirement"
          rows={5}
          placeholder="Share role type, headcount, location, and timeline."
          className="resize-none rounded-md border border-border bg-background px-4 py-3 text-sm font-medium outline-none transition placeholder:text-muted-foreground focus:border-corporate focus:ring-2 focus:ring-corporate/20"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg">
          <Send />
          Submit Enquiry
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={`mailto:${site.email}`}>
            Email Directly
            <ArrowRight />
          </a>
        </Button>
      </div>
      <p
        className={cn(
          "min-h-6 text-sm font-semibold text-teal transition-opacity",
          sent ? "opacity-100" : "opacity-0",
        )}
        aria-live="polite"
      >
        Thank you. Your enquiry is ready for follow-up.
      </p>
    </form>
  );
}
