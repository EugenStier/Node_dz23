export function processStrings(strings: string[]): Promise<string[]> {
  return Promise.all(
    strings.map(async (str) => {
      return new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(str.toUpperCase());
        }, 1000); // Delay of 1 second
      });
    })
  );
}
