# Research notes — The First 1000 Characters in Chinese

Prepared for the site in this repository. Access date for every source below:
**19 August 2026**. Scope of the site: **Modern Standard Mandarin (Putonghua)
written in simplified characters, romanised with Hanyu Pinyin**, for adult
self-study beginners.

## How claims are labelled

| Label | Meaning | Used on the site as |
|---|---|---|
| **Authoritative** | Published standard, government document, or peer-reviewed study | Stated as fact, with the standard named |
| **Specialist** | Recognised specialist reference maintained by practitioners | Stated as fact, with the publisher named |
| **General advice** | Widely repeated teaching practice with partial evidence | "Commonly recommended", never "proven" |
| **Inference** | Our editorial synthesis from cited data | "This site's choice", marked as a caveat |
| **Anecdote** | Learner reports and forum consensus | Excluded from guidance; not used |

Direct fetching of `chinesetest.cn`, `lingua.mtsu.edu`, and
`resources.allsetlearning.com` failed from the build environment (DNS was not
resolvable), so figures from those publishers were corroborated across several
independent secondary sources that cite them. Those items are flagged
**needs spot-check** below and carry a visible caveat on the site.

---

## 1. HSK standards (Authoritative)

### HSK 2.0 (six levels, in use since 2010)

Cumulative **word** counts: HSK 1 = 150, HSK 2 = 300, HSK 3 = 600, HSK 4 =
1,200, HSK 5 = 2,500, HSK 6 = 5,000.

- Publisher: Hanban / Center for Language Education and Cooperation (CLEC).
  Portal: <http://www.chinesetest.cn/> (syllabus and word-list PDFs).
- **Limitation:** HSK 2.0 defines **word** lists, not character lists. Per-level
  character totals circulating online (~150 / 300 / 600 / 1,000 / 1,500 / 2,500)
  are secondary derivations, not published HSK 2.0 data. The site never presents
  HSK 2.0 character counts as official. *needs spot-check*

### HSK 3.0 — 《国际中文教育中文水平等级标准》 GF 0025-2021

Three stages, nine levels; effective 1 July 2021; issued by CLEC under the
Ministry of Education.

| Level | Characters (cumulative) | Words (cumulative) |
|---|---|---|
| 1 | 300 | 500 |
| 2 | 600 | 1,272 |
| 3 | 900 | 2,245 |
| 4 | 1,200 | 3,245 |
| 5 | 1,500 | 4,316 |
| 6 | 1,800 | 5,456 |
| 7–9 | 3,000 | 11,092 |

- MOE announcement (29 March 2021):
  <https://www.moe.gov.cn/jyb_xwfb/gzdt_gzdt/s5987/202103/t20210329_523304.html>
- MOE press Q&A (2 April 2021):
  <https://www.moe.gov.cn/jyb_xwfb/s271/202104/t20210402_524194.html>
- Archived copy of the standard:
  <https://archive.org/details/chinese-standards-no-watermark>
- **Conflict:** some summaries give Level 1 as 300 words rather than 500; the
  difference appears to be whether all vocabulary items or only content words
  are counted. The site cites 500 and states the discrepancy.
- **Limitation:** handwriting is only required from Level 5 upward; lower levels
  distinguish recognition from production.

### Adoption status (as of August 2026)

HSK 3.0 is published but has **not** replaced HSK 2.0 testing. A second global
pilot examination is scheduled for 20 September 2026; standard HSK 2.0 tests
continue on the 2025–2026 calendar, and no mandatory switchover date is
published. Both systems are currently operative and are **not** interchangeable.
Source: exam notices at <http://www.chinesetest.cn/> . *needs spot-check*

---

## 2. Character frequency data (Authoritative)

### Jun Da, Modern Chinese Character Frequency List

- Author: Jun Da, Middle Tennessee State University.
- URL: <http://lingua.mtsu.edu/chinese-computing/statistics/char/list.php?Which=MO>
- Corpus: ~110 million characters of modern Chinese online text; 2004 release.
- Cumulative coverage of running text (token coverage): top 100 ≈ 41–42%,
  top 500 ≈ 75%, top 1,000 ≈ 89%, top 2,000 ≈ 97%, top 2,500–3,000 ≈ 99%.
