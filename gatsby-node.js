  
const path = require('path')
const fs = require("fs")

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


exports.onCreateWebpackConfig = ({
  stage, getConfig, rules, loaders, actions
 }) => {
   actions.setWebpackConfig({
     resolve: {
       alias: aliases
     },
   });
 }

exports.onPostBuild = () => {
  const publicDir = path.join(__dirname, 'public');
  const docsDir = path.join(__dirname, 'docs');
  if (fs.existsSync) {
    fs.rmdirSync(docsDir, {recursive: true})
  }
  fs.renameSync(publicDir, docsDir);
}