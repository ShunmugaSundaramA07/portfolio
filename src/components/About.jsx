import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programmingSkills = ["C", "Python", "Java", "HTML5", "CSS3", "JavaScript (ES6+)", "Apex", "SOQL"];
const coreCsSkills = ["Data Structures & Algorithms", "Object-Oriented Programming Language", "Operating Systems", "Computer Networks", "Database Management System"];
const webSkills = ["Bootstrap", "React.js", "Spring Boot", "Flask", "REST APIs", "Postman", "SDLC", "Debugging", "Git", "Github", "Docker"];
const salesforceSkills = ["Salesforce Admin", "Salesforce Platform Development(APEX, SOQL)", "UiPath", "n8n", "Power Automate", "Blueprism", "Zapier", "Make"];

const aboutWords = [
  { text: "Hey," }, { text: "I'm" },
  { text: "Shunmuga Sundaram A.", className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400" },
  { text: "A" }, { text: "passionate" },
  { text: "Final-Year Computer Science and Engineering student", className: "text-white font-medium" },
  { text: "with" }, { text: "strong" }, { text: "core" }, { text: "knowledge" }, { text: "and" }, { text: "hands-on" }, { text: "experience" }, { text: "in" },
  { text: "Salesforce Administration", className: "text-white font-medium" },
  { text: "and" },
  { text: "Front-End Development", className: "text-white font-medium" },
  { text: "through" }, { text: "internships" }, { text: "and" }, { text: "project" }, { text: "work." },
  { text: "I" }, { text: "am" }, { text: "skilled" }, { text: "in" },
  { text: "Salesforce,", className: "text-white font-medium" },
  { text: "Web Technologies (React.js – Front-End, Spring Boot – Back-End),", className: "text-white font-medium" },
  { text: "and" },
  { text: "AI/ML technologies (OpenCV, TensorFlow, MediaPipe),", className: "text-white font-medium" },
  { text: "along" }, { text: "with" }, { text: "knowledge" }, { text: "of" },
  { text: "Robotic Process Automation (RPA).", className: "text-white font-medium" },
  { text: "Interested" }, { text: "in" }, { text: "developing" }, { text: "modern," }, { text: "responsive" }, { text: "web" }, { text: "applications," }, { text: "exploring" }, { text: "emerging" }, { text: "technologies," }, { text: "and" }, { text: "solving" }, { text: "real-world" }, { text: "problems." },
  { text: "I" }, { text: "bring" }, { text: "strong" },
  { text: "problem-solving, critical thinking, adaptability, and collaboration skills", className: "text-white font-medium" },
  { text: "to" }, { text: "build" }, { text: "efficient" }, { text: "and" }, { text: "user-friendly" }, { text: "software" }, { text: "solutions" }, { text: "while" }, { text: "continuously" }, { text: "expanding" }, { text: "my" }, { text: "technical" }, { text: "expertise." }
];

const About = () => {
  const textRef = useRef(null);
  const introHeadingRef = useRef(null);

  useEffect(() => {
    if (introHeadingRef.current) {
      gsap.fromTo(
        introHeadingRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: introHeadingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { color: '#3f3f46', opacity: 0.2 },
        {
          color: '#ffffff',
          opacity: 1,
          stagger: 0.15,
          ease: 'none',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 75%',
            end: 'bottom 60%',
            scrub: 0.5,
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="min-h-screen bg-[#050505] text-white pt-24 pb-0 px-6 md:px-16 flex flex-col justify-between relative overflow-hidden">

      <div className="max-w-5xl mx-auto w-full z-10">

        {/* Intro Heading Left-Aligned */}
        <h2 
          ref={introHeadingRef} 
          className="text-left text-[14vw] md:text-[9rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none mb-6"
        >
          Intro
        </h2>

        {/* Bio Content Box */}
        <div className="relative bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/[0.07] transition-colors duration-300 text-left">
          <p ref={textRef} className="text-gray-300 text-base md:text-xl lg:text-2xl leading-relaxed font-light">
            {aboutWords.map((wordObj, index) => (
              <React.Fragment key={index}>
                <span className={`word ${wordObj.className || ''}`}>
                  {wordObj.text}
                </span>
                {index < aboutWords.length - 1 && " "}
              </React.Fragment>
            ))}
          </p>
        </div>

      </div>

      {/* Scrolling Skills Marquee */}
      <div className="flex flex-col border-t border-white/5 bg-[#030303] py-4 mt-16 -mx-6 md:-mx-16">
        {/* Row 1 */}
        <div className="flex overflow-hidden whitespace-nowrap mb-2">
          <div className="flex animate-marquee w-max">
            {[...programmingSkills, ...programmingSkills, ...programmingSkills, ...programmingSkills].map((item, i) => (
              <div key={`prog-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse w-max">
            {[...salesforceSkills, ...salesforceSkills, ...salesforceSkills, ...salesforceSkills].map((item, i) => (
              <div key={`sf-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Row 3 */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee w-max">
            {[...coreCsSkills, ...coreCsSkills, ...coreCsSkills, ...coreCsSkills].map((item, i) => (
              <div key={`cs-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Row 4 */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee-reverse w-max">
            {[...webSkills, ...webSkills, ...webSkills, ...webSkills].map((item, i) => (
              <div key={`web-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;