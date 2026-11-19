---
title: "How to Add Trustpilot Reviews in Elementor, Divi and the Block Editor"
seoTitle: "Add Trustpilot Reviews in Elementor, Divi & Gutenberg"
slug: "trustpilot-reviews-elementor-divi-gutenberg"
description: "Add Trustpilot reviews to any page builder with a shortcode. Step-by-step for Elementor, Divi and the WordPress block editor, plus sitewide placement."
date: "2026-11-19"
updated: "2026-11-19"
author: "Reviewkit Team"
category: "Guides"
categorySlug: "guides"
tags: ["elementor", "divi", "gutenberg", "shortcodes", "trustpilot wordpress"]
keywords: ["Trustpilot reviews Elementor", "Trustpilot reviews Divi", "Trustpilot Gutenberg block", "add Trustpilot reviews page builder"]
readingTime: "5 min read"
featuredImage: "/images/blog/trustpilot-reviews-elementor-divi-gutenberg.png"
featuredImageAlt: "Trustpilot review widget inside a page builder layout"
relatedPosts: ["display-trustpilot-reviews-on-wordpress", "where-to-place-trustpilot-reviews-on-your-website", "choose-the-right-reviewkit-widget"]
---

Most WordPress sites today are built with a page builder or the block editor. The good news is that you do not need a special add-on for each one. Reviewkit uses shortcodes, and every major builder can show a shortcode.

This guide shows where to paste the shortcode in Elementor, Divi and the WordPress block editor. It also shows how to place reviews across your whole site instead of one page at a time.

**Key takeaways**

- Use the builder's **Shortcode** (or text/code) element and paste a Reviewkit shortcode.
- To show a badge on every page, put it in your header or footer template.
- If a widget looks unstyled, update Reviewkit and clear all caches.

## Before you start

1. Install and activate Reviewkit.
2. Connect your Trustpilot profile and click **Sync Reviews**. Follow the [step-by-step guide](/blog/display-trustpilot-reviews-on-wordpress) if you have not done this yet.
3. Pick your shortcode. A few common ones:
   - `[reviewkit_tp_micro_combo]` for a stars-and-count badge
   - `[reviewkit_review style="grid"]` for a grid of reviews
   - `[reviewkit_review style="carousel"]` for a carousel

Not sure which fits? Read [how to choose the right widget](/blog/choose-the-right-reviewkit-widget).

## Elementor

1. Open the page in Elementor.
2. Drag the **Shortcode** widget into the section where you want the reviews.
3. Paste your Reviewkit shortcode into the box.
4. Click **Update**.

To show a badge on every page, use **Theme Builder** (in Elementor Pro). Edit your header or footer template, add the Shortcode widget, and paste a badge shortcode there. If you do not have Elementor Pro, use a plain HTML or shortcode widget in your theme's widget areas.

## Divi

1. Open the page in the Divi Builder.
2. Add a **Text** or **Code** module to the row where you want the reviews.
3. Paste your Reviewkit shortcode into the module.
4. Save the page and check it on the live site, because some shortcodes show only on the front end.

To show the badge on every page, use the **Divi Theme Builder**. Edit the global header or footer, add a module with the shortcode, and save.

## WordPress block editor (Gutenberg)

1. Edit the page or post.
2. Click **+** and search for **Shortcode**.
3. Paste your shortcode into the block.
4. Click **Update**.

This also works with themes and block plugins built on the block editor, such as Kadence, because the Shortcode block is part of WordPress itself.

If you use a block theme, you can use the **Site Editor** to place the shortcode in your header, footer or a template, so it appears on all matching pages.

## Classic widget areas

For a sidebar or footer widget area, add a **Shortcode** or **Custom HTML** widget and paste the shortcode. For a small badge, this is a quick way to get it on every page.

## Tips for page builders

- **Put reviews in a full-width section** if you use the grid layout. It needs room to show several columns.
- **Use the carousel for narrow columns** or sections with limited height.
- **Match the look.** Change colors, fonts and layout in the Reviewkit settings so the widget fits your design.
- **Do not wrap a widget in too many nested containers.** Deeply nested layouts make widgets harder to size.
- **Test on mobile** with the builder's responsive preview, then on a real phone.

## If the widget does not look right

Most problems come from caching or from an older plugin version.

1. **Update Reviewkit.** We have fixed asset loading issues in third-party builders and in the review widgets in versions 1.2.0 and 1.2.2.
2. **Clear every cache.** That means your caching plugin, your server cache, your CDN and the builder's own cache, if it has one.
3. **Check the page on the front end,** not only inside the builder.
4. **Look for conflicts.** Switch off other plugins one by one on a staging site if something still looks wrong.

If you are still stuck, ask in the [support forum](https://wordpress.org/support/plugin/gutensuite-reviewkit/).

## Frequently asked questions

### Do I need a special Reviewkit element for Elementor or Divi?
No. A shortcode works in all of them.

### Can I show the same badge on every page?
Yes. Put the shortcode in your header or footer template, or in a widget area.

### Does it work with other page builders?
Any builder that can show a WordPress shortcode will work. Use its shortcode, text or code element.

## Design tips by page type

### Landing pages
Keep it short. One badge by the main button and one row of three reviews (a grid or carousel) before the final call to action. Landing pages work because they have one goal, so do not add extra links.

### Home pages
Use a badge in the hero and a grid in a middle section. Add a headline above the grid such as "What our customers say" to give the section a clear purpose.

### Pricing pages
Put the grid right under the pricing table. People are comparing and checking whether they can trust you at that moment.

### Contact pages
A badge and a few reviews next to the form can help people who are about to write to a stranger.

## Working with client sites

If you build sites for clients, a shortcode-based plugin makes your life easier:

- You set up the connection once per site.
- You do not need to learn a new widget for each builder.
- You can change the style in one settings screen, not in many modules.
- A client can move the shortcode themselves later.

Tell your clients that reviews update by themselves, and show them how to press **Sync Reviews** if they want to force an update.

## A note on global templates

Putting a badge in a header or footer template shows it on every page. That is useful but can be too much. If you want a badge only on some pages, place the shortcode on those pages by hand, or use your builder's display conditions to show it on selected pages or post types.

## Try it on your site

[Install Reviewkit](https://wordpress.org/plugins/gutensuite-reviewkit/) and add your first widget in a few minutes. Want to see the layouts first? Open the [live demo](/demo).
