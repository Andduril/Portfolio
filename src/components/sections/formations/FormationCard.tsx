import Card from '@/components/ui/Card';
import { FormationType } from '@/models/Formation';
import { getTranslations } from 'next-intl/server';
import { FC } from 'react';

export type FormationCardProps = {
  type: FormationType;
};

const FormationCard: FC<FormationCardProps> = async ({ type }) => {
  const t = await getTranslations(`formations.${type}`);

  return (
    <Card className="bg-radial-[at_50%_0%] from-[#4e1c60]/20 to-[#1b0823]/15">
      <li className="flex flex-col gap-1">
        <h3 className="text-sm">{t('title')}</h3>
        <p className="text-xs">{t('institution')}</p>
        <p className="text-xs">
          {t('startYear')} - {t('endYear')} • {t('location')}
        </p>
        <p className="text-xs text-justify font-normal">{t('description')}</p>
      </li>
    </Card>
  );
};

export default FormationCard;
