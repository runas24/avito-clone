const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  if (!env.mode) {
    throw new Error('Mode not specified in the environment');
  }

  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config here if needed
  return config;
};
