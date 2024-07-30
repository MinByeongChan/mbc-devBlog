export const removeAllCookies = () => {
  document.cookie.split(';').forEach((c) => {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
  });
};

export const isEmpty = (value: any) => {
  if (value === null) return true;
  if (typeof value === 'undefined') return true;
  if (typeof value === 'string' && value === '') return true;
  if (Array.isArray(value) && value.length < 1) return true;
  if (
    typeof value === 'object' &&
    value.constructor.name === 'Object' &&
    Object.keys(value).length <= 0
  ) {
    return true;
  }
  return false;
};
// Comma 설정
export const setDateComma = (value: string) => {
  if (typeof value !== 'string') return;
  if (value.length === 8) {
    // eslint-disable-next-line consistent-return
    return `${value.substring(0, 4)}.${value.substring(4, 2)}.${value.substring(6, 2)}`;
  }
  if (value.length === 6) {
    return `${value.substring(0, 2)}.${value.substring(2, 2)}.${value.substring(4, 2)}`;
  }
};
// Date 변환
export const getDateFormat = (value: string): string => {
  const d = new Date(value);
  const year = d.getFullYear().toString();
  let month = (d.getMonth() + 1).toString();
  if (month.length < 2) {
    month = `0${month}`;
  }

  let day = d.getDay().toString();
  if (day.length < 2) {
    day = `0${day}`;
  }

  return year + month + day;
};
