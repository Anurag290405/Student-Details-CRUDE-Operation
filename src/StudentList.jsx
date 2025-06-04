import React from 'react';

function StudentList({ students, onDelete, onEdit }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-700">Student List</h3>
      {students.length === 0 ? (
        <p className="text-gray-500">No records found.</p>
      ) : (
        <ul className="space-y-3">
          {students.map((student, index) => (
            <li key={index} className="bg-gray-50 border p-3 rounded-md flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800">{student.name}</p>
                <p className="text-sm text-gray-600">
                  Age: {student.age} | Class: {student.className} | Roll: {student.roll} | City: {student.city}
                </p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => onEdit(index)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
