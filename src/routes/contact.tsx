import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Clock, Mail, Send, ArrowRight, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Bakers Bros" },
      { name: "description", content: "Get in touch with Bakers Bros. Request a quote, place a custom order, or visit our cafe-bakery in Saguramo." },
      { property: "og:title", content: "Contact Us | Bakers Bros" },
      { property: "og:description", content: "Request a free quote or get in touch for custom orders." },
      { property: "og:url", content: "/contact" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-muted/20">
        <div className="section-padding mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold text-foreground md:text-5xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-balance">
            Have a question? Want a custom cake or catering quote? Drop us a message — we reply within 24 hours.
          </p>
          <div className="mt-4">
            <a href="tel:+995511109490" className="btn-primary">
              <Phone className="h-4 w-4" />
              Call Now: +995 511 10 94 90
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                {submitted ? (
                  <div className="py-10 text-center">
                    <CheckCircle className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="mt-4 text-xl font-bold text-card-foreground" style={{ fontFamily: "'Lora', serif" }}>
                      Message Sent!
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", eventType: "", message: "" }); }}
                      className="mt-6 text-sm font-medium text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-card-foreground" style={{ fontFamily: "'Lora', serif" }}>
                      Request a Free Quote
                    </h2>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-card-foreground">
                            Full Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-card-foreground">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                            placeholder="you@email.com"
                          />
                        </div>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-card-foreground">
                            Phone
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                            placeholder="+995 5XX XX XX XX"
                          />
                        </div>
                        <div>
                          <label htmlFor="eventType" className="mb-1.5 block text-sm font-medium text-card-foreground">
                            Event Type
                          </label>
                          <select
                            id="eventType"
                            value={form.eventType}
                            onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                          >
                            <option value="">Select an option</option>
                            <option value="birthday">Birthday Party</option>
                            <option value="wedding">Wedding</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="catering">Catering</option>
                            <option value="custom">Custom Cake</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-card-foreground">
                          Message / Details
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                          placeholder="Tell us about your event, guest count, and what you need..."
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full sm:w-auto">
                        <Send className="h-4 w-4" />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-card-foreground" style={{ fontFamily: "'Lora', serif" }}>
                  Visit Us
                </h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Bakers Bros Cafe-Bakery</p>
                      <p className="text-sm text-muted-foreground">N31, 1li Street<br />Saguramo 3311, Georgia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Opening Hours</p>
                      <p className="text-sm text-muted-foreground">Open Daily<br />Closes 9:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Phone</p>
                      <a href="tel:+995511109490" className="text-sm text-primary hover:underline">+995 511 10 94 90</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Email</p>
                      <a href="mailto:hello@bakersbros.ge" className="text-sm text-primary hover:underline">hello@bakersbros.ge</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-primary/5 p-6">
                <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                  Need Something Fast?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  For same-day orders or quick questions, call us directly. We take custom orders with 48-hour notice.
                </p>
                <a href="tel:+995511109490" className="btn-primary mt-4 inline-flex w-full justify-center">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
