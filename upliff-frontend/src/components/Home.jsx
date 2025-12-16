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
    popup1: "anxiety1.png",
    popup2: "anxiety2.png",
    sections: {
      description:
        "Anxiety disorders are mental health conditions in which the brain remains in a constant state of heightened alert, even when there is no immediate threat. While anxiety is a normal response to stress, anxiety disorders occur when this fear response becomes excessive, persistent, and difficult to control. This ongoing state of worry can affect how a person thinks, feels, behaves, and responds physically, often interfering with daily responsibilities, relationships, and overall quality of life.",

      types: [
        "Generalized Anxiety Disorder ",
        "Panic Disorder",
        "Social Anxiety Disorder",
        "Specific Phobias",
        "Separation Anxiety Disorder"
      ],

      symptoms: [
      { img: "worry.png", caption: "Constant Worry" },
      { img: "restless.png", caption: "Restlessness" },
      { img: "heartbeat.png", caption: "Rapid Heartbeat" },
      { img: "sleep.png", caption: "Sleep Problems" }
    ],

      treatments: [
        "Cognitive Behavioral Therapy (CBT)",
        "Exposure-based therapies",
        "Mindfulness and relaxation techniques",
        "Stress management and lifestyle support",
        "Antidepressants or anti-anxiety medications"
      ]
    }
  },
  {
    id: "depression",
    title: "Depression",
    plantImg: "plant2.png",
    potImg: "pot2.png",
    color: "bg-[#F3E6E6]",
    plantClass: "z-10 w-40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 mt-[53px]",
    potClass: "w-32 mt-[-181px]",
    popup1: "depression1.png",
    popup2: "depression2.png",
    sections: {
      description:
"Depressive disorders are mental health conditions in which individuals experience persistent feelings of sadness, emptiness, or a loss of interest or pleasure in activities. While feeling down is a normal response to life stressors, depression occurs when these low moods become excessive, prolonged, and difficult to manage. This ongoing state can affect how a person thinks, feels, behaves, and functions physically, often interfering with work, and everyday responsibilities.",
      types: [
        "Major Depressive Disorder",
        "Persistent Depressive Disorder (Dysthymia)",
        "Seasonal Affective Disorder",
        "Postpartum Depression",
        "Depressive episodes associated with Bipolar Disorder"

      ],

      symptoms: [
        { img: "sad.png", caption: "Persistent Sadness" },
        { img: "fatigue.png", caption: "Low Energy" },
        { img: "interest.png", caption: "Loss of Interest" },
        { img: "appetite.png", caption: "Appetite Changes" }
      ],

      treatments: [
         "Psychotherapy (CBT or Interpersonal Therapy)",
        "Antidepressant medication",
        "Structured routines and lifestyle changes",
        "Social support and counseling",
        "Crisis intervention when needed"

      ]
    }

  },
  {
    id: "eating",
    title: "Eating Disorders",
    plantImg: "plant3.png",
    potImg: "pot3.png",
    color: "bg-[#E6F2EC]",
    plantClass: "z-10 w-40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 mt-[2px]",
    potClass: "w-32 mt-[-237px]",
    popup1: "eating1.png",
    popup2: "eating2.png",
    sections: {
      description:
"Eating disorders are mental health conditions in which a person’s thoughts and behaviors around food, eating, and body image become unhealthy and persistent. While concern about diet or weight is common, these disorders occur when such behaviors become extreme, rigid, or uncontrollable. This ongoing pattern can affect physical health, emotions, and daily functioning, often leading to serious health complications and reduced quality of life.",
      types: [
        "Anorexia Nervosa",
    "Bulimia Nervosa",
    "Binge-Eating Disorder",
    "Avoidant/Restrictive Food Intake Disorder (ARFID)"

      ],

      symptoms: [
        { img: "food.png", caption: "Disordered Eating" },
      { img: "body.png", caption: "Body Image Distortion" },
      { img: "guilt.png", caption: "Food-Related Guilt" },
      { img: "weight.png", caption: "Weight Changes" }
      ],

      treatments: [
         "Psychotherapy",
    "Nutritional counseling",
    "Medical monitoring",
    "Family-based treatment",
    "Inpatient or outpatient care programs"

      ]
    }
  },
  {
    id: "ptsd",
    title: "PTSD",
    plantImg: "plant4.png",
    potImg: "pot4.png",
    color: "bg-[#E6F2EC]",
    plantClass: "z-10 w-40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 mt-[69px]",
    potClass: "w-32 mt-[-170px]",
    popup1: "ptsd1.png",
    popup2: "ptsd2.png",
    sections: {
      description:
"Post-Traumatic Stress Disorder is a mental health condition that develops after experiencing or witnessing a traumatic event. While stress reactions after trauma are normal, PTSD occurs when these responses become persistent, intense, and difficult to control. This ongoing state can affect how a person thinks, feels, behaves, and responds physically, often interfering with daily life and relationships.",
      types: [
        "Acute PTSD",
    "Chronic PTSD",
    "Complex PTSD (C-PTSD)"

      ],

      symptoms: [
        { img: "flashback.png", caption: "Flashbacks" },
      { img: "nightmare.png", caption: "Nightmares" },
      { img: "alert.png", caption: "Hypervigilance" },
      { img: "numb.png", caption: "Emotional Numbness" }
      ],

      treatments: [
        "Trauma-focused cognitive behavioral therapy",
    "Eye Movement Desensitization and Reprocessing (EMDR)",
    "Medication such as antidepressants",
    "Grounding and coping techniques",
    "Support groups and ongoing therapy"

      ]
    }
  },
  {
    id: "psychotic",
    title: "Psychotic Disorders",
    plantImg: "plant5.png",
    potImg: "pot5.png",
    color: "bg-[#E6F2EC]",
    plantClass: "z-10 w-40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 mt-[-3px]",
    potClass: "w-32 mt-[-249px]",
    popup1: "psychotic1.png",
    popup2: "psychotic2.png",
    sections: {
      description:
"Psychotic disorders are mental health conditions in which a person’s perception of reality is disrupted, often involving hallucinations, delusions, or disorganized thinking. While brief confusion or misperceptions can be normal, psychotic disorders occur when these experiences become persistent and impair functioning. This ongoing disruption can affect how a person thinks, feels, behaves, and interacts socially, often interfering with daily responsibilities and quality of life.",
      types: [
       "Schizophrenia",
    "Schizoaffective Disorder",
    "Brief Psychotic Disorder",
    "Delusional Disorder"

      ],

      symptoms: [
        { img: "hallucination.png", caption: "Hallucinations" },
      { img: "delusion.png", caption: "Delusions" },
      { img: "confused.png", caption: "Disorganized Thinking" },
      { img: "withdrawl.png", caption: "Social Withdrawal" }
      ],

      treatments: [
        "Antipsychotic medication",
    "Psychotherapy",
    "Coordinated specialty care",
    "Social skills training",
    "Long-term mental health support"

      ]
    }
  },
  {
    id: "personality",
    title: "Personality Disorders",
    plantImg: "plant6.png",
    potImg: "pot6.png",
    color: "bg-[#E6F2EC]",
    plantClass: "z-10 w-40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 mt-[60px]",
    potClass: "w-32 mt-[-176px]",
    popup1: "personality1.png",
    popup2: "personality2.png",
    sections: {
      description:
"Personality disorders are mental health conditions in which long-term patterns of thinking, feeling, and behaving differ markedly from cultural expectations. While everyone has unique personality traits, these disorders occur when patterns become inflexible, maladaptive, and cause distress. This ongoing condition can affect how a person thinks, feels, behaves, and interacts with others, often interfering with relationships and social functioning.",
      types: [
        "Cluster A (odd or eccentric behaviors)",
    "Cluster B (dramatic, emotional, or impulsive behaviors)",
    "Cluster C (anxious or fearful behaviors)"

      ],

      symptoms: [
        { img: "relationships.png", caption: "Relationship Struggles" },
      { img: "emotion.png", caption: "Emotional Instability" },
      { img: "impulse.png", caption: "Impulsivity" },
      { img: "identity.png", caption: "Identity Issues" }
      ],

      treatments: [
         "Long-term psychotherapy",
    "Dialectical Behavior Therapy (DBT)",
    "Cognitive Behavioral Therapy (CBT)",
    "Medication for symptom management",
    "Consistent support systems"

      ]
    }
  },
];

