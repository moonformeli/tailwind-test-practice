export const capitalize = (text: string) => {
  if (typeof text !== 'string') {
    return '';
  }

  return text.substring(0, 1).toUpperCase() + text.substring(1);
};
