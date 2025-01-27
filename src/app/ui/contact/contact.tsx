"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import ContactHeroSection from "../components/contact-hero-section";
import Newsletter from "../components/contact-news-letter";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section id="contact">
      <div className="mx-auto px-4 py-8 bg-gray-200">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-muted-foreground">
            Business consulting excepteur sint occaecat cupidatat consulting non
            proident, sunt in culpa qui officia deserunt laborum market
          </p>
        </div>

        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Sidebar */}
              <div className="p-8 text-white bg-[url('/contact-bg.jpg')] bg-cover bg-no-repeat">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Call us Now:</h2>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5" />
                        <p>+123 456-789-1120</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5" />
                        <p>+522 672-452-1120</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-6">Email:</h2>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5" />
                        <p>info@yourwebsite.com</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5" />
                        <p>support@yourwebsite.com</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-6">Our Address:</h2>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 mt-1" />
                      <p>
                        KA-62/1, Travel Agency, 45 Grand Central Terminal, New
                        York.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-primary text-sm">Get in touch</h3>
                  <h2 className="text-2xl text-gray-900">Write Us A Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Subjects <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      your message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-medium rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactHeroSection />
      <Newsletter />
    </section>
  );
}
