import React, { useState } from 'react';

// Reusable InputField component
const InputField = ({ label, type, name, value, onChange }) => (
  <label>
    {label}:
    <input type={type} name={name} value={value} onChange={onChange} />
  </label>
);

// Main Form component
const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField label="Name" type="text" name="name" value={formData.name} onChange={handleChange} />
      <br />

      <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
      <br />

      <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
