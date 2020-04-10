module.exports = function (eleventyConfig) {
    eleventyConfig.addLayoutAlias('main', 'layouts/main.pug');
    eleventyConfig.addPassthroughCopy('public');
    eleventyConfig.addPassthroughCopy('node_modules/normalize.css');
};
