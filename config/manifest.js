'use strict';

const Confidence = require('confidence');

const internals = {
  defaults: {
    port: process.env.PORT || 8888
  },
  errorhOptions: {
    errorFiles: {
      404: `${process.cwd()}/public/404.html`,
      default: '50x.html'
    },
    staticRoute: {
      path: '/{path*}',
      method: '*',
      handler: {
        directory: {
          path: `${process.cwd()}/api`,
          index: true,
          redirectToSlash: true
        }
      },
      config: { plugins: { blankie: false } }
    }
  }
};

const store = new Confidence.Store({
  connections: [{ port: internals.defaults.port }],
  server: {
    debug: false,
    connections: {
      routes: { files: { relativeTo: `${process.cwd()}/public` } },
      router: {
        isCaseSensitive: false,
        stripTrailingSlash: true
      }
    }
  },
  registrations: [
    { plugin: 'inert' },
    { plugin: 'scooter' },
    { plugin: 'blankie' },
    {
      plugin: {
        register: 'errorh',
        options: internals.errorhOptions
      }
    },
    {
      plugin: {
        register: 'crumb',
        options: { restful: true }
      }
    },
    {
      plugin: {
        register: 'acquaint',
        options: {
          routes: [{ includes: ['api/routes/**/*.js'] }]
          // handlers: [{ includes: ['server/handlers/**/*.js'] }]
        }
      }
    },
    {
      plugin: {
        register: 'good',
        options: {
          ops: { interval: 3600 * 1000 },
          reporters: {
            console: [
              {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{ ops: '*', log: '*', error: '*', response: '*' }]
              },
              { module: 'good-console' },
              'stdout'
            ]
          }
        }
      }
    }
  ]
});

exports.defaults = internals.defaults;
exports.errorhOptions = internals.errorhOptions;

exports.get = (key, criteria) => {
  return store.get(key, criteria || internals.defaults);
};
