export const formatCurrency = (value: number, currency = 'USD', locale = 'es-CO') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
