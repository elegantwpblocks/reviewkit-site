---
title: "How to Add Trustpilot Reviews to Your WooCommerce Store"
seoTitle: "Add Trustpilot Reviews to WooCommerce (Product & Checkout)"
slug: "trustpilot-reviews-on-woocommerce"
description: "Show Trustpilot reviews on WooCommerce product pages, the cart and checkout with shortcodes and simple hooks. Includes copy-ready code and common mistakes."
date: "2026-11-19"
updated: "2026-11-19"
author: "Reviewkit Team"
category: "Conversion"
categorySlug: "conversion"
tags: ["woocommerce", "ecommerce", "trustpilot wordpress", "trust badges", "conversion rate optimization"]
keywords: ["Trustpilot reviews WooCommerce", "add Trustpilot to WooCommerce", "WooCommerce trust badges", "WooCommerce social proof"]
readingTime: "5 min read"
featuredImage: "/images/blog/trustpilot-reviews-on-woocommerce.png"
featuredImageAlt: "WooCommerce product page with a Trustpilot rating badge near the add to cart button"
relatedPosts: ["where-to-place-trustpilot-reviews-on-your-website", "choose-the-right-reviewkit-widget", "use-trustpilot-reviews-honestly"]
---

Online shoppers cannot touch the product or meet you. They have only your page. Trust is the thing a new store has to earn quickly, and independent reviews are one of the fastest ways to do it.

This guide shows how to add Trustpilot reviews to a WooCommerce store: on product pages, the cart, the checkout and the shop page. You can do all of it with Reviewkit shortcodes. For the product page, we also give a short code snippet so the badge appears in the same spot on every product.

**Key takeaways**

- Trustpilot reviews are about your **store**. They are not product reviews. Use them as proof that your shop is trustworthy.
- A small badge near the add-to-cart button is the best first step.
- Keep the checkout calm. Use a small badge there, not a big carousel.

## Store reviews and product reviews are different

This matters, so we say it first. Reviewkit shows the reviews on your **Trustpilot business profile**. Those are reviews of your company: delivery, support, how you handle problems.

Product reviews are reviews of one item, such as a pair of shoes. WooCommerce has its own product review system for that. Use both:

- **Product reviews** answer "is this item good?"
- **Trustpilot store reviews** answer "can I trust this shop with my money?"

New or lesser-known stores often get the most from the second one.

## Where Trustpilot reviews work best in a store

| Page | Goal | Suggested widget |
|---|---|---|
| Product page, near the button | Remove last-second doubt | `[reviewkit_tp_micro_combo]` |
| Product page, lower down | Give proof to people who scroll | `[reviewkit_review style="carousel"]` |
| Cart | Keep confidence going | `[reviewkit_tp_micro_trustscore]` |
| Checkout | Calm worry about paying | `[reviewkit_tp_mini]` |
| Shop and category pages | Build trust early | `[reviewkit_tp_micro_star]` |
| Homepage | First impression | `[reviewkit_review style="grid"]` |

## Method 1: Shortcode in a page or block

The simplest way. Edit the page, add a **Shortcode** block, paste the shortcode, and save. This works for your homepage, a custom landing page or any page you build with blocks or a page builder.

## Method 2: Add the badge to every product page with a hook

If you want the badge in the same place on all products, use a WooCommerce action hook. Add this code to your child theme's `functions.php` file or to a code snippets plugin. Replace the Trustpilot URL with your own profile address.

```php
add_action( 'woocommerce_after_add_to_cart_button', 'mystore_show_trustpilot_badge', 15 );

function mystore_show_trustpilot_badge() {
    $profile_url = 'https://www.trustpilot.com/review/your-store.com';

    echo '<div class="mystore-trust-badge">';
    echo '<a href="' . esc_url( $profile_url ) . '" target="_blank" rel="noopener noreferrer">';
    echo do_shortcode( '[reviewkit_tp_micro_combo]' );
    echo '</a>';
    echo '</div>';
}
```

