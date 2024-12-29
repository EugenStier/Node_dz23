export function delay(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Completed after ${ms} ms`);
    }, ms);
  });
}

export async function executePromisesSequentially() {
  const result1 = await delay(1000);
  console.log(result1); // Output after 1 second

  const result2 = await delay(2000);
  console.log(result2); // Output after 2 seconds

  const result3 = await delay(1500);
  console.log(result3); // Output after 1.5 seconds
}
