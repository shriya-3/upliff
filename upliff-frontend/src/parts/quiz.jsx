import { useEffect, useState } from "react";

/* ---------------- CONFIG ---------------- */

const ANSWERS = [
  { label: "Strongly Disagree", value: 0 },
  { label: "Disagree", value: 1 },
  { label: "Neutral", value: 2 },
  { label: "Agree", value: 4 },
  { label: "Strongly Agree", value: 5 },
];

const SEVERITY = [
  { max: 20, label: "Low likelihood", color: "bg-green-400" },
  { max: 40, label: "Mild", color: "bg-yellow-400" },
  { max: 60, label: "Moderate", color: "bg-orange-400" },
  { max: 100, label: "High likelihood", color: "bg-red-400" },
];

const QUESTIONS = [
  { text: "I have little interest or pleasure in doing activities I used to enjoy.", condition: "Depression" },
  { text: "I experience physical symptoms like restlessness or sweaty palms.", condition: "Anxiety" },
  { text: "I have a reduced need for sleep.", condition: "Personality Disorders" },
  { text: "I have episodes of overeating followed by guilt.", condition: "Eating Disorders" },
  { text: "I experience hallucinations others do not.", condition: "Psychosis" },



  { text: "I have noticed changes in my appetite or sleep pattern.", condition: "Depression" },
  { text: "I procrastinate or avoid dealing with important things.", condition: "Depression" },

  { text: "I often worry a lot about minor issues.", condition: "Anxiety" },
  { text: "I believe I have a good future outlook.", condition: "Anxiety", reverse: true },

  { text: "I switch between depressive and energetic states.", condition: "Personality Disorders" },

  { text: "I am very concerned with food intake or weight.", condition: "Eating Disorders" },
  { text: "I engage in compensatory behaviors like excessive exercise or vomiting.", condition: "Eating Disorders" },

  { text: "I cannot get beyond long-past traumatic events or losses.", condition: "PTSD" },
  { text: "I experience flashbacks or intrusive memories.", condition: "PTSD" },

  { text: "I have difficulty organizing my thoughts into speech.", condition: "Psychosis" },
  { text: "I feel like people are watching or paying special attention to me.", condition: "Psychosis" },
];

/* ---------------- HELPERS ---------------- */

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);
const getSeverity = (score) => SEVERITY.find((s) => score <= s.max);

/* ---------------- COMPONENT ---------------- */

export default function MentalHealthQuiz() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setQuestions(shuffle(QUESTIONS));
  }, []);

  const handleAnswer = (value) => {
    const q = questions[index];
    const adjusted = q.reverse ? 5 - value : value;

    setScores((prev) => ({
      ...prev,
      [q.condition]: (prev[q.condition] || 0) + adjusted,
    }));

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg max-w-3xl mx-auto my-12">

      {/* ================= START SCREEN ================= */}
      {!started && (
        <div className="p-8 text-center ">
          <h2 className="text-2xl font-semibold">
            Self-Reflection Quiz
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            This short quiz is designed to help you reflect on how you’ve been
            feeling recently. It is <strong>not a diagnosis</strong>, but a way to
            better understand yourself and explore supportive resources.
          </p>
          <img src="./magnifying.png" alt="Magnifying glass" className="mx-auto md:mx-0 w-64 h-64 justify-self-center"/>


          <button
            onClick={() => setStarted(true)}
            className="mt-4 inline-flex items-center justify-center rounded-full 
                       bg-pink-300 px-8 py-3 text-black font-medium
                       hover:bg-pink-400 transition"
          >
            Start Quiz
          </button>
          <p className="mt-4 text-gray-500 text-sm">
            You can stop at any time. There are no right or wrong answers.
          </p>

   
        </div>
      )}

      {/* ================= SUMMARY ================= */}
      {started && finished && (
        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-semibold">
            Your Self-Reflection Summary
          </h2>

          <p className="text-sm text-gray-600">
            <strong>This quiz is not a diagnosis.</strong> It is a self-reflection
            tool meant to help you explore how you’re currently feeling and guide
            you toward supportive resources.
          </p>

          {Object.entries(scores).map(([condition, score]) => {
            const severity = getSeverity(score);
            return (
              <div key={condition}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{condition}</span>
                  <span>{severity.label}</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`${severity.color} h-3 rounded-full transition-all`}
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            );
          })}

          <p className="pt-4 text-sm text-gray-600">
            If any of these areas feel concerning or overwhelming, consider
            reaching out to a trusted person or mental health professional and
            explore our <strong>resources</strong> below.
          </p>
        </div>
      )}

      {/* ================= QUIZ ================= */}
      {started && !finished && questions.length > 0 && (
        <div className="max-w-xl mx-auto p-6 space-y-6">
          <p className="text-sm text-gray-500">
            Question {index + 1} of {questions.length}
          </p>

          <h3 className="text-lg font-medium">
            {questions[index].text}
          </h3>

          <div className="space-y-2">
            {ANSWERS.map((a) => (
              <button
                key={a.label}
                onClick={() => handleAnswer(a.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-2 
                           text-left hover:bg-teal-50 hover:border-teal-300 transition"
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
