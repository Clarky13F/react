import React, { useState } from 'react';
import '../contactform.css'


const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });

    const [errors, setErrors] = useState({
      name: '',
      email: '',
      message: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: '' });
    };

    const handleBlur = (e) => {
      const { name, value } = e.target;
      if (value.trim() === '') {
        setErrors({ ...errors, [name]: 'This field is required.' });
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <p className="error-message">{errors.message}</p>}
        </label>
        <button type="submit">Send Message</button>
      </form>
    );
  };

  export default ContactForm;
