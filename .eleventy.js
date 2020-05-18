const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const formatDistance = require('./util/format-distance');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight, {
        templateFormats: ['md'],
        alwaysWrapLineHighlights: true,
    });

    eleventyConfig.setTemplateFormats([
       'pug',
       'md',
       'ico',
       'webmanifest'
    ]);

    eleventyConfig.addLiquidFilter('prettyDate', formatDistance);

    eleventyConfig.addLayoutAlias('home', 'layouts/home.pug');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.pug');

    eleventyConfig.addPassthroughCopy('public');
    eleventyConfig.addPassthroughCopy('_headers');
    eleventyConfig.addPassthroughCopy('service-worker.js');
    eleventyConfig.addPassthroughCopy('node_modules/workbox-sw/build/workbox-sw.js');
};
