"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Signing up with email:", email);
  };

  return (
    <div className="bg-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3">
              Sign up for newsletter
            </h2>
            <p className="text-gray-600 text-sm">
              Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero
              alterum.
            </p>
          </div>

          {/* Newsletter Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 min-w-[300px] px-4 py-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-prima"
            />
            <button
              type="submit"
              className="px-12 py-3 bg-primary text-white font-normal rounded-md"
            >
              Save Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
