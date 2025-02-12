import { FC } from 'react';

import { tType } from '@/utils/translationTypes';

type FooterProps = {
  t: tType<'HomePage'>;
};

const Footer: FC<FooterProps> = ({ t }) => {
  return (
    <footer>
      <p>{t('footer')}</p>
    </footer>
  );
};

export default Footer;
