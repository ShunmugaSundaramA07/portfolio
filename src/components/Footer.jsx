
import footerBg from '../assets/Footer/Footer.png';

const Footer = () => {
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

  return (
    <footer className="relative bg-black text-white px-6 md:px-16 py-8 md:py-10 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-bottom w-full h-full scale-[1.2] md:scale-[1.4] origin-bottom translate-y-[8%]"
          style={{ backgroundImage: `url(${footerBg})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-7">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">

          {/* About / Profile */}
          <div className="flex flex-col items-start gap-3">
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
          <div className="flex flex-col items-start gap-3">
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
          <div className="flex flex-col items-start gap-3">
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

        {/* Decorative Name with Animated Border */}
        <div className="w-full text-center overflow-hidden">
          <h1
            className="footer-name-border text-[clamp(2.5rem,7vw,6rem)] font-bold leading-none tracking-tighter text-white"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            SUNDAR
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-300">

          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} SUNDAR AYYAPAN.
            All Rights Reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-1 hover:text-sky-400 transition-colors duration-300"
          >
            Back to Top
            <span aria-hidden="true">↑</span>
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
