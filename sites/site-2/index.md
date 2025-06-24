---
title: Site 2
layout: base.webc
---

# Hello from Site 2

- Built from "{{multisite.input}}"
- Built to "{{multisite.output}}"
- Site specific data: "{{metadata.message}}"
- Shared data: "{{metadata.sharedMessage}}"
- Text file in `.well-known` directory: [link]({{metadata.wellknownTxt}})

Check out [Site 1](https://11ty-multisite-site1.netlify.app)!

[Source]({{metadata.githubURL}})