'use client';

import { useGSAP } from '@gsap/react';
import { FC, RefObject, useRef, useState } from 'react';

import Reveal from '@/components/ui/Reveal';
import gsap from '@/lib/gsapConfig';

import Section from '../Section';

type AlistigoProps = {
  ref: RefObject<HTMLDivElement | null>;
};

const AlistigoPart1: FC<AlistigoProps> = ({ ref }) => {
  const dotRef = useRef(null);
  const dateRef = useRef(null);

  const animationRef = useRef(null);

  const [reveal, setReveal] = useState(false);

  useGSAP(() => {
    // Pin global
    gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top top',
        end: '+300%',
        scrub: 1,
        pin: true,
      },
    });

    // Reveal the date when the section is visible
    gsap.timeline({
      scrollTrigger: {
        trigger: dateRef.current,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setReveal(true),
      },
    });
  });

  return (
    <Section ref={ref} className="relative flex flex-col">
      {/* Animation*/}
      <Section ref={animationRef} className="relative flex flex-row items-center">
        <div className="w-1/2"></div>
        <div className="w-1/2 flex flex-col items-center">
          <Reveal trigger={reveal}>
            <h1 className="text-7xl">{'Alistigo'}</h1>
          </Reveal>
        </div>
      </Section>

      {/* Element absolute */}
      <div className="absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row w-1/5">
        <Reveal trigger={reveal}>
          <h3 ref={dateRef} className="text-3xl">
            {'mai 2023'}
          </h3>
        </Reveal>
      </div>
      <div
        ref={dotRef}
        className="absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 rounded-full bg-white"
      />
    </Section>
  );
};

const AlistigoPart2: FC<AlistigoProps> = ({ ref }) => {
  const squareRef = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: '+500%',
          scrub: 1,
          pin: true,
        },
      })
      .from(squareRef.current, { rotate: 360 });
  });

  return (
    <Section ref={ref} className="relative flex flex-col">
      <div
        ref={squareRef}
        className="absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 bg-red-400"
      />
    </Section>
  );
};

const AlistigoPart3: FC<AlistigoProps> = ({ ref }) => {
  const dotRef = useRef(null);
  const dateRef = useRef(null);

  const [reveal, setReveal] = useState(false);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top top',
        end: '+100%',
        scrub: 1,
        pin: true,
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: dateRef.current,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setReveal(true),
      },
    });
  });

  return (
    <Section ref={ref}>
      {/* Element absolute */}
      <div className="absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row w-1/5">
        <Reveal trigger={reveal}>
          <h3 ref={dateRef} className="text-3xl">
            {'Sept 2022'}
          </h3>
        </Reveal>
      </div>
      <div
        ref={dotRef}
        className="absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 rounded-full bg-white"
      />
    </Section>
  );
};

export { AlistigoPart1, AlistigoPart2, AlistigoPart3 };
