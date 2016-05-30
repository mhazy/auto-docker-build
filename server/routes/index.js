'use strict';

module.exports = function () {
  const routers = [
    './github',
  ];

  return routers.reduce((routes, route) => {
      const loadedRoutes = require(route);
      return routes.concat(loadedRoutes);
  }, []);
};
