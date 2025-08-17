import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!form.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      // You can add API call here
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    marginTop: 6,
    marginBottom: 10,
    borderRadius: 6,
    border: "1.8px solid #ccc",
    fontSize: 16,
    transition: "border-color 0.3s ease",
  };

  const inputErrorStyle = {
    borderColor: "#e74c3c",
  };

  const labelStyle = {
    fontWeight: "600",
    fontSize: 14,
    color: "#333",
  };

  const buttonStyle = {
    background: "black",
    color: "white",
    border: "none",
    borderRadius: 30,
    padding: "14px 40px",
    fontSize: 16,
    cursor: "pointer",
    boxShadow: "0 6px 15px rgba(37,117,252,0.5)",
    transition: "background 0.4s ease",
  };

  const buttonHoverStyle = {
    background: "gray",
  };

  const [btnHover, setBtnHover] = useState(false);

  return (
    <div name='cont' style={{width:'100%',height:'100vh',backgroundColor:"black",margin:0,display:'flex',justifyContent:'center',alignItems:'center'}}>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 450,
          padding: 30,
          borderRadius: 15,
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          backgroundColor: "#fff",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor:'white'
        }}
        noValidate
      >
        <h2 style={{ textAlign: "center", marginBottom: 25, color: "black" }}>
          Contact Form
        </h2>
        <label htmlFor="name" style={labelStyle}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          style={{
            ...inputStyle,
            ...(errors.name ? inputErrorStyle : {}),
          }}
          placeholder="Your full name"
        />
        {errors.name && (
          <small style={{ color: "#e74c3c", fontWeight: "600" }}>
            {errors.name}
          </small>
        )}
        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          style={{
            ...inputStyle,
            ...(errors.email ? inputErrorStyle : {}),
          }}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <small style={{ color: "#e74c3c", fontWeight: "600" }}>
            {errors.email}
          </small>
        )}
        <label htmlFor="message" style={labelStyle}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          style={{
            ...inputStyle,
            resize: "vertical",
            ...(errors.message ? inputErrorStyle : {}),
          }}
          placeholder="Write your message here..."
        />
        {errors.message && (
          <small style={{ color: "#e74c3c", fontWeight: "600" }}>
            {errors.message}
          </small>
        )}
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button
            type="submit"
            style={btnHover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
          >
            Send Message
          </button>
        </div>
        {submitted && (
          <p
            style={{
              marginTop: 20,
              color: "#2ecc71",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Thanks for reaching out! We'll get back to you soon.
          </p>
        )}
      </form>
    </div>
  );
}