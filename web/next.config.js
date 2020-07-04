const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    }
  }

  return {
      distDir: "_next",
    generateBuildId: async () => {
      if (process.env.BUILD_ID) {
        return process.env.BUILD_ID;
      } else {
        return `${new Date().getTime()}`;
      }
    },

  }
}