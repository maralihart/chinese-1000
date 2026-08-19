# Execution contract: topic site

This project was produced against the following contract. It is recorded here so
the work can be audited and repeated.

## 1. Research first

- Use reputable, current, specialist sources: national standards, ministry
  announcements, corpus data, peer-reviewed research, and established reference
  works.
- Separate evidence tiers explicitly: authoritative standard, specialist
  source, general advice, inference, and anecdote.
- Record concise, cited notes in `research-notes.md`, including disputed
  figures and open questions.

## 2. Define scope and audience

- State who the guide is for, what it covers, and what it deliberately leaves
  out, in the first screen of the site.

## 3. Teach with one mental model

- Choose a single organising model and express it with original HTML, CSS, and
  SVG. No stock imagery, no external asset requests.
- Every later section should refer back to that model.

## 4. Build the website

- Static, no build tools. It opens directly from `index.html`.
- Required content: essentials, a step-by-step learning path, practical
  examples, alternatives, troubleshooting, and next steps.
- Required qualities: semantic and accessible HTML, keyboard support,
  responsive layout down to 320px, offline-friendly assets, source attribution,
  and caveats placed beside the guidance they affect.
- Progressive enhancement: all content must remain reachable without
  JavaScript.

## 5. Author a dedicated print guide

- `print-guide.html` and `print-guide.css`, written separately from the site
  rather than derived from a print stylesheet.
- One to three pages that fit Letter and A4, with no clipped cards, split
  diagrams, blank overflow pages, or decoration that wastes ink.

## 6. Document and validate

- Update `README.md` with the finished project's purpose and usage.
- Validate JavaScript syntax, local links, anchors, unique IDs, accessibility
  basics, responsive behaviour, and print output before finishing.

## Completion standard

The guide is finished when a motivated beginner can read it end to end, act on
it, print the quick guide, and see exactly where the evidence is strong and
where it is editorial judgement.
