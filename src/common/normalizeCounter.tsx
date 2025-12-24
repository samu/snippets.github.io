export function normalizeCounter(counter: number, length: number) {
  return length === 0 ? 0 : ((counter % length) + length) % length;
}
