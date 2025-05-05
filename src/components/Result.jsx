import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Result.css'; 

const Result = ({ score = 0, totalQuestions = 0 }) => {
  const navigate = useNavigate();

  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      <p>Your score is: {score} out of {totalQuestions}</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
      <button onClick={() => navigate('/quiz')}>Retake Quiz</button>
    </div>
  );
};

export default Result;
