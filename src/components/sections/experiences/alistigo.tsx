'use client';

import { useGSAP } from '@gsap/react';
import { ComponentPropsWithoutRef, FC, RefObject, useRef } from 'react';

import gsap from '@/lib/gsapConfig';

import Section from '../Section';

type AlistigoAnimationProps = {
  ref: RefObject<HTMLDivElement | null>;
};

const AlistigoAnimation: FC<ComponentPropsWithoutRef<'section'> & AlistigoAnimationProps> = ({
  ref,
  ...props
}) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ref.current,
          pin: true,
          start: 'top middle',
          end: '+=100%',
          scrub: true,
        },
      })
      .from(boxRef.current, { x: '-100%', opacity: 0 })
      .from(boxRef.current, { backgroundColor: 'blue' })
      .to(boxRef.current, { rotate: 360 });
  });

  return (
    <Section className="relative flex justify-center items-center" ref={ref} {...props}>
      <div ref={boxRef} className="size-20 bg-green-600" />
    </Section>
  );
};

export default AlistigoAnimation;
