import { FC } from 'react';

type LanguageLabelProps = {
  children: string;
};

const LanguageLabel: FC<LanguageLabelProps> = ({ children }) => {
  return (
    <label className="border border-emerald-400 rounded-full px-2 bg-emerald-400/10 backdrop-blur-sm">
      {children}
    </label>
  );
};

export default LanguageLabel;
