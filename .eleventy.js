module.exports = function (eleventyConfig) {
    eleventyConfig.addLiquidFilter("prettyDate", function(value) {
        return value.toLocaleDateString('tr-TR');
    });
    eleventyConfig.addLayoutAlias('main', 'layouts/main.pug');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.pug');
    eleventyConfig.addPassthroughCopy('public');
    eleventyConfig.addPassthroughCopy('CNAME');
};
