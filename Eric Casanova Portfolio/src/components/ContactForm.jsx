import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form data:', formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={() => {
            if (!formData.name) setErrors({ ...errors, name: 'Name is required' });
          }}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => {
            if (!formData.email) {
              setErrors({ ...errors, email: 'Email is required' });
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
              setErrors({ ...errors, email: 'Email is invalid' });
            }
          }}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={() => {
            if (!formData.message) setErrors({ ...errors, message: 'Message is required' });
          }}
        />
        {errors.message && <span className="error">{errors.message}</span>}
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
