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
    <form onSubmit={handleSubmit} className="grid gap-3 mb-6">
      {['name', 'age', 'className', 'roll', 'city'].map((field) => (
        <input
          key={field}
          name={field}
          value={form[field]}
          onChange={handleChange}
          placeholder={field[0].toUpperCase() + field.slice(1)}
          className="border border-gray-300 p-2 rounded-md"
        />
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Save
      </button>
    </form>
  );
}

export default StudentForm;
