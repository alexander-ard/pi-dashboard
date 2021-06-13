/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

console.log('Using vue.config.js file');

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/variables.scss";`
      }
    }
  }
};
