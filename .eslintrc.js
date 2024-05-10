module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-lana`
  extends: ["lana"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
