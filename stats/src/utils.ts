export const parseDate = (dateString: string): Date => {
  const reversed = dateString.split('/').reverse().join('/');
  return new Date(reversed);
};
