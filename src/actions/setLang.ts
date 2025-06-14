'use server';
import { Locale } from '@/config';
import { redirect } from 'next/dist/server/api-utils';
import { cookies } from 'next/headers';

export async function setLang(locale: Locale) {
  const cookieClient = await cookies();
  cookieClient.set('locale', locale, { path: '/' })
}