const sentPayloads = new Set<string>();

export function sendAnalytics(body: unknown) {
  const key = JSON.stringify(body);

  if (sentPayloads.has(key)) {
    return;
  }

  sentPayloads.add(key);

  // TODO fix
  return;

  // TODO configure properly
  fetch("https://api.snippets.ch/functions/v1/analytics", {
    method: "POST",
    body: key,
  });
}
