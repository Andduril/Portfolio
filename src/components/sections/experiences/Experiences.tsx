import { getTranslations } from 'next-intl/server';
import ExperienceCard from './ExperienceCard';

const Experiences = async () => {
  const t = await getTranslations('experiences');

  return (
    <section className="flex flex-col items-center gap-3">
      <h2 className="text-3xl">{t('title')}</h2>
      <ul className="flex flex-col gap-4">
        <ExperienceCard type="isagri" imagePath="/logo_isagri_ang-1.png" />
        <ExperienceCard type="amsilab" imagePath="/logo_amsilab.png" />
        <ExperienceCard type="cgi" imagePath="/logo_cgi_color.png" />
      </ul>
    </section>
  );
};

export default Experiences;
