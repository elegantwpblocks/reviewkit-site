---
title: "How to Display Trustpilot Reviews on WordPress (Step by Step, No API Key)"
seoTitle: "Display Trustpilot Reviews on WordPress: Step-by-Step Guide"
slug: "display-trustpilot-reviews-on-wordpress"
description: "Learn three ways to show Trustpilot reviews on your WordPress site, then follow a step-by-step setup with Reviewkit. No API key and no coding needed."
date: "2026-11-19"
updated: "2026-11-19"
author: "Reviewkit Team"
category: "Guides"
categorySlug: "guides"
tags: ["trustpilot wordpress", "review widgets", "shortcodes", "social proof", "wordpress plugins"]
keywords: ["display Trustpilot reviews on WordPress", "embed Trustpilot reviews WordPress", "Trustpilot widget WordPress", "Trustpilot reviews plugin"]
readingTime: "7 min read"
featuredImage: "/images/blog/display-trustpilot-reviews-on-wordpress.png"
featuredImageAlt: "Trustpilot reviews displayed in a grid on a WordPress website"
relatedPosts: ["trustpilot-reviews-elementor-divi-gutenberg", "where-to-place-trustpilot-reviews-on-your-website", "choose-the-right-reviewkit-widget"]
---

You have worked hard to collect reviews on Trustpilot. But most of the people who visit your website never go to Trustpilot. They look at your homepage, your pricing page or your product page, and then they decide. If your reviews are not on those pages, they are not helping you at that moment.

This guide shows you how to put your Trustpilot reviews on a WordPress site. We cover the three common ways to do it, then walk through the setup with Reviewkit, which needs no API key and no code.

**Key takeaways**

- You can show Trustpilot reviews on WordPress with Trustpilot's own widgets, by copying reviews by hand, or with a plugin.
- Copying reviews by hand goes out of date and is easy to get wrong. A plugin keeps them current.
- With Reviewkit, setup is install, connect your profile, sync, and paste a shortcode where you want the reviews.

## Why show Trustpilot reviews on your own site

Most buyers read reviews before they decide. BrightLocal's 2026 survey found that 97% of consumers read reviews when they look at local businesses. We go through the numbers in our [online review statistics for 2026](/blog/online-review-statistics-2026) article.

Trustpilot is a trusted third party, so reviews from it carry more weight than a testimonial you wrote yourself. Showing them on your own pages brings that trust to the place where people decide to buy, book or sign up.

## Three ways to show Trustpilot reviews on WordPress

### 1. Trustpilot's own widgets (TrustBox)

Trustpilot offers its own widgets, called TrustBox. You set them up inside your Trustpilot business account and add them to your site with a snippet or Trustpilot's WordPress integration. This works well if you are already happy with Trustpilot's tools. Which widgets you can use depends on your Trustpilot plan, so check what your plan includes before you start.

### 2. Copy and paste reviews by hand

You can copy a few good reviews into a text block on your page. It is quick, but it has problems:

- The reviews never update, so your page slowly falls behind your real rating.
- You have to pick which reviews to show, and it is easy to show only the good ones. We explain why that can be a problem in [using Trustpilot reviews the right way](/blog/use-trustpilot-reviews-honestly).
- Your rating and review count go stale.

### 3. Use a plugin

A plugin pulls your reviews from your Trustpilot profile and shows them on your site. It updates on a schedule, so you do not have to touch it again. This is what Reviewkit does.

## Step-by-step: add Trustpilot reviews with Reviewkit

Reviewkit works with WordPress 6.6 or newer and PHP 7.4 or newer. You need a Trustpilot business profile that already has reviews.

### Step 1: Install and activate the plugin

