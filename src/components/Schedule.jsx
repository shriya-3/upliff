import React from "react";
import { Link } from "react-router-dom"; 

function Home() {
  return (
    <div className="w-full">

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

        <div className="w-full bg-darkGreen1 py-20 px-6 md:px-12 font-lexend">

        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Personalized Matching Quiz</h2>
            <p className="text-lg text-white mx-auto">
            Answer questions so we can match you with the best therapist for your needs.
            </p>

            <button className="mt-8 bg-darkGreen1 text-white px-6 py-3 rounded-xl font-semibold hover:bg-darkGreen transition">
            Start Quiz
            </button>
        </div>
        </div>


        {/* THERAPISTS */}
        <div className="w-full bg-white py-20 px-6 md:px-12 font-lexend">

        <h2 className="text-4xl font-bold text-darkGreen1 text-center mb-10">
            Meet Our Therapists
        </h2>

        <div className="flex overflow-x-auto space-x-6 pb-4 ">
            
            <div className="min-w-[280px] bg-[#f5f2e8] rounded-xl shadow-md p-6 ">
            <img src="/therapist1.png" alt="" className="w-full rounded-xl mb-4" />
            <h3 className="text-xl font-semibold text-darkGreen1">Dr. Maya Patel</h3>
            <p className="text-sm opacity-80">Anxiety • Stress • Teen Mental Health</p>
            <p className="mt-2 text-sm opacity-70">
                Known for warm and grounded guidance.
            </p>
            </div>


        </div>
        </div>



    </div>
  );
}

export default Home;
