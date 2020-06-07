export const lengthToHoursMinutes = (input) => {

  if (typeof input === 'string' && input.length > 0) {
    const [hours, minutes] = input.split(':');

    return `${parseInt(hours, 10)}h i ${parseInt(minutes, 10)}m`;
  } else {
    return input;
  }
};
