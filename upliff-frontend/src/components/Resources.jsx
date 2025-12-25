import React, { useState, useEffect } from "react";
import Breathing from "../parts/breathing.jsx";
import GratitudeJar from "../parts/gratitude.jsx";
import SelfLoveBingoModal from "../parts/bingo.jsx";
import PaperBoatsModal from "../parts/paperboats.jsx";
import FiveSenses from "../parts/fivesenses.jsx";
import CheckIn from "../parts/checkIn.jsx";
import MentalHealthQuiz from "../parts/quiz.jsx";


export default function Resources() {
  const [activeExercise, setActiveExercise] = useState(null);

  return (
    <div className="bg-cream w-full flex flex-col font-lexend">

      {/* HERO */}
    <div className="relative w-full min-h-[500px] bg-cream flex flex-col items-center pt-32 pb-20">
    
    {/* Header */}
    <h1 className="text-6xl text-darkGreen1 md:text-7xl font-bold mb-12">
        RESOURCES
    </h1>

    {/* Two-column content */}
    <div className="grid grid-cols-1 md:grid-cols-[50%_50%] 
                    w-full max-w-7xl px-6 gap-16 items-center">
        
        {/* Left column */}
        <div className="text-darkGreen1 text-center md:text-left space-y-4">
        <p className="text-base md:text-2xl leading-relaxed">
            Explore our mental health resources, strategies, and interactive tools designed to support your well-being journey. 
            We strongly encourage taking our short self-reflection quiz to have a more personalized experience.
        </p>


        <p className="text-base md:text-2xl leading-relaxed">For immediate help, please refer to:</p>
        <div className="pt-4 text-left">
        <ul className="space-y-4">
        <li className="flex items-start gap-3">
            <i className="fa-solid fa-seedling mt-1 text-darkGreen1"></i>
            <span className="text-gray-700">
            988 Suicide and Crisis Lifeline
            </span>
        </li>

        <li className="flex items-start gap-3">
            <i className="fa-solid fa-seedling mt-1 text-darkGreen1"></i>
            <span className="text-gray-700">
            SAMHSA National Helpline: 1-800-662-HELP (4357)
            </span>
        </li>
            <ul className="ml-8 space-y-2 text-sm text-gray-600">
    <li className="flex items-start gap-2">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-darkGreen1/70"></span>
      <span>Available 24/7</span>
    </li>

  </ul>
        <ul className="space-y-3">
  <li className="flex items-start gap-3">
    <i className="fa-solid fa-seedling mt-1 text-darkGreen1"></i>
    <span>NAMI HelpLine: 1-800-950-NAMI (6264)</span>
  </li>
    <ul className="ml-8 space-y-2 text-sm text-gray-600">
    <li className="flex items-start gap-2">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-darkGreen1/70"></span>
      <span>Text NAMI to 62640</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-darkGreen1/70"></span>
      <span>Available Monday Through Friday, 10:00 AM - 10:00 PM ET</span>
    </li>
  </ul>

  <li className="flex items-start gap-3">
    <i className="fa-solid fa-seedling mt-1 text-darkGreen1"></i>
    <span>Crisis Text Line</span>
  </li>

  {/* Sub-bullets */}
  <ul className="ml-8 space-y-2 text-sm text-gray-600">
    <li className="flex items-start gap-2">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-darkGreen1/70"></span>
      <span>Text HOME to 741741</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-darkGreen1/70"></span>
      <span>Available 24/7</span>
    </li>
  </ul>
</ul>

        </ul>

</div>
        </div>

        {/* Right column */}
        <div className="flex justify-center md:justify-end">
        <MentalHealthQuiz />
        </div>

    </div>

  </div>
    <nav className="sticky top-12 z-50 bg-darkGreen1 text-cream shadow-sm">
    <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-sm font-medium text-center">
        
        <a href="#anxiety" className="nav-btn">Anxiety</a>
        <a href="#depression" className="nav-btn">Depression</a>
        <a href="#eating" className="nav-btn">Eating</a>
        <a href="#ptsd" className="nav-btn">PTSD</a>
        <a href="#psychosis" className="nav-btn">Psychosis</a>
        <a href="#personality" className="nav-btn">Personality</a>

        </div>
    </div>
    </nav>


        


    {/* ANXIETY */}
    <section id="anxiety" className="scroll-mt-32 sm:scroll-mt-24 w-full bg-red-100">
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-16 items-center">

        {/* Left side */}
        <div className="text-center">
        <h2 className="text-3xl text-darkGreen1 font-bold mb-6">
            Anxiety
        </h2>
        <img
            src="/clip_anxiety.png"
            alt="Anxiety"
            className="rounded-2xl mx-auto max-h-72 object-contain"
        />
        </div>

        {/* Right side – tiles */}
        <div className="grid grid-cols-[60%_40%] gap-4">
        {/* 4-7-8 Breathing spans both columns */}
        <Breathing />
          <div className="grid grid-rows-3 gap-4">
    
            <a
                href="https://www.nimh.nih.gov/health/topics/anxiety-disorders"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md hover:border-teal-300 transition"
            >
                <h4 className="font-semibold group-hover:underline">
                    National Institute of Mental Health
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                    Learn about NIMH research on anxiety disorders, symptoms, resources and treatment.
                </p>
                <span className="text-xs text-teal-600 mt-2 inline-block">
                    Visit site →
                </span>
            </a>
            <a
                href="https://www.anxietycanada.com/site-search/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md hover:border-teal-300 transition"
            >
                <h4 className="font-semibold group-hover:underline">
                    Anxiety Canada
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                    Anxiety Canada provides self-help resources for children, youth, adults and educators on anxiety.
                </p>
                <span className="text-xs text-teal-600 mt-2 inline-block">
                    Visit site →
                </span>
            </a>
            <a
                href="https://adaa.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md hover:border-teal-300 transition"
            >
                <h4 className="font-semibold group-hover:underline">
                    Anxiety and Depression Association of America
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                    ADAA is an international nonprofit dedicated to the prevention, treatment, and cure of anxiety disorders.
                </p>
                <span className="text-xs text-teal-600 mt-2 inline-block">
                    Visit site →
                </span>
            </a>



        </div>

        </div>
        </div>
    </section>

    {/* DEPRESSION (REVERSED) */}
    <section id="depression" className="scroll-mt-32 sm:scroll-mt-24 w-full bg-rose-200">
    <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Tiles / resources – on desktop this is left, on mobile below */}
        <div className="order-2 md:order-1 grid grid-cols-[40%_60%] gap-4">
        <div className="grid grid-rows-2 gap-4">
            <a
            href="https://www.hilariousworld.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md hover:border-teal-300 transition"
            >
            <h4 className="font-semibold group-hover:underline">
                The Hilarious World of Depression
            </h4>
            <p className="text-sm text-gray-600 mt-1">
                The Hilarious World of Depression is a series of frank, moving, and, yes, funny conversations with top entertainers who have dealt with depression.
            </p>
            <span className="text-xs text-teal-600 mt-2 inline-block">
                Visit podcast →
            </span>
            </a>
            <a
            href="https://www.nami.org/major-depression/walking-on-a-tight-rope-coping-with-depression/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md hover:border-teal-300 transition"
            >
            <h4 className="font-semibold group-hover:underline">
                Walking on a Tight Rope: Coping with Depression
            </h4>
            <p className="text-sm text-gray-600 mt-1">
                NAMI presents a blog written by Heather Loeb, where she shares her stories of navigating life with depression. She aims to help others feel less alone and lend her voice to those who can't use theirs.
            </p>
            <span className="text-xs text-teal-600 mt-2 inline-block">
                Visit blog →
            </span>
            </a>
        </div>
        <GratitudeJar />
        </div>

        {/* Title / image – on desktop this is right, on mobile on top */}
        <div className="order-1 md:order-2 text-center">
        <h2 className="text-3xl font-bold mb-6">Depression</h2>
        <img
            src="/clip_depression.png"
            alt="Depression"
            className="rounded-2xl mx-auto max-h-72 object-contain"
        />
        </div>

    </div>
    </section>


    {/* EATING DISORDERS */}
    <section id="eating" className="scroll-mt-32 sm:scroll-mt-24 w-full bg-indigo-200">
    <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Image / Title */}
        <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Eating Disorders</h2>
        <img
            src="/clip_eating.png"
            alt="Eating Disorders"
            className="rounded-2xl mx-auto max-h-72 object-contain"
        />
        </div>

        {/* Tiles */}
        <div>
        <div className="w-full flex mb-8 justify-center">
        <SelfLoveBingoModal />

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">

            <a
                href="https://www.eatingdisorderhope.com/treatment-for-eating-disorders/eating-disorder-hotlines"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md hover:border-teal-300 transition"
            >
                <h4 className="font-semibold group-hover:underline">
                    National Alliance for Eating Disorders Helpline
                </h4>

                <span className="text-s text-teal-600 mt-2 inline-block">
                    Call → 1-866-662-1235
                </span>
            </a>

            <a
                href="https://bewellbruin.ucla.edu/resource/national-eating-disorders-helpline"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md hover:border-teal-300 transition"
            >
                <h4 className="font-semibold group-hover:underline">
                    NEDA: Feeding Hope
                </h4>

                <span className="text-s text-teal-600 mt-2 inline-block">
                    For crisis, text "NEDA" to 741741
                </span>
            </a>

        </div>
        </div>
    </div>
    </section>

    {/* PTSD (REVERSED) */}
    <section id="ptsd"className="scroll-mt-32 sm:scroll-mt-24 w-full bg-slate-200">
    <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Tiles (left) */}
        <div className="order-2 md:order-1 grid grid-cols-[70%_30%] gap-4">
            <PaperBoatsModal />

            <a
                href="https://www.ptsd.va.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md hover:border-teal-300 transition"
            >
                <h4 className="font-semibold group-hover:underline">
                    PTSD: National Center for PTSD
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                    Posttraumatic Stress Disorder (PTSD) is a mental health problem that can occur after a traumatic event like war, assault, or disaster. 
                    PTSD treatment can help. <strong>Find handouts, apps, videos, and courses based on current research.</strong> This site provides educational resources 
                    for <strong>Veterans and also for health care providers, researchers, and the general public.</strong>
                </p>
                <span className="text-xs text-teal-600 mt-6 inline-block">
                    Visit site →
                </span>
            </a>


        </div>

        {/* Image / Title */}
        <div className="order-1 md:order-2 text-center md:order-1">
        <h2 className="text-3xl font-bold mb-6">PTSD</h2>
        <img
            src="/clip_ptsd.png"
            alt="PTSD"
            className="rounded-2xl mx-auto max-h-72 object-contain"
        />
        </div>

    </div>
    </section>

    {/* PSYCHOTIC DISORDERS */}
    <section id="psychosis" className="scroll-mt-32 sm:scroll-mt-24 w-full bg-green-200">
    <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Image / Title */}
        <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Psychotic Disorders</h2>
        <img
            src="/clip_psych.png"
            alt="Psychotic Disorders"
            className="rounded-2xl mx-auto max-h-72 object-contain"
        />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
        <FiveSenses />
        <a
            href="https://mentalhealthhotline.org/psychosis-hotline/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md hover:border-teal-300 transition"
        >
            <h4 className="font-semibold group-hover:underline">
                The National Mental Health Hotline, for Psychosis
            </h4>

            <span className="text-s text-teal-600 mt-2 inline-block">
                If struggling with symptoms, call 866-903-3787
            </span>
        </a>
        </div>

    </div>
    </section>

    {/* PERSONALITY DISORDERS (REVERSED) */}
    <section id="personality"className="scroll-mt-32 sm:scroll-mt-24 w-full bg-emerald-200">
    <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Tiles (left) */}
        <div className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-1 gap-8 md:order-2">
        <CheckIn />
        </div>

        {/* Image / Title */}
        <div className="order-1 md:order-2 text-center md:order-2">
        <h2 className="text-3xl font-bold mb-6">Personality Disorders</h2>
        <img
            src="/clip_pers.png"
            alt="Personality Disorders"
            className="rounded-2xl mx-auto max-h-72 object-contain"
        />
        </div>

    </div>
    </section>

    </div>
  );
}
