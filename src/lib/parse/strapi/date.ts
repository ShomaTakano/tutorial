export const parseDate = (stringDate: string): string => {
  const dateFromProp: Date = new Date(stringDate);
  const year = dateFromProp.getFullYear();
  const month = dateFromProp.getMonth() + 1;
  const date = dateFromProp.getDate();
  const result = `${year}.${month}.${date}`;

  return result;
};

export const getYearAndMonth = (
  stringDate: string
): { year: number; month: number } => {
  const dateFromProp: Date = new Date(stringDate);
  const year = dateFromProp.getFullYear();
  const month = dateFromProp.getMonth() + 1;
  const result = { year: year, month: month };

  return result;
};

export const parseStartDateTime = (year: number, month: number): Date => {
  const result = new Date(year, month - 1);

  return result;
};

export const parseEndDateTime = (year: number, month: number): Date => {
  const date = new Date(year, month - 1);
  const result = new Date(date.getFullYear(), date.getMonth() + 1);

  return result;
};

export const parseStartDate = (year: number, month: number): string => {
  const temp = new Date(year, month - 1);
  const result = `${temp.getFullYear()}-${(temp.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-01`;

  return result;
};

export const parseEndDate = (year: number, month: number): string => {
  const date = new Date(year, month - 1);
  const temp = new Date(date.getFullYear(), date.getMonth() + 1);
  const result = `${temp.getFullYear()}-${(temp.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-01`;

  return result;
};
