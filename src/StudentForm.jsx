import React, { useState, useEffect } from 'react';

function StudentForm({ onSubmit, initialData }) {
  const [form, setForm] = useState({
    name: '',
    age: '',
    className: '',
    roll: '',
    city: '',
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.age && form.className && form.roll && form.city) {
      onSubmit(form);
      setForm({ name: '', age: '', className: '', roll: '', city: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="age" type="number" min="1"value={form.age} onChange={handleChange} placeholder="Age" />
      <input name="className" value={form.className} onChange={handleChange} placeholder="Class" />
      <input name="roll" type="number" min="1" value={form.roll} onChange={handleChange} placeholder="Roll Number" />
      <input name="city" value={form.city} onChange={handleChange} placeholder="City" />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition"
      >
        Save
      </button>
    </form>
  );
}

export default StudentForm;
