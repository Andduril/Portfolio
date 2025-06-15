import Image from 'next/image';
import { FC } from 'react';

export type SocialProps = {
  src: string;
  alt: string;
  link?: string;
  size?: number;
};

const Social: FC<SocialProps> = ({ link, size, alt, src }) => {
  return (
    <li className="rounded-full overflow-hidden cursor-pointer">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={alt} width={size || 32} height={size || 32} />
      </a>
    </li>
  );
};

export default Social;
