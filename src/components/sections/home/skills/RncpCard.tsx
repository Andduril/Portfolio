'use client';

import DownIcon from '@/components/icons/DownIcon';
import Card from '@/components/ui/Card';
import Glass from '@/components/ui/Glass';
import { Rncp } from '@/models/Skills';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

type RncpCardProps = {
  name: Rncp;
};

const RncpCard: FC<RncpCardProps> = ({ name }) => {
  const [open, setOpen] = useState<boolean>(false);
  const t = useTranslations(`home.skills.rncp.${name}`);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Glass opacity={20} className="flex flex-col gap-3 overflow-hidden p-4">
      <div className="flex flex-row items-center gap-1">
        <h6 className="text-xs">
          {name} - {t('title')}
        </h6>
        <div className="cursor-pointer size-5 shrink-0">
          <DownIcon
            onClick={handleClick}
            className={`transform transition-transform duration-300 ${!open ? '' : 'rotate-180'}`}
          />
        </div>
      </div>
      {open && (
        <>
          {t('description')
            .split('|')
            .map((line, index) => (
              <p key={index}>- {line}</p>
            ))}
        </>
      )}
    </Glass>
  );
};

export default RncpCard;
