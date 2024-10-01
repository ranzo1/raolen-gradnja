"use client";

import React, { useState } from "react";
import { validationSchema } from "@/utils/validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";
import { Button } from "@/src/components/ui/button";
import { useTranslations } from "next-intl";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const t = useTranslations("Footer");

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    try {
      setIsLoading(true);
      // Send email using Nodemailer
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Reset the form
      resetForm();

      // Show success message or redirect to a thank you page
      console.log("Email sent successfully!");
    } catch (error) {
      // Handle error
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
          <div className=" mx-auto">
            <div className="flex flex-col">
              <div className="p-2 ">
                <div className="relative">
                  <label className="leading-7 text-sm font-medium text-black">
                    {t("name")}
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-grey rounded-sm py-1"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red"
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600 font-medium text-black">
                    {t("email")}
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-grey rounded-sm py-1"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600 font-medium text-black">
                    {t("message")}
                  </label>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    className="w-full border border-grey rounded-sm py-1"
                    style={{ height: "200px" }} // Custom height
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
