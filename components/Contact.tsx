"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  const [notification, setNotification] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Open the visitor's email client with the message pre-filled
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:Tshepangbaloyi26@gmail.com?subject=${subject}&body=${body}`;

    setNotification("Thank you for your message! I'll get back to you soon.");
    form.reset();
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Get In <span className="text-primary-600 dark:text-primary-400">Touch</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from
            you!
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </Reveal>

          {/* Contact Info */}
          <Reveal delay={150}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-6">
                  Let&apos;s Connect
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  I&apos;m always open to discussing new opportunities, creative
                  ideas, or potential collaborations. Whether you have a project in
                  mind or just want to say hello, feel free to reach out!
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/tshepang-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="social-link"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tshepang-baloyi-95487b324/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="social-link"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:Tshepangbaloyi26@gmail.com"
                    aria-label="Email"
                    className="social-link"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="tel:+27814549483" aria-label="Phone" className="social-link">
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-neutral-600 dark:text-neutral-300">
                    Tshepangbaloyi26@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-neutral-600 dark:text-neutral-300">
                    +27 81 454 9483
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-neutral-600 dark:text-neutral-300">
                    South Africa
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Notification toast */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm bg-accent-500 text-white">
          {notification}
        </div>
      )}
    </section>
  );
}
