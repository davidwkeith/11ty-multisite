---
title: Site 2
layout: base.html
---

# Hello from Site 2

- Built from "{{multisite.input}}"
- Built to "{{multisite.output}}"
- Site specific data: "{{metadata.message}}"
- Shared data: "{{metadata.sharedMessage}}"
- Text file in `.well-known` directory: [link]({{metadata.wellknownTxt}})