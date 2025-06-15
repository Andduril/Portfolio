import { ReactNode } from 'react';

export type CardProps = {
  children?: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className="bg-car outline-1 outline-solid outline-font">{children}</div>;
};

export default Card;
