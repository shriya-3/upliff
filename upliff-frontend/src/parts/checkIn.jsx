import React, { useState } from "react";
export default function EmotionCheckInModal() {
  const emotions = [
    "Happy", "Sad", "Angry", "Anxious", "Excited", "Calm", "Frustrated", "Lonely", "Content", "Overwhelmed"
  ];

  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [intensity, setIntensity] = useState(5);
  const [reflection, setReflection] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!selectedEmotion) return;
    setSubmitted(true);
  };

  const handleRestart = () => {
    setSelectedEmotion("");
    setIntensity(5);
    setReflection("");
    setSubmitted(false);
  };

  return (
      <div className="bg-white rounded-2xl p-6 w-full max-w-l shadow-xl flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-darkGreen1 text-center">Emotion Check-In</h2>

        {!submitted ? (
          <>
            {/* Emotion Selection */}
            <div>
              <p className="font-medium mb-2">Select your current emotion:</p>
              <div className="grid grid-cols-2 gap-2">
                {emotions.map((emo) => (
                  <button
                    key={emo}
                    onClick={() => setSelectedEmotion(emo)}
                    className={`px-3 py-2 rounded-xl border ${
                      selectedEmotion === emo ? "bg-blue-500 text-white" : "bg-gray-100"
                    } hover:bg-blue-200 transition`}
                  >
                    {emo}
                  </button>
                ))}
              </div>
            </div>

            {/* Intensity Slider */}
            <div className="flex flex-col mt-4">
              <label htmlFor="intensity" className="font-medium mb-1">
                Intensity: {intensity}/10
              </label>
              <input
                id="intensity"
                type="range"
                min="1"
                max="10"
                value={intensity}
                onChange={(e) => setIntensity(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Optional Reflection */}
            <textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="Optional: write a brief reflection..."
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-darkGreen1 mt-2"
            />

            <button
              onClick={handleSubmit}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <p className="text-center text-lg font-medium">You selected:</p>
            <div className="bg-blue-50 p-4 rounded-xl shadow text-center">
              <p className="font-semibold text-lg">{selectedEmotion}</p>
              <p>Intensity: {intensity}/10</p>
              {reflection && <p className="mt-2 text-gray-700">"{reflection}"</p>}
            </div>
            <button
              onClick={handleRestart}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
            >
              Check Again
            </button>
          </>
        )}

      </div>
  );
}