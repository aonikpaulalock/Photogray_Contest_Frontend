export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
  return date.toLocaleDateString("en-GB", options).split("/").reverse().join("-");
};