'use client';

import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { FC, RefObject, useRef, useState } from 'react';

import Card from '@/components/ui/Card';
import Reveal from '@/components/ui/Reveal';
import gsap from '@/lib/gsapConfig';

import AnalysedFields from '../../../../public/Analysed_fields.png';
import Fields from '../../../../public/Fields.png';
import IsagriLogo from '../../../../public/isagri.svg';
import Section from '../Section';

type IsagriProps = {
  ref: RefObject<HTMLDivElement | null>;
};

const IsagriPart1: FC<IsagriProps> = ({ ref }) => {
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
        end: '+100%',
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
      <Section ref={animationRef} className="relative flex flex-row-reverse items-center">
        <div className="w-1/2 flex flex-col items-center">
          <Reveal trigger={reveal} duration={2000}>
            {/* <h1 className="text-7xl leading-normal">{'Isagri'}</h1> */}
            <div className="flex flex-col items-center">
              <Image src={IsagriLogo} alt="isagri" height={75} />
              <h2 className="text-3xl leading-normal">{'Développeur Fullstack'}</h2>
            </div>
          </Reveal>
        </div>
        <div className="w-1/2" />
      </Section>

      {/* Element absolute */}
      <div className="absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row w-1/5">
        <Reveal trigger={reveal}>
          <h3 ref={dateRef} className="text-3xl">
            {'Sept 2025'}
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

const IsagriPart2: FC<IsagriProps> = ({ ref }) => {
  const parcelRef = useRef(null);
  const scanRef = useRef(null);
  const gobbleMask = useRef(null);

  // Graph
  const graphContainer = useRef<null | HTMLDivElement>(null);

  useGSAP(() => {
    let graphItems;

    if (graphContainer.current) {
      graphItems = graphContainer.current.children;
    }

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
      .from(parcelRef.current, { opacity: 0, duration: 1 }, '<')
      .to(parcelRef.current, { rotateY: 15, rotateZ: -5, rotateX: 5, duration: 3 }, '<')
      .to(scanRef.current, { top: '100%', duration: 5 }, '<')
      .fromTo(
        gobbleMask.current,
        { clipPath: 'inset(0% 0% 0% 0%)' },
        { clipPath: 'inset(100% 0% 0% 0%)', duration: 5 },
        '<'
      )
      .from(graphContainer.current, { opacity: 0, duration: 1 })
      .from(graphItems!, { height: 0, duration: 1, stagger: 0.5 }, '<');
    // .to(gobbleMask.current, { height: '100%', duration: 5 }, '<');
  });

  return (
    <Section ref={ref} className="relative flex flex-row">
      <div className="w-1/2 flex flex-col items-center justify-center relative">
        {/* Parcelle */}
        <div className="perspective-400">
          <div ref={parcelRef} className="relative bg-green-900 w-64 h-96 overflow-hidden">
            <Image src={AnalysedFields} alt="Gobble" layout="fill" objectFit="cover" />
            <div ref={gobbleMask} className="absolute size-full">
              <Image src={Fields} alt="Gobble" />
            </div>
            <div
              ref={scanRef}
              className="absolute w-full top-0 h-2 bg-slate-200 shadow-[0px_0px_29px_18px_rgba(46,241,255,1)]"
            />
          </div>
        </div>
        {/* Graph */}
        <div
          ref={graphContainer}
          className="absolute top-[15%] right-[15%] w-52 h-60 flex flex-row items-end gap-2"
        >
          <div className="w-full h-1/4 rounded-md bg-cyan-400 shadow-[0px_0px_18px_2px_rgba(46,241,255,1)]" />
          <div className="w-full h-1/2 rounded-md bg-cyan-400 shadow-[0px_0px_18px_2px_rgba(46,241,255,1)]" />
          <div className="w-full h-3/4 rounded-md bg-cyan-400 shadow-[0px_0px_18px_2px_rgba(46,241,255,1)]" />
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <Card className="max-w-12">
          <h1 className="text-4xl">{'Isagri'}</h1>
          <p className="text-lg">
            {
              "Développeur Fullstack chez Isagri, je travaille sur la refonte de l'application web de gestion de la paie."
            }
          </p>
        </Card>
      </div>
    </Section>
  );
};

const IsagriPart3: FC<IsagriProps> = ({ ref }) => {
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
      <div className="absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row-reverse w-1/5">
        <Reveal trigger={reveal}>
          <h3 ref={dateRef} className="text-3xl">
            {'Sept 2023'}
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

export { IsagriPart1, IsagriPart2, IsagriPart3 };

//     clip-path: inset(100% 0% 0% 0%);
