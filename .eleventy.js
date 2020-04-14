module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats([
       'pug',
       'md',
       'ico',
       'webmanifest'
    ]);
    eleventyConfig.addLiquidFilter("prettyDate", function(value) {
        return value.toLocaleDateString('tr-TR');
    });
    eleventyConfig.addLayoutAlias('main', 'layouts/main.pug');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.pug');
    eleventyConfig.addPassthroughCopy('public');
    eleventyConfig.addPassthroughCopy('service-worker.js');
    eleventyConfig.addPassthroughCopy('node_modules/workbox-sw/build/workbox-sw.js');
};
