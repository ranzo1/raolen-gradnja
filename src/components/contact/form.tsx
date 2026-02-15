"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";
import { useTranslations, useLocale } from "next-intl";
import { createValidationSchema } from "@/utils/validations";
import Logo from "@/src/components/Logo";

type FormValues = { name: string; email: string; message: string };

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const t = useTranslations("Footer");
  const locale = useLocale();
  const isRussian = locale === "ru";
  const validationSchema = createValidationSchema(t);

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (b: boolean) => void; resetForm: () => void },
  ) => {
    try {
      setIsLoading(true);
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      resetForm();
    } catch (error) {
      // log or surface error
    } finally {
      setSubmitting(false);
      toast.success("Form submitted successfully!");
      setShowConfetti(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="w-full max-w-3xl mx-auto">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8 space-y-5">
              {/* Header */}
              <div className="space-y-1">
                {/* logo & text */}
                <Logo width={120} height={120} />
                <h2
                  className={
                    isRussian
                      ? "text-lg lg:text-xl font-semibold text-black tracking-tight"
                      : "text-xl font-semibold text-black tracking-tight"
                  }
                >
                  {t("title")}
                </h2>
                <p
                  className={
                    isRussian
                      ? "text-xs lg:text-sm text-gray-500"
                      : "text-sm text-gray-500"
                  }
                >
                  {t("subTitle")}
                </p>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className={
                    isRussian
                      ? "text-xs lg:text-sm font-medium text-black"
                      : "text-sm font-medium text-black"
                  }
                >
                  {t("name")}
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full text-black placeholder:text-gray-400 border border-gray-300 rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-4 focus:ring-gold/30 focus:border-gold transition-[box-shadow,border-color] duration-200"
                />
                <ErrorMessage
                  name="name"
                  render={(msg) => (
                    <div className="text-red text-xs">{msg}</div>
                  )}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className={
                    isRussian
                      ? "text-xs lg:text-sm font-medium text-black"
                      : "text-sm font-medium text-black"
                  }
                >
                  {t("email")}
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full text-black placeholder:text-gray-400 border border-gray-300 rounded-md px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-4 focus:ring-gold/30 focus:border-gold transition-[box-shadow,border-color] duration-200"
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => (
                    <div className="text-red text-xs">{msg}</div>
                  )}
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className={
                    isRussian
                      ? "text-xs lg:text-sm font-medium text-black"
                      : "text-sm font-medium text-black"
                  }
                >
                  {t("message")}
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  className="w-full text-black placeholder:text-gray-400 border border-gray-300 rounded-md px-3 py-2 h-44 resize-y bg-white shadow-sm focus:outline-none focus:ring-4 focus:ring-gold/30 focus:border-gold transition-[box-shadow,border-color] duration-200"
                />
                <ErrorMessage
                  name="message"
                  render={(msg) => (
                    <div className="text-red text-xs">{msg}</div>
                  )}
                />
              </div>

              {/* Actions */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gold text-white font-semibold shadow-sm hover:bg-gold/90 active:bg-gold/80 focus:outline-none focus:ring-4 focus:ring-gold/40 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {t("send")}
                </button>
              </div>

              {/* Footnote */}
              {/* <p className="text-xs text-gray-500">
                By submitting, you agree to our processing of your information
                for support purposes.
              </p> */}
            </div>
          </div>
        </Form>
      </Formik>

      <ToastContainer position="top-center" autoClose={5000} theme="light" />
      {showConfetti && (
        <Confetti
          width={typeof window !== "undefined" ? window.innerWidth : 0}
          height={typeof window !== "undefined" ? window.innerHeight : 0}
          recycle={false}
        />
      )}
    </>
  );
};

export default ContactForm;
