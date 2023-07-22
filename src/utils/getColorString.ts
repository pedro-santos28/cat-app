export const getColorFromString = (twColorString: any) => {
  if (twColorString.startsWith('text-')) {
    return twColorString.slice(5);
  }
  // Se não houver prefixo específico, retorne a cor original
  return twColorString;
};
