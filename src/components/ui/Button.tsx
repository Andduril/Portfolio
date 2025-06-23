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

const baseClass =
  'cursor-pointer inline-flex items-center justify-center px-4 py-2 rounded-full transition-all duration-300 font-medium text-white shadow-md bg-gradient-to-r from-emerald-400 to-teal-500 hover:brightness-110 hover:saturate-150';

const Button: FC<ButtonProps> = ({ children, className, href, ...props }) => {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseClass, className)}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseClass, className)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
