import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export const toUnix = (timestamp?: number) => {
  let date = dayjs();
  if (timestamp) {
    date = dayjs(timestamp);
  }
  const unix = date.unix();
  return unix;
};

export const toDateString = (timestamp?: number) => {
  let date = dayjs();
  if (timestamp) {
    date = dayjs(timestamp * 1000);
  }
  const parsedDate = date.format('HH:mm');
  return parsedDate;
};

// Return a unix timestamp
export const addTime = (minutesToExpire: number, time?: number) => {
  let date = dayjs();
  if (time) {
    date = dayjs(time);
  }
  const expDate = date.add(minutesToExpire, 'minutes').unix();
  console.log(expDate);
  return expDate;
};

export const isExpired = (unixDate: number): boolean => {
  const date = dayjs(unixDate * 1000);
  const now = dayjs();

  if (now.isAfter(date)) return true;
  return false;
};

export const timeAgo = (unixDate: number): string => {
  dayjs.extend(relativeTime);
  let date = dayjs();

  if (unixDate) {
    date = dayjs(unixDate * 1000);
  }
  const timeAgo = dayjs().from(date, true);
  console.log('DATE FROM UNIX ==>>', timeAgo);
  return timeAgo;
};
