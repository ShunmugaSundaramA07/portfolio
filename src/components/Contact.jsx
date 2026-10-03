
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";
import contactBgVideo from "../assets/contact_assets/contact_bg.mp4";

const ContactSection = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    text: "",
    type: "",
  });

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!formRef.current || isSubmitting) return;

    const form = formRef.current;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    if (!name || !email || !message) {
      setStatusMessage({
        text: "Please fill in your name, email, and message.",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ text: "", type: "" });

    try {
      // Step 1: Save the message to Firebase Firestore
      await addDoc(collection(db, "contact_messages"), {
        name,
        email,
        phone,
        subject,
        message,
        createdAt: serverTimestamp(),
      });

      // Step 2: Send an automatic thank-you email to the visitor
      try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
          throw new Error("EmailJS environment variables are missing.");
        }

        await emailjs.send(
          serviceId,
          templateId,
          {
            name,
            email,
            phone,
            subject,
            message,
          },
          {
            publicKey,
          }
        );

        setStatusMessage({
          text: "Your message has been submitted successfully! A confirmation email has been sent to you.",
          type: "success",
        });
      } catch (emailError) {
        // Firestore has already saved the message.
        console.error("EmailJS sending error:", emailError);

        setStatusMessage({
          text: "Your message was saved successfully, but the confirmation email could not be sent.",
          type: "warning",
        });
      }

      form.reset();
    } catch (firestoreError) {
      console.error("Firestore submission error:", firestoreError);

      setStatusMessage({
        text: "Unable to submit your message. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen text-white font-sans flex items-center overflow-hidden [clip-path:inset(0)] scroll-mt-20"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-screen object-cover z-0"
      >
        <source src={contactBgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 py-16 flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Contact Information */}
        <div className="w-full lg:w-5/12 flex flex-col justify-start">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl mb-10">
            Get in touch
          </h2>

          <div className="flex flex-col gap-8">
            {/* Email */}
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                Email
              </p>
              <a
                href="mailto:shunmugasundar07@gmail.com"
                className="text-lg md:text-xl font-medium tracking-wide hover:text-gray-300 transition-colors break-all"
              >
                shunmugasundar07@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                Phone
              </p>
              <a
                href="tel:+919043329690"
                className="text-lg md:text-xl font-medium tracking-wide hover:text-gray-300 transition-colors"
              >
                +91 9043329690
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-2 flex flex-col">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-4">
                Follow me
              </p>

              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/shunmuga-sundaram-a-3080102a1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/ShunmugaSundaramA07"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-7/12 flex flex-col lg:pt-2">
          <form
            ref={formRef}
            className="flex flex-col gap-5 w-full"
            onSubmit={sendMessage}
          >
            {/* Name and Email */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                <label
                  htmlFor="contact-name"
                  className="text-xs text-gray-400 font-medium"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className="w-full bg-[#111]/80 text-white text-sm rounded-lg px-4 py-3 border border-white/10 focus:outline-none focus:border-white/40 transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                <label
                  htmlFor="contact-email"
                  className="text-xs text-gray-400 font-medium"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className="w-full bg-[#111]/80 text-white text-sm rounded-lg px-4 py-3 border border-white/10 focus:outline-none focus:border-white/40 transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Phone and Subject */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                <label
                  htmlFor="contact-phone"
                  className="text-xs text-gray-400 font-medium"
                >
                  Phone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  autoComplete="tel"
                  maxLength={20}
                  className="w-full bg-[#111]/80 text-white text-sm rounded-lg px-4 py-3 border border-white/10 focus:outline-none focus:border-white/40 transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                <label
                  htmlFor="contact-subject"
                  className="text-xs text-gray-400 font-medium"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  maxLength={150}
                  className="w-full bg-[#111]/80 text-white text-sm rounded-lg px-4 py-3 border border-white/10 focus:outline-none focus:border-white/40 transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 w-full">
              <label
                htmlFor="contact-message"
                className="text-xs text-gray-400 font-medium"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Write something..."
                rows={5}
                maxLength={3000}
                required
                className="w-full bg-[#111]/80 text-white text-sm rounded-lg px-4 py-3 border border-white/10 focus:outline-none focus:border-white/40 transition-all placeholder:text-gray-600 resize-none"
              />
            </div>

            {/* Submission Status */}
            {statusMessage.text && (
              <div
                role="status"
                aria-live="polite"
                className={`text-sm px-4 py-3 rounded-lg border ${
                  statusMessage.type === "success"
                    ? "bg-green-500/10 border-green-500/50 text-green-400"
                    : statusMessage.type === "warning"
                    ? "bg-yellow-500/10 border-yellow-500/50 text-yellow-300"
                    : "bg-red-500/10 border-red-500/50 text-red-400"
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black text-sm font-semibold rounded-lg py-3 hover:bg-gray-200 transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
