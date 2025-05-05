import React from 'react';

const QuestionCard = ({ question, options, answer, onAnswer }) => {
  return (
    <div className="question-card">
      <h2>{question}</h2>
      {options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => onAnswer(option === answer)}
          style={{ display: 'block', margin: '10px auto' }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
