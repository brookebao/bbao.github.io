# Template 2 homepage prototype

Isolated static prototype. Current homepage, project pages, CNAME, and hosting are unchanged.

Source: https://github.com/kayspace/portfolio-template/blob/master/templates/template2.html
Inspected commit: 3aa75a47ba4e36111951b3709b9bd01a1deae1d5
License: MIT, Copyright (c) 2025 kay. Full notice retained in LICENSE.

The supplied link points to kayspace, despite the diyoriko display text. This prototype uses the linked kayspace repository.

Template audit:
- One self-contained HTML file with inline CSS and JS, not a multipage case-study system.
- Fraunces serif headings, DM Mono labels, warm paper palette, thin rules, fixed navigation.
- Original projects are text-only placeholder links, not separate project pages.
- GSAP 3.12.2 and ScrollTrigger reveal initially transparent content; no reduced-motion handling found.
- Original breakpoint at 768px stacks grids, hides the right hero panel, and hides navigation without a replacement.
- Original active-nav code creates an unused observer and one observer per section.

Adaptation:
- Retains original CSS in template.css, with homepage-specific changes in prototype.css.
- Uses real existing project links and original image files, including CAD imagery.
- Replaces status card and generic skill inventory with image-led engineering work.
- Removes GSAP dependency; content remains visible without JavaScript; native anchor navigation.
- Keeps mobile navigation and project imagery visible, adds focus/skip link and reduced-motion support.
- Adds DM Sans for readable body copy; Fraunces and DM Mono remain.
- No invented project dates, robotics projects, or availability claims.
- Vine-inspired soft robotics and Robot Design need source material before inclusion.

Open index.html directly, or serve the repository root and visit /prototypes/template2/.
All local links use ../../ so existing URLs resolve from this isolated prototype.

## Project list revision
Selected work now adapts Template 1's numbered rows, fine dividers, right-aligned metadata, and subtle hover indent. Template 2's palette, typography, hero photograph, and contact section remain. Mobile metadata wraps beneath titles instead of being hidden. All four project destinations are unchanged; original photography and CAD remain on the existing case-study pages.
