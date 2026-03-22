module.exports = function myRoutePlugin() {
  return {
    name: "my-route-plugin",
    getClientModules() {
      return [require.resolve("./routeLifecycle.ts")];
    },
  };
};
