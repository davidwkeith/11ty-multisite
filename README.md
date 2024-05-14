# Multisite Template for 11ty

Buiding multiple site from the same 11ty repo is not obvious, but also not hard. This template demonstrates the key features.

## How?

The `eleventy.config.js` starts by looking for an `env` variable named `SITE`, this will be used for configuration of 11ty and plugins. Ultimately this is just a drictory name under `./sites` that is used to compute the input directory. In this example I also specify an output directory, which might be nessisary if your CI/CD system has a shared cache by repo.

Template Litterals are used to inject the input path into `addPassthroughCopy()` and similar functions.

Finally, the input and output directories are stored as global data since some plugins require this at the template level, rather than reading in from `eleventyConfig.dir`.

### Building
- Site 1 `SITE=site-1 npx @11ty/eleventy`
- Site 1 `SITE=site-2 npx @11ty/eleventy`

#### Serving
- Site 1 `SITE=site-1 npx @11ty/eleventy --serve --quiet`
- Site 2 `SITE=site-1 npx @11ty/eleventy --serve --quiet`