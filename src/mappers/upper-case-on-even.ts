const upperCaseOnEven = (charArr: string[]): string[] =>
  charArr.reduce(
    (
      {
        output: prevOutput,
        isEven: prevIsEven
      }: { output: string[]; isEven: boolean },
      curChar: string
    ): { output: string[]; isEven: boolean } => {
      const isEven = !prevIsEven;

      return {
        output: [...prevOutput, isEven ? curChar.toUpperCase() : curChar],
        isEven
      };
    },
    {
      output: [],
      isEven: true
    }
  ).output;

export default upperCaseOnEven;
