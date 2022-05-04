export function formatDate(date) {
  // Months list.
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // Format the date.
  let dateObj = new Date(date);
  let formattedDate = `${dateObj.getDate()}-${
    months[dateObj.getMonth()]
  }-${dateObj.getFullYear()}`;

  return formattedDate;
}
