import React, { useState } from "react";

const therapists = [
  /* Anxiety */
  {
    id: 1,
    name: "Dr. Aisha Khan",
    gender: "female",
    specialties: ["Anxiety", "panic", "ocd", "phobias"],
    img: "/therapist_f1.png",
    bio: {
      approach:
        "Warm and collaborative, helping clients break avoidance patterns and reduce intrusive thoughts while strengthening emotional resilience.",
      experience: "12 years clinical experience",
      credentials: "Ph.D., Licensed Clinical Psychologist",
      modalities: "CBT, Exposure Response Prevention (ERP)"
    }
  },
  {
    id: 2,
    name: "Dr. Daniel Kim",
    gender: "male",
    specialties: ["Anxiety", "stress"],
    img: "/therapist_m1.png",
    bio: {
      approach:
        "Structured, practical guidance emphasizing coping strategies, measurable progress, and stress reduction for high-performance individuals.",
      experience: "10 years clinical experience",
      credentials: "Psy.D., Licensed Psychologist",
      modalities: "CBT, Stress-Management Interventions"
    }
  },

  /* Depression / Bipolar */
  {
    id: 3,
    name: "Dr. Isabella Martinez",
    gender: "female",
    specialties: ["Depression", "bipolar"],
    img: "/therapist_f2.png",
    bio: {
      approach:
        "Supportive care focused on mood stabilization, rebuilding motivation, and improving daily functioning through collaborative planning.",
      experience: "14 years clinical experience",
      credentials: "Ph.D., Licensed Psychologist",
      modalities: "CBT, Interpersonal Therapy (IPT)"
    }
  },
  {
    id: 4,
    name: "Dr. Marcus Johnson",
    gender: "male",
    specialties: ["Depression", "mood"],
    img: "/therapist_m2.png",
    bio: {
      approach:
        "Encouraging approach focusing on behavioral activation, restoring purpose, and building sustainable routines.",
      experience: "11 years clinical experience",
      credentials: "LPC, Licensed Clinical Counselor",
      modalities: "Solution-Focused Therapy, Behavioral Activation"
    }
  },

  /* Eating Disorders */
  {
    id: 5,
    name: "Dr. Chloe Nguyen",
    gender: "female",
    specialties: ["Eating", "body-image"],
    img: "/therapist_f3.png",
    bio: {
      approach:
        "Empowering care centered on body acceptance, emotional healing, and healthy relationships with food.",
      experience: "9 years clinical experience",
      credentials: "Ph.D., CEDS, Licensed Psychologist",
      modalities: "CBT-E, Family-Based Therapy"
    }
  },
  {
    id: 6,
    name: "Dr. Ethan Rossi",
    gender: "male",
    specialties: ["Eating", "body-image"],
    img: "/therapist_m3.png",
    bio: {
      approach:
        "Structured and accountability-focused, helping clients regain control, build coping skills, and reduce compulsive eating patterns.",
      experience: "8 years clinical experience",
      credentials: "Psy.D., Licensed Psychologist",
      modalities: "CBT-E, DBT Skills"
    }
  },

  /* PTSD */
  {
    id: 7,
    name: "Dr. Layla Hassan",
    gender: "female",
    specialties: ["PTSD", "trauma"],
    img: "/therapist_f4.png",
    bio: {
      approach:
        "Gentle, trauma-informed care emphasizing emotional safety, grounding, and gradual processing to restore trust.",
      experience: "13 years clinical experience",
      credentials: "LCSW, Licensed Clinical Social Worker",
      modalities: "EMDR, Somatic Grounding"
    }
  },
  {
    id: 8,
    name: "Dr. Noah Clarke",
    gender: "male",
    specialties: ["PTSD", "trauma"],
    img: "/therapist_m4.png",
    bio: {
      approach:
        "Direct, grounded approach helping clients confront avoidance, build stability, and take structured steps toward recovery.",
      experience: "12 years clinical experience",
      credentials: "Ph.D., Licensed Psychologist",
      modalities: "Trauma-Focused CBT, Exposure Work"
    }
  },

  /* Psychotic Disorders */
  {
    id: 9,
    name: "Dr. Meera Shah",
    gender: "female",
    specialties: ["Psychotic", "schizophrenia"],
    img: "/therapist_f5.png",
    bio: {
      approach:
        "Structured treatment supporting coping, daily functioning, and emotional regulation while partnering with medical providers.",
      experience: "15 years clinical experience",
      credentials: "Ph.D., Licensed Psychologist",
      modalities: "CBT-P, Medication Adherence Coaching"
    }
  },
  {
    id: 10,
    name: "Dr. Caleb White",
    gender: "male",
    specialties: ["Psychotic", "schizophrenia"],
    img: "/therapist_m5.png",
    bio: {
      approach:
        "Warm, stabilizing presence helping clients manage sensory overwhelm, improve relationships, and build a predictable daily rhythm.",
      experience: "11 years clinical experience",
      credentials: "Psy.D., Licensed Psychologist",
      modalities: "Supportive Psychotherapy, Psychoeducation"
    }
  },

  /* Personality Disorders */
  {
    id: 11,
    name: "Dr. Priya Rao",
    gender: "female",
    specialties: ["Personality", "bpd"],
    img: "/therapist_f6.png",
    bio: {
      approach:
        "Warm, attentive support helping clients build emotional regulation, repair relationships, and develop insight.",
      experience: "10 years clinical experience",
      credentials: "Ph.D., Licensed Psychologist",
      modalities: "DBT, Mindfulness-Based Therapy"
    }
  },
  {
    id: 12,
    name: "Dr. Lucas Rivera",
    gender: "male",
    specialties: ["Personality", "bpd"],
    img: "/therapist_m6.png",
    bio: {
      approach:
        "Encouraging care supporting self-understanding, relationship stability, and long-term emotional resilience.",
      experience: "7 years clinical experience",
      credentials: "LPC, Licensed Clinical Counselor",
      modalities: "DBT Skills, Supportive Therapy"
    }
  }
];

