'use client';

import { useGSAP } from '@gsap/react';
import { ComponentPropsWithoutRef, FC, RefObject, useRef } from 'react';

import gsap from '@/lib/gsapConfig';

import Section from '../Section';

type IsagriAnimationProps = {
  ref: RefObject<HTMLDivElement | null>;
};

const IsagriAnimation: FC<ComponentPropsWithoutRef<'section'> & IsagriAnimationProps> = ({
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
          end: '+=400%',
          scrub: true,
        },
      })
      .from(boxRef.current, { x: '-100%', opacity: 0 })
      .from(boxRef.current, { backgroundColor: 'blue' })
      .to(boxRef.current, { rotate: 360 });
  });

  return (
    <Section className="relative flex justify-center items-center" ref={ref} {...props}>
      <div ref={boxRef} className="size-20 bg-red-600" />
    </Section>
  );
};

export default IsagriAnimation;
