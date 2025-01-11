import moment from "moment";

export const blogDateFormate = (createdAt: string) => {
  const now = moment();
  const createdDate = moment(createdAt);
  if (now.diff(createdDate, 'hours') < 24) {
    return createdDate.fromNow();
  }

  if (now.diff(createdDate, 'days') === 1) {
    return "Yesterday"; 
  }

  return createdDate.format('DD MMM YYYY');
};