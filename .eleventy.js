const Image = require("@11ty/eleventy-img");

const now = String(Date.now())

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [50, 200, 300, 600],
    formats: ["avif", "jpeg", "webp"],
    outputDir: "./_site/img"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./styles/tailwind.css')
  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })

  eleventyConfig.addShortcode('version', function () {
    return now;
  })

  eleventyConfig.addLiquidShortcode("image", imageShortcode);

  return {
    dir: {
      input: "src"
    }
  }
};
