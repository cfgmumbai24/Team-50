import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    const fetchId = async () => {
      try {
        const res = await axios.get("http://localhost:5001/ID");
        setId(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchId();
  }, []);

  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, newQuestion.trim()]);
      setNewQuestion('');
    }
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const handleEditQuestion = (index) => {
    setEditIndex(index);
    setEditText(questions[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedQuestions = questions.map((question, i) =>
      i === index ? editText : question
    );
    setQuestions(updatedQuestions);
    setEditIndex(-1);
    setEditText('');
  };
  function handleSubmit() {
    axios.post("http://localhost:5001/socio_test", { id, questions }).then(res => {
      console.log("successful");
    }).catch(error => {
      console.error('There was an error submitting the questions!', error);
    });
  }

  return (
    <div className="App">
      <h1>Questions:{id}</h1>
      <ul className="question-list">
        {questions.map((question, index) => (
          <li key={index} className="question-item">
            {editIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span className="question-text">{question}</span>
            )}
            <div className="buttons">
              {editIndex === index ? (
                <button onClick={() => handleSaveEdit(index)}>Save</button>
              ) : (
                <>
                  <button onClick={() => handleEditQuestion(index)}>Edit</button>
                  <button onClick={() => handleDeleteQuestion(index)}>Delete</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="input-container">
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Add a new question"
        />
        <button onClick={handleAddQuestion}>Add</button>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
