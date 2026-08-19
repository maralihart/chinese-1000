# The First 1000 Chinese Characters

An offline-first, beginner-friendly guide to learning the first 1000 characters
of Mandarin Chinese, built with plain HTML, CSS, and JavaScript. It includes an
original stroke-to-sentence mental model with hand-authored SVG diagrams, a
filterable vocabulary explorer with pinyin, twenty conversational grammar
patterns, cited research notes with evidence tiers, visible caveats beside the
claims they affect, and a dedicated printer-friendly quick guide.

## Use the guide

1. Double-click `index.html`; no server, package install, or build is required.
2. Work down the learning path, then use the vocabulary explorer to filter by
   HSK level, theme, or a search of characters, pinyin, or English.
3. Use the grammar section to turn that vocabulary into sentences, filtering the
   patterns by what you want to do (state, ask, describe, connect, be polite).
4. Open `print-guide.html` for the separately authored two-page quick reference.

Everything works without JavaScript: filters are hidden and the full vocabulary
table and every grammar pattern remain visible.

## Files

| File | Purpose |
|---|---|
| `index.html` | Full guide: scope, mental model, essentials, learning path, vocabulary explorer, grammar patterns, examples, alternatives, troubleshooting, next steps |
| `styles.css` | Screen, responsive, accessibility, and print-preservation styles |
| `script.js` | Vocabulary level/theme/search filtering, grammar pattern filtering, active navigation |
| `print-guide.html` | Dedicated condensed two-page quick guide |
| `print-guide.css` | Letter/A4 screen preview and print layout |
| `research-notes.md` | Sources, evidence tiers, disputed figures, and open caveats |
| `SKILL.md` | The execution contract this project was built against |

## Scope and caveats

- Mandarin Chinese, simplified characters, absolute beginners.
- There is no official "first 1000 characters" list. The selection here is an
  editorial synthesis of the HSK bands and published corpus frequency data.
- HSK 2.0 (six levels) and HSK 3.0 (nine levels) are both in circulation, so
  level labels differ between resources.
- Character coverage figures are token coverage of running text, not
  comprehension.

## QA checklist

- Open `index.html` and `print-guide.html` directly from the file system.
- Check vocabulary filtering, search, grammar filtering, active navigation,
  keyboard focus, and touch targets.
- Check unique IDs, anchors, local links, and JavaScript syntax.
- Check reflow at 320px and 200% zoom, including the vocabulary table.
- Confirm the site still works with JavaScript disabled.
- Preview the dedicated guide on Letter and A4; preserve its two-page layout
  with no clipped cards, split diagrams, or blank overflow pages.
- Confirm the site, the print guide, and `research-notes.md` agree on every
  number and caveat.
