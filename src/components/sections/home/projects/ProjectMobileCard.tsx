import RightIcon from '@/components/icons/RightIcon';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Glass from '@/components/ui/Glass';
import { ProjectType } from '@/models/Project';
import { cn } from '@sglara/cn';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentPropsWithoutRef, FC } from 'react';

type ProjectMobileCardProps = {
  project: ProjectType;
  imagePath: string;
};

const ProjectMobileCard: FC<ComponentPropsWithoutRef<'li'> & ProjectMobileCardProps> = async ({
  project,
  imagePath,
  className,
  ...props
}) => {
  const t = await getTranslations(`home.projects.content.${project}`);

  return (
    <Glass
      className="p-0 hover:opacity-100 opacity-80 transition-opacity duration-300"
      opacity={20}
    >
      <li className={cn(className)} {...props}>
        <Link
          className="flex flex-row items-center justify-between relative p-6"
          href={`/project/${project}`}
        >
          {/* Image */}
          <div className="w-1/5 h-8 shrink-0 relative">
            <Image src={imagePath} alt={`${project} icon`} fill objectFit="contain" />
          </div>
          {/* Description */}
          <h5>{t('title')}</h5>
          {/* Bouton */}

          <RightIcon />
        </Link>
      </li>
    </Glass>
  );
};

export default ProjectMobileCard;
