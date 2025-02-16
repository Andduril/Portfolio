'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import gsap from '@/lib/gsapConfig';

import AlistigoAnimation from './sections/experiences/alistigo';
import IsagriAnimation from './sections/experiences/Isagri';

// type Experience = {
//   ref: RefObject<HTMLDivElement | null>;
//   startDate: Date;
//   endDate: Date;
// };

const generateMonthYearList = (startDate: Date, endDate: Date): string[] => {
  const list: string[] = [];

  const currentDate = new Date(endDate);

  while (currentDate >= startDate) {
    const month = currentDate.toLocaleString('default', { month: 'short' });
    list.push(month);

    if (currentDate.getMonth() === 0) {
      list.push(currentDate.getFullYear().toString());
    }

    currentDate.setMonth(currentDate.getMonth() - 1);
  }

  return list;
};

const Timeline = () => {
  // Timeline
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineMenuRef = useRef<HTMLDivElement>(null);
  const boxMenuRef = useRef<HTMLDivElement>(null);

  // Sections
  const alistigoRef = useRef<HTMLDivElement>(null);
  const isagriRef = useRef<HTMLDivElement>(null);

  // Experiences
  // const experiences: Experience[] = [
  //   { ref: alistigoRef, startDate: new Date('2021-01-01'), endDate: new Date('2021-06-01') },
  //   { ref: isagriRef, startDate: new Date('2021-09-01'), endDate: new Date('2021-12-01') },
  // ];

  // const getMonthInRange = (experience: Experience): Date[] => {
  //   const months: Date[] = [];
  //   let currentDate = experience.startDate;

  //   while (currentDate <= experience.endDate) {
  //     // Push every 1st of the month in the range
  //     months.push(currentDate);
  //     currentDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
  //   }

  //   return months;
  // };

  // const alistigoMonths = getMonthInRange(experiences[0]);
  // const isagriMonths = getMonthInRange(experiences[1]);

  // console.log(alistigoMonths, isagriMonths);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top top',
          end: 'bottom bottom',
          onEnter: () => console.log('Timeline is visible'),
          onLeave: () => console.log('Timeline is not visible'),
          pin: timelineMenuRef.current,
          scrub: 1,
        },
      })
      .to(boxMenuRef.current, { y: '-50%' });

    // // Alistigo
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: alistigoRef.current,
    //     start: 'top bottom',
    //     end: 'bottom top',
    //     onEnter: () => console.log('Alistigo is visible'),
    //     onLeave: () => console.log('Alistigo is not visible'),
    //   },
    // });
    // // Isagri
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: isagriRef.current,
    //     start: 'top bottom',
    //     end: 'bottom top',
    //     onEnter: () => console.log('Isagri is visible'),
    //     onLeave: () => console.log('Isagri is not visible'),
    //   },
    // });
  });

  const startDate = new Date(2020, 0);
  const endDate = new Date(2025, 0);

  /**
   * I want a list like :
   *
   * "FEB"
   * "JAN"
   * "2025"
   * "DEC"
   * "NOV"
   * "OCT"
   * ...
   * "2024"
   * "DEC"
   * "NOV"
   */

  return (
    <div className="relative flex flex-row overflow-hidden">
      {/* PARTIE FIXE */}
      <div
        ref={timelineMenuRef}
        className="w-1/6 p-2 relative h-screen flex justify-center items-center"
      >
        <div ref={boxMenuRef} className="flex flex-col gap-24 translate-y-1/2">
          {/* {months.map((date, index) => {
            return <div key={index}>{date.toLocaleDateString()}</div>;
          })} */}
          {generateMonthYearList(startDate, endDate).map((date, index) => {
            return <div key={index}>{date}</div>;
          })}
        </div>
      </div>
      {/* PARTIE SCROLLABLE */}
      <div ref={timelineRef} className="grow">
        <AlistigoAnimation ref={alistigoRef} />
        <IsagriAnimation ref={isagriRef} />
      </div>
    </div>
  );
};

export default Timeline;
