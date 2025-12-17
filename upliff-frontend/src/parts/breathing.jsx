import React, { useState, useEffect } from "react";

export default function Breathing() {
  const [step, setStep] = useState(0); // 0=start, 1=inhale, 2=hold, 3=exhale, 4=finished
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [circleScale, setCircleScale] = useState(1);

  const stepsDurations = [0, 4, 7, 8]; // seconds

  useEffect(() => {
    if (step === 0 || step === 4) return;

    setSecondsLeft(stepsDurations[step]);

    // Determine target scale
    let targetScale = 1;
    if (step === 1 || step === 2) targetScale = 1.5; // inhale & hold
    if (step === 3) targetScale = 0.8;                // exhale

    // Apply scale change with CSS transition
    setCircleScale(targetScale);

    // Countdown timer
    const interval = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setStep(step + 1);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [step]);

  const handleStart = () => setStep(1);
  const handleRestart = () => setStep(1);

  const getStepText = () => {
    switch (step) {
      case 1: return "Inhale";
      case 2: return "Hold";
      case 3: return "Exhale";
      case 4: return "Finished! Click the circle to repeat";
      default: return "";
    }
  };

  // Determine transition duration in seconds
  const transitionDuration = step > 0 && step < 4 ? `${stepsDurations[step]}s` : "0s";

  return (
    <section className="bg-red-100 py-20 px-6 rounded-2xl bg-white shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8">
        <h2 className="text-2xl font-semibold mb-4">
          4-7-8 Breathing
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-700">
          Follow this simple breathing exercise to help reduce anxiety and feel grounded.
        </p>

        <div className="flex flex-col items-center space-y-6">
          {step > 0 && <p className="text-lg mb-8 font-medium">{getStepText()}</p>}

          <div
            onClick={step === 4 ? handleRestart : undefined}
            className="flex items-center justify-center w-32 h-32 bg-blue-200 rounded-full shadow-xl text-2xl font-bold text-gray-700 cursor-pointer"
            style={{
              transform: `scale(${circleScale})`,
              transition: `transform ${transitionDuration} linear`,
            }}
          >
            {secondsLeft > 0 ? secondsLeft : step === 4 ? "↻" : ""}
          </div>

          {step === 0 && (
            <div className="pt-12">
              <button
                onClick={handleStart}
                className="px-10 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
              >
                Start
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
