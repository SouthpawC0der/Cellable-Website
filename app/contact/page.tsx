"use client";

import { useState } from "react";

const SUBJECTS = [
  "I can't access my account",
  "Technical issue",
  "General inquiry",
  "Feedback or suggestion",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EMPTY: FormState = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!form.subject) e.subject = "Please select a subject.";
    if (!form.message.trim()) e.message = "Message is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // TODO: wire up to your email service (e.g. Resend, SendGrid, Formspree)
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  function field(id: keyof FormState) {
    return {
      id,
      value: form[id],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm((f) => ({ ...f, [id]: e.target.value })),
    };
  }

  const inputBase =
    "w-full rounded-xl border px-4 py-3 text-sky-900 placeholder-sky-300 text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400";
  const inputNormal = `${inputBase} bg-white border-sky-200`;
  const inputError = `${inputBase} bg-white border-red-300 focus:ring-red-300 focus:border-red-300`;

  return (
    <div className="pt-16 bg-sky-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-sky-700 to-sky-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sky-300 text-sm font-medium mb-3">Support</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-sky-200 text-base max-w-xl">
            Having trouble accessing Cellable or need help? Fill out the form below and our team
            will get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {submitted ? (
          <SuccessCard onReset={() => { setSubmitted(false); setForm(EMPTY); }} />
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-8 sm:p-12">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">

              {/* Name */}
              <Field label="Full Name" htmlFor="name" error={errors.name}>
                <input
                  {...field("name")}
                  type="text"
                  placeholder="Jane Smith"
                  autoComplete="name"
                  className={errors.name ? inputError : inputNormal}
                />
              </Field>

              {/* Email */}
              <Field label="Email Address" htmlFor="email" error={errors.email}>
                <input
                  {...field("email")}
                  type="email"
                  placeholder="jane@example.com"
                  autoComplete="email"
                  className={errors.email ? inputError : inputNormal}
                />
              </Field>

              {/* Subject */}
              <Field label="Subject" htmlFor="subject" error={errors.subject}>
                <select
                  {...field("subject")}
                  className={`${errors.subject ? inputError : inputNormal} cursor-pointer`}
                >
                  <option value="">Select a topic…</option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>

              {/* Message */}
              <Field label="Message" htmlFor="message" error={errors.message}>
                <textarea
                  {...field("message")}
                  rows={5}
                  placeholder="Describe your issue or question in as much detail as possible…"
                  className={`${errors.message ? inputError : inputNormal} resize-none`}
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-600 hover:bg-sky-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 cursor-pointer text-sm"
              >
                {loading ? "Sending…" : "Send Message"}
              </button>

              <p className="text-sky-400 text-xs text-center">
                We typically respond within 1–2 business days.
              </p>
            </form>
          </div>
        )}

        {/* Info cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InfoCard
            icon={
              <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            title="Email Support"
            body="support@cellable.app"
          />
          <InfoCard
            icon={
              <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Response Time"
            body="1–2 business days"
          />
        </div>
      </div>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-sky-800 mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function InfoCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-sky-100 p-6 flex items-start gap-4 shadow-sm">
      <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-sky-900 text-sm">{title}</p>
        <p className="text-sky-600 text-sm mt-0.5">{body}</p>
      </div>
    </div>
  );
}

function SuccessCard({ onReset }: { onReset: () => void }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-12 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-sky-900 mb-3">Message Sent!</h2>
      <p className="text-sky-600 leading-relaxed max-w-sm mx-auto mb-8">
        Thanks for reaching out. Our support team will review your message and get back to you
        within 1–2 business days.
      </p>
      <button
        onClick={onReset}
        className="text-sky-600 hover:text-sky-800 text-sm font-medium underline underline-offset-2 transition-colors duration-200 cursor-pointer"
      >
        Send another message
      </button>
    </div>
  );
}
