import { readFile as readFileFs, writeFile as writeFileFs } from 'fs';

const options = { encoding: 'utf-8' };

const createReadWriteFile = (
  filename: string
): {
  readFile: () => Promise<string>;
  writeFile: (str: string) => Promise<void>;
} => {
  const readFile = (): Promise<string> =>
    new Promise((resolve, reject): void => {
      readFileFs(filename, options, (err, data): void => {
        if (err) {
          return reject(err);
        }

        resolve(data.toString());
      });
    });

  const writeFile = (data: string): Promise<void> =>
    new Promise((resolve, reject): void => {
      writeFileFs(filename, data, options, err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  return { readFile, writeFile };
};
export default createReadWriteFile;
