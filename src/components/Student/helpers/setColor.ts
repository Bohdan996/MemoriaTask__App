export const getScoreColor = (prop: string) => {
  const number = +(prop.replace('%', ''));

  if (number >= 90) {
    return '#4285F4';
  }

  if (number >= 80 && number < 90) {
    return '#0F9D58';
  }

  if (number >= 50 && number < 80) {
    return '#E2B534';
  }

  return '#DB4437';
}

export const getSpeedColor = (prop: string) => {
  switch (prop) {
    case 'Above Expected':
      return '#4285F4';

    case 'As Expected':
      return '#0F9D58';

    default:
      return '#DB4437';
  }
};
