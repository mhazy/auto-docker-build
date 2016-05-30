'use strict';

const hapi = require('hapi');
const config = require('./server/config');
const plugins = require('./server/config/plugins');
const routes = require('./server/routes');

const server = new hapi.Server();

// Setup server connection
server.connection({
  host: config.host,
  port: config.port,
  routes: config.hapi.options.routes
});

// Register plugins, routes, etc.
server
  .register(plugins, function(err) {
    if (err) {
      throw err;
    }

    server.start(function() {

      // see: http://hapijs.com/api#serverauthschemename-scheme
      server.auth.strategy('githubwebhook', 'githubwebhook', { secret: config.github.webhookSecret});

      // Load routes
      server.route(require('./server/routes')(server));

      console.log('Hapi server started @ ' + server.info.uri.replace('0.0.0.0', 'localhost'));
    });
  });

module.exports = server;