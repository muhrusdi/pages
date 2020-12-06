  
const path = require('path')

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