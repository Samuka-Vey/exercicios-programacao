export default function main(input: string): string {
  const [a, b] = input.split("\n").map(Number);

  return `X = ${a + b}`;
}
