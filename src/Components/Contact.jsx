import React, { useState } from "react";
import "./Contact.scss";
import bgImage from "../assets/bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzrgyT6egHZPQJPp_mUGhNcEQ8ug1Vb3VW_zwIm6lUED6D1BXhyiH8Cx6gRmHhcHQyXjw/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: onlyNumbers });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      className="contact"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <div className="contact-container">

          <div className="contact-header">
            <h2>Contact Us</h2>
            <p>
              Have questions or need help with your booking?
              Reach out to us — we’ll contact you shortly.
            </p>
          </div>

          <div className="contact-content">
            {/* Info */}
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>Email: support@brezora.com</p>
              <p>Phone: +91 6383254176</p>
              <p>Location: India</p>
            </div>

            {/* Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} maxLength={10} required />
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="success-msg">✅ Thanks! We will contact you shortly.</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;