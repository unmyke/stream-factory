import { strToArr, arrToStr } from './string-utils';

export type ArrMapper = (arr: string[]) => string[];

const composeMappers = (mappers: ArrMapper[]): ((str: string) => string) => {
  return (str: string): string => {
    return arrToStr(
      mappers.reduce(
        (prevMappedChars, curMapper) => curMapper(prevMappedChars),
        strToArr(str)
      )
    );
  };
};
export default composeMappers;
