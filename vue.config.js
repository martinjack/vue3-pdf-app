const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  lintOnSave: false,
  css: { extract: false },
  transpileDependencies: ["pdfjs-dist"],
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.optimization = { minimize: true };
    } else {
      config.devtool = "source-map";
    }

    config.module.rules.push({
      test: /\.(cur)$/,
      use: ["file-loader"],
    });
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use().loader("svg-url-loader");
  },
});
