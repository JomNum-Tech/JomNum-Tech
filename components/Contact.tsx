"use client";

import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormValues } from "@/types/FormValuesType";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

const initialValues: FormValues = {
  name: '',
  email: '',
  message: ''
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required')
});

const ContactForm: React.FC = () => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleSubmit = async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const recaptchaToken = recaptchaRef.current?.getValue();
        if (!recaptchaToken) {
            toast.error('Please verify you are not a robot');
            setSubmitting(false);
            return;
        }

        // Prepare the message
        const message = `
            New contact form submission:
            Name: ${values.name}
            Email: ${values.email}
            Message: ${values.message}
        `;

        // Telegram API
        const telegramApiUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
        const chatId =`'${process.env.TELEGRAM_CHAT_ID}'`; 

        try {
            const response = await fetch(telegramApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            toast.success('Message sent successfully!');
        } catch {
            toast.error('Failed to send message.');
        } finally {
            setSubmitting(false);
            recaptchaRef.current?.reset();  // Reset reCAPTCHA
        }
    };

    return (
        <>         
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="mb-4"
                        >
                            <Field
                                type="text"
                                name="name"
                                className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                                placeholder="Enter Name"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="mb-4"
                        >
                            <Field
                                type="email"
                                name="email"
                                className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                                placeholder="Enter Email"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="mb-4"
                        >
                            <Field
                                as="textarea"
                                name="message"
                                className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                                placeholder="Enter Message"
                                rows="4"
                            />
                            <ErrorMessage name="message" component="div" className="text-red-500" />
                        </motion.div>

                        {/* reCAPTCHA */}
                        <div className="mb-4">
                            <ReCAPTCHA ref={recaptchaRef} sitekey="your-recaptcha-site-key" />
                        </div>

                        <div className="text-start">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-blue-600 hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4 w-full"
                            >
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </>
    );
};

const ContactFormCard: React.FC = () => (
    <div className="bg-white dark:bg-[#162231] rounded-2xl border-[25px] dark:border-[#1C293A] border-[#F4F7FD] p-6 md:p-12">
        <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-4">
            Contact Us
        </h2>
        <p className="text-lg mb-12">
            We list your menu online, help you process orders.
        </p>
        <ContactForm />
    </div>
);

const Contact: React.FC = () => {
    return (
        <section className="ezy__contact11 light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
            <div
                className="bg-no-repeat bg-left-bottom bg-cover py-14"
                style={{
                    backgroundImage:
                        "url(https://cdn.easyfrontend.com/pictures/contact/contact_11.png)",
                }}
            >
                <div className="container px-4">
                    <div className="grid grid-cols-12 py-6 pl-24 pr-10">
                        <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
                            <h2 className="text-2xl leading-none font-bold md:text-[40px] mb-6 text-white">
                                Get in Touch
                            </h2>
                            <p className="text-lg text-white">
                                Wanna know about platform and us contact now
                            </p>
                        </div>
                        <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                            <ContactFormCard />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ezy__contact11-blank-card"></div>
        </section>
    );
};

export default Contact;
