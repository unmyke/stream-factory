import IStreamFactory from './i-stream-factory';
import IStream from './i-stream';

class StreamFactory implements IStreamFactory {
  createFifthStream(fileName: string): IStream<string> {
    throw 'Not implemented';
  }

  createFirstStream(fileName: string): IStream<string> {
    throw 'Not implemented';
  }

  createFourthStream(fileName: string): IStream<string> {
    throw 'Not implemented';
  }

  createSecondStream(fileName: string): IStream<string> {
    throw 'Not implemented';
  }

  createThirdStream(fileName: string): IStream<string> {
    throw 'Not implemented';
  }
}

export default StreamFactory;