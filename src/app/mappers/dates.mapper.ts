import { DateInterface, MonthInterface } from "../interfaces/date.interface";

export function mapToUniqueMonths(dates: DateInterface[]): DateInterface[] {
  return dates.map(year => getDate(year))
}

function getDate(date: DateInterface): DateInterface {
  return {
    ...date,
    months: getUniqueMonths(date.months)
  };
}

function getUniqueMonths(months: MonthInterface[]): MonthInterface[] {
  const uniqueArrayOfMonths = months.
  filter((element: MonthInterface, index: number, array: MonthInterface[]) =>
   index === array.findIndex((obj) => (obj.monthLink === element.monthLink && obj.monthName === element.monthName))
  );
  return uniqueArrayOfMonths;
}
