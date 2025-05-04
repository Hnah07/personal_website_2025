"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setIsSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        // Reset form fields individually
        const nameInput = form.querySelector("#name") as HTMLInputElement;
        const emailInput = form.querySelector("#mail") as HTMLInputElement;
        const messageInput = form.querySelector(
          "#message"
        ) as HTMLTextAreaElement;

        if (nameInput) nameInput.value = "";
        if (emailInput) emailInput.value = "";
        if (messageInput) messageInput.value = "";
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <motion.h2
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact me
      </motion.h2>
      <motion.p
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        All feedback about my website is welcome! <br />
        Or, if you simply want to tell me something:
      </motion.p>
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-full max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <input
          type="hidden"
          name="access_key"
          value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
        />
        <motion.input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
          className="h-20 px-4 mb-4 border-2 border-verdigris rounded-md bg-white dark:bg-eerie-black text-eerie-black dark:text-brilliant-rose placeholder-eerie-black/50 dark:placeholder-parchment/50 focus:border-brilliant-rose focus:outline-none"
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />
        <motion.input
          type="email"
          name="mail"
          id="mail"
          placeholder="E-mail"
          required
          className="h-20 px-4 mb-4 border-2 border-verdigris rounded-md bg-white dark:bg-eerie-black text-eerie-black dark:text-brilliant-rose placeholder-eerie-black/50 dark:placeholder-parchment/50 focus:border-brilliant-rose focus:outline-none"
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />
        <motion.textarea
          name="message"
          id="message"
          placeholder="Message"
          rows={10}
          required
          className="px-4 py-4 mb-4 border-2 border-verdigris rounded-md bg-white dark:bg-eerie-black text-eerie-black dark:text-brilliant-rose placeholder-eerie-black/50 dark:placeholder-parchment/50 focus:border-brilliant-rose focus:outline-none resize-y max-w-full"
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />
        <div className="flex flex-col items-center gap-4">
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500"
            >
              {error}
            </motion.p>
          )}
          {isSuccess && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-verdigris"
            >
              Message sent successfully!
            </motion.p>
          )}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`inline-block text-sm md:text-base px-4 py-2 rounded-full bg-gradient-to-r from-brilliant-rose to-verdigris text-eerie-black transition-colors duration-300 hover:text-saffron hover:bg-verdigris w-full max-w-xs ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            transition={{ duration: 0.2 }}
          >
            {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send"}
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
};

export default ContactSection;
