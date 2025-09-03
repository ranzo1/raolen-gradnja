"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";
import { useTranslations } from "next-intl";
import { createValidationSchema } from "@/utils/validations";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const t = useTranslations("Footer");

  // Create the validation schema with translations
  const validationSchema = createValidationSchema(t);

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    try {
      setIsLoading(true);
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      resetForm();
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
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
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* Name */}
              <div style={{ padding: "8px" }}>
                <div style={{ position: "relative" }}>
                  <label
                    htmlFor="name"
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    {t("name")}
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    style={{
                      width: "100%",
                      border: "1px solid grey",
                      borderRadius: "4px",
                      padding: "6px",
                    }}
                  />
                  <ErrorMessage
                    name="name"
                    render={(msg) => (
                      <div style={{ color: "red", fontSize: "14px" }}>
                        {msg}
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* Email */}
              <div style={{ padding: "8px" }}>
                <div style={{ position: "relative" }}>
                  <label
                    htmlFor="email"
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    {t("email")}
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    style={{
                      width: "100%",
                      border: "1px solid grey",
                      borderRadius: "4px",
                      padding: "6px",
                    }}
                  />
                  <ErrorMessage
                    name="email"
                    render={(msg) => (
                      <div style={{ color: "red", fontSize: "14px" }}>
                        {msg}
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* Message */}
              <div style={{ padding: "8px", width: "100%" }}>
                <div style={{ position: "relative" }}>
                  <label
                    htmlFor="message"
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    {t("message")}
                  </label>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    style={{
                      width: "100%",
                      border: "1px solid grey",
                      borderRadius: "4px",
                      padding: "6px",
                      height: "170px",
                    }}
                  />
                  <ErrorMessage
                    name="message"
                    render={(msg) => (
                      <div style={{ color: "red", fontSize: "14px" }}>
                        {msg}
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* Button */}
              <div style={{ padding: "8px", width: "100%" }}>
                <button
                  disabled={isLoading}
                  className="flex mx-auto text-white bg-gold border-0 p-3 focus:outline-none font-bold hover:bg-gold/90 rounded text-lg"
                >
                  {t("send")}
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <ToastContainer position="top-center" autoClose={5000} theme="light" />
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      )}
    </>
  );
};

export default ContactForm;
