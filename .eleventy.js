module.exports = function (eleventyConfig) {
    eleventyConfig.addLayoutAlias('main', 'layouts/main.pug');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.pug');
    eleventyConfig.addPassthroughCopy('public');
};
