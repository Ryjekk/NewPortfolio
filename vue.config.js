const path = require("path");
module.exports = {
  // enable to use a variables everywhere
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/setup/_variables.scss";`
      }
    }
  },
  // enable to use style pages
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
    }
  }
};
