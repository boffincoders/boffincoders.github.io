# Open source by Boffin Coders

Source of [boffincoders.github.io](https://boffincoders.github.io/), the home page for open-source packages by [Boffin Coders](https://boffincoders.com):

| Package | What it does | Docs |
|---|---|---|
| [fundamental-analysis](https://github.com/boffincoders/fundamental-analysis) | Financial ratios and fundamental analysis for JavaScript and TypeScript | [Docs](https://boffincoders.github.io/fundamental-analysis/) |
| [ts-netstorageapi-akamai](https://github.com/boffincoders/akamai-netstorageapi-typescript) | TypeScript client and CLI for the Akamai NetStorage HTTP API | [Docs](https://boffincoders.github.io/akamai-netstorageapi-typescript/) |
| [durable_queue](https://github.com/boffincoders/durable_queue) | Persistent, retryable tasks for Dart and Flutter | [Docs](https://boffincoders.github.io/durable_queue/) |

The site is plain static files served from the root of `main`, with no build step. Because it sits at the domain root, its `robots.txt` lists the sitemaps of every project site under `boffincoders.github.io`.

To change the social preview image, edit `_og/card.html` and run `sh _og/render.sh`.
