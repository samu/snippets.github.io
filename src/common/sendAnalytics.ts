const sentPayloads = new Set<string>();

export function sendAnalytics(body: unknown) {
  const key = JSON.stringify(body);

  if (sentPayloads.has(key)) {
    return;
  }

  sentPayloads.add(key);

  // TODO configure properly
  fetch("http://192.168.1.110:54321/functions/v1/analytics", {
    method: "POST",
    body: key,
  });
}
