'use client';

import { useGSAP } from '@gsap/react';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';

import Reveal from '@/components/ui/Reveal';
import gsap from '@/lib/gsapConfig';

// import Section from '../Section';

const ExperienceBegin = () => {
  const t = useTranslations('Experiences');
  const [titleTrigger, setTitleTrigger] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  // const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(sectionRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom center',
        onEnter: () => setTitleTrigger(true),
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });

    tl.fromTo(dividerRef.current, { width: '0%' }, { width: '100%' });

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: sectionRef.current,
    //     pin: true,
    //     start: 'top middle',
    //     end: () => `+=${(sectionRef.current?.clientHeight || 0) * 2}`,
    //     scrub: 0.5,
    //     snap: {
    //       snapTo: 'labels',
    //       duration: { min: 0.1, max: 5 },
    //       delay: 0.2,
    //       ease: 'power3.inOut',
    //     },
    //   },
    // });

    // tl.addLabel('start')
    //   .to(boxRef.current, {
    //     x: 100,
    //     rotate: 180,
    //   })
    //   .addLabel('spin')
    //   .to(boxRef.current, {
    //     rotate: 360,
    //   })
    //   .addLabel('revserse')
    //   .to(boxRef.current, {
    //     x: 0,
    //     rotate: 0,
    //   })
    //   .addLabel('end');
  }, {});

  return (
    <section ref={sectionRef} className="my-10 flex justify-center items-center">
      {/* <div ref={boxRef} className="size-20 bg-blue-600" /> */}
      <Reveal trigger={titleTrigger}>
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-4xl font-bold">{t('title')}</h2>
          <div ref={dividerRef} className="h-1 w-0 bg-white rounded-lg" />
        </div>
      </Reveal>
    </section>
  );
};

export default ExperienceBegin;
