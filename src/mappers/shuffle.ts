const shuffle = <T>(charArr: T[]): T[] => {
  const iter = (prevShufflerArr: T[], restCharArr: T[]): T[] => {
    if (!restCharArr.length) {
      return prevShufflerArr;
    }

    const curIndex = Math.floor(Math.random() * restCharArr.length);
    const curChar = restCharArr[curIndex];
    const curShuffledCharArr = [...prevShufflerArr, curChar];
    const curRestCharArr = [
      ...restCharArr.slice(0, curIndex),
      ...restCharArr.slice(curIndex + 1)
    ];

    return iter(curShuffledCharArr, curRestCharArr);
  };

  return iter([], charArr);
};

export default shuffle;
