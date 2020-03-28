import IStreamFactory from './i-stream-factory';
import IStream from './i-stream';
import createStreamFactory from './create-stream-factory';
import { upperCaseOnEven, toggleCase, sort, shuffle } from './mappers';

type StreamFactory = (fileName: string) => IStream<string>;

class StreamFactoryClass implements IStreamFactory {
  readonly createFirstStream: StreamFactory = createStreamFactory();

  readonly createSecondStream: StreamFactory = createStreamFactory({
    preWriteMappers: [upperCaseOnEven],
    postReadMappers: [toggleCase]
  });

  readonly createThirdStream: StreamFactory = createStreamFactory({
    preWriteMappers: [sort],
    postReadMappers: [shuffle]
  });

  readonly createFourthStream: StreamFactory = createStreamFactory({
    preWriteMappers: [upperCaseOnEven, sort],
    postReadMappers: [shuffle, toggleCase]
  });

  readonly createFifthStream: StreamFactory = createStreamFactory({
    preWriteMappers: [sort, upperCaseOnEven],
    postReadMappers: [toggleCase, shuffle]
  });
}

export default StreamFactoryClass;
