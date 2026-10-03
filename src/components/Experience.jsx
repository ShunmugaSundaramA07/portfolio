import React from 'react';

const experiences = [
  {
    role: "Front-End Developer Intern",
    company: "Bevywise Networks LLP",
    period: "Jul 2025 — Aug 2025",
    location: "Tirunelveli, India",
    description: "Contributed to the development of a real-time UPS Management System, building modern React components to monitor power, battery, and status metrics across active devices.",
    highlights: [
      "Built interactive dashboard cards and components to visualize real-time power, battery level, input/output voltage, and fault data.",
      "Developed device discovery and configuration views for managing connected UPS systems.",
      "Implemented live event log feeds, user authentication, and profile editing workflows.",
      "Debugged and optimized components across multi-browser and multi-screen environments for consistent real-time responsiveness."
    ]
  }
];

const Experience = () => {
  return (
    <div id="experience" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16 border-t border-white/10">

      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-20 lg:mb-32">

        {/* Left Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-3 whitespace-nowrap">
            Work
            <span className="font-light italic text-gray-300 lowercase font-serif pr-4 pt-2 md:pt-4">experience</span>
          </h2>
        </div>

        {/* Right Subtitle */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
            A timeline of my professional work, internship roles, and technical contributions in real-world application development.
          </p>
        </div>
      </div>

      {/* Experience List - Timeline Layout */}
      <div className="flex flex-col gap-16 w-full max-w-5xl mx-auto">
        {experiences.map((exp, idx) => (
          <div 
            key={idx} 
            className="group relative border-l border-gray-800 pl-8 md:pl-12 py-2 transition-colors duration-300 hover:border-[#38bdf8]"
          >
            {/* Timeline Indicator Point */}
            <div className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-gray-700 group-hover:bg-[#38bdf8] transition-colors duration-300" />

            {/* Header: Role & Date */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-[#38bdf8] transition-colors">
                {exp.role}
              </h3>
              <span className="text-[#38bdf8] text-xs md:text-sm font-semibold uppercase tracking-widest">
                {exp.period}
              </span>
            </div>

            {/* Subheader: Company & Location */}
            <div className="text-gray-400 text-sm md:text-base font-medium mb-4">
              {exp.company} &bull; <span className="text-gray-500">{exp.location}</span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6">
              {exp.description}
            </p>

            {/* Key Accomplishments */}
            <ul className="space-y-2">
              {exp.highlights.map((item, itemIdx) => (
                <li key={itemIdx} className="text-gray-400 text-sm flex items-start gap-3">
                  <span className="text-[#38bdf8] mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Experience;