'use client';

import DownIcon from '@/components/icons/DownIcon';
import Button from '@/components/ui/Button';
import Glass from '@/components/ui/Glass';
import { ExperienceType } from '@/models/Experience';
import { useKeenSlider } from 'keen-slider/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC, useState } from 'react';
import TechBadge from './TechBadge';
import { getVariantFromTechnology } from '@/utils/variantHelper';

type ExperienceGlassProps = {
  type: ExperienceType;
  imagePath: string;
};

const ExperienceGlass: FC<ExperienceGlassProps> = ({ type, imagePath }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);
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

  const t = useTranslations(`home.experiences.content.${type}`);
  const tExp = useTranslations('home.experiences');

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

  return (
    <Glass
      opacity={20}
      className="w-full overflow-hidden flex flex-col gap-2 items-center relative py-2"
    >
      <div className="w-2/3 h-20 relative">
        <Image src={imagePath} alt={`${t('title')} logo`} fill className="object-contain" />
      </div>
      <h3 className="text-lg text-center font-semibold">{t('title')}</h3>
      <h4 className="text-md text-center font-normal">{t('jobTitle')}</h4>
      <span className="text-center text-sm">
        {t('startYear')} - {t('endYear')}
      </span>
      <div
        className={`overflow-hidden flex flex-col items-center max-w-full transition-all duration-500 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <div ref={sliderRef} className="keen-slider w-full">
          {techSections.map((section, index) => (
            <div key={index} className="keen-slider__slide w-full flex flex-col items-center gap-2">
              <h5 className="text-sm font-semibold">{section.label}</h5>
              <ul className="flex flex-row flex-wrap gap-2 text-xs font-normal">
                {section.items.map((item, idx) => (
                  <TechBadge key={idx} text={item} variant={getVariantFromTechnology(item)} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Button className="mt-4" href={`/experience/${type}`}>
          {tExp('seeMore')}
        </Button>
      </div>
      <div className="w-full flex justify-center items-center cursor-pointer" onClick={handleOpen}>
        <DownIcon
          className={`size-8 transform transition-transform duration-300 ${!open ? '' : 'rotate-180'}`}
        />
      </div>
    </Glass>
  );
};

export default ExperienceGlass;
