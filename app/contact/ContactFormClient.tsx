"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { inquiryTypes, preferredContactMethods } from "@/data/inquiryTypes";
import { submitContactForm, type ContactFormValues } from "@/lib/submitContactForm";

type Step = "form" | "confirm" | "complete";

const initialValues: ContactFormValues = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  inquiryType: "",
  message: "",
  preferredContact: preferredContactMethods[0],
  agree: false,
};

type Errors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactFormValues): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) errors.name = "お名前をご入力ください。";
  if (!values.email.trim()) {
    errors.email = "メールアドレスをご入力ください。";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "メールアドレスの形式が正しくありません。";
  }
  if (values.phone.trim() && !/^[0-9\-()+ ]{9,}$/.test(values.phone.trim())) {
    errors.phone = "電話番号の形式が正しくありません。";
  }
  if (!values.inquiryType) errors.inquiryType = "お問い合わせ種別を選択してください。";
  if (!values.message.trim()) {
    errors.message = "お問い合わせ内容をご入力ください。";
  } else if (values.message.trim().length < 10) {
    errors.message = "お問い合わせ内容は10文字以上でご入力ください。";
  }
  if (!values.agree) errors.agree = "個人情報の取り扱いについて同意してください。";

  return errors;
}

export default function ContactFormClient() {
  const [step, setStep] = useState<Step>("form");
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleConfirm(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setStep("confirm");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    try {
      await submitContactForm(values);
      setStep("complete");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (step === "complete") {
    return (
      <div className="text-center py-10">
        <CheckCircle2 size={48} className="text-navy mx-auto mb-4" aria-hidden />
        <h2 className="text-xl md:text-2xl font-bold text-charcoal-dark mb-3">お問い合わせを受け付けました</h2>
        <p className="text-base md:text-lg text-charcoal-light leading-loose mb-8">
          お問い合わせいただき、誠にありがとうございます。
          <br />
          内容を確認のうえ、担当者より折り返しご連絡いたします。
        </p>
        <Link
          href="/"
          className="inline-flex items-center min-h-[52px] px-8 rounded-btn bg-navy text-white font-semibold text-base hover:bg-navy-light hover:-translate-y-0.5 transition-all"
        >
          トップページに戻る
        </Link>
      </div>
    );
  }

  if (step === "confirm") {
    return (
      <div>
        <h2 className="text-lg font-bold text-charcoal-dark mb-6">入力内容のご確認</h2>
        <dl className="divide-y divide-black/10 border-t border-b border-black/10 mb-8">
          <ConfirmRow label="お名前" value={values.name} />
          <ConfirmRow label="会社名" value={values.companyName || "（未入力）"} />
          <ConfirmRow label="メールアドレス" value={values.email} />
          <ConfirmRow label="電話番号" value={values.phone || "（未入力）"} />
          <ConfirmRow label="お問い合わせ種別" value={values.inquiryType} />
          <ConfirmRow label="お問い合わせ内容" value={values.message} multiline />
          <ConfirmRow label="希望する連絡方法" value={values.preferredContact} />
        </dl>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => setStep("form")}
            className="min-h-[52px] flex-1 rounded-btn border border-navy text-navy font-semibold text-base hover:bg-navy/5 transition-colors"
          >
            内容を修正する
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="min-h-[52px] flex-1 rounded-btn bg-navy text-white font-semibold text-base hover:bg-navy-light hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {isSubmitting ? "送信中..." : "この内容で送信する"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleConfirm} noValidate>
      <div className="space-y-6">
        <Field label="お名前" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={inputClass(Boolean(errors.name))}
            autoComplete="name"
          />
        </Field>

        <Field label="会社名" htmlFor="companyName">
          <input
            id="companyName"
            type="text"
            value={values.companyName}
            onChange={(e) => updateField("companyName", e.target.value)}
            className={inputClass(false)}
            autoComplete="organization"
            placeholder="法人のお客様のみご入力ください"
          />
        </Field>

        <Field label="メールアドレス" htmlFor="email" required error={errors.email}>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass(Boolean(errors.email))}
            autoComplete="email"
          />
        </Field>

        <Field label="電話番号" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClass(Boolean(errors.phone))}
            autoComplete="tel"
            placeholder="例：00-0000-0000"
          />
        </Field>

        <Field label="お問い合わせ種別" htmlFor="inquiryType" required error={errors.inquiryType}>
          <select
            id="inquiryType"
            value={values.inquiryType}
            onChange={(e) => updateField("inquiryType", e.target.value)}
            className={inputClass(Boolean(errors.inquiryType))}
          >
            <option value="">選択してください</option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field label="お問い合わせ内容" htmlFor="message" required error={errors.message}>
          <textarea
            id="message"
            value={values.message}
            onChange={(e) => updateField("message", e.target.value)}
            rows={6}
            className={inputClass(Boolean(errors.message))}
          />
        </Field>

        <fieldset>
          <legend className="text-sm font-semibold text-charcoal-dark mb-2">
            希望する連絡方法 <span className="text-red-600">必須</span>
          </legend>
          <div className="flex flex-wrap gap-4">
            {preferredContactMethods.map((method) => (
              <label key={method} className="flex items-center gap-2 text-sm text-charcoal-dark min-h-[44px]">
                <input
                  type="radio"
                  name="preferredContact"
                  value={method}
                  checked={values.preferredContact === method}
                  onChange={() => updateField("preferredContact", method)}
                  className="w-4 h-4"
                />
                {method}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label className="flex items-start gap-3 text-sm text-charcoal-dark">
            <input
              type="checkbox"
              checked={values.agree}
              onChange={(e) => updateField("agree", e.target.checked)}
              className="w-5 h-5 mt-0.5 shrink-0"
              aria-invalid={Boolean(errors.agree)}
              aria-describedby={errors.agree ? "agree-error" : undefined}
            />
            <span>
              <Link href="/privacy" className="text-navy underline">
                個人情報の取り扱い
              </Link>
              について同意のうえ、お問い合わせください。
            </span>
          </label>
          {errors.agree && (
            <p id="agree-error" className="text-xs text-red-600 mt-1.5">
              {errors.agree}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-10 w-full sm:w-auto min-h-[52px] px-10 rounded-btn bg-navy text-white font-semibold text-base hover:bg-navy-light hover:-translate-y-0.5 transition-all"
      >
        入力内容を確認する
      </button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full min-h-[52px] rounded-btn border px-4 py-2.5 text-base text-charcoal-dark bg-white focus:outline-none focus:ring-2 focus:ring-navy/40 ${
    hasError ? "border-red-500" : "border-black/15"
  }`;
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-charcoal-dark mb-1.5">
        {label} {required && <span className="text-red-600 font-normal text-xs align-middle">必須</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-600 mt-1.5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function ConfirmRow({ label, value, multiline }: { label: string; value: string; multiline?: boolean }) {
  return (
    <div className="grid sm:grid-cols-3 gap-2 sm:gap-4 py-4">
      <dt className="text-sm font-semibold text-charcoal-dark">{label}</dt>
      <dd className={`text-sm text-charcoal-light sm:col-span-2 ${multiline ? "whitespace-pre-wrap" : ""}`}>{value}</dd>
    </div>
  );
}
