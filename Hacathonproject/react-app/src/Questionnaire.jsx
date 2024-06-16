import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is installed and imported
import './questionnaire.css';




const Questionnaire = () => {
    const [questions, setQuestions] = useState([
        // { id: 1, text: 'Question 1: Lorem ipsum dolor sit amet?' },
        // { id: 2, text: 'Question 2: Consectetur adipiscing elit?' },
        // { id: 3, text: 'Question 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?' },
        // { id: 4, text: 'Question 4: Ut enim ad minim veniam?' },
        // { id: 5, text: 'Question 5: Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?' },
    ]);

    const [marks, setMarks] = useState({});
    const [percentage, setPercentage] = useState(null);

    const handleMarkChange = (questionId, mark) => {
        setMarks(prevMarks => ({
            ...prevMarks,
            [questionId]: mark,
        }));
    };

    const calculatePercentage = () => {
        const totalMarks = Object.values(marks).reduce((acc, curr) => acc + curr, 0);
        const maxMarks = Object.keys(marks).length * 10; // Assuming each question can be marked 1-10
        const calculatedPercentage = (totalMarks / maxMarks) * 100;
        setPercentage(calculatedPercentage.toFixed(2)); // Round to 2 decimal places
    };

    const handleSaveMarks = async () => {
        calculatePercentage(); // Calculate percentage before saving

        try {
            // Example: Send marks and percentage to backend API
            const response = await axios.post('api/saveMarks', {
                marks,
                percentage,
            });

            console.log('Response:', response.data);
            alert('Marks and percentage saved successfully!');
        } catch (error) {
            console.error('Error saving marks and percentage:', error);
            alert('Failed to save marks and percentage.');
        }
    };

    useEffect(() => {
        const fetchAllStudents = async () => {
            try {
                const res = await axios.get("http://localhost:5001/socio_test/ID");
                setStudents(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllStudents();
    }, []);


    return (
        <div>
            <h2>Questionnaire</h2>
            <div class='studentInfo'>
                <p>Student Name: John Doe</p>
                <p>Class: 10</p>
                <p>Category: A</p>
                <p>Roll Number: 12345</p>

            </div>

            <div class='ques'>
                <h3>Socio-Emotional Development Questions</h3>
                <table>
                    <thead>
                        <tr>
                            <th id='question'>Questions</th>
                            <th>Grading (1-10)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map(question => (
                            <tr key={question.id}>
                                <td>{question.text}</td>
                                <td>
                                    <fieldset>
                                        <legend>Mark for Question {question.id}</legend>
                                        {[...Array(10)].map((_, index) => {
                                            const mark = index + 1;
                                            return (
                                                <label key={mark}>
                                                    <input
                                                        type="radio"
                                                        name={`mark_${question.id}`}
                                                        value={mark}
                                                        checked={marks[question.id] === mark}
                                                        onChange={() => handleMarkChange(question.id, mark)}
                                                    />
                                                    {mark}
                                                </label>
                                            );
                                        })}
                                    </fieldset>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button onClick={handleSaveMarks}>Save</button>

            {percentage && (
                <div>
                    <h3>Percentage: {percentage}%</h3>
                </div>
            )}
        </div>
    );
};

export default Questionnaire;


















// const Questionnaire = () => {
//   const [questions] = useState([
//     { id: 1, text: 'Question 1: Lorem ipsum dolor sit amet?' },
//     { id: 2, text: 'Question 2: Consectetur adipiscing elit?' },
//     { id: 3, text: 'Question 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?' },
//     { id: 4, text: 'Question 4: Ut enim ad minim veniam?' },
//     { id: 5, text: 'Question 5: Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?' },
//   ]);

//   const [marks, setMarks] = useState({});

//   const handleMarkChange = (questionId, mark) => {
//     setMarks(prevMarks => ({
//       ...prevMarks,
//       [questionId]: mark,
//     }));
//   };

//   const handleSaveMarks = () => {
//     // Simulate saving marks to backend (for demonstration)
//     console.log('Marks:', marks);
//     alert('Marks saved successfully!');
//   };

//   return (
//     <div>
//       <h2>Questionnaire</h2>
//       <p>Student Name: John Doe</p> {/* Replace with actual student data */}
//       <p>Class: 10</p> {/* Replace with actual student data */}
//       <p>Category: A</p>
//       <p>Roll Number: 12345</p> {/* Replace with actual student data */}

//       <h3>Socio-Emotional Development Questions</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Question</th>
//             <th>Grading (1-10)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {questions.map(question => (
//             <tr key={question.id}>
//               <td>{question.text}</td>
//               <td>
//                 <fieldset>
//                   <legend>Mark for Question {question.id}</legend>
//                   {[...Array(10)].map((_, index) => {
//                     const mark = index + 1;
//                     return (
//                       <label key={mark}>
//                         <input
//                           type="radio"
//                           name={`mark_${question.id}`}
//                           value={mark}
//                           checked={marks[question.id] === mark}
//                           onChange={() => handleMarkChange(question.id, mark)}
//                         />
//                         {mark}
//                       </label>
//                     );
//                   })}
//                 </fieldset>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button onClick={handleSaveMarks}>Save Marks</button>
//     </div>
//   );
// };

// export default Questionnaire;














// const Questionnaire = () => {
//   const [questions] = useState([
//     { id: 1, text: 'Question 1: Lorem ipsum dolor sit amet?' },
//     { id: 2, text: 'Question 2: Consectetur adipiscing elit?' },
//     { id: 3, text: 'Question 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?' },
//     { id: 4, text: 'Question 4: Ut enim ad minim veniam?' },
//     { id: 5, text: 'Question 5: Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?' },
//   ]);

//   const [marks, setMarks] = useState({});

//   const handleMarkChange = (questionId, mark) => {
//     setMarks(prevMarks => ({
//       ...prevMarks,
//       [questionId]: mark,
//     }));
//   };

//   const handleSaveMarks = () => {
//     // Simulate saving marks to backend (for demonstration)
//     console.log('Marks:', marks);
//     alert('Marks saved successfully!');
//   };

//   return (
//     <div>
//       <h2>Questionnaire</h2>
//       <p>Student Name: John Doe</p> {/* Replace with actual student data */}
//       <p>Class: 10</p> {/* Replace with actual student data */}
//       <p>Category: A</p>
//       <p>Roll Number: 12345</p> {/* Replace with actual student data */}

//       <h3>Socio-Emotional Development Questions</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Question</th>
//             <th>Grading (1-10)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {questions.map(question => (
//             <tr key={question.id}>
//               <td>{question.text}</td>
//               <td>
//                 <input
//                   type="number"
//                   min="1"
//                   max="10"
//                   value={marks[question.id] || ''}
//                   onChange={e => handleMarkChange(question.id, parseInt(e.target.value))}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button onClick={handleSaveMarks}>Save Marks</button>
//     </div>
//   );
// };

// export default Questionnaire;
