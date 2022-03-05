export const generatePages = (totalPages: number) => {
  const pageMap = new Map<number, string>();

  for (let i = 0; i < totalPages; i++) {
    pageMap.set(i, '' + i);
  }

  return pageMap;
};
