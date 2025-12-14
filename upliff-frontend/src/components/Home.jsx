import { useState } from "react";
import { Link } from "react-router-dom";



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

const plantTopics = [
  {
    id: "anxiety",
    title: "Anxiety",
    plantImg: "plant1.png",
    potImg: "pot1.png",
    color: "bg-[#E6F2EC]",
    plantClass: "z-10 w-40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105",
    potClass: "w-32 mt-[-226px]",
    sections: {
      feelsLike: "Constant worry, restlessness, racing thoughts, physical tension.",
      why: "The brain stays in a heightened threat response, often from stress or past experiences.",
      myths: "Anxiety is not weakness or overthinking — it’s a nervous system response.",
      helps: "Grounding, breathing, therapy, structured coping skills.",
      support: "When anxiety interferes with daily life or sleep."
    }
  },
  {
    id: "anxiety",
    title: "Anxiety",
    plantImg: "plant2.png",
    potImg: "pot2.png",
    color: "bg-[#E6F2EC]",
    plantClass: "z-10 w-40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 mt-[53px]",
    potClass: "w-32 mt-[-181px]",
    sections: {
      feelsLike: "Constant worry, restlessness, racing thoughts, physical tension.",
      why: "The brain stays in a heightened threat response, often from stress or past experiences.",
      myths: "Anxiety is not weakness or overthinking — it’s a nervous system response.",
      helps: "Grounding, breathing, therapy, structured coping skills.",
      support: "When anxiety interferes with daily life or sleep."
    }
  },
  {
    id: "anxiety",
    title: "Anxiety",
    plantImg: "plant3.png",
    potImg: "pot3.png",
    color: "bg-[#E6F2EC]",
    plantClass: "z-10 w-40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 mt-[2px]",
    potClass: "w-32 mt-[-237px]",
    sections: {
      feelsLike: "Constant worry, restlessness, racing thoughts, physical tension.",
      why: "The brain stays in a heightened threat response, often from stress or past experiences.",
      myths: "Anxiety is not weakness or overthinking — it’s a nervous system response.",
      helps: "Grounding, breathing, therapy, structured coping skills.",
      support: "When anxiety interferes with daily life or sleep."
    }
  },
  {
    id: "anxiety",
    title: "Anxiety",
    plantImg: "plant4.png",
    potImg: "pot4.png",
    color: "bg-[#E6F2EC]",
    plantClass: "z-10 w-40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 mt-[69px]",
    potClass: "w-32 mt-[-170px]",
    sections: {
      feelsLike: "Constant worry, restlessness, racing thoughts, physical tension.",
      why: "The brain stays in a heightened threat response, often from stress or past experiences.",
      myths: "Anxiety is not weakness or overthinking — it’s a nervous system response.",
      helps: "Grounding, breathing, therapy, structured coping skills.",
      support: "When anxiety interferes with daily life or sleep."
    }
  },
  {
    id: "anxiety",
    title: "Anxiety",
    plantImg: "plant5.png",
    potImg: "pot5.png",
    color: "bg-[#E6F2EC]",
    plantClass: "z-10 w-40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 mt-[-3px]",
    potClass: "w-32 mt-[-249px]",
    sections: {
      feelsLike: "Constant worry, restlessness, racing thoughts, physical tension.",
      why: "The brain stays in a heightened threat response, often from stress or past experiences.",
      myths: "Anxiety is not weakness or overthinking — it’s a nervous system response.",
      helps: "Grounding, breathing, therapy, structured coping skills.",
      support: "When anxiety interferes with daily life or sleep."
    }
  },
  {
    id: "anxiety",
    title: "Anxiety",
    plantImg: "plant6.png",
    potImg: "pot6.png",
    color: "bg-[#E6F2EC]",
    plantClass: "z-10 w-40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 mt-[60px]",
    potClass: "w-32 mt-[-176px]",
    sections: {
      feelsLike: "Constant worry, restlessness, racing thoughts, physical tension.",
      why: "The brain stays in a heightened threat response, often from stress or past experiences.",
      myths: "Anxiety is not weakness or overthinking — it’s a nervous system response.",
      helps: "Grounding, breathing, therapy, structured coping skills.",
      support: "When anxiety interferes with daily life or sleep."
    }
  },
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


        <div className="bg-white py-24">
        <h2 className="text-5xl font-bold text-darkGreen1 text-center mb-4">
            Grow Your Understanding
        </h2>
        <p className="text-2xl text-darkGreen1 text-center mb-12">
            Click on each plant to learn about the most common mental illness
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-6 gap-16">
            {plantTopics.map((plant) => (
            <button
                key={plant.id}
                onClick={() => setActivePlant(plant)}
                className="group relative flex flex-col items-center"
            >
                
                {/* Plant */}
                <img
                src={plant.plantImg}
                className={plant.plantClass}
                />

                {/* Pot */}
                <img src={plant.potImg} className={plant.potClass} />

                <p className="mt-4 text-xl font-semibold text-darkGreen1">
                {plant.title}
                </p>
            </button>
            ))}
        </div>

        <p className="text-center text-xl max-w-4xl mx-auto mt-[50px]">
        Mental health is a part of our everyday lives, even if we don’t notice it.
        It influences our ability to think, feel, make decisions, and perceive the
        world around us. It is just as important to maintain mental health as it is
        to maintain physical health because building a good mindset is what empowers
        us to make good decisions. While it is normal for all of us to have our ups
        and downs, if you or someone you know is experiencing frequent mood changes,
        excessive worry, negative thoughts, or any other difficulties,{" "}
        
        <Link
        to="/schedule"
        className="font-bold underline hover:opacity-80"
        >
        schedule an appointment
        </Link>
        .
    </p>

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
