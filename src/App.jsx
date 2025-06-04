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
    <div style={{ padding: '20px' }}>
      <h2>Student Record Manager</h2>
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
  );
}

export default App;
