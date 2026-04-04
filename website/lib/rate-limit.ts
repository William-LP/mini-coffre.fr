const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5;

const store = new Map<string, number[]>();

setInterval(() => {
  const now = Date.now();
  for (const [key, timestamps] of store) {
    const pruned = timestamps.filter(t => now - t < WINDOW_MS);
    if (pruned.length === 0) store.delete(key);
    else store.set(key, pruned);
  }
}, 5 * 60_000);

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (store.get(ip) ?? []).filter(t => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    store.set(ip, timestamps);
    return false;
  }

  timestamps.push(now);
  store.set(ip, timestamps);
  return true;
}
