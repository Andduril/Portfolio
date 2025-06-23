'use server';

import { redirect } from 'next/dist/server/api-utils';
import { cookies } from 'next/headers';

export async function setTheme(theme: 'dark' | 'light') {
  const cookieClient = await cookies();
  cookieClient.set('theme', theme, { path: '/', httpOnly: false, maxAge: 60 * 60 * 24 * 365 }); // 1 year
}
