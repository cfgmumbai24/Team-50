import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function TakeTest() {
  const [students, setStudents] = useState([
    {
      "id": 1,
      "name": "Kunsh",
      "class": "1",
      "category": "A"
    },
    {
      "id": 2,
      "name": "Deepanshu",
      "class": "5",
      "category": "D"
    },
    {
      "id": 3,
      "name": "Satyam",
      "class": "4",
      "category": "C"
    },
    {
      "id": 4,
      "name": "Hardik",
      "class": "5",
      "category": "D"
    },
    {
        "id": 4,
        "name": "Rohit",
        "class": "4",
        "category": "B"
      }
  ]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:5001/getStudents"); // Adjust the URL as needed
        setStudents(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStudents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "studentSelect") {
      const selectedStudentData = students.find(student => student.name === value);
      setSelectedStudent(value);
      setSelectedClass(selectedStudentData.class);
      setSelectedCategory(selectedStudentData.category);
    } else if (name === "classInput") {
      setSelectedClass(value);
    } else if (name === "categoryInput") {
      setSelectedCategory(value);
    } else if (name === "subjectInput") {
      setSelectedSubject(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedStudent) {
      window.location.href = `/${selectedSubject.toLowerCase()}-test`;
    } else {
      alert("Please select a student");
    }
  };

  return (
    <>
    <div className="take-test-container">
      <h1 className="take-test-heading">Take Test</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="take-test-label" htmlFor="studentSelect">Select Student: </label>
          <select className="take-test-select" id="studentSelect" name="studentSelect" value={selectedStudent} onChange={handleChange}>
            <option value="">-- Select a student --</option>
            {students.map((student) => (
              <option key={student.id} value={student.name}>
                {student.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label className="take-test-label" htmlFor="classInput">Student Class: </label>
          <input className="take-test-input" type="text" id="classInput" name="classInput" value={selectedClass} onChange={handleChange} readOnly />
        </div>
        <div className="input-group">
          <label className="take-test-label" htmlFor="categoryInput">Category: </label>
          <input className="take-test-input" type="text" id="categoryInput" name="categoryInput" value={selectedCategory} onChange={handleChange} readOnly />
        </div>
        <div className="input-group">
          <label className="take-test-label" htmlFor="subjectInput">Select Subject: </label>
          <select className="take-test-select" id="subjectInput" name="subjectInput" value={selectedSubject} onChange={handleChange}>
            <option value="">-- Select a subject --</option>
            <option value="Literacy">Literacy</option>
            <option value="Numeracy">Numeracy</option>
            <option value="Socio Emotional">Socio Emotional</option>
          </select>
        </div>
        <br/>
        
      </form>
      <br/>
      
    </div>
    <button className="submit-button" type="submit" class="button-10" role="button">Submit</button>
    </>
  );
}

export default TakeTest;
