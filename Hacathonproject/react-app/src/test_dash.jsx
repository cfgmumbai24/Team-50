import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./test_dash.css"; // Import the CSS file
import Navbar from "./components/navbar";

function Test_dash() {
    const navigate = useNavigate();
    const [students, setStudents] = useState([
        {
            "id": 1,
            "name": "Kunsh",
            "tasksCompleted": "1"
        },
        {
            "id": 2,
            "name": "Deepanshu",
            "tasksCompleted": "2"
        },
        {
            "id": 3,
            "name": "Satyam",
            "tasksCompleted": "3"
        },
        {
            "id": 4,
            "name": "Hardik",
            "tasksCompleted": "4"
        },
        {
            "id": 5,
            "name": "Rohit",
            "tasksCompleted": "5"
        }
    ]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const res = await axios.get("http://localhost:5001/getStudentsWithTasks"); // Adjust the URL as needed
                setStudents(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchStudents();
    }, []);
    function handleSubmit() {
        navigate('/take-test');
    }

    return (
        <>
            <Navbar />
            <div className="test-dashboard-container"> {/* Apply the container class */}
                <h1 className="test-dashboard-heading">Test Dashboard</h1> {/* Apply the heading class */}
                <table className="test-dashboard-table"> {/* Apply the table class */}
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Tasks Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.tasksCompleted}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <br />
                <button className="take-test-button" class="button-10" role="button" onClick={handleSubmit}>Take Test</button> {/* Link to take test page */}
            </div>
        </>
    );
}

export default Test_dash;
