# AISEL Website — File Guide

## How to view it
This site loads each section (`home`, `research`, `people`, `publications`,
`news`, `contact`) from its own file at runtime, using `fetch()`. Browsers
block `fetch()` on local files opened directly (`file://...`), so
double-clicking `index.html` will show a blank page.

Use one of these instead:
- **VS Code**: install the "Live Server" extension, right-click `index.html` → "Open with Live Server".
- **Terminal**: from this folder, run `python3 -m http.server`, then open `http://localhost:8000` in your browser.
- **Deploy it**: upload the whole folder to GitHub Pages, Netlify, or Vercel — it will work immediately, no server setup needed.

## Folder structure
```
index.html              shared shell: <head>, nav bar, boot loader, footer,
                         links to every CSS/JS file, and the loader script
                         that pulls each section in

sections/
  home.html              hero, terminal animation, stat counters, marquee
  research.html          research foundation / application tabs
  people.html            director, researchers, collaborators, alumni cards
  publications.html      publication list ("commit log")
  news.html              news & events timeline
  contact.html           contact + join-the-lab forms

css/
  base.css               shared: variables, reset, nav, boot loader,
                         section headings, tabs, footer
  home.css / research.css / people.css / publications.css / news.css /
  contact.css            styles specific to that one section

js/
  base.js                shared: boot sequence, scroll progress, mobile
                         nav, scroll-spy, reveal-on-scroll, generic tabs
  home.js / research.js / people.js / publications.js / news.js /
  contact.js              behavior specific to that one section, each
                          exposing one init function (e.g. initHome())
                          called by the loader in index.html

assets/images/people/placeholder.svg
                         generic avatar used on new/unfilled team cards
```

## Editing a section
Each section's HTML, CSS, and JS are self-contained in their own three
files, so you can edit `people.html` / `people.css` / `people.js` (for
example) without touching anything else.

## People section — cards added
- Director: +1 placeholder card (for a co-director, if you have one)
- Research team: +4 placeholder cards (6 total)
- International collaborators: +4 placeholder cards (5 total)
- Notable alumni: +4 placeholder cards (5 total)

Each placeholder uses "Add Name" text and the generic avatar in
`assets/images/people/placeholder.svg` — search for "Add Name" across
`sections/people.html` to find and edit them, or just delete any card
`<article>...</article>` block you don't need.

## Bugs fixed along the way
- All People-section cards (director, researchers, collaborators, alumni)
  now render at the same fixed width/height, instead of stretching to
  fill the row when a section only had one card.
- A missing `</section>` closing tag after the Director card (the
  Leadership block was never closed in the original file).
- A `<div class="spotlight">` that was sitting outside its card in the
  Alumni section, instead of inside it.
- Ali Ahmed's photo path pointed at Haroon's image file by mistake.
- The particle-network line color was invalid CSS (a template literal
  was missing `${...}` interpolation), so connecting lines never drew
  with the intended fading purple color.
- The cursor-spotlight hover effect assumed every `.profile-card` has a
  `.spotlight` element inside it; the Director card didn't, which would
  have thrown an error on hover. Added a safety check.
- Removed ~25 lines of unused leftover CSS from an earlier card design
  (`.director`, `.person`, `.avatar`, `.link-pill`, etc.) that no
  current HTML referenced.
