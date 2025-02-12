import type { NamespaceKeys, NestedKeyOf } from 'next-intl';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export type tType<T extends NamespaceKeys<IntlMessages, NestedKeyOf<IntlMessages>>> = ReturnType<
  typeof useTranslations<T>
>;

export type larryLeMalicieux<T extends NamespaceKeys<IntlMessages, NestedKeyOf<IntlMessages>>> =
  ReturnType<typeof getTranslations<T>>;
