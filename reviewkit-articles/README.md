# Reviewkit blog articles (10)

Ten SEO-focused markdown articles for the Reviewkit website. Each file starts with YAML front matter and has no H1 in the body. Render `title` as the page H1.

## Files

| # | File | Category |
|---|---|---|
| 1 | 01-display-trustpilot-reviews-on-wordpress.md | Guides |
| 2 | 02-best-trustpilot-plugins-for-wordpress.md | Comparisons |
| 3 | 03-online-review-statistics-2026.md | Research |
| 4 | 04-where-to-place-trustpilot-reviews-on-your-website.md | Conversion |
| 5 | 05-trustpilot-reviews-on-woocommerce.md | Conversion |
| 6 | 06-trustpilot-reviews-elementor-divi-gutenberg.md | Guides |
| 7 | 07-choose-the-right-reviewkit-widget.md | Product Guides |
| 8 | 08-review-widgets-site-speed-core-web-vitals.md | SEO & Performance |
| 9 | 09-use-trustpilot-reviews-honestly.md | SEO & Performance |
| 10 | 10-reviewkit-pro-fetch-more-reviews-widget-builder.md | Product Guides |

`index.json` lists every post (title, slug, description, category, tags, reading time) so you can build the blog index without parsing all files.

## Front matter fields

| Field | Use |
|---|---|
| `title` | Page H1 |
| `seoTitle` | `<title>` and Open Graph title (60 characters or less) |
| `slug` | URL: `/blog/[slug]` |
| `description` | Meta description and Open Graph description (160 characters or less) |
| `date`, `updated` | Publish and modified dates. Use for `Article` schema (`datePublished`, `dateModified`) |
| `author` | Author name |
| `category`, `categorySlug` | One category per post: `/blog/category/[categorySlug]` |
| `tags` | Tag pages: `/blog/tag/[tag]` |
| `keywords` | Primary and secondary keywords (optional `<meta name="keywords">`, mainly for your own tracking) |
| `readingTime` | Display only |
| `featuredImage`, `featuredImageAlt` | Placeholder path under `/images/blog/`. Add your own image files with these names |
| `relatedPosts` | Slugs for a "Related articles" block |

Categories: Guides, Comparisons, Research, Conversion, Product Guides, SEO & Performance.

## Links used inside the articles

Internal links assume these routes exist on your site. Change them with find and replace if your routes differ.

- `/blog/[slug]` for other articles
- `/pricing`, `/demo`, `/docs`

External links go to wordpress.org, BrightLocal, Northwestern Spiegel Research Center, Google Search Central, the FTC and web.dev.

## Loading the files in Next.js

```js
// lib/posts.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const dir = path.join(process.cwd(), 'content/blog');

export function getAllPosts() {
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, f), 'utf8'));
      return { ...data, content };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
```

Render `content` with `react-markdown` + `remark-gfm` (the articles use tables and checklists) or with `next-mdx-remote`. Use `generateMetadata` to set the title from `seoTitle` and the description from `description`.

## Before you publish

- Add the featured images.
- Set each `date` to the real publish date (they are all 2026-11-19 now). Spacing posts out over a few weeks looks more natural.
- Check the Reviewkit Pro descriptions in article 10 against your real Pro features and plan details.
- Re-check the competitor notes in article 2 against each plugin's current listing.