const [activePlant, setActivePlant] = useState(null);


  return (
    <div className="w-full font-lexend bg-cream">

      {/* HERO SECTION */}
      <div className="relative w-full h-[850px]">
        <video
        src="heroVid.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover fade-video"
      />


        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 mt-[60px]">
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


        <div className="relative bg-cream py-14 overflow-hidden">
        <img src="bggreen.png" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"/>
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
        onClick={() => window.scrollTo(0, 0)}
        >
        schedule an appointment
        </Link>
        .
    </p>

    </div>

    {activePlant && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      
      {/* Modal */}
      <div className="bg-cream relative w-[70vw] h-[75vh] bg-[#F6FBF8] rounded-3xl shadow-xl overflow-hidden">

        {/* Close button */}
        <button
          onClick={() => setActivePlant(null)}
          className="absolute top-4 right-4 text-2xl font-bold text-darkGreen1 hover:opacity-70"
        >
          ✕
        </button>

        {/* Scrollable content */}
        <div className="h-full overflow-y-auto p-9">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT SIDE — text */}
            <div>
              <h3 className="text-4xl font-bold text-darkGreen1 mb-6">
                {activePlant.title}
              </h3>

              <div className="space-y-5 text-lg text-darkGreen1">
                <p>
                  <span className="font-semibold"></span>{" "}
                  {activePlant.sections.description}
                </p>
              </div>
              
              {/* IMAGE SPACE */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="">
                   <img
                    src={activePlant.popup1}
                    alt={activePlant.popup1}
                    className="w-90 bg-green-100 rounded-xl flex items-center justify-center"
                  />
                </div>
                <div className="">
                  <img
                    src={activePlant.popup2}
                    alt={activePlant.popup2}
                    className="w-90 bg-green-100 rounded-xl flex items-center justify-center"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — text  */}
            <div className="flex flex-col justify-between">
              <div className="space-y-3 text-lg text-darkGreen1">
              <div>
                <span className="font-semibold">Types:</span>
                <ul className="list-disc list-inside mt-2">
                  {activePlant.sections.types.map((type, i) => (
                    <li key={i}>{type}</li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-semibold">Treatments:</span>
                <ul className="list-disc list-inside mt-2">
                  {activePlant.sections.treatments.map((treatment, i) => (
                    <li key={i}>{treatment}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
            <span className="font-semibold text-lg">Symptoms:</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
              {activePlant.sections.symptoms.map((symptom, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={symptom.img}
                    alt={symptom.caption}
                    className="w-90 h-20 object-contain mb-6"
                  />
                  <p className="text-sm text-darkGreen1">{symptom.caption}</p>
                </div>
              ))}
            </div>
          </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )}



      {/* MISSION */}
      <div className="text-darkGreen1 text-center mt-[80px] px-6">
        <h1 className="text-6xl font-bold mb-8">Our Mission</h1>
        <p className="text-xl max-w-6xl mx-auto mb-[80px]">
          We are dedicated to improving mental health awareness and breaking the stigma surrounding mental health conditions by providing accessible resources, meaningful education, and supportive spaces for learning and connection. Too often, mental health struggles are misunderstood, minimized, or hidden due to fear and stigma, preventing individuals from seeking the help they deserve. Our mission is rooted in the belief that mental health is just as important as physical health, and that understanding is the first step toward healing.
        </p>
        <p  className="text-xl max-w-6xl mx-auto mb-[80px]">
          Through clear information, visual storytelling, and community-centered support, we aim to make mental health topics easier to understand and less intimidating to explore. We strive to create a safe, inclusive environment where individuals feel seen, validated, and empowered to seek help in ways that work best for them. By fostering awareness, empathy, and open conversation, we hope to encourage early support, reduce isolation, and inspire a culture where mental well-being is prioritized and openly discussed.
        </p>
      </div>


      {/* TESTIMONIALS */}
        <div className=" rounded-lg bg-darkGreen1 relative overflow-hidden mt-[80px] ">
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
