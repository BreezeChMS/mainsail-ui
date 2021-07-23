---
slug: mainsail-release-120
title: Mainsail 1.2.0 is released
author: Josh Weaver
author_title: Mainsail UI Core Team
author_url: https://github.com/3cordguy
author_image_url: https://avatars.githubusercontent.com/u/30707961?v=4
tags: [releases, changelog]
---

Mainsail is now at 1.2.0

Since the last update, there have been a number of patches and improvements.

<!--truncate-->

## Fixes & Improvements

-   **Modal** - Adds data-testid to modal for easier test handling of modal parts :test_tube:
-   **Visibility Utility Classes** - Adds css utility class for sm:visible md:visible and lg:visible to handle showing/hiding more easily :eyes:
-   **Button** - fixes button padding not able to be overridden by css utility classes
-   **Button** - fixes passing icon to button as a function
-   **Typography Utility Classes** - adds label-text and button-text classes per our figma specs
-   **Sizing Utility Classes** - adds some basic helpers for width/height control (including `w-screen` & `h-screen` to support full screen backgrounds more easily)
-   **Spacing Utility Classes** - adds 2 more units to the spacing scale so margins so if you need to bump something by 2px or 6px, it's baked-in to margin and padding utilities.
-   **PopMenu/Item** - Adds support for color and icon usage on items, adds padding prop support, adds menu header support

## Documentation Additions

Adds Form Fields guide
All the aforementioned Utility Class improvements are now documented