The badge now sits under the add-to-cart button, and clicking it opens your Trustpilot profile so shoppers can check your reviews.

To add the same badge on the cart or checkout page, you can use a different hook such as `woocommerce_after_cart_totals` (cart) or `woocommerce_review_order_before_payment` (classic checkout).

**A warning about hooks.** Hooks depend on your theme and on whether you use the classic or the block-based cart and checkout. If a hook does not fire on your store, place a Shortcode block in the page or template instead. Always test on a staging site first.

## Keep checkout simple

At checkout, people already decided to buy. You only need to remove the last bit of worry. A small badge does that. A big carousel pulls their eyes away from the payment form and can add noise. If you want to test a carousel in the cart or checkout, test it against a version without one.

## Show real reviews on the homepage

A homepage grid of recent reviews tells first-time visitors that other people bought and were happy. Choose layouts that fit your design: a **grid** for a clean section, a **carousel** when space is short. Our guide to [choosing the right Reviewkit widget](/blog/choose-the-right-reviewkit-widget) helps you decide.

## Do not expect Google stars from these reviews

Many store owners hope that adding review widgets will show stars next to their site in Google search. Reviews about your own business that you place on your own site are treated as "self-serving" by Google and do not qualify for that star display, no matter which widget you use. Product review stars work differently and come from product reviews. We explain this in [using Trustpilot reviews the right way](/blog/use-trustpilot-reviews-honestly).

## Common mistakes

- **Showing only 5-star reviews.** It looks fake and may cause trouble. Show a normal mix.
- **Using stale reviews.** Keep automatic sync on so new reviews appear.
- **Too many badges.** One badge per area is enough.
- **Forgetting to clear caches** after adding a widget.
- **Not checking mobile.** Open your product page on a phone and look at it.

## A simple plan for your first week

If you are not sure where to start, do this:

1. **Day 1:** Install Reviewkit, connect your Trustpilot profile and sync your reviews. See the [setup guide](/blog/display-trustpilot-reviews-on-wordpress).
2. **Day 2:** Add `[reviewkit_tp_micro_combo]` near the add-to-cart button on your best-selling product only.
3. **Days 3 to 7:** Leave it and watch your add-to-cart and checkout numbers. Do not change anything else on that page.
4. **Next week:** If you are happy, roll the badge out to every product with the hook above, and add a small badge at checkout.
5. **After that:** Add a carousel of recent reviews lower on the product page or on the homepage.

## What to measure

Use your store analytics. Useful numbers are:

- Product page to add-to-cart rate
- Cart to checkout rate
- Checkout completion rate
- Bounce rate on the product page

Compare similar time periods. Sales have busy and quiet weeks, so a before and after comparison over only two or three days will mislead you.

## Making Trustpilot reviews work with your own product reviews

You do not have to choose between Trustpilot and WooCommerce's own product reviews. A good setup is:

- **Near the price:** a small Trustpilot badge for store trust.
- **In the product tabs:** the WooCommerce reviews for that item.
- **On the homepage and cart:** Trustpilot reviews for general trust.

This gives shoppers proof about the shop and about the item, without repeating the same thing.

## Frequently asked questions

### Does Reviewkit show product reviews?
Reviewkit shows reviews from your Trustpilot business profile. Those are reviews of your business, not of individual products.

### Can I show the badge only on some products?
Yes. Add the shortcode by hand to those product pages, or add a condition to your code so the badge appears only on certain products or categories.

### Will it work with my theme?
Reviewkit is built to work with properly coded WordPress themes and uses clean, responsive styles that adapt to your theme. Always check on a staging copy of your store first.

## Get started

[Install Reviewkit](https://wordpress.org/plugins/gutensuite-reviewkit/), connect your Trustpilot profile, and paste a shortcode on your most visited product page first. See the [full setup guide](/blog/display-trustpilot-reviews-on-wordpress).
