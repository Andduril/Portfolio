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
  const t = useTranslations(`experiences.content.${type}`);
  const tExp = useTranslations('experiences');

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Card className={`w-sm bg-radial-[at_50%_0%] ${getColor(type)} relative`}>
      <li className="flex flex-col gap-2 items-center w-full relative">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1 items-center">
            <span>{t('startMonth')}</span>
            <span>{t('startYear')}</span>
          </div>
          <div className="grow flex flex-col items-center relative">
            <div className="h-12 w-full relative">
              <Image src={imagePath} alt={`${t('title')} logo`} fill objectFit="contain" />
            </div>
            <span className="font-normal text-sm">{t('location')}</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span>{t('endMonth')}</span>
            <span>{t('endYear')}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold">
          {t('title')} - {t('jobTitle')}
        </h3>
        {/* {open && (
          <p className='text-xs text-justify font-normal'>{t('description')}</p>
        )} */}

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="flex flex-col gap-2 items-center w-full">
            <p className="text-xs text-justify font-normal">{t('description')}</p>
            <div className="flex flex-col gap-1 items-center">
              <h5>{tExp('languages')}</h5>
              <ul className="flex flex-row gap-2 text-xs font-normal">
                {t('technologies.languages')
                  .split('|')
                  .map((lang, index) => (
                    <TechBadge key={index} text={lang} variant={getVariantFromTechnology(lang)} />
                  ))}
              </ul>
              <h5>{tExp('frameworks')}</h5>
              <ul className="flex flex-row gap-2 text-xs font-normal">
                {t('technologies.frameworks')
                  .split('|')
                  .map((framework, index) => (
                    <TechBadge
                      key={index}
                      text={framework}
                      variant={getVariantFromTechnology(framework)}
                    />
                  ))}
              </ul>
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
