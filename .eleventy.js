module.exports = function (eleventyConfig) {
    eleventyConfig.addLayoutAlias('main', 'layouts/main.pug');
    eleventyConfig.addPassthroughCopy('public');
};
