'use client';

import { useGSAP } from '@gsap/react';
import { ComponentPropsWithoutRef, FC, useRef } from 'react';

import gsap from '@/lib/gsapConfig';

import Section from '../Section';

const IsagriAnimation: FC<ComponentPropsWithoutRef<'section'>> = ({ ...props }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        pin: true,
        start: 'top middle',
        end: '+=400%',
        scrub: true,
        snap: {
          snapTo: 'labels',
          duration: { min: 0.1, max: 0.5 },
          delay: 0.2,
          ease: 'power1.inOut',
        },
      },
    });

    tl.addLabel('start')
      .from(boxRef.current, { x: '-100%', opacity: 0 })
      .addLabel('color')
      .from(boxRef.current, { backgroundColor: 'blue' })
      .addLabel('spin')
      .to(boxRef.current, { rotate: 360 })
      .addLabel('end');
  });

  return (
    <Section className="relative flex justify-center items-center" ref={ref} {...props}>
      <div ref={boxRef} className="size-20 bg-red-600" />
    </Section>
  );
};

export default IsagriAnimation;
