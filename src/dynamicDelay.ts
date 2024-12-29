export async function dynamicDelay(numbers: number[]): Promise<void> {
  const promises = numbers.map((num) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(`Resolved after ${num} ms`);
        resolve();
      }, num);
    });
  });

  await Promise.all(promises);
}
