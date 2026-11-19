# Project-page audit and reusable design system

## Scope
First implementation: `work/engs33-bridge.html` only, on `codex/project-case-study`.
Homepage HTML and its styles, all other project pages, original assets, URLs, and hosting configuration remain unchanged.

## Homepage identity
Fraunces 300-weight serif headings with occasional italic accent, DM Sans body, DM Mono secondary labels. Paper `#F7F6F2`, charcoal `#222321`, secondary `#666862`, accent `#A34E32`. Sticky 76px header (70px mobile), 1240px content maximum, 48px desktop gutters and 22px mobile gutters. Fine separators, restrained hover color, no entrance animations.

## Audit of every /work/ page

| Page | Existing evidence | Recommended treatment / gaps |
| --- | --- | --- |
| Truss bridge | 22 project figures: sketches, reference, SAP2000 models and comparison table, SolidWorks variants and table, final CAD drawing/render, four assembled views, stress/displacement plots, Instron photograph, results table, failure predictions and actual crack | Best first candidate: complete concept-to-test narrative, authentic imagery, quantitative results and reflection. No report/video link or project year in source. Individual contribution documented only for Brooke's SolidWorks variant; preserve team credit. |
| Pendulum car | Full and close-up prototype photos; block diagrams; theoretical/experimental root loci and compensator equations; local MP4/MOV; external PDF report; additional response plots and component-values image in asset directory | Strong second candidate; distinguish controller targets from measured results. Source describes stabilization qualitatively, with no numeric achieved performance in page text. Preserve report and video. |
| Al–Si casting | Casting/preparation MP4, preparation diagram, three micrographs, cooling comparisons, hardness plot, external PDF report and Google Slides | Strong materials case study. Recorded nine samples, 0–25 wt% Si, 900°C melt, polishing to 0.3 μm, optical/SEM characterization and Rockwell hardness. Preserve note about two preparation batches/machine failure. Needs encoding cleanup; avoid overstating hardness conclusions. |
| Chicken brooder | Extensive photos of field context, prototypes and test configurations; temperature plots; concept progression; farmer interviews; insulation/phase-change investigation | Strong human-centered design story, Fall 2023 / MIT D-Lab. Technical results largely in graphics; clarify individual role before crediting team activities as personal accomplishments. |
| Toy product design | Wooden pull-toy photograph, Tumble Tower team product photograph, Simon Says prototype MP4/WebM and poster; Fusion 360/Arduino references | Spring 2023. Three distinct exercises; organize as a collection or separate chapters, not one invented product process. Preserve team-of-five context. Existing descriptions depend on hover. |
| Geospatial research | One map screenshot; description of work with Dr. Danika Eamer/MIT MCSC; public update and institutional links | Focus on the documented attribute-detail feature, regulation/incentive data, and energy-sector data. Source says Summer 2024–Present; current status needs confirmation before republishing. Existing nested body markup needs repair in a future pass. |
| Research ethics | Course description, Fall 2024, five project websites linked externally | Editorial research overview. Fix incorrect Toy Product Design page title in future pass. Outcomes are external; local technical evidence is limited. |
| TikTok algorithms | Under-construction text only | Not ready for a substantive case study; do not invent work or results. |
| Piano | Four YouTube/Embedly recordings, personal introduction, leftover placeholder content | Separate creative archive, not an engineering case study. Existing client-side prompt is not real access control; leave unchanged in this scope. |
| Scrapbook | Nine gallery images, idea and execution text, Webflow lightboxes | Creative gallery with captions. Existing client-side prompt left unchanged in this scope. |

## Recommended reusable structure

1. Back-to-work link, category/context eyebrow, large title and one-sentence summary.
2. Authentic hero image or user-controlled video; useful caption.
3. Metadata definition list: confirmed year/context, individual contribution, category, tools/methods. Omit undocumented fields.
4. Optional in-page navigation for long case studies.
5. Objective and context, clearly separating personal contribution from team work.
6. Design development: concepts, models, decisions, iteration; large captioned figures.
7. Fabrication/implementation only when source material supports it.
8. Testing and results, distinguishing target, prediction, measurement, and inference. Use semantic tables for numeric values while keeping source figures accessible.
9. Reflection grounded in the actual source; reports/downloads where they already exist.
10. Next-project navigation and compact contact footer.

## Implementation contract

- `css/project.css` is self-contained and matches homepage tokens; it is loaded only by migrated projects. It does not modify or load homepage layout rules.
- Semantic landmarks, one h1, ordered headings, descriptive alt text, skip link, visible focus.
- `.page-width`: shared page alignment; `.prose`: readable 68ch measure.
- `.section-intro`: desktop margin label plus text, stacked on mobile.
- `.figure-grid--pair`, `--three`, `--wide`: optional groupings; single column below 760px.
- Figure images retain natural proportions. No cropping of drawings or technical plots.
- WebP display derivatives have no cropping; original files remain linked and untouched. All 22 original bridge figure sources remain reachable. Below-fold images lazy-load with explicit dimensions.
- `js/project.js`: optional native-dialog enlargement. Escape and Close dismiss; focus returns to the originating link. Modifier-clicks retain native link behavior. Without JS, figure links open the originals.
- Original section IDs (`overview`, `ideation`, `analysis`, `final-results`, `testing`, `results`) remain, plus `reflection`.
- No new libraries, framework, automated deployment, invented reports, year, results, or role.

## Bridge data provenance and follow-up

The accessible results table is transcribed from `images/engs33-bridge-project/results/resultstable.png`:
predicted 3.25 kN / 0.162 mm; measured 5.837 kN / 0.244 mm; recorded percent errors 44.3% / 33.6%.
The source labels the deflection interval 0.5–1 N. Retain that label for now, and confirm its units before publication rather than silently correcting it to kN.

The recorded design decisions are 130 mm height, five arches, K-truss, 0.5 kg mass, thinner deck, and seven 6 mm crossmembers. These are source statements, not new measurements.

Do not migrate another page until the user approves this example.

## Current revision: presentation only
The user requested that bridge content stay exactly the same. The original bridge HTML body has therefore been restored verbatim from the pre-redesign snapshot, including original text, image paths, captions, links, section order, and inline JavaScript. Only font and stylesheet links were added in the head. `css/bridge-editorial.css` now supplies the presentation changes. The earlier rewritten case-study content, accessible transcribed table, optimized display images, and native-dialog interaction are not used by the bridge page. Homepage remains unchanged. Original body equality and homepage hash were checked after this revision. Visual browser verification is still pending.
