// components/MessageForm.jsx

"use client";

import { useState, useEffect } from "react";

export default function MessageForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [showStatus, setShowStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://morph-api-server.vercel.app/api/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  useEffect(() => {
    if (status) {
      setShowStatus(true);
      const timer = setTimeout(() => {
        setShowStatus(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="max-w-lg mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-primary text-primary-foreground rounded px-4 py-2"
        >
          Send
        </button>
      </form>
      {status && (
        <div
          className={`fixed bottom-10 left-0 p-5 bg-primary border-2 font-semibold border-secondary rounded-lg transition-transform duration-300 ${
            showStatus ? "translate-x-10" : "-translate-x-full"
          }`}
        >
          {status}
        </div>
      )}
    </div>
  );
}
