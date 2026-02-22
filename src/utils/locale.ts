export const locales = ['en', 'el', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