export default function Home() {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [match, setMatch] = useState(null);

  const questions = [
    {
      field: "condition",
      text: "Which symptom best describes what you experience most?",
      options: [
        "Anxiety",
        "Depression",
        "Eating",
        "PTSD",
        "Psychotic",
        "Personality"
      ]
    },
    {
      field: "duration",
      text: "How long have you experienced this?",
      options: [
        "Under 1 month",
        "1–6 months",
        "6–12 months",
        "1+ year",
        "Several years"
      ]
    },
    {
      field: "impact",
      text: "How much does this impact your daily functioning?",
      options: [
        "Mild — noticeable but manageable",
        "Moderate — interferes sometimes",
        "Significant — affects many areas",
        "Severe — affects most areas"
      ]
    },
    {
      field: "goals",
      text: "What is your biggest goal for therapy?",
      options: [
        "Reduce symptoms",
        "Improve daily functioning",
        "Understand myself deeply",
        "Improve relationships",
        "Reduce emotional instability",
        "Develop confidence"
      ]
    }
  ];

  const select = (field, value) => {
    setResponses((prev) => ({ ...prev, [field]: value }));
  };

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const submit = () => {
    let best = null;
    let scoreBest = -1;

    therapists.forEach((t) => {
      let score = 0;

      if (t.specialties.includes(responses.condition)) score += 5;

      if (responses.goals === "Reduce symptoms" && t.bio.modalities.includes("CBT"))
        score += 3;
      if (responses.goals === "Understand myself deeply" && t.bio.modalities.includes("Mindfulness"))
        score += 3;

      if (score > scoreBest) {
        best = t;
        scoreBest = score;
      }
    });

    setMatch(best);
  };

  const goToCalendar = () => {
    console.log("Navigate to calendar here");
  };

  return (
    <div className="w-full font-lexend">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[500px] bg-cream"> 
        
        {/* Text */}
        <div className="relative w-full h-[65vh] flex items-center justify-center px-10 ml-[450px]">
            {/* Text */}
            <div className="font-lexend flex flex-col justify-center text-darkGreen1 w-1/2">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">SCHEDULE AN APPOINTMENT</h1>
                <p className="text-base md:text-2xl">
                Find balance. Find support.
                </p>
                <p className="text-base md:text-2xl">
                Match with our expert therapists.
                </p>
            </div>

            {/* Image */}
            <div className="w-1/2 flex justify-center mr-[800px] mb-[40px]">
                <img 
                src="/scheduleGiraffe.png" 
                alt="Schedule" 
                className="max-w-[80%] h-auto rounded-lg"
                />
            </div>
        </div>
    </div>


      {/* Features */}
      {/* QUIZ  */}
        <div className="w-full bg-white py-10 px-6 md:px-12 font-lexend">

        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl text-black mb-4 mt-[20px] mb-[40px]">Our Therapists Are Trusted & Acclaimed for Their Excellence</h2>
            <img src="/scheduleAward.png" alt="Hero" className="w-[120%] h-[120%] mb-[30px]" />

        </div>
        </div>

      {/* QUIZ SECTION */}
      <div className="w-full bg-darkGreen1 py-16 px-6 text-white">
        <h2 className="text-4xl font-bold text-center mb-10">Therapist Match Quiz</h2>

        {!match ? (
          <div className="max-w-3xl mx-auto">
            <p className="text-xl font-semibold mb-6">{questions[step].text}</p>
            <div className="space-y-4">
              {questions[step].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => select(questions[step].field, opt)}
                  className={`w-full py-3 rounded-xl transition ${
                    responses[questions[step].field] === opt
                      ? "bg-white text-darkGreen1 font-bold"
                      : "bg-[#dfe6df] text-darkGreen1"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                disabled={step === 0}
                onClick={back}
                className="bg-white text-darkGreen1 py-2 px-4 rounded-xl disabled:opacity-0"
              >
                Back
              </button>

              {step < questions.length - 1 ? (
                <button
                  onClick={next}
                  disabled={!responses[questions[step].field]}
                  className="bg-white text-darkGreen1 py-2 px-4 rounded-xl"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={submit}
                  disabled={!responses[questions[step].field]}
                  className="bg-white text-darkGreen1 py-2 px-4 rounded-xl"
                >
                  See My Match
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Your Best Match</h3>

            <div className="bg-white text-darkGreen1 p-6 rounded-xl shadow-xl text-left">
              <img src={match.img} className="rounded-xl w-64 mx-auto mb-4" />
              <p className="text-2xl font-bold">{match.name}</p>
              <p className="mt-3"><strong>Approach:</strong> {match.bio.approach}</p>
              <p className="mt-1"><strong>Experience:</strong> {match.bio.experience}</p>
              <p className="mt-1"><strong>Credentials:</strong> {match.bio.credentials}</p>
              <p className="mt-1"><strong>Modalities:</strong> {match.bio.modalities}</p>
            </div>

            <div className="flex justify-between mt-10">
              <button
                onClick={() => {
                  setMatch(null);
                  setResponses({});
                  setStep(0);
                }}
                className="bg-white text-darkGreen1 py-2 px-6 rounded-xl"
              >
                Retake Quiz
              </button>

              <button
                onClick={goToCalendar}
                className="bg-white text-darkGreen1 py-2 px-6 rounded-xl"
              >
                Confirm & Schedule
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Therapist Cards */}
      <div className="bg-white py-20 px-6">
        <h2 className="text-4xl font-bold text-darkGreen1 text-center mb-10">
          Meet Our Therapists
        </h2>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {therapists.map((t) => (
            <div key={t.id} className="min-w-[380px] bg-[#f5f2e8] rounded-xl shadow p-6 text-left">
              <img src={t.img} className="w-full rounded-xl mb-4" />
              <h3 className="text-xl font-bold text-darkGreen1">{t.name}</h3>
              <p className="text-sm opacity-80 capitalize">
                <strong>Specialties:</strong> {t.specialties.join(", ")}
              </p>
              <p className="mt-2"><strong>Approach:</strong> {t.bio.approach}</p>
              <p className="mt-1"><strong>Experience:</strong> {t.bio.experience}</p>
              <p className="mt-1"><strong>Credentials:</strong> {t.bio.credentials}</p>
              <p className="mt-1"><strong>Modalities:</strong> {t.bio.modalities}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
