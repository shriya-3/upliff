import React, { useState, useEffect } from "react";


export default function SelfLoveBingoModal() {
  // Define a 3x3 bingo board with self-love prompts
  const initialTiles = [
    { text: "Write one nice thing about yourself", done: false },
    { text: "Take 3 deep breaths", done: false },
    { text: "Compliment a friend", done: false },
    { text: "Look outside and notice something beautiful", done: false },
    { text: "Stretch for 1 minute", done: false },
    { text: "Say 'I am enough' out loud", done: false },
    { text: "Drink a glass of water mindfully", done: false },
    { text: "Write down one thing you accomplished today", done: false },
    { text: "Do something kind for yourself", done: false },
  ];

  const [tiles, setTiles] = useState(initialTiles);

  const toggleTile = (index) => {
    const newTiles = [...tiles];
    newTiles[index].done = !newTiles[index].done;
    setTiles(newTiles);
  };

  // Optional: check if a line is completed (row, col, or diagonal)
  const isLineComplete = () => {
    // Rows
    for (let i = 0; i < 3; i++) {
      if (tiles[i * 3].done && tiles[i * 3 + 1].done && tiles[i * 3 + 2].done) return true;
    }
    // Columns
    for (let i = 0; i < 3; i++) {
      if (tiles[i].done && tiles[i + 3].done && tiles[i + 6].done) return true;
    }
    // Diagonals
    if (tiles[0].done && tiles[4].done && tiles[8].done) return true;
    if (tiles[2].done && tiles[4].done && tiles[6].done) return true;

    return false;
  };

  const lineComplete = isLineComplete();

  return (
    <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl flex flex-col items-center space-y-4">
    <h2 className="text-2xl font-bold text-darkGreen1 text-center">Self-Love Bingo</h2>
    <p className="text-center text-gray-600 mb-2">
        Click a tile to complete a self-love activity!
    </p>

    <div className="grid grid-cols-3 gap-4 w-full">
        {tiles.map((tile, idx) => (
        <button
            key={idx}
            onClick={() => toggleTile(idx)}
            className={`p-4 rounded-xl border transition duration-300
            ${tile.done ? "bg-pink-200 border-pink-400 line-through" : "bg-blue-50 hover:bg-blue-100 border-blue-200"}`}
        >
            <p className="text-sm text-center">{tile.text}</p>
        </button>
        ))}
    </div>

    {lineComplete && (
        <p className="text-green-600 font-semibold mt-2 animate-pulse">
        🎉 You completed a line! 🎉
        </p>
    )}


    </div>
  );
}