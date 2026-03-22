const sentPayloads = new Set<string>();

export function sendAnalytics(body: unknown) {
  const key = JSON.stringify(body);

  if (sentPayloads.has(key)) {
    return;
  }

  sentPayloads.add(key);

  // TODO configure properly
  fetch("https://snippets.ch/functions/v1/analytics", {
    method: "POST",
    body: key,
  });
}
