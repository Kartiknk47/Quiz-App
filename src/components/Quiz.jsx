import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quizData from '../data';
import QuestionCard from './QuestionCard';
import './Quiz.css';

const Quiz = ({ setScore, setTotalQuestions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setLocalScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (isCorrect) => {
    const updatedScore = isCorrect ? score + 1 : score;
    if (isCorrect) {
      setLocalScore(updatedScore);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Make sure to update parent's score with the final updated score
      setScore(updatedScore);
      setTotalQuestions(quizData.length);
      navigate('/result');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleBackToHomepage = () => {
    navigate('/');
  };

  return (
    <div className="quiz-container">
      <QuestionCard
        question={quizData[currentQuestion].question}
        options={quizData[currentQuestion].options}
        answer={quizData[currentQuestion].answer}
        onAnswer={handleAnswer}
      />
      <div className="quiz-navigation">
        <button
          onClick={handleBack}
          disabled={currentQuestion === 0}
          className="back-button"
        >
          Previous
        </button>
        <button
          onClick={handleBackToHomepage}
          className="back-button"
        >
          Back To Homepage
        </button>
      </div>
    </div>
  );
};

export default Quiz;
