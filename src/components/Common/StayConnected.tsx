"use client"; // Client-side component for form handling

import React, { useState } from "react";

const HowItWorks = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Email:", email);
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className="stay-area ptb-140">
      <div className="container">
        <div className="section-title">
          <div className="row align-items-center g-4">
            <div className="col-lg-12">
              <div className="left">
                <h2>Stay Connected with Bnoon – Drop Your Email!</h2>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="right">
                <p>
                  Want to be the first to hear from us about new doctors,
                  service updates, announcements, and expert health insights?
                </p>
              </div>
            </div>

            {/* ✅ P + Form in Same Column */}
            <div className="col-lg-7 col-md-12">
              <p className="mb-3">
                Share your email to stay informed. We’ll only reach out <br />
                relevant updates that matter to you.
              </p>

              {/* Form directly under the paragraph */}
              <form onSubmit={handleContact} className="w-full">
                <div className="flex w-full items-center gap-2 max-w-xl">
                  {/* Input */}
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="form-input flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary px-5 py-2 rounded-lg submit-btn"
                  >
                    Submit
                  </button>
                </div>
                {message && <p className="text-success mt-2">{message}</p>}
              </form>
            </div>

            {/* ✅ P Below Form */}
              <p className="mt-3">
                You can unsubscribe at any time by emailing<br />
                communications@bnoon.sa.
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
