---
slug: mainsail-progress-tip
title: Making Progress
author: Josh Weaver
author_title: Mainsail UI Core Team
author_url: https://github.com/3cordguy
author_image_url: https://avatars.githubusercontent.com/u/30707961?v=4
tags: [progress bars, css, tips]
---

# Mainsail Tip 'o the week

Did you know Mainsail UI has a configurable progress bar?

![Mainsail UI Progress Bar](/img/posts/2021-07-21/progress-bar.gif)

<!--truncate-->

Yes!

A simple, **completely customizable**, animated progress bar with intuitive props is now available in Mainsail UI.

The Progress Bar can be found in the [Storybook Components](/components) but here is a quick rundown.

## Colors

The Progress bar comes in a few default color options.

```jsx
import { Progress } from "mainsail-ui";

// These colors match a similar convention to the Icon coloring
<ProgressBar percentage={55} color="default" />
<ProgressBar percentage={55} color="dark" />
<ProgressBar percentage={55} color="light" />
```

## Color Customization and More

The main goal was to present a fully configurable bar and wrapper. This can be configured 100% by way of utility classes via the two props `className` and `classNameBar`.

:::info
This prop naming may seem odd at first. Mainsail strives for broad -> narrow specificity in naming conventions and also tries to maintain alpha sortable props.
:::

Size, borders, height and color can all be modified via these [utility classes](/docs/css/colors) included with Mainsail.

```jsx
<ProgressBar
    percentage={99}
    // The wrapper class
    className="bg-white border-blue-primary"
    // The inner bar - the part that moves
    classNameBar="bg-blue-primary pt-20"
/>
```

## Playground

Feel free to check out all the potential in this [playground here.](https://stackblitz.com/edit/mainsail-progress-bar?file=src/App.js)

<iframe src="https://stackblitz.com/edit/mainsail-progress-bar?ctl=1&embed=1&file=src/App.js&hideExplorer=1" style={{width: "100%", height: "800px" }} />
