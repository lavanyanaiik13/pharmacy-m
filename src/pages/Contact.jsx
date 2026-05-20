import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    purpose: "General Inquiry",
    priority: "Medium",
    message: "",
    date: "",
    time: ""
  });

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // ✅ NEW: success popup state
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const charLimit = 250;

  // ✅ NEW: submit handler
  const handleSubmit = () => {

  const nameRegex = /^[A-Za-z ]+$/;

  // EMPTY FORM VALIDATION
  if (
    !form.name ||
    !form.email ||
    !form.message ||
    !form.date ||
    !form.time
  ) {
    alert("⚠ Please fill the form!");
    return;
  }

  // NAME VALIDATION
  if (!nameRegex.test(form.name)) {
    alert("⚠ Name should contain only alphabets!");
    return;
  }

  setSuccess(true);

  setTimeout(() => {
    setSuccess(false);
  }, 2500);
};

  return (
    <div className="contact-page">

      {/* ✅ SUCCESS POPUP */}
      {success && (
        <div className="success-popup">
          🎉 Submitted successfully!
        </div>
      )}

      {/* HERO */}
      <div className="contact-hero">
        <h1>Contact & Support</h1>
        <p>We’re here to help you with healthcare & pharmacy support</p>

        <div className="status">
          <span className="dot"></span>
          Online • Avg reply within 2 hours
        </div>
      </div>

      {/* CONTACT CARDS */}
      <div className="cards">

        <a className="card" href="mailto:support@pharmacy.com">
          📧 Email Support
        </a>

        <a className="card" href="tel:+919876543210">
          📞 Call Us
        </a>

        <a
          className="card"
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp Chat
        </a>

        <a className="card emergency" href="tel:112">
          🚨 Emergency Help
        </a>

      </div>

      {/* MAIN */}
      <div className="container">

        {/* FORM */}
        <div className="form-box">

<input
  name="name"
  placeholder="Full Name"
  value={form.name}
  onChange={(e) => {
    const value = e.target.value.replace(/[^A-Za-z ]/g, "");
    setForm({ ...form, name: value });
  }}
/>          <input name="email" placeholder="Email" onChange={handleChange} />

          <select name="purpose" onChange={handleChange}>
            <option>General Inquiry</option>
            <option>Medical Support</option>
            <option>Feedback</option>
            <option>Appointment Request</option>
          </select>

          <select name="priority" onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <textarea
            name="message"
            maxLength={charLimit}
            placeholder="Write your message..."
            onChange={handleChange}
          />

          <p className="count">
            {form.message.length}/{charLimit}
          </p>

          {/* STAR RATING */}
          <div className="rating">
            <p>Rate Experience:</p>

            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= (hover || rating) ? "star active" : "star"}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>

          <div className="appointment">
            <input type="date" name="date" onChange={handleChange} />
            <input type="time" name="time" onChange={handleChange} />
          </div>

          {/* ✅ UPDATED BUTTON */}
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>

        </div>

        {/* MAP */}
        <div className="side">

          <div className="map big-map">

            {/* 📍 REAL MEDICAL SHOP LOCATION (Mysore Apollo Pharmacy) */}
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.0626!2d76.6394!3d12.2958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7a5f2b0f5c3f%3A0x9c3d9c2f2b5e!2sApollo%20Pharmacy%20Mysore!5e0!3m2!1sen!2sin!4v1710000000000"
            ></iframe>

          </div>

        </div>

      </div>
    </div>
  );
}