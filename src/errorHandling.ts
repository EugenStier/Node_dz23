export async function handlePromiseErrors() {
  const promise1 = new Promise((resolve) =>
    setTimeout(() => resolve("Result 1"), 1000)
  );
  const promise2 = new Promise((_, reject) =>
    setTimeout(() => reject("Error in Promise 2"), 500)
  );
  const promise3 = new Promise((resolve) =>
    setTimeout(() => resolve("Result 3"), 1500)
  );

  try {
    const results = await Promise.all([promise1, promise2, promise3]);
    console.log(results);
  } catch (error) {
    console.error("Caught an error:", error); // Handle error here
  }
}
