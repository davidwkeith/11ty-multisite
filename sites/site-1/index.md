---
title: Site 1
layout: base.html
---

# Hello from Site 1

- Built from "{{multisite.input}}"
- Built to "{{multisite.output}}"
- Site specific data: "{{metadata.message}}"
- Shared data: "{{metadata.sharedMessage}}"
- Text file in `.well-known` directory: [link]({{metadata.wellknownTxt}})