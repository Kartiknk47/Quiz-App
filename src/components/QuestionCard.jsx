import React from 'react';
import './QuestionCard.css';

const QuestionCard = ({ question, options, answer, onAnswer }) => {
  const handleClick = (selectedOption) => {
    const isCorrect = selectedOption === answer;
    onAnswer(isCorrect);
  };

  return (
    <div className="question-card">
      <h2>{question}</h2>
      <div className="options-grid">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleClick(option)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
