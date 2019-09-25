// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "~@/assets/styles/_variables.scss"`
            },
            scss: {
                data: `@import "~@/assets/styles/_variables.scss";`
            },
        }   
    }
};
  