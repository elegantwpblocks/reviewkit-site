---
title: "Which Reviewkit Widget Should You Use? Badges, Grid, List or Carousel"
seoTitle: "Trustpilot Badges vs Review Widgets: Which to Use"
slug: "choose-the-right-reviewkit-widget"
description: "A plain guide to every Reviewkit widget: 7 Trustpilot badges and 3 review layouts. Learn when to use each one and how to combine them on a page."
date: "2026-11-19"
updated: "2026-11-19"
author: "Reviewkit Team"
category: "Product Guides"
categorySlug: "product-guides"
tags: ["review widgets", "trust badges", "shortcodes", "trustpilot wordpress", "reviewkit pro"]
keywords: ["Trustpilot trust badge WordPress", "Trustpilot review carousel WordPress", "review grid widget", "Trustpilot widget types"]
readingTime: "4 min read"
featuredImage: "/images/blog/choose-the-right-reviewkit-widget.png"
featuredImageAlt: "Reviewkit badge widgets and review grid, list and carousel layouts"
relatedPosts: ["where-to-place-trustpilot-reviews-on-your-website", "reviewkit-pro-fetch-more-reviews-widget-builder", "trustpilot-reviews-elementor-divi-gutenberg"]
---

Reviewkit gives you ten widgets in the free plugin. That is plenty of choice, and choice can be confusing. This guide explains each one in plain words and tells you when to use it.

There are two groups. **Business widgets** show your overall rating. **Review widgets** show what real customers wrote.

**Key takeaways**

- Use a small **badge** when space is tight or when you need quick proof near a button.
- Use a **review layout** (grid, list or carousel) when you want people to read real comments.
- Most pages work best with one badge and one review layout.

## Group 1: Business widgets (badges)

These show your TrustScore, your star rating and your review count. They are short and fast to read.

### Mini: `[reviewkit_tp_mini]`
Shows your TrustScore, star rating and review count together. It is the fullest of the badge widgets. Good for checkout pages, sidebars and next to forms.

### Starter: `[reviewkit_tp_starter]`
Shows an interactive star rating with a tooltip. Good for the hero section or a header, where you want a clean look with a bit of extra detail on hover.

### Micro Trust Score: `[reviewkit_tp_micro_trustscore]`
A small, simple rating badge. Good for top bars, footers and tight spots.

### Micro Star: `[reviewkit_tp_micro_star]`
A small, interactive star rating. Good in headers and product pages.

### Micro Review Count: `[reviewkit_tp_micro_reviewcount]`
Shows only the number of reviews. Good when you have a large number to show off. A line like "1,000+ reviews" can be stronger than the stars.

### Micro Button: `[reviewkit_tp_micro_button]`
Shows the review count in a button style. Good near a call-to-action.

### Micro Combo: `[reviewkit_tp_micro_combo]`
Shows stars and review count together. It is the safest all-round badge. If you only add one, start here.

## Group 2: Review widgets (real reviews)

These show real reviews, with the star rating, the reviewer's name and the comment.

### Grid: `[reviewkit_review style="grid"]`
Shows several reviews at once in columns. Best for pricing pages, homepages and landing pages where you have room. A grid lets visitors scan many opinions quickly.

### List: `[reviewkit_review style="list"]`
Shows reviews one under another. Best for About pages, long landing pages and anywhere a reader expects to read, like a testimonials page.

### Carousel: `[reviewkit_review style="carousel"]`
Shows reviews that slide. Best when space is limited, such as a narrow column or below a product description. Keep in mind that visitors may only see a few reviews at a time, so the first ones matter.

## Quick chooser

| You want to... | Use |
|---|---|
| Add proof near a button | Micro Combo or Micro Button |
| Show your score in the header | Micro Trust Score or Micro Star |
| Show a big review count | Micro Review Count |
| Add proof at checkout or beside a form | Mini |
| Fill a section with real opinions | Grid |
| Build a testimonials page | List |
| Add reviews in a small space | Carousel |

## Combine them on one page

A simple pattern that works for many sites:

1. **Top of the page:** one badge (`[reviewkit_tp_micro_combo]`).
2. **Middle or lower:** one review layout (`grid` or `carousel`).
3. **Near the final button:** a second badge, or the same one again.

Try not to add more than that. Too many widgets can distract people and add weight to the page. See [review widgets and site speed](/blog/review-widgets-site-speed-core-web-vitals).

## Filter your reviews

In the review widgets you can filter by star rating or by date. This lets you show recent reviews, or choose which ratings to show. Be careful with it. Showing only 5-star reviews can look fake and may break advertising rules in some countries. Read [using Trustpilot reviews the right way](/blog/use-trustpilot-reviews-honestly) before you decide.

## Style your widgets

You can change colors, fonts and layouts in the Reviewkit settings so everything matches your brand. For more control over how review widgets look, [Reviewkit Pro](/blog/reviewkit-pro-fetch-more-reviews-widget-builder) adds a **Widget Builder**.

## Three example page recipes

### Recipe 1: Landing page
- Under the headline: `[reviewkit_tp_micro_combo]`
- Before the last button: `[reviewkit_review style="carousel"]`

### Recipe 2: Pricing page
- Above the pricing table: `[reviewkit_tp_micro_trustscore]`
- Below the pricing table: `[reviewkit_review style="grid"]`

### Recipe 3: Checkout or contact form
- Next to the form or payment area: `[reviewkit_tp_mini]`

## How many reviews should a layout show?

There is no perfect number, but these starting points work for most sites:

- **Grid:** three or six reviews, so the rows look even.
- **List:** three to five reviews, so the page does not get too long.
- **Carousel:** five to eight reviews, so visitors who click through see variety.

Look at your page on a phone. If the section feels like a long scroll, show fewer.

## Frequently asked questions

### Can I use two widgets on the same page?
Yes. A badge near the top and a review layout lower on the page is a common and effective pairing.

### Which widget is lightest?
The small Micro badges are the simplest, and they carry less content than a review layout. Test your own page to see the real effect. See [review widgets and site speed](/blog/review-widgets-site-speed-core-web-vitals).

### Do the widgets work on mobile?
Yes. The widgets are responsive and adapt to phones and tablets. Check each page on a real device anyway.

## See them live

Open the [live demo](/demo) to see all the widgets, then [install Reviewkit](https://wordpress.org/plugins/gutensuite-reviewkit/) and try the ones that fit your site.
