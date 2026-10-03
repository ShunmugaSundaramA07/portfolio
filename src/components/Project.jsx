import React from 'react';

const projects = [
  {
    name: 'SignVerse — AI Accessibility Platform',
    title: (
      <>
        SIGNVERSE{' '}
        <span className="font-light italic text-gray-300 lowercase font-serif">
          ai
        </span>
        <br />
        ACCESSIBILITY PLATFORM
      </>
    ),
    description:
      'An AI-powered accessibility platform designed to bridge communication between Indian Sign Language (ISL) users and non-signers. Built with React, Node.js, Firebase, Google Gemini API, and MediaPipe, it features real-time sign recognition, speech-to-text, and translation history.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'BloodLine — Emergency Blood Coordination Platform',
    title: (
      <>
        BLOODLINE
        <br />
        EMERGENCY PLATFORM
      </>
    ),
    description:
      'An emergency blood coordination platform that matches urgent blood requests with eligible nearby donors based on blood group, location, and availability. Built with FastAPI, React, PostgreSQL, n8n, and Twilio, it automates donor outreach, WhatsApp/SMS escalation, and real-time response tracking.',
    image:
      'https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'Inventory Management App — Salesforce & Automation',
    title: (
      <>
        INVENTORY
        <br />
        MANAGEMENT APP
      </>
    ),
    description:
      'A Salesforce-based inventory management application built using Apex, Custom Objects, and Platform Events. It features an event-driven architecture to process inventory updates asynchronously, automating stock tracking and streamlining operational workflows on the Salesforce platform.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop',
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16 scroll-mt-20"
    >
      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-20 lg:mb-32">
        {/* Left Giant Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-3 whitespace-nowrap">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pr-4 pt-2 md:pt-4">
              work
            </span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
            As a developer using modern ideas, simplicity design, and practical
            solutions tailored to real-world and market needs.
          </p>
        </div>
      </div>

      {/* Projects List - Alternating Layout */}
      <div className="flex flex-col gap-24 lg:gap-40 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={proj.name}
              className={`flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center justify-between gap-12 lg:gap-16 w-full group`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-sm">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-5/12 flex flex-col items-start">
                <span className="text-[#38bdf8] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                  0{idx + 1}
                </span>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-6">
                  {proj.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                  {proj.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;