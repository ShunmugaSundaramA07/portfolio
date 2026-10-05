import React from 'react';
{/* Energy Beam Divider */}
<div className="footer-energy-divider" aria-hidden="true">
  <span className="footer-energy-beam"></span>
  <span className="footer-energy-core">✦</span>
</div>

{/* Bottom Section */}
<div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-black">

  <p className="text-center sm:text-left">
    © {new Date().getFullYear()} SUNDAR AYYAPAN.
    All Rights Reserved.
  </p>

  <a
    href="#home"
    className="flex items-center gap-1 text-black hover:text-sky-400 transition-colors duration-300"
  >
    Back to Top
    <span aria-hidden="true">↑</span>
  </a>

</div>
