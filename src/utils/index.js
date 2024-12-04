export const getDateDifferntFormNow = (formDate) => {
  let difference = new Date().getTime() - new Date(formDate).getTime();

  difference = difference / 1000;
  let hourDifference = Math.floor(difference / 3600);
  difference -= hourDifference * 3600;
  let minuteDifference = Math.floor(difference / 60);
  difference -= minuteDifference * 60;

  let dayDifference = Math.floor(difference / (3600 * 24)); // Calculate days
  difference -= dayDifference * 3600 * 24;

  let message;

  if (dayDifference > 0) {
    message += `${dayDifference} day${dayDifference > 1 ? 's' : ''}`;
  }

  if (hourDifference > 0) {
    message = `${hourDifference} hour`;
  }

  if (minuteDifference > 0) {
    message = message
      ? `${message} ${minuteDifference} minutes`
      : `${minuteDifference} minutes`;
  }

  return message;
};
