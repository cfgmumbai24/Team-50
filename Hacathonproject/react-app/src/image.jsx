import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "./components/navbar";
import './styles.css';

function Image() {
    const [questions, setQuestions] = useState([
        {
            "text": "What will you do?",
            "images": [
                {
                    "url": "spilling.jpg",
                    "label": "Spill"
                },
                {
                    "url": "clean.webp",
                    "label": "Clean"
                }
            ],
            "correctImageUrl": "clean.webp"
        },
        {
            "text": "What will you do?",
            "images": [
                {
                    "url": "breaking.webp",
                    "label": "Breaking"
                },
                {
                    "url": "planting.webp",
                    "label": "Planting"
                }
            ],
            "correctImageUrl": "planting.webp"
        }
    ]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        const getQuestions = async () => {
            try {
                const res = await axios.get("http://localhost:5001/getQuestions");
                setQuestions(res.data.slice(0, 5));
            } catch (err) {
                console.log(err);
            }
        };
        getQuestions();
    }, []);

    const handleCheckboxChange = (image) => {
        setSelectedImage(image);
        setFeedback(''); // Reset the feedback when a new image is selected
    };

    const handleSubmit = () => {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedImage && selectedImage.url === currentQuestion.correctImageUrl) {
            setFeedback('Correct! You can proceed to the next question.');
        } else {
            setFeedback('Incorrect selection. Moving to the next question.');
            setTimeout(handleNextQuestion, 2000); // Move to the next question after 2 seconds
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedImage(null);
            setFeedback(''); // Reset the feedback for the next question
        } else {
            setFeedback('You have completed all the questions!');
        }
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <>
            <Navbar />
            <br />
            <br />
            <div className="questions-container">
                <div className="question">
                    <p>{currentQuestion.text}</p>
                    <div className="images">
                        {currentQuestion.images.map((image, imgIndex) => (
                            <div key={imgIndex} className="image-checkbox">
                                <img
                                    src={image.url}
                                    alt={`Question ${currentQuestionIndex + 1} Image ${imgIndex + 1}`}
                                    className="image"
                                />
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedImage === image}
                                        onChange={() => handleCheckboxChange(image)}
                                    />

                                    {image.label}
                                </label>
                            </div>
                        ))}
                    </div>
                    {selectedImage && (
                        <button onClick={handleSubmit} class="button-10" role="button">Submit</button>
                    )}
                    {feedback && (
                        <div>{feedback}</div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Image;
