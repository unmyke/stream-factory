import IStream from '../i-stream';
import createReadWriteFile from './create-read-write-file';
import composeMappers, { ArrMapper } from './compose-mappers';

type StreamFactory = (filename: string) => IStream<string>;

const createStreamFactory = (
  {
    postReadMappers = [],
    preWriteMappers = []
  }: {
    postReadMappers: Array<ArrMapper>;
    preWriteMappers: Array<ArrMapper>;
  } = {
    postReadMappers: [],
    preWriteMappers: []
  }
): StreamFactory => (filename: string): IStream<string> => {
  const { readFile, writeFile } = createReadWriteFile(filename);

  const read = (): Promise<string> => {
    const readMapper = composeMappers(postReadMappers);
    return readFile().then(readMapper);
  };

  const write = (data: string): Promise<void> => {
    const writeMapper = composeMappers(preWriteMappers);
    return writeFile(writeMapper(data));
  };

  return {
    read,
    write
  };
};

export default createStreamFactory;
