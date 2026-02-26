const monthAbbrToIndex: Record<string, number> = {
  JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
  JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11,
};

const localeMap: Record<string, string> = { en: 'en-US', el: 'el-GR', ru: 'ru-RU' };

export function formatDataSetDate(id: string, language: string): string {
  const [day, monthAbbr, year] = id.split('-');
  const monthIdx = monthAbbrToIndex[monthAbbr];
  if (monthIdx === undefined) return id;
  const date = new Date(parseInt(year), monthIdx, parseInt(day));
  return new Intl.DateTimeFormat(localeMap[language] || 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  }).format(date);
}
