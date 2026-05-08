"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, UploadCloud } from "lucide-react";
import type { Dictionary } from "@/lib/types";

type Errors = Partial<Record<"fullName" | "contact" | "treatment" | "consent", string>>;

const fieldClass =
  "mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100";

export function ConsultationForm({ dict }: { dict: Dictionary }) {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const fullName = String(formData.get("fullName") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const whatsapp = String(formData.get("whatsapp") ?? "").trim();
    const treatment = String(formData.get("treatment") ?? "").trim();
    const consent = formData.get("consent") === "on";
    const nextErrors: Errors = {};

    if (!fullName) {
      nextErrors.fullName = dict.form.validation.name;
    }

    if (!phone && !whatsapp) {
      nextErrors.contact = dict.form.validation.contact;
    }

    if (!treatment) {
      nextErrors.treatment = dict.form.validation.treatment;
    }

    if (!consent) {
      nextErrors.consent = dict.form.validation.consent;
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      const payload = Object.fromEntries(formData.entries());
      console.info("ARZ Health consultation mock submit", payload);
      setSuccess(true);
      form.reset();
    } else {
      setSuccess(false);
    }
  }

  return (
    <form
      id="consultation"
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
          {dict.form.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950">
          {dict.form.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">{dict.form.description}</p>
      </div>

      {success ? (
        <div
          role="status"
          className="mt-6 flex items-start gap-3 rounded-lg border border-teal-200 bg-teal-50 p-4 text-sm font-semibold text-teal-900"
        >
          <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
          {dict.form.success}
        </div>
      ) : null}

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Field
          label={dict.form.fields.fullName}
          name="fullName"
          placeholder={dict.form.placeholders.fullName}
          error={errors.fullName}
          required
        />
        <Field
          label={dict.form.fields.country}
          name="country"
          placeholder={dict.form.placeholders.country}
        />
        <Field
          label={dict.form.fields.phone}
          name="phone"
          placeholder={dict.form.placeholders.phone}
          error={errors.contact}
          inputMode="tel"
        />
        <Field
          label={dict.form.fields.whatsapp}
          name="whatsapp"
          placeholder={dict.form.placeholders.whatsapp}
          error={errors.contact}
          inputMode="tel"
        />
        <Field
          label={dict.form.fields.email}
          name="email"
          placeholder={dict.form.placeholders.email}
          type="email"
          inputMode="email"
        />
        <div className="block text-sm font-semibold text-slate-800">
          <label htmlFor="treatment">{dict.form.fields.treatment}</label>
          <select
            id="treatment"
            name="treatment"
            className={fieldClass}
            defaultValue=""
            required
            aria-describedby={errors.treatment ? "treatment-error" : undefined}
          >
            <option value="" disabled>
              {dict.form.fields.treatment}
            </option>
            {dict.form.options.treatments.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.treatment ? (
            <ErrorMessage id="treatment-error" message={errors.treatment} />
          ) : null}
        </div>
        <div className="block text-sm font-semibold text-slate-800">
          <label htmlFor="language">{dict.form.fields.language}</label>
          <select
            id="language"
            name="language"
            className={fieldClass}
            defaultValue={dict.form.options.languages[0]}
          >
            {dict.form.options.languages.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <label className="block text-sm font-semibold text-slate-800 md:col-span-2">
          {dict.form.fields.message}
          <textarea
            name="message"
            rows={5}
            placeholder={dict.form.placeholders.message}
            className={fieldClass}
          />
        </label>
        <label className="flex min-h-24 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-5 text-center text-sm font-semibold text-slate-700 md:col-span-2">
          <UploadCloud aria-hidden="true" className="mb-2 h-6 w-6 text-teal-700" />
          {dict.form.fields.photo}
          <input name="photo" type="file" accept="image/*" className="sr-only" />
        </label>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-700">
        <input
          name="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-600"
        />
        <span>{dict.form.fields.consent}</span>
      </label>
      {errors.consent ? <ErrorMessage message={errors.consent} /> : null}

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:w-auto"
      >
        {dict.common.requestConsultation}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  error,
  type = "text",
  inputMode,
  required = false
}: {
  label: string;
  name: string;
  placeholder: string;
  error?: string;
  type?: string;
  inputMode?: "email" | "tel";
  required?: boolean;
}) {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div className="block text-sm font-semibold text-slate-800">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        inputMode={inputMode}
        placeholder={placeholder}
        aria-describedby={errorId}
        className={fieldClass}
      />
      {error ? <ErrorMessage id={errorId} message={error} /> : null}
    </div>
  );
}

function ErrorMessage({ id, message }: { id?: string; message: string }) {
  return (
    <span id={id} className="mt-2 block text-xs font-semibold text-red-600">
      {message}
    </span>
  );
}
