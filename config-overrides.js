const { injectBabelPlugin } = require('react-app-rewired');

/* config-overrides.js */
module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }
  return config;
};
