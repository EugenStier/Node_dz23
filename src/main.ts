import { executePromisesSequentially } from "./promises";
import { processStrings } from "./asyncProcessing";
import { handlePromiseErrors } from "./errorHandling";
import { dynamicDelay } from "./dynamicDelay";

async function main() {
  console.log("Starting sequential promises:");
  await executePromisesSequentially();

  console.log("\nProcessing strings:");
  const processedStrings = await processStrings([
    "hello",
    "world",
    "typescript",
  ]);
  console.log(processedStrings); // Output: ['HELLO', 'WORLD', 'TYPESCRIPT']

  console.log("\nHandling promise errors:");
  await handlePromiseErrors();

  console.log("\nDynamic delays:");
  await dynamicDelay([500, 1000, 1500]);
}

main();