In your WordPress dashboard, go to **Plugins → Add New**, search for **Reviewkit – Trustpilot Reviews Widget & Embed**, install it and click **Activate**. You can also [download it from WordPress.org](https://wordpress.org/plugins/gutensuite-reviewkit/) and upload the zip file.

### Step 2: Connect your Trustpilot profile

Open the **Reviewkit** settings page in your dashboard. The setup wizard asks you to connect your Trustpilot business profile. You do not need an API key, and you do not need to write any code.

### Step 3: Sync your reviews

Click **Sync Reviews**. Reviewkit fetches your rating, review count and reviews from your public Trustpilot profile and caches them on your site. From version 1.0.2 the plugin also syncs on its own on a schedule, so new reviews show up without you doing anything.

### Step 4: Pick a widget

Reviewkit has two kinds of widgets:

- **Business widgets** show your overall TrustScore, stars and review count. Use these as trust badges.
- **Review widgets** show real review text in a grid, a list or a carousel.

Not sure which to use? See [how to choose the right Reviewkit widget](/blog/choose-the-right-reviewkit-widget).

### Step 5: Paste the shortcode

Copy the shortcode for the widget you want and paste it where you want it to appear. Here are the shortcodes in the free plugin:

| Shortcode | What it shows |
|---|---|
| `[reviewkit_tp_mini]` | TrustScore, star rating and review count |
| `[reviewkit_tp_starter]` | Star rating with a tooltip |
| `[reviewkit_tp_micro_trustscore]` | Small TrustScore badge |
| `[reviewkit_tp_micro_star]` | Small star rating |
| `[reviewkit_tp_micro_reviewcount]` | Review count only |
| `[reviewkit_tp_micro_button]` | Review count in a button style |
| `[reviewkit_tp_micro_combo]` | Stars and review count together |
| `[reviewkit_review style="grid"]` | Reviews in a grid |
| `[reviewkit_review style="list"]` | Reviews in a list |
| `[reviewkit_review style="carousel"]` | Reviews in a carousel |

In the block editor, add a **Shortcode** block and paste it in. In Elementor, Divi and other builders, use their shortcode or text module. Our guide to [Elementor, Divi and Gutenberg](/blog/trustpilot-reviews-elementor-divi-gutenberg) shows each one.

### Step 6: Match your style

Use the Reviewkit settings to change colors, fonts and layout so the widgets look like the rest of your site. The widgets are responsive, so they adjust to phones and tablets.

## Tips for better results

- **Put reviews near a decision.** A badge next to a buy button does more than reviews buried in a footer. See [where to place Trustpilot reviews](/blog/where-to-place-trustpilot-reviews-on-your-website).
- **Show your review count.** People trust 400 reviews more than 4.
- **Keep it fresh.** Leave automatic sync on so your site shows recent reviews.
- **Do not stack too many widgets** on one page. One badge and one set of reviews is enough for most pages.

## Troubleshooting

**My new reviews are not showing.** Click **Sync Reviews** in the Reviewkit settings. Then clear your caching plugin and any server or CDN cache. Reviewkit also has an option to purge its own cached data.

**I see "No data found" when syncing.** Update to the latest version. This was fixed in version 1.1.2.

**The widget looks unstyled.** Update to the latest version and clear your caches. Asset loading fixes were released in versions 1.2.0 and 1.2.2.

## Frequently asked questions

### Do I need a Trustpilot account?
Yes. Reviewkit shows reviews from your Trustpilot business profile, so you need a profile with reviews.

### Do I need an API key?
No. You connect your profile and sync.

### Will it slow my site down?
Reviewkit caches your reviews so it does not need to fetch them again on every page view. We cover how to check this on your own site in [review widgets and site speed](/blog/review-widgets-site-speed-core-web-vitals).

### Is Reviewkit made by Trustpilot?
No. Reviewkit is an independent plugin and is not affiliated with or endorsed by Trustpilot. It only displays review data that is publicly available on your Trustpilot profile.

## What to check before you publish

Run through this list once the widget is on the page. It takes five minutes and catches most problems.

1. **Look at the rating.** Does the score and review count match what you see on your Trustpilot profile?
2. **Open the page on your phone.** Check that text is readable and nothing overlaps.
3. **Click the link.** If the widget links to your Trustpilot profile, make sure it opens the right profile.
4. **Log out and reload.** Caching plugins sometimes show logged-in users a fresh page and visitors an old one. Check as a visitor.
5. **Check the date of the newest review.** If it is weeks old and you know newer reviews exist, run **Sync Reviews** again.

## Which reviews should you show?

Reviewkit lets you filter by star rating or by date. A few simple rules help here:

- **Lead with recent reviews.** Buyers care about what customers say now. Showing the newest reviews is the safest and most useful default.
- **Keep a natural mix.** If every review is perfect, visitors may doubt them. A few 4-star reviews make the 5-star ones more believable.
- **Pick reviews that answer questions.** A review that says "arrived in two days and support fixed my problem fast" is worth more than "great".

Read [using Trustpilot reviews the right way](/blog/use-trustpilot-reviews-honestly) for the rules on filtering.

## How often do reviews update?

Reviewkit syncs automatically on a schedule that uses WordPress's built-in task system (wp-cron). You can also press **Sync Reviews** at any time. If your site gets very little traffic, scheduled tasks may run less often, because wp-cron runs when someone visits the site. In that case, a manual sync after a new review is a good habit.

## Who is this guide for?

This setup suits small business owners, store owners, agencies and freelancers who want Trustpilot reviews on a WordPress site without touching code. If you build sites for clients, you can repeat the same five steps for each one, and you can read how to [place the widgets in page builders](/blog/trustpilot-reviews-elementor-divi-gutenberg) to match each design.

## Get started

Reviewkit is free on WordPress.org. [Install Reviewkit](https://wordpress.org/plugins/gutensuite-reviewkit/), or see the [live demo](/demo) first. If you need more reviews or a custom widget layout, look at [Reviewkit Pro](/pricing).
