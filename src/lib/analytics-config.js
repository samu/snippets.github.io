// Astro supplies environment values; Node-based checks use the defaults.
const env = import.meta.env ?? {};

export const analyticsConfig = {
  enabled: true,
  visitIdEnabled: true,
  visitIdleMinutes: 30,
  endpoint:
    env.PUBLIC_ANALYTICS_ENDPOINT ||
    "https://api.snippets.ch/functions/v1/analytics",
  hosts: env.PUBLIC_ANALYTICS_HOSTS
    ? env.PUBLIC_ANALYTICS_HOSTS.split(",")
        .map((host) => host.trim())
        .filter(Boolean)
    : ["snippets.ch", "www.snippets.ch"],
};
