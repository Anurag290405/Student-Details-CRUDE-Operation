import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

function App() {
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addStudent = (student) => {
    if (editIndex !== null) {
      const updated = [...students];
      updated[editIndex] = student;
      setStudents(updated);
      setEditIndex(null);
    } else {
      setStudents([...students, student]);
    }
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const editStudent = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">📚 Student Record Manager</h1>
        <StudentForm
          onSubmit={addStudent}
          initialData={editIndex !== null ? students[editIndex] : null}
        />
        <StudentList
          students={students}
          onDelete={deleteStudent}
          onEdit={editStudent}
        />
      </div>
    </div>
  );
}

export default App;
