# Personal site

A Jekyll site built for GitHub Pages — warm, editorial, blends a faith
+ leadership brand. Markdown blogging is built in natively; no build
step required on your end.

## 1. First-time setup

1. Create a new GitHub repo named `your-username.github.io` (replace
   `your-username` with your actual GitHub username — this exact name
   makes it a **user site** served at the root URL).
2. Push everything in this folder to that repo's `main` branch.
3. On GitHub: **Settings → Pages → Build and deployment → Source** →
   choose **"Deploy from a branch"** → branch `main`, folder `/root`.
4. Wait 1–2 minutes, then visit `https://your-username.github.io`.

   If you'd rather host it as a project page (e.g.
   `your-username.github.io/my-site`), name the repo anything you like
   and set `baseurl: "/my-site"` in `_config.yml`.

## 2. Fill in your details

Open `_config.yml` and replace the placeholders marked `# TODO`:
`title`, `email`, `linkedin`, `url`. Everything on the site pulls from
these — you only edit them in one place.

Then personalize `about.md`, `projects.md`, and the hero text in
`index.html` — those currently have starter copy based on what you'd
told me, but they're yours to rewrite.

## 3. Publish a new blog post

Add a new file to `_posts/` named exactly:

```
YYYY-MM-DD-a-short-slug.md
```

For example: `_posts/2026-08-20-on-holding-a-team-accountable.md`

Start the file with front matter, then write in plain markdown below it:

```markdown
---
title: "Your post title"
category: Journal
tags: [character, teams]
excerpt: "One sentence that shows up in the blog list preview."
---

Your post content goes here, written in normal markdown —
**bold**, *italic*, [links](https://example.com), lists, quotes,
whatever you need.
```

Commit and push. GitHub Pages rebuilds automatically (takes about a
minute) and the post appears on `/blog/` and the homepage, newest
first. No other file needs to change.

## 4. Preview locally (optional)

If you want to see changes before pushing, install Ruby + Jekyll once,
then from this folder:

```bash
bundle init
bundle add jekyll jekyll-feed jekyll-seo-tag
bundle exec jekyll serve
```

Visit `http://localhost:4000`. Not required — pushing to GitHub is
enough to publish.

## File map

```
_config.yml        site-wide settings (name, email, links)
_layouts/           page templates (default, page, post)
_includes/           header + footer
_posts/              your blog posts — one markdown file each
assets/css/style.css  all site styling
index.html            home page
about.md, projects.md, contact.md   the other pages
```
