/**
 * Transform date to yyyy-mm-dd format including time zone
 * @param {Date} date
 */
export const transformDate = (date: Date): string => {
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() - offset * 60 * 1000);
  return date.toISOString().split('T')[0];
};

export const getYesterday = (): Date => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date;
};
