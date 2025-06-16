import { ReactNode } from 'react';

export type CardProps = {
  children?: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className="backdrop-blur-sm bg-gray-200/10 border border-white/20 rounded-xl shadow-lg p-6">{children}</div>;
};

export default Card;