- **Limitations:** written online/news register; two decades old; **token**
  coverage, not comprehension. Recognising 89% of character tokens does **not**
  mean understanding 89% of the meaning, because most words are multi-character
  compounds. *needs spot-check*

### SUBTLEX-CH (spoken-register comparison)

Cai, Q., & Brysbaert, M. (2010). *SUBTLEX-CH: Chinese word and character
frequencies based on film subtitles.* PLOS ONE 5(6): e10729.
<https://doi.org/10.1371/journal.pone.0010729> — 46.8 million characters /
33.5 million words of film and TV subtitles. Better proxy for conversation;
underrepresents formal written registers.

### Lancaster Corpus of Mandarin Chinese (LCMC)

McEnery, T., & Xiao, R. (2004), Oxford Text Archive:
<https://ota.ox.ac.uk/repository/xmlui/handle/20.500.12024/2474> — 1 million
words, 15 genres, early-1990s written Mainland Chinese. Publishes no headline
"top-N coverage" table; used here only as corroboration.

### Consequence for the site (Inference)

Frequency lists disagree on roughly the outer fifth of any top-1000 set because
corpora differ (news vs. subtitles vs. textbooks). There is **no single official
"1000 characters" list**. The closest official anchors are HSK 3.0 Levels 1–4
(1,200 characters) and the primary table of the 2013 general-standard list.
The site's vocabulary explorer is therefore presented as a curated teaching
subset, not as an official list.

---

## 3. 通用规范汉字表 — Table of General Standard Chinese Characters (2013) (Authoritative)

Issued by the State Council, Ministry of Education and State Language
Commission; effective 19 August 2013.

| Table | Characters | Use |
|---|---|---|
| Level 1 | 3,500 | Everyday use and compulsory education |
| Level 2 | 3,000 | General publishing, secondary education |
| Level 3 | 1,605 | Names, places, science, classical texts |
| **Total** | **8,105** | |

- MOE listing:
  <http://www.moe.gov.cn/jyb_sjzl/ziliao/A19/201306/t20130601_186002.html>
- Superseded the 1988 common-character (3,500) and general-character (7,000)
  tables.

---

## 4. Pinyin (Authoritative)

- Hanyu Pinyin adopted by the National People's Congress in 1958. Four tones
  (ā á ǎ à) plus an unstressed neutral tone, normally written without a mark.
- ISO 7098:2015, *Information and documentation — Romanization of Chinese*:
  <https://www.iso.org/standard/61420.html> (full text is paywalled; the scope
  statement is from the ISO catalogue entry).
- GB/T 16159-2012 《汉语拼音正词法基本规则》 — orthography rules: syllables of one
  word are joined (*Zhōngguó*), proper nouns are capitalised, personal names are
  written surname + given name (*Wáng Xiǎomíng*).
  <https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=5645BD8DB9D8D73053AD3A2397E15E74>
  Unofficial English rendering: <https://pinyin.info/rules/GBT16159-2012_traditional.html>
- **Caveat used on the site:** tone sandhi (e.g. 不 *bù* → *bú* before a fourth
  tone; two third tones in sequence) changes pronunciation but is written with
  the citation tone in most teaching material; the site marks where it applies.

---

## 5. Character structure (Authoritative + Specialist)

- **Radicals:** 214 Kangxi radicals (康熙字典, 1716) remain standard in traditional
  dictionaries: <https://en.wikipedia.org/wiki/Kangxi_radicals>. Mainland
  simplified dictionaries follow 《汉字部首表》 (2009), with 201 indexing
  components. *needs spot-check for the 2009 standard's full text.*
- **六书 (six categories)** from Xu Shen's 说文解字 (~100 CE):
  象形 pictograph, 指事 indicative, 会意 compound-indicative, 形声
  semantic-phonetic, 转注 mutually explanatory, 假借 phonetic loan.
  <https://www.britannica.com/topic/liu-shu>
- **形声字 share:** approximately **80–90%** of characters are semantic-phonetic
  compounds. Xu Shen's own corpus (~9,353 characters) is about 82%; modern
  estimates vary with the character set analysed. There is no single definitive
  modern figure, so the site always states the range, not one number.
