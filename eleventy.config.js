if (!process.env.SITE) {
  console.warn("Missing SITE env, defaulting to site-1")
}
const site = process.env.SITE || "site-1";
const input = `sites/${site}/`;
const output = `public/${site}`;

module.exports = function(eleventyConfig) {

  // Passthrough examples
  eleventyConfig.addPassthroughCopy(`${input}/**/*.{svg,webp,png,jpeg,gif}`);
  eleventyConfig.addPassthroughCopy({
    [`${input}/.well-known/`]: "/.well-known/"
  });

  // Some plugins need build directories passed to them in the template
  // So add that information to the global data
  eleventyConfig.addGlobalData("multisite", {input, output});

  return {
    dir: {
      input,
      output,
      // Share includes so we don't need to rewrite our templates
      includes: "../../_includes",
    },
  };
}
