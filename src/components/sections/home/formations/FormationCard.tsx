import Card from '@/components/ui/Card';
import Glass from '@/components/ui/Glass';
import { FormationType } from '@/models/Formation';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { FC } from 'react';

export type FormationCardProps = {
  type: FormationType;
};

const getColor = (): string => {
  return 'from-[#1e74e2]/20 to-[#59a2ff]/15';
};

const FormationCard: FC<FormationCardProps> = async ({ type }) => {
  const t = await getTranslations(`home.formations.${type}`);

  return (
    <Glass opacity={20} className="p-4 flex flex-col gap-2">
      <li className="flex flex-col gap-1">
        <div className="flex flex-row justify-start items-center gap-2">
          <div className="relative size-14 shrink-0">
            <Image src={'/upjv-bleu.png'} alt="logo upjv" fill className="object-contain" />
          </div>
          <h3 className="text-xs">{t('title')}</h3>
        </div>
        <p className="text-xs font-normal">{t('institution')}</p>
        <p className="text-xs font-normal">
          {t('startYear')} - {t('endYear')} • {t('location')}
        </p>
        <p className="text-xs text-justify font-normal">{t('description')}</p>
      </li>
    </Glass>
  );
};

export default FormationCard;
