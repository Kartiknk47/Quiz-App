import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={<Quiz setScore={setScore} setTotalQuestions={setTotalQuestions} />}
        />
        <Route
          path="/result"
          element={<Result score={score} totalQuestions={totalQuestions} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
