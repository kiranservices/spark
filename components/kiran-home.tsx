import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { AnimatedCounter } from "@/components/animated-counter";
import { ContactForm } from "@/components/contact-form";
import { FloatingActions } from "@/components/floating-actions";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  advantages,
  faqs,
  heroStats,
  industries,
  offices,
  process,
  services,
  site,
  trustPoints,
} from "@/lib/site-data";

const heroImage =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2400&q=90";

export function KiranHome() {
  return (
    <>
      <main id="home">
        <Hero />
        <WhoWeAre />
        <Services />
        <Industries />
        <WhyChooseUs />
        <Compliance />
        <Leadership />
        <DeploymentProcess />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-navy pt-24 text-white">
      <Image
        src={heroImage}
        alt="Industrial workforce team reviewing production operations"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/70 to-navy/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.16),transparent_28%)]" />

      <div className="container relative z-10 pb-8 pt-24 sm:pb-10 lg:pt-32">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur">
            <ShieldCheck className="size-4 text-teal" />
            Government Recognized Workforce Partner
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            India's Trusted Workforce Solutions Partner
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Providing skilled, semi-skilled, and unskilled workforce solutions to industries across India with
            complete statutory compliance.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#contact">
                Request Workforce
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}>
                Schedule Consultation
                <Phone />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-3 rounded-lg border border-white/[0.15] bg-white/10 p-3 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="rounded-md border border-white/10 bg-white/[0.08] p-5">
              <p className="text-3xl font-bold sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  const milestones = [
    { year: "2013", label: "Established with a focused manpower deployment model" },
    { year: "Recognition", label: "Government recognized and statutory-process driven" },
    { year: "Today", label: "Serving multi-industry workforce requirements across India" },
  ];

  return (
    <section id="company" className="bg-background py-20 sm:py-24">
      <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionReveal>
          <SectionHeading
            eyebrow="Who We Are"
            title="A workforce partner built for scale, compliance, and operational discipline."
            copy="Kiran Services supplies dependable manpower for industries that cannot afford uncertainty. Since 2013, the company has helped enterprises deploy verified workers across skill levels while maintaining a strong compliance-first operating model."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Established in 2013", "Government recognized", "Labour law compliant", "Multi-industry expertise"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-navy dark:text-white">
                  <CheckCircle2 className="size-5 text-teal" />
                  {item}
                </div>
              ),
            )}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.12} className="relative">
          <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-border sm:block" />
          <div className="grid gap-4">
            {milestones.map((item, index) => (
              <div key={item.year} className="relative rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-corporate text-sm font-black text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-bold text-corporate">{item.year}</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-mist py-20 dark:bg-slate-950 sm:py-24">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Services"
            title="Workforce solutions across every operational layer."
            copy="From general support personnel to senior technical specialists, Kiran Services structures manpower deployment around role clarity, documentation, and client-side continuity."
          />
        </SectionReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <SectionReveal key={service.title} delay={index * 0.05}>
                <Card className="group h-full overflow-hidden transition hover:-translate-y-1 hover:border-corporate/40 hover:shadow-soft">
                  <CardContent className="flex h-full flex-col">
                    <div className="mb-6 flex size-12 items-center justify-center rounded-md bg-corporate/10 text-corporate">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy dark:text-white">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.description}</p>
                    <ul className="mt-6 grid gap-3 text-sm text-navy dark:text-white">
                      {service.capabilities.map((capability) => (
                        <li key={capability} className="flex items-center gap-2">
                          <CheckCircle2 className="size-4 text-teal" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-auto pt-6 text-sm font-bold text-corporate">{service.benefit}</p>
                  </CardContent>
                </Card>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="bg-background py-20 sm:py-24">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Industries Served"
            title="Built for industrial, infrastructure, and service-sector workforce demand."
            copy="Each deployment is shaped around site context, shift discipline, safety expectations, and the pace of client operations."
          />
        </SectionReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <SectionReveal key={industry.title} delay={index * 0.04}>
                <article className="group relative min-h-[310px] overflow-hidden rounded-lg border border-border bg-navy shadow-sm">
                  <Image
                    src={industry.image}
                    alt={`${industry.title} workforce environment`}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/10" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="mb-5 flex size-11 items-center justify-center rounded-md bg-white/[0.12] backdrop-blur">
                      <Icon className="size-5 text-teal" />
                    </div>
                    <h3 className="text-2xl font-bold">{industry.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/75">{industry.description}</p>
                  </div>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-navy py-20 text-white sm:py-24">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The confidence enterprises expect from a workforce partner."
            copy="Kiran Services combines fast deployment capacity with compliance discipline, field coordination, and multi-industry understanding."
            tone="light"
          />
        </SectionReveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-navy p-6 transition hover:bg-slate-900">
                <Icon className="mb-5 size-6 text-teal" />
                <h3 className="text-base font-bold">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Compliance() {
  return (
    <section id="compliance" className="bg-background py-20 sm:py-24">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionReveal>
          <SectionHeading
            eyebrow="Compliance & Trust"
            title="Structured statutory compliance for accountable manpower deployment."
            copy="The company's operating model is designed around documentation, registration, wage compliance, and client-ready workforce records."
          />
          <div className="mt-8 rounded-lg border border-border bg-mist p-6 dark:bg-slate-900">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-md bg-teal text-white">
                <FileText className="size-6" />
              </div>
              <div>
                <p className="font-bold text-navy dark:text-white">100% Statutory Compliance Focus</p>
                <p className="mt-1 text-sm text-muted-foreground">PF, ESI, labour law, and wage compliance support.</p>
              </div>
            </div>
          </div>
        </SectionReveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <SectionReveal key={point.title} delay={index * 0.04}>
                <div className="h-full rounded-lg border border-border bg-card p-6 shadow-sm">
                  <Icon className="mb-6 size-7 text-corporate" />
                  <h3 className="font-bold leading-7 text-navy dark:text-white">{point.title}</h3>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="bg-mist py-20 dark:bg-slate-950 sm:py-24">
      <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionReveal>
          <div className="rounded-lg border border-border bg-navy p-8 text-white shadow-soft sm:p-10">
            <div className="flex size-16 items-center justify-center rounded-md bg-corporate text-2xl font-black">
              KS
            </div>
            <div className="mt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">Managing Partner</p>
              <h3 className="mt-3 text-3xl font-bold leading-tight">Rajoli Sai Saran Reddy</h3>
              <p className="mt-5 leading-8 text-white/70">
                Founder-led workforce management with an emphasis on deployment discipline, compliance, and
                client-side continuity.
              </p>
            </div>
            <div className="mt-10 grid gap-3 border-t border-white/10 pt-6 text-sm font-semibold text-white/80">
              <span>Workforce Deployment</span>
              <span>Educational Administration</span>
              <span>Organizational Leadership</span>
            </div>
          </div>
        </SectionReveal>
        <SectionReveal delay={0.12}>
          <SectionHeading
            eyebrow="Leadership"
            title="Founder-led commitment to disciplined workforce management."
            copy="Rajoli Sai Saran Reddy is a B.Tech graduate and workforce management professional with extensive experience in manpower deployment, educational administration, and organizational leadership."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Award, label: "Executive Oversight" },
              { icon: ClipboardList, label: "Operational Governance" },
              { icon: CalendarCheck, label: "Deployment Discipline" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-lg border border-border bg-card p-5">
                  <Icon className="mb-4 size-6 text-teal" />
                  <p className="text-sm font-bold text-navy dark:text-white">{item.label}</p>
                </div>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function DeploymentProcess() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Deployment Process"
            title="A transparent process from requirement intake to ongoing site support."
            align="center"
          />
        </SectionReveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {process.map((step, index) => (
            <SectionReveal key={step} delay={index * 0.04}>
              <div className="relative h-full rounded-lg border border-border bg-card p-6 shadow-sm">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-corporate">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-bold text-navy dark:text-white">{step}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Clear ownership, documentation, and communication keep workforce movement predictable at every stage.
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-mist py-20 dark:bg-slate-950 sm:py-24">
      <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionReveal>
          <SectionHeading
            eyebrow="Client Testimonials"
            title="Trusted by teams responsible for uptime, compliance, and workforce reliability."
            copy="Representative client feedback placeholders are included for launch and can be replaced with approved testimonials."
          />
        </SectionReveal>
        <SectionReveal delay={0.12}>
          <TestimonialCarousel />
        </SectionReveal>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionReveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers for procurement, HR, and operations teams."
            copy="These launch-ready answers cover common workforce deployment and compliance questions."
          />
        </SectionReveal>
        <SectionReveal delay={0.12}>
          <Accordion type="single" collapsible className="rounded-lg border border-border bg-card px-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionReveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-navy py-20 text-white sm:py-24">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Request workforce deployment support."
            copy="Share your manpower requirement, location, skill mix, and deployment timeline. The team will coordinate next steps."
            tone="light"
          />
        </SectionReveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-5">
            {offices.map((office) => {
              const Icon = office.icon;
              return (
                <div key={office.name} className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
                  <Icon className="mb-5 size-6 text-teal" />
                  <h3 className="font-bold">{office.name}</h3>
                  <address className="mt-3 not-italic leading-7 text-white/70">
                    {office.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              );
            })}
            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <a className="flex items-center gap-3 font-semibold hover:text-teal" href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}>
                  <Phone className="size-5 text-teal" />
                  {site.phonePrimary}
                </a>
                <a className="flex items-center gap-3 font-semibold hover:text-teal" href={`tel:${site.phoneSecondary.replace(/\s/g, "")}`}>
                  <Phone className="size-5 text-teal" />
                  {site.phoneSecondary}
                </a>
                <a className="flex items-center gap-3 font-semibold hover:text-teal sm:col-span-2" href={`mailto:${site.email}`}>
                  <Mail className="size-5 text-teal" />
                  {site.email}
                </a>
              </div>
            </div>
            <div className="flex min-h-[220px] items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/[0.06] p-6 text-center">
              <div>
                <MapPin className="mx-auto mb-4 size-7 text-teal" />
                <p className="font-bold">Google Maps Embed Placeholder</p>
                <p className="mt-2 text-sm text-white/70">Andhra Pradesh and Bengaluru office locations</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white p-6 text-foreground shadow-soft sm:p-8 dark:bg-slate-950">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="container grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md bg-corporate text-base font-black">KS</span>
            <div>
              <p className="font-bold">Kiran Services</p>
              <p className="text-sm text-white/60">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">{site.description}</p>
        </div>
        <FooterColumn title="Quick Links" items={["Company", "Services", "Industries", "Compliance", "Contact"]} />
        <FooterColumn title="Services" items={services.map((service) => service.title)} />
        <div>
          <p className="font-bold">Contact Details</p>
          <div className="mt-5 grid gap-3 text-sm text-white/70">
            <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`} className="hover:text-white">
              {site.phonePrimary}
            </a>
            <a href={`tel:${site.phoneSecondary.replace(/\s/g, "")}`} className="hover:text-white">
              {site.phoneSecondary}
            </a>
            <a href={`mailto:${site.email}`} className="break-words hover:text-white">
              {site.email}
            </a>
          </div>
          <div className="mt-5 flex gap-2">
            {["in", "f", "x"].map((item) => (
              <span key={item} className="flex size-9 items-center justify-center rounded-md border border-white/10 text-xs font-bold">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
        Copyright &copy; {new Date().getFullYear()} Kiran Services. All rights reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-bold">{title}</p>
      <ul className="mt-5 grid gap-3 text-sm text-white/70">
        {items.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
