import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { FadeUp, FadeLeft, FadeRight, StaggerChildren, StaggerItem } from './animations';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    purpose: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
    productInterest: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="font-['Space_Grotesk']">
      {/* ------------------------------------------------------------------ */}
      {/* 1. Page Header                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white border-b border-gray-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-200 mb-6">
              <div className="size-2 bg-brand-500" />
              <span className="text-sm font-medium text-brand-900">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 text-pretty">
              Get in touch for enquiries, quotations, or technical consultations
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. Two-Column Layout — Form + Contact Info                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Left Column — Enquiry Form (3 cols) */}
            <FadeLeft className="lg:col-span-3">
              <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 text-balance">
                  Send Us an Enquiry
                </h2>
                <p className="text-gray-600 mb-8 text-pretty">
                  Fill out the form below and our team will respond within 24
                  business hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Row: Name + Purpose */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Your Name{" "}
                        <span className="text-brand-600" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-purpose"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Purpose
                      </label>
                      <select
                        id="contact-purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-gray-900 focus:border-brand-500 focus:outline-none"
                      >
                        <option value="">Select purpose</option>
                        <option value="enquiry">Enquiry</option>
                        <option value="business-partnership">
                          Business Partnership
                        </option>
                        <option value="support">Support</option>
                        <option value="job-search">Job Search</option>
                        <option value="investor-relations">
                          Investor Relations
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none"
                      placeholder="Brief subject of your enquiry"
                    />
                  </div>

                  {/* Row: Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Your Email{" "}
                        <span className="text-brand-600" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 tabular-nums focus:border-brand-500 focus:outline-none"
                        placeholder="+91-XXX-XXXXXXX"
                      />
                    </div>
                  </div>

                  {/* Product Interest */}
                  <div>
                    <label
                      htmlFor="contact-product"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Product Interest
                    </label>
                    <select
                      id="contact-product"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-gray-900 focus:border-brand-500 focus:outline-none"
                    >
                      <option value="">Select a product</option>
                      <option value="shell-tube-heat-exchangers">
                        Shell &amp; Tube Heat Exchangers
                      </option>
                      <option value="surface-condensers">
                        Surface Condensers
                      </option>
                      <option value="hp-lp-heaters">HP/LP Heaters</option>
                      <option value="air-cooled-heat-exchangers">
                        Air Cooled Heat Exchangers
                      </option>
                      <option value="air-cooled-condensers">
                        Air Cooled Condensers
                      </option>
                      <option value="pressure-vessels">Pressure Vessels</option>
                      <option value="deaerators">Deaerators</option>
                      <option value="heavy-fabrication">
                        Heavy Fabrication
                      </option>
                      <option value="finned-tubes">Finned Tubes</option>
                      <option value="spares-services">
                        Spares &amp; Services
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none resize-y"
                      placeholder="Describe your requirements, specifications, and timeline..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-coral-500 text-white font-bold hover:bg-coral-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                  >
                    Submit Enquiry
                  </button>

                  <p className="text-xs text-gray-500 text-pretty">
                    By submitting this form, you agree to our privacy policy. We
                    will respond within 24 business hours.
                  </p>
                </form>
              </div>
            </FadeLeft>

            {/* Right Column — Contact Info Panel (2 cols) */}
            <FadeRight className="lg:col-span-2 space-y-6">
              {/* Head Office Card */}
              <div className="bg-white border-2 border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 bg-brand-500 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="size-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Head Office (Unit I)
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <p className="text-pretty">
                    Plot No. 72-A&amp;B, Sector-I, Industrial Area, Govindpura,
                    Bhopal-(M.P.) 462023
                  </p>
                  <div className="space-y-1">
                    <p className="tabular-nums">
                      <span className="font-medium text-gray-900">Phone:</span>{" "}
                      <a
                        href="tel:+917554033211"
                        className="hover:text-brand-600"
                      >
                        +91-755-4033211
                      </a>
                      , 12, 19, 22, 23
                    </p>
                    <p className="tabular-nums">
                      <span className="font-medium text-gray-900">Fax:</span>{" "}
                      +91-755-4251365
                    </p>
                    <p>
                      <span className="font-medium text-gray-900">Email:</span>{" "}
                      <a
                        href="mailto:laxmiei@hotmail.com"
                        className="hover:text-brand-600"
                      >
                        laxmiei@hotmail.com
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-gray-900">Web:</span>{" "}
                      <a
                        href="http://www.laxmieibpl.co.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-600"
                      >
                        www.laxmieibpl.co.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Factory Card */}
              <div className="bg-white border-2 border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 bg-gray-900 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="size-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Factory Mandideep (Unit II)
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <p className="text-pretty">
                    Industrial Area, Jhalar Kalan, Mandideep (Bhopal) Madhya
                    Pradesh 462046
                  </p>
                  <div className="space-y-1">
                    <p className="tabular-nums">
                      <span className="font-medium text-gray-900">Phone:</span>{" "}
                      <a
                        href="tel:+917554033222"
                        className="hover:text-brand-600"
                      >
                        +91-755-40332-22
                      </a>
                      ;{" "}
                      <a
                        href="tel:+917554033211"
                        className="hover:text-brand-600"
                      >
                        +91-755-4033211
                      </a>
                    </p>
                    <p className="tabular-nums">
                      <span className="font-medium text-gray-900">Fax:</span>{" "}
                      +91-755-4251365
                    </p>
                    <p>
                      <span className="font-medium text-gray-900">Email:</span>{" "}
                      <a
                        href="mailto:laxmiei@hotmail.com"
                        className="hover:text-brand-600"
                      >
                        laxmiei@hotmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white border-2 border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-700">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-gray-900 tabular-nums">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Saturday</span>
                    <span className="font-medium text-gray-900 tabular-nums">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Sunday</span>
                    <span className="font-medium text-brand-600">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white border-2 border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Connect With Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/laxmiei/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700"
                    aria-label="Visit us on Facebook"
                  >
                    <span aria-hidden="true" className="font-bold">
                      f
                    </span>
                    Facebook
                  </a>
                  <a
                    href="https://www.linkedin.com/company/laxmiei/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700"
                    aria-label="Visit us on LinkedIn"
                  >
                    <span aria-hidden="true" className="font-bold">
                      in
                    </span>
                    LinkedIn
                  </a>
                </div>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. Two Facility Cards                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-balance">
            Our Facilities
          </h2>
          <StaggerChildren className="grid md:grid-cols-2 gap-8">
            {/* Unit I */}
            <StaggerItem><div className="bg-white border-2 border-gray-200 border-t-4 border-t-brand-500 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="size-12 bg-brand-50 border-2 border-brand-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-700 font-bold text-sm">I</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Unit I &mdash; Head Office
                  </h3>
                  <p className="text-sm text-gray-500">Govindpura, Bhopal</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4 text-pretty">
                Plot No. 72-A&amp;B, Sector-I, Industrial Area, Govindpura,
                Bhopal-(M.P.) 462023
              </p>
              <div className="space-y-1 text-sm text-gray-600">
                <p className="tabular-nums">
                  <span className="font-medium text-gray-900">Phone:</span>{" "}
                  +91-755-4033211, 12, 19, 22, 23
                </p>
                <p className="tabular-nums">
                  <span className="font-medium text-gray-900">Fax:</span>{" "}
                  +91-755-4251365
                </p>
                <p>
                  <span className="font-medium text-gray-900">Email:</span>{" "}
                  <a
                    href="mailto:laxmiei@hotmail.com"
                    className="text-brand-600 hover:text-brand-700"
                  >
                    laxmiei@hotmail.com
                  </a>
                </p>
                <p>
                  <span className="font-medium text-gray-900">Website:</span>{" "}
                  <a
                    href="http://www.laxmieibpl.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:text-brand-700"
                  >
                    www.laxmieibpl.co.in
                  </a>
                </p>
              </div>
            </div></StaggerItem>

            {/* Unit II */}
            <StaggerItem><div className="bg-white border-2 border-gray-200 border-t-4 border-t-brand-500 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="size-12 bg-brand-50 border-2 border-brand-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-700 font-bold text-sm">II</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Unit II &mdash; Factory
                  </h3>
                  <p className="text-sm text-gray-500">Mandideep, Bhopal</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4 text-pretty">
                Industrial Area, Jhalar Kalan, Mandideep (Bhopal) Madhya Pradesh
                462046
              </p>
              <div className="space-y-1 text-sm text-gray-600">
                <p className="tabular-nums">
                  <span className="font-medium text-gray-900">Phone:</span>{" "}
                  +91-755-40332-22; +91-755-4033211
                </p>
                <p className="tabular-nums">
                  <span className="font-medium text-gray-900">Fax:</span>{" "}
                  +91-755-4251365
                </p>
                <p>
                  <span className="font-medium text-gray-900">Email:</span>{" "}
                  <a
                    href="mailto:laxmiei@hotmail.com"
                    className="text-brand-600 hover:text-brand-700"
                  >
                    laxmiei@hotmail.com
                  </a>
                </p>
              </div>
            </div></StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. Quick Contact Options                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-20 bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-balance">
              Quick Contact Options
            </h2>
            <p className="text-gray-600 mb-10 text-pretty">
              Reach the right team directly for faster assistance.
            </p>
          </FadeUp>

          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            {/* Request a Quote */}
            <StaggerItem><div className="bg-gray-50 border-2 border-gray-200 border-l-4 border-l-brand-500 p-6 sm:p-8">
              <div className="size-12 bg-brand-500 flex items-center justify-center mb-5">
                <svg
                  className="size-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Request a Quote
              </h3>
              <p className="text-sm text-gray-600 mb-5 text-pretty">
                For product enquiries, pricing, and customised specifications on
                heat exchangers, pressure vessels, and other industrial
                equipment.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium text-gray-900">Email:</span>{" "}
                  <a
                    href="mailto:laxmiei@hotmail.com"
                    className="text-brand-600 hover:text-brand-700"
                  >
                    laxmiei@hotmail.com
                  </a>
                </p>
                <p className="tabular-nums">
                  <span className="font-medium text-gray-900">Phone:</span>{" "}
                  <a
                    href="tel:+917554033211"
                    className="text-brand-600 hover:text-brand-700"
                  >
                    +91-755-4033211
                  </a>
                </p>
              </div>
            </div></StaggerItem>

            {/* Technical Support */}
            <StaggerItem><div className="bg-gray-50 border-2 border-gray-200 border-l-4 border-l-brand-500 p-6 sm:p-8">
              <div className="size-12 bg-brand-500 flex items-center justify-center mb-5">
                <svg
                  className="size-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Technical Support
              </h3>
              <p className="text-sm text-gray-600 mb-5 text-pretty">
                For existing installations, maintenance queries, spare parts,
                and technical documentation related to our delivered equipment.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium text-gray-900">Email:</span>{" "}
                  <a
                    href="mailto:laxmiei@hotmail.com"
                    className="text-brand-600 hover:text-brand-700"
                  >
                    laxmiei@hotmail.com
                  </a>
                </p>
                <p className="tabular-nums">
                  <span className="font-medium text-gray-900">Phone:</span>{" "}
                  <a
                    href="tel:+917554033219"
                    className="text-brand-600 hover:text-brand-700"
                  >
                    +91-755-4033219
                  </a>
                </p>
              </div>
            </div></StaggerItem>

            {/* Business Partnership */}
            <StaggerItem><div className="bg-gray-50 border-2 border-gray-200 border-l-4 border-l-brand-500 p-6 sm:p-8">
              <div className="size-12 bg-brand-500 flex items-center justify-center mb-5">
                <svg
                  className="size-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Business Partnership
              </h3>
              <p className="text-sm text-gray-600 mb-5 text-pretty">
                For collaboration opportunities, joint ventures, vendor
                registration, and strategic partnership discussions with our
                leadership team.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium text-gray-900">Email:</span>{" "}
                  <a
                    href="mailto:laxmiei@hotmail.com"
                    className="text-brand-600 hover:text-brand-700"
                  >
                    laxmiei@hotmail.com
                  </a>
                </p>
                <p className="tabular-nums">
                  <span className="font-medium text-gray-900">Phone:</span>{" "}
                  <a
                    href="tel:+917554033212"
                    className="text-brand-600 hover:text-brand-700"
                  >
                    +91-755-4033212
                  </a>
                </p>
              </div>
            </div></StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. Map Placeholder                                                  */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-20">
        <FadeUp className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-balance">
            Our Locations
          </h2>
          <p className="text-gray-600 mb-8 text-pretty">
            Both facilities are strategically located in and around Bhopal,
            Madhya Pradesh, with excellent transport connectivity.
          </p>

          <div className="bg-gray-100 border-2 border-gray-200 p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center min-h-[320px] sm:min-h-[400px]">
            {/* Isometric-style map pin icon */}
            <svg
              className="size-16 text-brand-500 mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center text-balance">
              Our Locations in Bhopal, Madhya Pradesh
            </h3>
            <p className="text-gray-600 text-sm text-center max-w-md mb-6 text-pretty">
              Laxmi Engineering Industries operates from two facilities in the
              industrial hub of Bhopal, India.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 w-full max-w-lg">
              <div className="bg-white border border-gray-200 p-4 text-center">
                <p className="font-bold text-gray-900 text-sm mb-1">
                  Unit I &mdash; Govindpura
                </p>
                <p className="text-xs text-gray-500 tabular-nums">
                  23.2599&deg; N, 77.4946&deg; E
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-4 text-center">
                <p className="font-bold text-gray-900 text-sm mb-1">
                  Unit II &mdash; Mandideep
                </p>
                <p className="text-xs text-gray-500 tabular-nums">
                  23.0827&deg; N, 77.5095&deg; E
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA Banner                                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-gray-900 py-16 sm:py-20 border-t-4 border-t-brand-500">
        <FadeUp className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            Ready to Engineer Your Next Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto text-pretty">
            Contact our team of experts for custom solutions, technical
            specifications, or project quotations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917554033211"
              className="inline-flex items-center gap-2 px-8 py-4 bg-coral-500 text-white font-medium hover:bg-coral-600"
            >
              <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>
            <a
              href="mailto:laxmiei@hotmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-600 text-white font-medium hover:border-gray-400"
            >
              <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </a>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-600 text-white font-medium hover:border-gray-400"
            >
              View Products
            </Link>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}

export default ContactPage;
