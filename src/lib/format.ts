export const formatCurrency = (value: number, currency = 'COP', locale = 'es-CO') =>
  new Intl.NumberFormat(locale, { 
    style: 'currency', 
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
