export async function expensiveFunction(seconds: number): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve(`Finished in ${seconds} seconds`), seconds * 1000))
}