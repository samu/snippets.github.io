import { sendAnalytics } from "@site/src/common/sendAnalytics";

function onScrollEnd() {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  const maxScroll = scrollHeight - clientHeight;

  const scrollPercent = maxScroll > 0 ? scrollTop / maxScroll : 1;
  const hasRead50 = scrollPercent >= 0.5;

  const distanceToBottom = scrollHeight - (scrollTop + clientHeight);
  const isNearBottom = distanceToBottom <= 400;

  if (hasRead50) {
    sendAnalytics({
      type: "read_homepage",
      metadata: {
        path: location.pathname,
        progress: 50,
      },
    });
  }

  if (isNearBottom) {
    sendAnalytics({
      type: "read_homepage",
      metadata: {
        path: location.pathname,
        progress: 99,
      },
    });
  }
}

export function onRouteDidUpdate() {
  document.removeEventListener("scrollend", onScrollEnd);
  document.addEventListener("scrollend", onScrollEnd);

  sendAnalytics({
    type: "visit_homepage",
    metadata: { path: location.pathname },
  });
}
