# Narrative Mind Lab — personal research website

A responsive bilingual (English / Persian) static website for Behnam Karami. It introduces a research programme on narrative across Brain, Mind, Machine, and Society, with background, ongoing projects, theoretical essays, publications, data, and contact sections.

## Preview locally

Open `index.html` in a browser. For a local server (recommended), run from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish

Upload the complete folder to GitHub Pages, Netlify, Cloudflare Pages, or another static host. No build step or backend is required. Preserve the directory structure.

## Structure

- `index.html` — bilingual home page, about, four research levels, selected projects, writing index, publications, data, and contact.
- `blog/existential-semiotics.html` — bilingual essay on existential semiotics, Dasein, Lotman, and the subject's lifeworld of signs.
- `blog/cognitive-narratology.html` — bilingual essay on image schemas, event models, causality, time, selfhood, and narrative cognition.
- `assets/styles.css` — minimalist dark visual system and responsive layout.
- `assets/article.css` — essay-page styling.
- `assets/site.js` — English/Persian switch, saved language preference, mobile navigation, and dynamic footer year.
- `assets/favicon.svg` — site icon.

## Research-project notes

The Event-Aware RL entry links to the public E-EARL project page. Its text distinguishes the currently reported matched-ecology benchmark from claims of generality: event boundaries in the current benchmark use a fixed cue-change detector, and independent ecologies are needed to assess broader transfer.

The Narrative Architectures for NeuroAI entry presents a developing research programme, not a claim that a complete general-purpose architecture has already been implemented.

## Before publishing

1. Replace the typographic initials portrait block with a suitable portrait photograph if desired.
2. Add verified publication records and links; the page does not invent citation metadata.
3. Add public dataset, code, and materials links only after checking permissions. Human neuroimaging data should not be redistributed unless consent, ethics approval, and sharing conditions permit it.
4. Confirm whether “Narrative Mind Lab” should be described as a formal institutional lab or as a personal research programme.

Google Fonts are loaded remotely, with system-font fallbacks.
