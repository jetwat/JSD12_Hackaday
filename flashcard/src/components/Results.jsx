import React from "react";

export default function Results({ score, totalCards, onRestart }) {
  return (
    <div className="border border-slate-200 rounded-xl p-8 min-h-[250px] flex flex-col justify-center items-center text-center shadow-lg bg-white">
      <h2 className="text-3xl font-bold mb-4 text-slate-800">Quiz Complete!</h2>
      <p className="text-xl mb-8">
        Score: <span className="font-bold text-blue-600">{score}</span> /{" "}
        {totalCards}
      </p>
      <button
        onClick={onRestart}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
      >
        Restart Quiz
      </button>
    </div>
  );
}
