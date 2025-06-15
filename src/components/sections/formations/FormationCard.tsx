import { FormationType } from '@/models/Formation';
import { getTranslations } from 'next-intl/server';
import { FC } from 'react';

export type FormationCardProps = {
  type: FormationType;
};

const FormationCard: FC<FormationCardProps> = async ({ type }) => {
  const t = await getTranslations(`formations.${type}`);

  return (
    <li className="border bg-card p-2 rounded-lg flex flex-col gap-1">
      <h3 className="text-sm">{t('title')}</h3>
      <p className="text-xs">{t('institution')}</p>
      <p className="text-xs">
        {t('startYear')} - {t('endYear')} • {t('location')}
      </p>
      <p className="text-xs text-justify">{t('description')}</p>
    </li>
  );
};

export default FormationCard;
