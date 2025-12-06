import React from "react";
import { Link } from "react-router-dom"; 

function Home() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px]"> 
        <img
          src="/homeHero.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />

        {/* Text */}
        <div className="font-lexend absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 mt-[100px]">
          <h1 className="text-5xl md:text-8xl font-bold mb-2">UPLIFF</h1>
          <p className="text-base md:text-2xl max-w-xl">
            Explore. Grow. Upliff.
          </p>
          <Link
            to="/tours"
            className="mt-6 px-6 py-3 bg-stone-100 text-black font-semibold rounded hover:bg-zinc-300 transition"
          >
            Start Your Journey
          </Link>
        </div>
      </div>

      {/* Features */}
      

    </div>
  );
}

export default Home;
