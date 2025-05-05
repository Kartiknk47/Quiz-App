import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quizData from '../data';
import QuestionCard from './QuestionCard';
import './Quiz.css'

const Quiz = ({ setScore, setTotalQuestions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setLocalScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setLocalScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScore(score + (isCorrect ? 1 : 0));
      setTotalQuestions(quizData.length);
      navigate('/result');
    }
  };

  return (
    <div className="quiz-container">
      <QuestionCard
        question={quizData[currentQuestion].question}
        options={quizData[currentQuestion].options}
        answer={quizData[currentQuestion].answer}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
