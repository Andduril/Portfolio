import { ComponentPropsWithoutRef, FC } from 'react';

const Card: FC<ComponentPropsWithoutRef<'div'>> = ({ children }) => {
  return (
    <div className="bg-gray-900 rounded-lg max-w-96 p-4 outline-1 outline-white">{children}</div>
  );
};

export default Card;
