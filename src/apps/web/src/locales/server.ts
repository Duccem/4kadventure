import { createI18nServer } from 'next-international/server';

export const {
  getI18n,
  getScopedI18n,
  getStaticParams,
}: ReturnType<typeof createI18nServer> = createI18nServer({
  en: () => import('./traduction/en'),
  es: () => import('./traduction/es'),
});

