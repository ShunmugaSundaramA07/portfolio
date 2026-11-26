import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const expertise = [
    'Salesforce',
    'Web Development',
    'AI / ML',
    'Robotic Process Automation',
  ];

  const lampPositions = [180, 560, 940, 1300];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-fade', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          once: true,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white px-6 md:px-16 pt-8 md:pt-10 pb-4 overflow-hidden"
    >
      {/* Animated Night Road & Lightposts SVG Scene */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 520"
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
        >
          <defs>
            {/* Ambient cyan sky/horizon glow */}
            <radialGradient id="nightSkyGlow" cx="50%" cy="82%" r="65%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.55" />
              <stop offset="45%" stopColor="#0369a1" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            {/* Streetlamp light cone gradient */}
            <linearGradient id="lampConeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.65" />
              <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>

            {/* Road surface gradient */}
            <linearGradient id="roadSurfaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06121e" />
              <stop offset="100%" stopColor="#0c263c" />
            </linearGradient>

            {/* Sky blue bottom bar gradient */}
            <linearGradient id="skyBlueBottomBar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Subtle ambient horizon backdrop */}
          <rect width="1440" height="520" fill="url(#nightSkyGlow)" />

          {/* Distant city skyline silhouette */}
          <path
            d="M0 405 L0 375 L45 375 L45 355 L95 355 L95 380 L150 380 L150 340 L210 340 L210 372 L280 372 L280 350 L340 350 L340 385 L430 385 L430 335 L490 335 L490 370 L580 370 L580 352 L650 352 L650 382 L740 382 L740 345 L810 345 L810 378 L900 378 L900 338 L965 338 L965 372 L1060 372 L1060 354 L1130 354 L1130 380 L1220 380 L1220 342 L1290 342 L1290 374 L1380 374 L1380 356 L1440 356 L1440 405 Z"
            fill="#07192c"
            opacity="0.9"
          />

          {/* Streetlamp Posts & Glowing Cones */}
          {lampPositions.map((x, idx) => (
            <g key={x}>
              {/* Light cone */}
              <polygon
                className="footer-lamp-cone"
                style={{ animationDelay: `${idx * 0.9}s` }}
                points={`${x + 26},245 ${x - 75},405 ${x + 125},405`}
                fill="url(#lampConeGrad)"
              />

              {/* Ground light pool */}
              <ellipse
                cx={x + 25}
                cy="406"
                rx="78"
                ry="7"
                fill="#38bdf8"
                opacity="0.25"
              />

              {/* Pole */}
              <path
                d={`M ${x} 405 L ${x} 258 Q ${x} 244 ${x + 14} 244 L ${x + 32} 244`}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.7"
              />

              {/* Lamp fixture + glowing bulb */}
              <rect
                x={x + 18}
                y="241"
                width="18"
                height="5"
                rx="2.5"
                fill="#7dd3fc"
              />
              <ellipse
                cx={x + 27}
                cy="247"
                rx="8"
                ry="3"
                fill="#ffffff"
                filter="url(#softGlow)"
              />
            </g>
          ))}

          {/* Road Surface */}
          <rect x="0" y="405" width="1440" height="65" fill="url(#roadSurfaceGrad)" />

          {/* Glowing Cyan Top Curb Line */}
          <line
            x1="0"
            y1="405"
            x2="1440"
            y2="405"
            stroke="#38bdf8"
            strokeWidth="2.5"
            filter="url(#softGlow)"
          />

          {/* Dashed Lane Divider */}
          <line
            x1="0"
            y1="432"
            x2="1440"
            y2="432"
            stroke="#7dd3fc"
            strokeWidth="2"
            strokeDasharray="28 24"
            opacity="0.6"
          />

          {/* Sky Blue Bottom Band for Copyright & Back to Top */}
          <rect x="0" y="468" width="1440" height="52" fill="url(#skyBlueBottomBar)" />
        </svg>

        {/* Top fade into black so the transition from Contact stays seamless */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/25 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-7">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* About / Profile */}
          <div className="footer-fade flex flex-col items-start gap-3">
            <h2 className="text-xl font-bold tracking-wide">
              SUNDAR AYYAPAN
            </h2>

            <p className="text-gray-300 text-sm">
              Final-Year CSE Student | Developer
            </p>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Passionate about building modern web applications,
              exploring AI technologies, and solving real-world problems.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-5 mt-2">
              <a
                href="https://github.com/ShunmugaSundaramA07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-sm text-gray-300 hover:text-sky-400 transition-all duration-300 hover:-translate-y-1"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shunmuga-sundaram-a-3080102a1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-sm text-gray-300 hover:text-sky-400 transition-all duration-300 hover:-translate-y-1"
              >
                LinkedIn
              </a>

              <a
                href="mailto:shunmugasundar07@gmail.com"
                aria-label="Email"
                className="text-sm text-gray-300 hover:text-sky-400 transition-all duration-300 hover:-translate-y-1"
              >
                Email
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-fade flex flex-col items-start gap-3">
            <h3 className="text-base font-semibold text-white">
              Quick Links
            </h3>

            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-sky-400 hover:translate-x-1 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Expertise */}
          <div className="footer-fade flex flex-col items-start gap-3">
            <h3 className="text-base font-semibold text-white">
              Expertise
            </h3>

            {expertise.map((skill) => (
              <span
                key={skill}
                className="text-sm text-gray-400 hover:text-sky-400 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative Name - Typewriter */}
        <div className="footer-fade w-full flex justify-center overflow-hidden py-1">
          <div className="fx-typewriter" aria-label="SUNDAR">
            SUNDAR
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-fade mt-20 md:mt-24 border-t border-black pt-2 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-semibold text-black">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} SUNDAR AYYAPAN.
            All Rights Reserved.
          </p>

          <a
            href="#home"
            className="group flex items-center gap-1 text-black hover:opacity-75 transition-all duration-300"
          >
            Back to Top
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:-translate-y-1"
            >
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;