- **Stroke order:** GF 0023-1997 《现代汉语通用字笔顺规范》, updated by
  GF 0023-2020 《通用规范汉字笔顺规范》. Core rules: top to bottom, left to right,
  horizontal before vertical, left-falling before right-falling, outside before
  inside, close the frame last, centre before sides.
  Archived copies: <https://archive.org/details/19970800_202307> and
  <https://archive.org/details/GF0023-2020>

---

## 6. Learning science and tools

- **Spacing effect (Authoritative):** Ebbinghaus (1885); Cepeda, Pashler, Vul,
  Wixted & Rohrer (2006), *Distributed practice in verbal recall tasks: a review
  and quantitative synthesis*, Psychological Bulletin 132(3), 354–380; review:
  <https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2017.00962/full>
  **Limitation:** no located randomised trial establishes that a specific
  flashcard app is optimal *for Chinese characters*. The site says spaced review
  is "strongly supported by memory research", never "proven best".
- **Chinese Grammar Wiki (Specialist),** AllSet Learning:
  <https://resources.allsetlearning.com/chinese/grammar/> with A1 and A2 lists at
  `/A1_grammar_points` and `/A2_grammar_points`. Level labels are the
  publisher's editorial judgement, not a national curriculum. *needs spot-check*
- **Hanzi Writer (Specialist, MIT-licensed):** stroke-order animation library,
  <https://hanziwriter.org/docs.html> — not bundled here; the site stays
  dependency-free and offline.
- **Pleco (Specialist, commercial):** <https://www.pleco.com/>
- **CC-CEDICT / MDBG (Specialist, community, CC BY-SA):**
  <https://www.mdbg.net/chinese/dictionary?page=cedict> — community-edited, so
  individual entries can contain errors.

---

## 7. Grammar patterns used on the site (Specialist)

Every pattern taught on the site is listed by the Chinese Grammar Wiki at A1 or
A2: basic S-V-O order; 是 identity; 有 possession and existence; adjectival
predicates with 很; 的 modification; 在 for location; 吗 questions; question
words 什么 / 谁 / 哪儿 / 怎么 (为什么 at A2); A-not-A questions; 了 for completion
and for change of state; modal verbs 想 / 要 / 会 / 能 / 可以; 不 vs 没 negation;
也 and 都; measure words; 太…了; 一点儿 vs 有点儿 (A2); 因为…所以… and 虽然…但是…
(A2); time-before-verb word order; 从…到… (A2); 给; 跟…一起; 过 for experience
(A2); 正在 progressive (A2); 比 comparison (A2); 请 requests; result complements
(A2); 吧 for suggestions.

- **Limitation:** 了 is the single most commonly mis-taught point at A1; the site
  restricts it to two clearly separated uses and flags the rest as later study.
- **Limitation:** 会 / 能 / 可以 overlap in real usage; the site gives the default
  teaching distinction and marks it as a simplification.

---

## 8. Script and region (Authoritative on policy, Specialist on summary)

| Place | Script |
|---|---|
| Mainland China | Simplified |
| Singapore | Simplified |
| Malaysia | Simplified in Chinese-medium schools |
| Taiwan, Hong Kong, Macau | Traditional |
| HSK exams (all levels) | Simplified |

Mainland use rests on 《中华人民共和国国家通用语言文字法》 (2001). **Caveat:**
Malaysia's official languages are Malay (and its script); simplified characters
are the norm in Chinese-medium education rather than an official state script.

---

## 9. Open questions carried onto the site as caveats

1. HSK 2.0 per-level **character** counts are unofficial derivations.
2. HSK 3.0 Level 1 word count is cited as 500 with a documented 300-word
   variant.
3. Frequency coverage figures are corpus- and token-based; they do not measure
   comprehension.
4. "The first 1000 characters" is an editorial synthesis, not an official list.
5. Grammar level labels come from a specialist publisher, not a standards body.
6. Spaced review is well supported in general memory research; no
   Chinese-specific trial was located establishing any single tool as best.

## Content and licensing notes

All diagrams, tables, and example sentences on the site were written for this
project. No dictionary database, textbook text, or exam word list is reproduced
here; official lists are linked at their publishers instead.
