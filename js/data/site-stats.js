/* ==========================================================
   AISEL — SHARED SITE STATISTICS
   Single source of truth for numbers reused across sections
   (hero counters, publications dashboard, footer, etc.) so
   they can't drift out of sync with each other.

   Loaded first in index.html, before any section script.
   Edit the values below — nothing else needs to change.
========================================================== */

const SITE_STATS = {
  researchers: 17,          // shown in the hero counter
  totalPublications: 42,    // cross-referenced estimate — replace with the exact
                             // count from https://scholar.google.com/citations?hl=en&user=s_BMc5YAAAAJ
  totalCitations: 1197,     // Google Scholar "Cited by" count
  totalProjects: 3,         // matches the placeholder cards in the Projects section —
                             // update once real projects are added
  countries: 9,             // international collaborators / alumni footprint
};
