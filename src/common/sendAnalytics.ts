const sentPayloads = new Set<string>();

export function sendAnalytics(body: unknown) {
  if (window.location.hostname === "localhost") {
    return;
  }

  const key = JSON.stringify(body);

  if (sentPayloads.has(key)) {
    return;
  }

  sentPayloads.add(key);

  fetch("https://api.snippets.ch/functions/v1/analytics", {
    method: "POST",
    body: key,
  });
}
