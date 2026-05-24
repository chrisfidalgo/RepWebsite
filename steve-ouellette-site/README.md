# Steve Ouellette Campaign Website

A static, mobile-first campaign website for **Steve Ouellette**, candidate for re-election as **State Representative for Massachusetts' 8th Bristol District**.

Built with [Astro](https://astro.build). Static output — no server required.

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)

### Install dependencies

```bash
cd steve-ouellette-site
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser. The site auto-reloads when you save changes.

### Build for production

```bash
npm run build
```

Output goes to `./dist/`. This folder is what you deploy.

### Preview the production build

```bash
npm run preview
```

Serves the production build locally so you can check it before deploying.

---

## Where to edit content

### Page copy

Each page lives in `src/pages/`:

| File | URL |
|------|-----|
| `src/pages/index.astro` | `/` (homepage) |
| `src/pages/about.astro` | `/about` |
| `src/pages/priorities.astro` | `/priorities` |
| `src/pages/delivering-for-the-district.astro` | `/delivering-for-the-district` |
| `src/pages/constituent-services.astro` | `/constituent-services` |
| `src/pages/contact.astro` | `/contact` |

Edit the text directly in each `.astro` file. Copy is written in plain HTML between component tags.

### Issue/priority cards

Edit `src/data/issues.ts` to change the issue titles and descriptions that appear on the homepage and priorities page.

### District results cards

Edit `src/data/districtWins.ts` to add, update, or remove result cards on the "Delivering for the District" page.

**Important:** Do not add specific dollar amounts, grant names, votes, or quotes until they are verified with citations. Mark unverified items with `verificationStatus: 'Needs verification'`.

### Navigation links and labels

Edit `src/components/Header.astro` — the `navLinks` array at the top of the file controls the nav labels and URLs.

---

## Where to edit colors

Open `src/styles/global.css` and find the `:root {}` block at the top of the file:

```css
:root {
  --color-navy: #0F3E65;
  --color-blue: #084D89;
  --color-red: #E5334E;
  --color-white: #F2F3F4;
  --color-cream: #FAF7F0;
  --color-charcoal: #263442;
  --color-muted-blue: #768192;
  --color-slate: #4A4859;
}
```

Change the hex values to update the color system across the entire site.

---

## How to replace placeholder forms

The contact and signup forms are currently **placeholders** — they display correctly but do not submit anywhere. Before launch, you must connect them to a real form provider.

### Option A: Google Forms (recommended)

1. Create your form at [Google Forms](https://docs.google.com/forms/).
2. Click **Send** → **Embed** and copy the `<iframe>` code.
3. Open the relevant `.astro` file.
4. Find the comment block that reads `<!-- Replace this with approved contact form -->` or similar.
5. Replace the placeholder `<div>` block with the Google Form `<iframe>`.

**Files to update:**
- `src/pages/contact.astro` — two form sections (general contact + citation request)
- `src/components/SignupFormPlaceholder.astro` — used on the homepage and contact page

### Option B: Netlify Forms

If deploying on Netlify, change the `<form>` tag to:

```html
<form name="signup" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="signup" />
  <!-- fields go here -->
</form>
```

Remove the `disabled` and `aria-disabled` attributes from form inputs when activating.

### Removing the placeholder banner

Once forms are connected, remove the `<div class="form-placeholder-banner">` element from each form section.

---

## How to add photos

Place images in `public/images/`. Reference them in Astro files with `/images/filename.jpg`.

Look for `img-placeholder` divs throughout the site — replace them with `<img>` tags:

```html
<!-- Before (placeholder) -->
<div class="img-placeholder">...</div>

<!-- After (real image) -->
<img src="/images/candidate-photo.jpg" alt="Steve Ouellette speaking at a community event" width="600" height="800" />
```

Always include descriptive `alt` text. Do not use yard sign photos as OG images unless campaign-approved.

---

## How to deploy

The site builds to a static `./dist/` folder that can be hosted anywhere.

### Netlify

1. Connect the repository to [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy.

### Vercel

1. Connect to [Vercel](https://vercel.com) and import the project.
2. Vercel auto-detects Astro — no extra configuration needed.
3. Deploy.

### Cloudflare Pages

1. Connect at [Cloudflare Pages](https://pages.cloudflare.com).
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Deploy.

After choosing a host, point your domain's DNS to the host provider using their instructions.

---

## Pre-launch checklist

Before the site goes live, complete the following:

- [ ] Confirm exact election date (November 2026 — date TBD)
- [ ] Confirm exact committee name for the footer disclaimer
- [ ] Confirm footer disclaimer with treasurer and OCPF if required
- [ ] Confirm whether official contact info may appear and how it should be framed
- [ ] Confirm no donation, fundraising, or payment links are included anywhere
- [ ] Confirm domain and hosting are paid appropriately by the campaign or committee
- [ ] Replace all placeholder copy marked `[PLACEHOLDER]`
- [ ] Replace all placeholder photos
- [ ] Verify all district win claims — add citations, sources, amounts, and fiscal years
- [ ] Connect Google Forms or approved form provider (remove placeholder banners)
- [ ] Test all form submissions end-to-end
- [ ] Test mobile navigation (hamburger opens/closes, CTA visible)
- [ ] Test accessibility and color contrast
- [ ] Run `npm run build` — zero errors
- [ ] Deploy to a staging URL first
- [ ] Review with candidate, campaign aide, and treasurer
- [ ] Point domain DNS to hosting provider

---

## Content verification policy

**Do not invent or add any of the following without verification:**

- Specific votes
- Grant or earmark amounts
- Endorsements
- Quotes
- Constituent stories
- Policy achievements
- Opponent comparisons

Mark unverified content in `districtWins.ts` with `verificationStatus: 'Needs verification'`. Placeholder notes in page copy are styled in orange and labeled `[PLACEHOLDER]` or `[VERIFY]`.

---

## Project structure

```
steve-ouellette-site/
├── public/
│   ├── favicon.svg
│   └── images/         ← Add candidate/district photos here
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Button.astro
│   │   ├── IssueCard.astro
│   │   ├── DistrictWinCard.astro
│   │   ├── SignupFormPlaceholder.astro
│   │   └── SectionHeading.astro
│   ├── data/
│   │   ├── issues.ts           ← Edit priority/issue cards here
│   │   └── districtWins.ts     ← Edit district result cards here
│   ├── layouts/
│   │   └── BaseLayout.astro    ← Shared HTML head, SEO meta
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── priorities.astro
│   │   ├── delivering-for-the-district.astro
│   │   ├── constituent-services.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css          ← Color palette, typography, utilities
├── astro.config.mjs
└── package.json
```
