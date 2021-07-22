---
sidebar_position: 4
title: Adding Icons
---

# Adding Icons

## Follow the Steps

If you need to an icon to the `mainsail-ui` icon set, follow the steps below.

1.  Add your icon svg from figma to the `src/assets/icons/your-new-icon.svg` folder.
    -   This folder contains all original icon source files
    -   Do not edit these files, SVGR will process these on every icon build run
    -   SVGR will replace any primary blue with `currentColor` for easier css styling
2.  Run `yarn build-icons` from the command line (project root)

    -   This step creates the necessary react icon component files (`src/components/icons/your-new-icon.js`) and exports them in the necessary files

3.  Run `yarn scaffold icons`
    -   Enter the name of the icon (or icons)
    -   Use a space delimited snake_case format (ex. `warning folder_fill trash help`)
    -   This will then generate the necessary prop names for Icon.js and additional needed exports

## Check & Review

After these steps, be sure to run Storybook and determine your icon is present and configurable in the proper manner (i.e. color, size etc)

> Note: The scaffolding process does not account for alphabetizing icon names so it will inject the new icon names into `components/Icon.js` at the top, Icon List Story will sort them using `.sort()`

## Create a PR!

If your icon is working in Storybook, you're done! Push that puppy up! 🚀
