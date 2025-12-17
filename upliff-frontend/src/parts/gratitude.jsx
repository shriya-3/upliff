import React, { useState, useEffect } from "react";


export default function GratitudeJar() {
  const [entries, setEntries] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddEntry = () => {
    if (!inputValue.trim()) return;
    setEntries([...entries, inputValue.trim()]);
    setInputValue("");
  };

  const handleClear = () => {
    setEntries([]);
  };

  return (
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Gratitude Jar</h2>
        <p className="text-gray-700 mb-4">
          Write down things you're grateful for and watch them fill your jar
        </p>

        {/* Jar Container */}
        <div className="relative w-48 h-64 mx-auto bg-blue-50 rounded-t-xl border-b-8 border-blue-200 overflow-hidden mb-4 shadow-inner">
          {entries.map((entry, idx) => (
            <div
              key={idx}
              className={`absolute left-1/2 transform -translate-x-1/2 bg-yellow-200 px-2 py-1 rounded shadow text-xs 
                animate-float`}
              style={{
                bottom: `${idx * 22}px`,
                transform: `translateX(-50%) rotate(${(idx % 3 - 1) * 5}deg)`,
              }}
            >
              {entry}
            </div>
          ))}
        </div>

        {/* Input and Buttons */}
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="I am grateful for..."
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <div className="flex justify-between space-x-2">
            <button
              onClick={handleAddEntry}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
            >
              Add
            </button>
            <button
              onClick={handleClear}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition"
            >
              Clear
            </button>
          </div>
        </div>


      </div>
  );
}