import React, { useState } from "react";

export default function PaperBoatsModal() {
  const [input, setInput] = useState("");
  const [boats, setBoats] = useState([]);

  const addBoat = () => {
    if (!input.trim()) return;
    setBoats([...boats, input.trim()]);
    setInput("");
  };

  return (

      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-darkGreen1 text-center">Paper Boats</h2>
        <p className="text-center text-gray-600">
          Write a distressing thought below, fold it into a “paper boat,” and let it go.
        </p>

        {/* Input + Button */}
        <div className="flex w-full gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write your thought..."
            className="flex-1 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-darkGreen1"
          />
          <button
            onClick={addBoat}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
          >
            Fold
          </button>
        </div>

        {/* Boats Display */}
        <div className="w-full h-64 relative overflow-y-auto border rounded-xl p-2 bg-blue-50 flex flex-col gap-2">
          {boats.map((boat, idx) => (
            <div
              key={idx}
              className="bg-white p-2 rounded-lg shadow cursor-pointer hover:bg-blue-100 transition transform hover:-translate-y-1"
              title="Click to release"
              onClick={() => {
                setBoats(boats.filter((_, i) => i !== idx));
              }}
            >
              <p className="text-sm text-gray-700">{boat}</p>
            </div>
          ))}
          {boats.length === 0 && (
            <p className="text-gray-400 text-center mt-8">No boats yet. Write one above!</p>
          )}
        </div>

        <p className="text-gray-500 text-sm text-center">
          Click a boat to release it 🌊
        </p>


      </div>

  );
}