export const formatShortDate = (msDateEnd: Date, msDateStart: Date): string => {
  const monthsMap = [
    {
      full: 'January',
      short: 'Jan'
    },
    {
      full: 'February',
      short: 'Feb'
    },
    {
      full: 'March',
      short: 'Mar'
    },
    {
      full: 'April',
      short: 'Apr'
    },
    {
      full: 'May',
      short: 'May'
    },
    {
      full: 'June',
      short: 'Jun'
    },
    {
      full: 'July',
      short: 'Jul'
    },
    {
      full: 'August',
      short: 'Aug'
    },
    {
      full: 'September',
      short: 'Sep'
    },
    {
      full: 'October',
      short: 'Oct'
    },
    {
      full: 'November',
      short: 'Nov'
    },
    {
      full: 'December',
      short: 'Dec'
    }
  ];

  const endDate = new Date(msDateEnd);
  const startDate = new Date(msDateStart);
  const startMonth = monthsMap[startDate.getMonth()].short; // TODO account for an end month that is different from the start month
  const endDay = endDate.getDate();
  const startDay = startDate.getDate();

  if (endDay === startDay) {
    return `${startMonth} ${startDay}`;
  }
  return `${startMonth} ${startDay}-${endDay}`;
}