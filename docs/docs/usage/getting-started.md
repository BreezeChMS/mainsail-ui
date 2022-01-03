---
title: Getting Started
sidebar_position: 1
---

import BrowserOnly from '@docusaurus/BrowserOnly';

<!-- import { Button, Icon } from "mainsail-ui"; -->

```
yarn install mainsail-ui
```

Import the component.

```js
import { Button } from "mainsail-ui";
```

Use the component.

```jsx
<Button text="Look at me" />;

// or with children

<Button>Look at me</Button>;
```

## Usage

Mainsail UI provides some common conventions for developer experience and happiness.

## Variants

When a component has a broad selection of different styles available, these styles will be available under the **variant** property.

```jsx
<Button variant="primary" />
<Button variant="secondary" />
<Button variant="tertiary" />
```

## Intent vs Colors

Some components (icons for example) have a small variety of colors available to use for aesthetic purposes. These are accessed via the **color** prop.

For context-specific coloring, the **intent** prop is used.

Unlike a holistic style prop of **variant**, the _intent_ prop is _intended_ 😉 to be used to alter the color of a component variant for a particular use case.

:::info
In the case where any prop value is `default`, it can be omitted
:::

**Examples**

```jsx
// Using Intent
<Button intent="default" text="Safe to Press" />
<Button intent="danger" text="Dragons Ahead!" />
```

```jsx
// Using Colors
<Icon name="text" color="default"/>
<Icon name="text" color="light"/>
<Icon name="text" color="dark"/>
```

## Style Overrides

### Colors

All [color classes](/docs/css/colors/) apply an `!important` tag so that they will act as overrides on any component styling.

### Adding Spacing

There are some [utility classes](/docs/css/utility-classes) to add spacing helpers available for quick margins and padding.

```jsx
// Applying a margin right of 20px to the first button
<Button text="Cancel" className="mr-20" />
<Button text="Do it" />
```

See the [css utility classes section](/docs/css/utility-classes) for more details.

## Props

### className

Most components in Mainsail UI pass through or append a `className` prop to the existing component's class attribute. Some components offer multiple `className` props with a unique designation where applicable.

### Native Props

Most native props that you might expect for a component to have may not be listed in the Storybook docs. Things like `onBlur` or `onFocus` are typically offered via `{...props}` spread into the internal component/element. In other words, they should just work when using a component even if they aren't documented. If you find a scenario where this isn't the case, please open a pull request.

### Prop Naming

You may notice prop names attempt to support alpha-sortable naming. While this may seem unusual at first, we feel that when you're looking for a prop that is prefixed with `gap`, it's easier to find the related sibling prop `gapCol` and `gapRow`. Mainsail strives to order things from broad to narrow specificity; this maintains that convention.

### ENUM prop values (Recommended)

Like many modern component libraries, utilizing [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) helps development along by throwing errors to your console if you pass an improper type to a component prop. While this is true of Mainsail, you can also utilize exposed ENUM prop values for each component.

`import { Button } from "mainsail-ui"`

```jsx
<Button variant={Button.variants.secondary} text="Nope" />
```

**Why not just use strings?**

Utilizing these constants in this way, not only reduce the number of [magic strings](https://softwareengineering.stackexchange.com/questions/365339/what-is-wrong-with-magic-strings) in your codebase, but also make remembering the various prop values easy since most code editors and IDEs will provide auto-completion for such imported objects.

It might look more verbose at first, but **here are some benefits**:

1. Less cognitive overhead for remembering props and their values
1. Strings are prone to typos whereas improperly typed constants should fail compilation
1. IDE Support of auto-completion
1. Easier to change the value of the prop if the library introduces new values
1. Find and replace becomes easier if necessary
