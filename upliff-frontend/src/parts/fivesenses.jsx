import React, { useState } from "react";
export default function FiveSensesModal() {
  const senses = [
    { name: "See", prompt: "Name 5 things you can see around you.", slots: 5 },
    { name: "Hear", prompt: "Name 4 things you can hear.", slots: 4 },
    { name: "Feel", prompt: "Name 3 things you can feel/touch.", slots: 3 },
    { name: "Smell", prompt: "Name 2 things you can smell.", slots: 2 },
    { name: "Taste", prompt: "Name 1 thing you can taste.", slots: 1 },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [inputs, setInputs] = useState(Array(senses[0].slots).fill(""));

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const nextStep = () => {
    if (currentStep < senses.length - 1) {
      setCurrentStep(currentStep + 1);
      setInputs(Array(senses[currentStep + 1].slots).fill(""));
    } else {
      setCurrentStep(senses.length); // completed
    }
  };

  return (
      <div className="bg-white rounded-2xl p-6 w-full max-w-l shadow-xl flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-darkGreen1 text-center">5 Senses Grounding</h2>

        {currentStep < senses.length ? (
          <>
            <p className="text-lg font-medium">{senses[currentStep].name}</p>
            <p className="text-gray-700 text-center mb-4">{senses[currentStep].prompt}</p>

            <div className="grid gap-2 w-full">
              {inputs.map((val, idx) => (
                <input
                  key={idx}
                  type="text"
                  value={val}
                  onChange={(e) => handleInputChange(idx, e.target.value)}
                  placeholder={`#${idx + 1}`}
                  className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-darkGreen1"
                />
              ))}
            </div>

            <button
              onClick={nextStep}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
            >
              Next
            </button>
          </>
        ) : (
          <>
            <p className="text-green-600 font-semibold text-center">
              ✅ You completed the 5 Senses Check!
            </p>
            <button
              onClick={() => {
                setCurrentStep(0);
                setInputs(Array(senses[0].slots).fill(""));
              }}
              className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
            >
              Restart
            </button>
          </>
        )}


      </div>
  );
}