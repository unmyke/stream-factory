const toggleCharCase = (char: string) => {
  const upperCaseChar = char.toLocaleUpperCase();

  return char === upperCaseChar ? char.toLowerCase() : upperCaseChar;
};

const toggleCase = (charArr: string[]): string[] => charArr.map(toggleCharCase);
export default toggleCase;
