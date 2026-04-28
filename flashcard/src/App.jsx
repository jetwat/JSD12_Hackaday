import React, { useState } from "react";
import Header from "./components/Header";
import Flashcard from "./components/Flashcard";
import Results from "./components/Results";
import { DECK } from "./mock-data/data";



export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const categories = ["All", ...new Set(DECK.map((card) => card.category))];
  const activeDeck = DECK.filter(
    (card) => selectedCategory === "All" || card.category === selectedCategory,
  );

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    restartQuiz();
  };

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);

    if (currentIndex + 1 < activeDeck.length) {
      setCurrentIndex((prev) => prev + 1);
      setShowAnswer(false);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 font-sans text-slate-800">
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {activeDeck.length === 0 ? (
        <p className="text-slate-500 text-center mt-10">No cards available.</p>
      ) : quizFinished ? (
        <Results
          score={score}
          totalCards={activeDeck.length}
          onRestart={restartQuiz}
        />
      ) : (
        <Flashcard
          card={activeDeck[currentIndex]}
          currentIndex={currentIndex}
          totalCards={activeDeck.length}
          showAnswer={showAnswer}
          score={score}
          onReveal={() => setShowAnswer(true)}
          onNext={handleNextQuestion}
        />
      )}
    </div>
  );
}
