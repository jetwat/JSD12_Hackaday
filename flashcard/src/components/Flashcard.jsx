import React from "react";

export default function Flashcard({
  card,
  currentIndex,
  totalCards,
  showAnswer,
  onReveal,
  onNext,
  score,
}) {
  return (
    <div>
      <p className="text-slate-500 text-sm font-medium mb-2">
        Question {currentIndex + 1} of {totalCards}
      </p>

      <div className="border border-slate-200 rounded-xl p-8 min-h-[300px] flex flex-col justify-center items-center text-center shadow-md bg-white transition-all">
        <h3 className="text-2xl font-semibold mb-6 text-slate-800">
          {card.question}
        </h3>

        {showAnswer ? (
          <div className="w-full flex flex-col items-center animate-fade-in">
            <div className="w-full h-px bg-slate-200 my-6"></div>
            <p className="text-lg text-slate-700 mb-8 max-w-md">
              {card.answer}
            </p>
            <div className="flex flex-col items-center gap-3">
              <p className="text-slate-500 text-sm font-medium">
                Did you get it right?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => onNext(true)}
                  className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors shadow-sm w-24"
                >
                  Yes
                </button>
                <button
                  onClick={() => onNext(false)}
                  className="px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-lg transition-colors shadow-sm w-24"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={onReveal}
            className="mt-4 px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded-lg transition-colors"
          >
            Reveal Answer
          </button>
        )}
      </div>

      <p className="mt-6 text-right font-semibold text-slate-700">
        Current Score: <span className="text-blue-600">{score}</span>
      </p>
    </div>
  );
}
