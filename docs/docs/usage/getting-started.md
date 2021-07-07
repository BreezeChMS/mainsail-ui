---
title: Getting Started
sidebar_position: 1
---

import { Button, Icon } from "mainsail-ui";

## Adding & Importing

```
yarn install mainsail-ui
```

Import the component. Use the component.

```jsx
import { Button } from "mainsail-ui";

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

<div className="space-x-10">
  <Button text="Button" variant="primary" />
  <Button text="Button" variant="secondary" />
  <Button text="Button" variant="tertiary" />
</div>

## Intent vs Colors

Some components (icons for example) have a small variety of colors available to use for aesthetic purposes. These are accessed via the **color** prop.

For context-specific coloring, the **intent** prop is used.

Unlike a holistic style prop of **variant**, the _intent_ prop is _intended_ 😉 to be used to alter the color of a component variant for a particular use case.

_Note: In the case where any prop value is `default`, it can be omitted_

**Examples**

```jsx
// Using Intent
<Button intent="default" text="Safe to Press" />
<Button intent="danger" text="Dragons Ahead!" />

```

<div className="space-x-10 mb-20">
  <Button intent="default" text="Safe to Press" />
  <Button intent="danger" text="Dragons Ahead!" />
</div>

```jsx
// Using Colors
<Icon name="text" color="default"/>
<Icon name="text" color="light"/>
<Icon name="text" color="dark"/>
```

<div className="bg-neutral-4 p-20 space-x-10">
  <Icon name="text" color="default" />
  <Icon name="text" color="light" />
  <Icon name="text" color="dark" />
</div>

## Adding Spacing

There are some [utility classes](/docs/css/utility-classes) to add spacing helpers available for quick margins.

```jsx
<Button variant={Button.variants.secondary} text="Cancel" className="mr-20" />
<Button variant={Button.variants.secondary} text="Do it" />
```

<div>
  <Button variant={Button.variants.secondary} text="Cancel" className="mr-20" />
  <Button text="Submit" />
</div>

## ENUM prop values (Recommended)

Like many modern component libraries, utilizing [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) helps development along by throwing errors to your console if you pass an improper type to a component prop. While this is true of Mainsail, you can also utilize exposed ENUM prop values for each component.

> 🚨 The global exported ENUMS prop name object will be deprecated in the future in support of Component-specific ENUMS inclusion.

**Do this:**

`import { Button } from "mainsail-ui"`

```jsx
<Button variant={Button.variants.secondary} text="Nope" />
```

This not only is less verbose but it also keeps the current usage and import smaller because you don't need to pull in unnecessary prop names from other components. When tree-shaking is available, this will help reduce size.

### Why not just use strings?

Utilizing these constants in this way, not only reduce the number of [magic strings](https://softwareengineering.stackexchange.com/questions/365339/what-is-wrong-with-magic-strings) in your codebase, but also make remembering the various prop values easy since most code editors and IDEs will provide auto-completion for such imported objects.

It might look more verbose at first, but **here are some benefits**:

1. Less cognitive overhead for remembering props and their values
1. Strings are prone to typos whereas improperly typed constants should fail compilation
1. IDE Support of auto-completion
1. Easier to change the value of the prop if the library introduces new values
1. Find and replace becomes easier if necessary
