import Link from 'next/link';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, FC } from 'react';
import { ClassValue } from 'clsx';
import { cn } from '@sglara/cn';

type ButtonOnlyProps = {
  href?: undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkOnlyProps = {
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = ButtonOnlyProps | LinkOnlyProps;

/*
beginColor: '#c64dbf',
  endColor: '#391748',
*/

const Button: FC<ButtonProps> = ({ children, className, href, ...props }) => {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          'cursor-pointer flex items-center justify-center py-1 px-3 rounded-4xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br',
          className
        )}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn(
        'cursor-pointer flex items-center justify-center py-1 px-3 rounded-4xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br',
        className
      )}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
