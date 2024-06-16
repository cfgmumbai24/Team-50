import React from 'react';
import './report.css';
import Navbar from './components/navbar';

const students = [
  { name: 'Alice', class: 'XII', category: 'Science', subject1: 85, subject2: 90, subject3: 88 },
  { name: 'Bob', class: 'X', category: 'Arts', subject1: 78, subject2: 82, subject3: 80 },
  { name: 'Charlie', class: 'IX', category: 'Commerce', subject1: 92, subject2: 88, subject3: 90 },
  // Add more student data as needed
];

const StudentTable = () => {

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="student-table">
        <h2>Student Data</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Category</th>
              <th>Subject 1</th>
              <th>Subject 2</th>
              <th>Subject 3</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.category}</td>
                <td>{student.subject1}</td>
                <td>{student.subject2}</td>
                <td>{student.subject3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

};

export default StudentTable;
