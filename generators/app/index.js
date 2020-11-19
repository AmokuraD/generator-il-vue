const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname,
      },
      {
        type: "confirm",
        name: "routerMode",
        message:
          "Use history mode for router?(Requires proper server setup for index fallback in production)",
        default: false,
      },
    ]).then((answers) => {
      this.answers = answers;
    });
  }

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
      "babel.config.js",
      "commitlint.config.js",
      "package.json",
      "README.md",
    ];
    const context = this.answers;
    templates.forEach((item) => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        context
      );
    });
  }
};
