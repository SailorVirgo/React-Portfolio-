import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const Contact = () => (
    <section id="contact" className="section">
      <div className="section-header">
        <h2>Contact</h2>
      </div>
      <div className="section-content">
        <ContactForm />
      </div>
    </section>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2>Contact</h2>
      </div>
      <div className="section-content">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
