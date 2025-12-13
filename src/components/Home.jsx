import { useState } from "react";
import { Link } from "react-router-dom";

const mentalHealthTopics = [
  {
    id: "anxiety",
    title: "Anxiety",
    color: "bg-[#E6F2EC]",
    description:
      "Anxiety involves persistent worry, fear, or nervousness that can interfere with daily life. While occasional anxiety is normal, chronic anxiety may cause physical symptoms such as restlessness, racing thoughts, muscle tension, and fatigue. Treatment often includes therapy, grounding techniques, and skill-building to manage triggers."
  },
  {
    id: "depression",
    title: "Depression",
    color: "bg-[#F2EDE6]",
    description:
      "Depression is more than sadness. It can affect mood, energy, motivation, sleep, and self-worth. People may experience hopelessness, loss of interest, or emotional numbness. With proper support, therapy, and care, individuals can regain stability and meaning."
  },
  {
    id: "stress",
    title: "Chronic Stress",
    color: "bg-[#E8EEF5]",
    description:
      "Stress becomes harmful when it is prolonged and unmanaged. Chronic stress can impact physical health, concentration, mood, and relationships. Learning stress regulation, boundaries, and recovery practices is key to long-term well-being."
  },
  {
    id: "trauma",
    title: "Trauma & PTSD",
    color: "bg-[#F1E7F5]",
    description:
      "Trauma can result from distressing experiences and may lead to symptoms like hypervigilance, avoidance, flashbacks, or emotional numbing. Trauma-informed therapy focuses on safety, stabilization, and gradual healing."
  },
  {
    id: "selfesteem",
    title: "Self-Esteem",
    color: "bg-[#EAF4EC]",
    description:
      "Low self-esteem affects how we view ourselves and our worth. It can influence relationships, decision-making, and confidence. Therapy helps individuals build self-compassion, resilience, and a healthier self-image."
  },
  {
    id: "burnout",
    title: "Burnout",
    color: "bg-[#F5ECEC]",
    description:
      "Burnout is emotional, mental, and physical exhaustion caused by prolonged stress. Common signs include detachment, fatigue, and reduced motivation. Recovery involves rest, boundaries, and reconnecting with values."
  }
];

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const testimonials = [
  {
    text: "Upliff helped me understand what I was feeling instead of ignoring it. The resources felt calm and not overwhelming.",
    author: "High School Student",
    context: "Anxiety Support"
  },
  {
    text: "I didn’t realize how burnt out I was until I started reading through the site. It felt validating instead of judgmental.",
    author: "College Student",
    context: "Burnout & Stress"
  },
  {
    text: "The way mental health topics are explained made it feel approachable. I finally felt comfortable asking for help.",
    author: "Teen User",
    context: "Mental Health Awareness"
  },
  {
    text: "Upliff doesn’t make you feel rushed. Everything feels gentle, supportive, and easy to understand.",
    author: "Parent",
    context: "Family Support"
  },
  {
    text: "The design alone made me feel calmer. The content made me feel seen.",
    author: "Anonymous User",
    context: "User Experience"
  }
];

  return (
    <div className="w-full font-lexend">

      {/* HERO SECTION */}
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px]">
        <img
          src="/homeHero.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 mt-[100px]">
          <h1 className="text-5xl md:text-8xl font-bold mb-2">UPLIFF</h1>
          <p className="text-base md:text-2xl max-w-xl">
            Explore. Grow. Upliff.
          </p>
          <Link
            to="/resources"
            className="mt-6 px-6 py-3 bg-stone-100 text-black font-semibold rounded hover:bg-zinc-300 transition"
          >
            Start Your Journey
          </Link>
        </div>
      </div>

      {/* MISSION */}
      <div className="text-darkGreen1 text-center mt-[80px] px-6">
        <h1 className="text-6xl font-bold mb-8">Our Mission</h1>
        <p className="text-xl max-w-4xl mx-auto mb-[80px]">
          We are dedicated to improving mental health awareness and breaking the
          stigma surrounding mental health issues through accessible resources,
          community support, education, and more. Our goal is to create a safe
          and inclusive environment where individuals feel seen and empowered
          to seek help in ways that work for them.
        </p>
      </div>

      {/* WHAT IS MENTAL HEALTH */}
      <div className="text-white bg-darkGreen1 text-center py-[100px] px-6">
        <h1 className="text-6xl font-bold mb-12">
          What is Mental Health?
        </h1>

        <p className="text-xl max-w-4xl mx-auto mb-[120px]">
          Mental health is a part of our everyday lives, even if we don’t notice it.
          It influences our ability to think, feel, make decisions, and perceive the
          world around us. It is just as important to maintain mental health as it is
          to maintain physical health. If you or someone you know is struggling,
          consider{" "}
          <Link
            to="/schedule"
            className="font-bold underline underline-offset-4 hover:opacity-80"
          >
            scheduling an appointment
          </Link>
          .
        </p>

        {/* TILE GRID */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentalHealthTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic)}
              className={`rounded-2xl p-8 text-darkGreen1 shadow-lg hover:shadow-xl transition text-left ${topic.color}`}
            >
              <h3 className="text-2xl font-bold mb-2">{topic.title}</h3>
              <p className="opacity-80">
                Learn about symptoms, causes, and support options.
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* FULL SCREEN POPUP */}
      {selectedTopic && (
        <div className="fixed inset-0 z-50 bg-cream flex flex-col mt-[52px]">

          {/* TOP BAR */}
          <div className="flex items-center px-8 py-6">
            <button
              onClick={() => setSelectedTopic(null)}
              className="text-darkGreen1 font-semibold text-lg hover:opacity-70 transition"
            >
              ← Back
            </button>
          </div>

          {/* POPUP CONTENT */}
          <div className="flex-1 flex items-center justify-center px-6 pb-16 overflow-y-auto">
            <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-12">

              <h2 className="text-5xl font-bold text-darkGreen1 mb-6">
                {selectedTopic.title}
              </h2>

              <div className="w-20 h-1 bg-darkGreen1 rounded mb-8"></div>

              <p className="text-lg leading-8 text-darkGreen1">
                {selectedTopic.description}
              </p>

              <div className="mt-12">
                <Link
                  to="/schedule"
                  className="inline-block px-8 py-4 bg-darkGreen1 text-white font-semibold rounded-xl hover:opacity-90 transition"
                >
                  Schedule an Appointment
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* TESTIMONIALS */}
        <div className=" rounded-lg bg-darkGreen relative overflow-hidden mt-[80px] mb-[80px] mr-[200px] ml-[200px]">
        <p className="text-white text-3xl text-center mt-[30px] font-bold ">
                Why our users love Upliff.
              </p>
        {/* Scrolling container */}
        <div className="flex gap-6 px-6 w-max animate-scroll mt-[20px] mb-[20px] ">

            {[...testimonials, ...testimonials].map((review, index) => (
            <div
                key={index}
                className="min-w-[320px] max-w-[320px] bg-white rounded-2xl shadow-lg p-6 text-left"
            >
                <p className="text-darkGreen1 text-lg mb-4 leading-relaxed">
                “{review.text}”
                </p>

                <p className="text-sm font-semibold text-darkGreen1">
                — {review.author}
                </p>

                <p className="text-sm opacity-60">
                {review.context}
                </p>
            </div>
            ))}

        </div>
        </div>


    </div>
  );
}
