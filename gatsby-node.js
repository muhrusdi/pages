/* eslint-disable @typescript-eslint/no-unused-vars */
  
const path = require("path")
const fs = require("fs-extra")

const aliases = {
  containers: path.resolve(__dirname, "src/containers"),
  components: path.resolve(__dirname, "src/components"),
  templates: path.resolve(__dirname, "src/templates"),
  images: path.resolve(__dirname, "src/images"),
  layout: path.resolve(__dirname, "src/containers/layout"),
  hooks: path.resolve(__dirname, "src/hooks"),
  types: path.resolve(__dirname, "src/types"),
  contexts: path.resolve(__dirname, "src/contexts"),
}


exports.onCreateWebpackConfig = ({actions}) => { //stage, getConfig, rules, loaders, actions
  actions.setWebpackConfig({
    resolve: {
      alias: aliases
    },
  });
}

// exports.createPages = async ({actions}) => {

// }

exports.onPostBuild = () => {
  const publicDir = path.join(__dirname, "public");
  const docsDir = path.join(__dirname, "docs");
  // if (fs.existsSync) {
  //   fs.rmdirSync(docsDir, {recursive: true})
  // }
  fs.copySync(publicDir, docsDir, { overwrite: true });
}