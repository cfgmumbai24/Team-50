import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Student.css"; // Ensure you have CSS for styling

function Student() {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [editStudent, setEditStudent] = useState({
        stu_name: '',
        category: '',
        class: ''
    });
    const [newStudent, setNewStudent] = useState({
        stu_name: '',
        category: '',
        class: ''
    });
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const fetchAllStudents = async () => {
            try {
                const res = await axios.get("http://localhost:5001/students");
                setStudents(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllStudents();
    }, []);

    const handleDelete = async (stu_id) => {
        try {
            await axios.post(`http://localhost:5001/students/delete`, { id: stu_id });
            setStudents(students.filter((student) => student.stu_id !== stu_id));
            console.log("Student deleted successfully");
        } catch (err) {
            console.error("There was an error deleting the student!", err);
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditStudent({
            stu_name: students[index].stu_name,
            category: students[index].category,
            class: students[index].class
        });
    };

    const handleSave = async (stu_id) => {
        try {
            await axios.post(`http://localhost:5001/students/edit`, { id: stu_id, ...editStudent });
            const updatedStudents = students.map((student, index) =>
                index === editIndex ? { ...student, ...editStudent } : student
            );
            setStudents(updatedStudents);
            setEditIndex(-1);
            setEditStudent({
                stu_name: '',
                category: '',
                class: ''
            });
            console.log("Student updated successfully");
        } catch (err) {
            console.error("There was an error updating the student!", err);
        }
    };

    const handleAdd = async () => {
        try {
            const res = await axios.post("http://localhost:5001/students/add", newStudent);
            setStudents([...students, res.data]);
            setNewStudent({
                stu_name: '',
                category: '',
                class: ''
            });
            setShowAddForm(false);
            console.log("Student added successfully");
        } catch (err) {
            console.error("There was an error adding the student!", err);
        }
    };
    function handleSubmit() {
        navigate('/');
    }

    return (
        <div className="students">
            <table border="1" className="student-table">
                <caption>Students</caption>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Student Category</th>
                        <th>Student Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.stu_id}>
                            {editIndex === index ? (
                                <>
                                    <td>
                                        <input
                                            type="text"
                                            value={editStudent.stu_name}
                                            onChange={(e) => setEditStudent({ ...editStudent, stu_name: e.target.value })}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={editStudent.category}
                                            onChange={(e) => setEditStudent({ ...editStudent, category: e.target.value })}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={editStudent.class}
                                            onChange={(e) => setEditStudent({ ...editStudent, class: e.target.value })}
                                        />
                                    </td>
                                    <td>
                                        <button className="save-button" onClick={() => handleSave(student.stu_id)}>Save</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{student.stu_name}</td>
                                    <td>{student.category}</td>
                                    <td>{student.class}</td>
                                    <td>
                                        <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
                                        <button className="delete-button" onClick={() => handleDelete(student.stu_id)}>Delete</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            {showAddForm && (
                <div className="add-form">
                    <input
                        type="text"
                        value={newStudent.stu_name}
                        onChange={(e) => setNewStudent({ ...newStudent, stu_name: e.target.value })}
                        placeholder="Student Name"
                    />
                    <input
                        type="text"
                        value={newStudent.category}
                        onChange={(e) => setNewStudent({ ...newStudent, category: e.target.value })}
                        placeholder="Student Category"
                    />
                    <input
                        type="text"
                        value={newStudent.class}
                        onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
                        placeholder="Student Class"
                    />
                    <button onClick={handleAdd}>Add</button>
                </div>
            )}

            <button className="add-button" onClick={() => setShowAddForm(!showAddForm)}>
                {showAddForm ? "Cancel" : "Add Student"}
            </button>
            <button className="add-button" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Student;
