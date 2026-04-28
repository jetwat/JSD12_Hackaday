import React from "react";
import { BookOpen } from "lucide-react";

export default function Header({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className="flex justify-between items-center mb-6 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-400 to-green-200 shadow-md">
      {/* Logo / Title */}

      <h2 className="flex items-center gap-2 text-white font-bold text-2xl">
        <BookOpen size={24} />
        StudyDeck
      </h2>

      {/* Dropdown */}
      <div className="relative">
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="appearance-none p-2 pl-4 pr-10 rounded-lg border border-white/30 bg-white/90 backdrop-blur text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 ease-in-out
          hover:scale-105"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Dropdown arrow */}
        <span className="absolute right-3 top-2.5 text-slate-600 pointer-events-none">
          ▼
        </span>
      </div>
    </div>
  );
}
