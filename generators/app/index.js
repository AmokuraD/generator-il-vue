const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  writing() {
    const templates = [
      "mock/index.js",
      "mock/sample.js",
      "public/favicon.ico",
      "public/index.html",
      "src/apis/request.js",
      "src/apis/sample.js",
      "src/assets/logo.png",
      "src/components/hello-world.vue",
      "src/layouts/basic-layout.vue",
      "src/router/index.js",
      "src/router/routes.js",
      "src/store/modules/app.js",
      "src/store/getters.js",
      "src/store/index.js",
      "src/styles/default.css",
      "src/views/about.vue",
      "src/views/home.vue",
      "src/App.vue",
      "src/main.js",
      ".browserslistrc",
      ".eslintrc.js",
      ".gitignore",
      "babel.config.js",
      "commitlint.config.js",
      "package.json",
      "README.md",
    ];
    templates.forEach(item => {
      this.fs.copyTpl(this.templatePath(item),this.destinationPath(item))
    })
  }
};
