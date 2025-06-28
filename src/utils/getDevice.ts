import { cookies } from 'next/headers';

const getDevice = async (): Promise<'mobile' | 'desktop'> => {
  const device = (await cookies()).get('device')?.value || 'desktop';

  return device === 'mobile' ? 'mobile' : 'desktop';
};

export default getDevice;
