'use client';

import Card from '@/components/ui/Card';
import { ExperienceType } from '@/models/Experience';
import { FC, useState } from 'react';
import Image from 'next/image';
import DownIcon from '@/components/icons/DownIcon';
import { useMessages, useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import TechBadge from './TechBadge';
import { getVariantFromTechnology } from '@/utils/variantHelper';
import { useKeenSlider } from 'keen-slider/react';

export type ExperienceCardProps = {
  type: ExperienceType;
  imagePath: string;
};

const getColor = (type: ExperienceType): string => {
  switch (type) {
    case 'isagri':
      return 'from-[#2ae15e]/20 to-[#2ae1cd]/10';
    case 'amsilab':
      return 'from-[#e1c02a]/20 to-[#f6f476]/15';
    case 'cgi':
      return 'from-[#e12d2a]/20 to-[#f676af]/15';
    default:
      return 'from-[#4e1c60]/20 to-[#1b0823]/15';
  }
};

const ExperienceCard: FC<ExperienceCardProps> = ({ type, imagePath }) => {
  const [open, setOpen] = useState<boolean>();
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const t = useTranslations(`home.experiences.content.${type}`);
  const tExp = useTranslations('home.experiences');

  const [sliderRef, sliderInstance] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      perView: 1,
      spacing: 10,
    },
    slideChanged: (s) => {
      setSlideIndex(s.track.details.rel);
    },
  });

  const techSections = [
    {
      label: tExp('languages'),
      items: t('technologies.languages').split('|'),
    },
    {
      label: tExp('frameworks'),
      items: t('technologies.frameworks').split('|'),
    },
    {
      label: tExp('databases'),
      items: t('technologies.databases').split('|'),
    },
    {
      label: tExp('tools'),
      items: t('technologies.tools').split('|'),
    },
  ];

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDotClick = (index: number) => {
    if (sliderInstance) {
      sliderInstance.current?.moveToIdx(index, true);
    }
  };

  return (
    <Card className={`bg-radial-[at_50%_0%] ${getColor(type)} overflow-hidden`}>
      <li className="flex flex-col gap-2 items-center w-full relative">
        <div className="relative w-2/3 h-20">
          <Image src={imagePath} alt={`${t('title')} logo`} fill className="object-contain" />
        </div>
        <h3 className="text-lg text-center font-semibold">{t('title')}</h3>
        <h4 className="text-md text-center font-normal">{t('jobTitle')}</h4>
        <span className="text-center text-sm">
          {t('startYear')} - {t('endYear')}
        </span>
        <div
          className={`overflow-hidden max-w-full transition-all duration-500 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="flex flex-col gap-2 items-center w-full">
            <p className="text-xs text-justify font-normal">{t('description')}</p>

            <div ref={sliderRef} className="keen-slider w-full">
              {techSections.map((section, index) => (
                <div
                  key={index}
                  className="keen-slider__slide w-full flex flex-col items-center gap-2"
                >
                  <h5 className="text-sm font-semibold">{section.label}</h5>
                  <ul className="flex flex-row flex-wrap gap-2 text-xs font-normal">
                    {section.items.map((item, idx) => (
                      <TechBadge key={idx} text={item} variant={getVariantFromTechnology(item)} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-1 mt-2">
              {techSections.map((_, i) => (
                <span
                  key={i}
                  className={`cursor-pointer h-2 w-2 ${slideIndex == i ? 'bg-white' : 'bg-white/30'} rounded-full`}
                  onClick={() => handleDotClick(i)}
                />
              ))}
            </div>

            <Button className="mt-4" href={`/experience/${type}`} target="_blank">
              {tExp('seeMore')}
            </Button>
          </div>
        </div>

        <div
          className="w-full flex justify-center items-center cursor-pointer"
          onClick={handleOpen}
        >
          <DownIcon
            className={`size-8 transform transition-transform duration-300 ${!open ? '' : 'rotate-180'}`}
          />
        </div>
      </li>
    </Card>
  );
};

export default ExperienceCard;
