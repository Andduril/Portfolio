'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { FC, ReactElement, useState } from 'react';

type SkillIconProps = {
  name: string;
  alt: string;
  lightVariant?: boolean;
};

const SkillIcon: FC<SkillIconProps> = ({ name, alt, lightVariant = false }) => {
  const [loaded, setLoaded] = useState(false);
  const src = lightVariant ? `/skill/light/${name}.png` : `/skill/${name}.png`;

  return (
    <div className="relative size-6">
      {!loaded && <div />}

      <Image
        className={clsx('transition-opacity duration-300', loaded ? 'opacity-100' : 'opacity-0')}
        src={src}
        alt={alt}
        width={24}
        height={24}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default SkillIcon;
