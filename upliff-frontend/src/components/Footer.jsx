import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-lexend">
      <div className="
        max-w-7xl mx-auto p-6
        grid grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-4
        gap-8
      ">

        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <img
            src="bpatheme.png"
            alt="bpaLogo"
            className="max-w-[180px] md:max-w-[250px] h-auto"
          />
        </div>

        {/* Member Names */}
        <div className="text-center md:text-left">
          <h1 className="text-lg font-semibold mb-2">Member Names</h1>
          <p className="text-sm">Smruthi G – Visual Design Manager</p>
          <p className="text-sm">Tanvi N – Frontend Developer</p>
          <p className="text-sm">Shriya K – Backend Developer</p>
        </div>

        {/* Member IDs */}
        <div className="text-center md:text-left">
          <h1 className="text-lg font-semibold mb-2">Member IDs</h1>
          <p className="text-sm">00134904</p>
          <p className="text-sm">00134922</p>
          <p className="text-sm">00134914</p>
        </div>

        {/* Chapter Info */}
        <div className="text-center md:text-left">
          <h1 className="text-lg font-semibold mb-2">CTEC BPA Chapter</h1>
          <p className="text-sm">Website Theme: Mental Health Awareness Campaign</p>
          <p className="text-sm">BPA Theme: Amplify Your Impact</p>
          <p className="text-sm">Centennial High School</p>
          <p className="text-sm">Frisco, Texas</p>
          <p className="text-sm">2025–2026</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
