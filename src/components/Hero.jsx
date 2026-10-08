import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import centerImage from '../assets/hero_assets/hero_center.png';

const Hero = ({ onPreloadComplete }) => {
  const [text, setText] = useState('SUNDAR');

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const onPreloadCompleteRef = useRef(onPreloadComplete);

  // Keep the latest callback without restarting the animation effect.
  onPreloadCompleteRef.current = onPreloadComplete;

  useEffect(() => {
    window.scrollTo(0, 0);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const target = 'PORTFOLIO';
    const start = 'SUNDAR';

    let iterations = 0;
    let intervalId = null;
    let timeoutId = null;
    let isMounted = true;
    let animationStarted = false;

    // GSAP context ensures animations are reverted during cleanup.
    const ctx = gsap.context(() => {}, containerRef);

    const imageLoadPromise = new Promise((resolve) => {
      const img = new window.Image();
      img.src = centerImage;

      if (img.complete) {
        resolve();
      } else {
        img.onload = resolve;
        img.onerror = resolve;
      }
    });

    const delayPromise = new Promise((resolve) => {
      timeoutId = setTimeout(resolve, 1000);
    });

    Promise.all([imageLoadPromise, delayPromise]).then(() => {
      if (!isMounted || animationStarted) return;

      intervalId = setInterval(() => {
        if (!isMounted) {
          clearInterval(intervalId);
          return;
        }

        setText(
          target
            .split('')
            .map((letter, index) => {
              if (index < Math.floor(iterations)) {
                return target[index];
              }

              if (index < start.length) {
                return start[index];
              }

              return '';
            })
            .join('')
        );

        if (iterations >= target.length) {
          clearInterval(intervalId);
          intervalId = null;

          if (animationStarted) return;
          animationStarted = true;

          ctx.add(() => {
            const isMobile = window.innerWidth < 768;

            const tl = gsap.timeline({
              onComplete: () => {
                if (!isMounted) return;

                document.body.style.overflow = previousOverflow;

                if (onPreloadCompleteRef.current) {
                  onPreloadCompleteRef.current();
                }
              },
            });

            tl.to(
              containerRef.current,
              {
                top: isMobile ? '20%' : '45%',
                duration: 1.5,
                ease: 'power3.inOut',
              },
              '+=0.2'
            );

            tl.fromTo(
              subtitleRef.current,
              {
                y: 50,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power3.out',
              },
              '-=1.0'
            );

            tl.fromTo(
              imageRef.current,
              {
                y: '100vh',
              },
              {
                y: 0,
                duration: 1.5,
                ease: 'power3.out',
              },
              '-=1.2'
            );
          });
        }

        iterations += 1 / 3;
      }, 50);
    });

    return () => {
      isMounted = false;

      clearTimeout(timeoutId);
      clearInterval(intervalId);

      // Stop and revert all GSAP animations created in this effect.
      ctx.revert();

      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end justify-center bg-cover bg-center bg-no-repeat overflow-hidden scroll-mt-20"
      style={{
        background: 'radial-gradient(circle, #222222 0%, #000000 80%)',
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div
        ref={containerRef}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none flex flex-col items-start w-max"
      >
        <h1
          ref={textRef}
          className="text-[16vw] md:text-[10rem] lg:text-[14rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl pr-4 md:pr-8 leading-none uppercase"
        >
          {text}
        </h1>

        <p
          ref={subtitleRef}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:-bottom-12 md:left-8 text-white text-base md:text-2xl lg:text-4xl drop-shadow-md z-10 opacity-0 w-max"
        >
          <span className="font-bold">CSE STUDENT</span>{' '}
          <br><span className="font-light italic text-gray-300">
            Salesforce Enthusiast
          </span></br>
        </p>
      </div>

      <div
        ref={imageRef}
        className="relative z-10 text-center text-white flex flex-col items-center w-full pointer-events-none"
        style={{ transform: 'translateY(100vh)' }}
      >
        <img
          src={centerImage}
          alt="Hero Center Graphic"
          className="w-full max-w-md object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        />
      </div>
    </section>
  );
};

export default Hero;
