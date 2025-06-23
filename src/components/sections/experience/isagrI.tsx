import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const IsagriExperience = async () => {
  const t = await getTranslations('experience.isagri');

  return (
    <div className="flex flex-col items-center font-normal">
      <h1 className="text-2xl">{t('title')}</h1>
      <div className="relative w-1/2 aspect-[3/1] mt-1">
        <Image
          src={'/experience/spotifarm/spotifarm.webp'}
          alt="logo spotifarm"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col">
        {/* Paragraphe 1 */}
        <section className="flex flex-col md:flex-row items-center gap-2">
          <div className="relative size-28 md:w-1/2">
            <Image
              src={'/experience/spotifarm/satellite.png'}
              alt="satellite"
              fill
              className="object-contain"
            />
          </div>
          <div className="md:w-1/2 px-4">
            <p className="text-xs text-justify">{t('paragraph1')}</p>
          </div>
        </section>
        {/* Paragraphe 2 */}
        <section className="flex flex-col md:flex-row items-center gap-2">
          <div className="relative size-28 md:w-1/2">
            <Image
              src={'/experience/spotifarm/satellite.png'}
              alt="satellite"
              fill
              className="object-contain"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-xs">{t('paragraph2')}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IsagriExperience;
