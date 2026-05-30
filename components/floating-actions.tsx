import { MessageCircle, Phone } from "lucide-react";

import { site } from "@/lib/site-data";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Kiran Services on WhatsApp"
        title="WhatsApp"
        className="flex size-12 items-center justify-center rounded-md bg-teal text-white shadow-lg transition hover:-translate-y-1 hover:bg-teal-600"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}
        aria-label="Call Kiran Services"
        title="Call"
        className="flex size-12 items-center justify-center rounded-md bg-navy text-white shadow-lg transition hover:-translate-y-1 hover:bg-corporate dark:bg-white dark:text-navy"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}
