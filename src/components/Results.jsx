import React from "react";

export default function Results({ score, totalCards, onRestart }) {
  return (
    <div className="border border-slate-200 rounded-xl p-8 min-h-[250px] flex flex-col justify-center items-center text-center shadow-lg bg-yellow-500">
      <h2 className="text-3xl font-bold mb-4 text-white">Quiz Complete! 🎉</h2>
      <p className="text-xl mb-8 text-white">
        Score: <span className="font-extrabold text-white">{score}</span> /{" "}
        {totalCards}
      </p>
      <button
        onClick={onRestart}
        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors shadow-sm"
      >
        Restart Quiz
      </button>
    </div>
  );
}
