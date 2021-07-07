---
sidebar_position: 2
title: Style Guide
---

# Style Guide & Principles

There are some common conventions and presiding principles with which this library has been constructed.

## Code Style

The library uses Prettier code styling for simplicity. Nothing else to report here.

## Naming Things

When it comes to naming conventions, there are a some primary driving motivations behind all naming choices:

-   **Readability** - keep it readable
-   **Reason-Ability** - keep it able to be immediately able to be reasoned with
-   **Explicitness** - leave nothing ambiguous, #futureMeIsDumb
-   **Specificity** - ordering of context can create clearer code

## Readability / Reason-Ability / Explicitness with Props

Ideally, developers should be able to immediately look at a component prop and understand what it is for without reading the docs.

Prop names should immediately denote what they are used for and set out to do. Favor verbosity (within reason). We want to make our code easy to reason about.

Most of the issues that we are attempting to alleviate with these conventions are safeguarded against simply by using `prop-types` and a little help from ESLINT.

Even though `prop-types` are used on **every React component** in this library, we still strive for these patterns because they aid in consistency and an improved developer experience.

Many editors benefit from including prop-types.

![VS Code auto completion](https://user-images.githubusercontent.com/30707961/114555435-b04d7c80-9c35-11eb-844e-ab7cb40fdeaf.gif)

## Example Guidelines when Naming Props

**DO NOT 🚫**

```js
// Context of this verb is ambiguous, is this is not an action/event/callback?
update;
```

**DO NOT 🚫**

```js
// While more specific and denotes an action, we want to favor using the `on` convention
// to denote that this is something that happens when a person is updated
updatePerson = () => {};
```

**DO ✅**

```js
// prefixing event/actionable things with "on" will help the next user understand
// immediately that is prop should expect something to happen when something updates.
onUpdate;
```

**DO ✅**

```js
// if current use case has more than one context, specify the context (least specific -> more specific)
onUpdatePerson;
```

**DO NOT 🚫**

```js
// As a boolean, usage of "is" is debatable here, with this library we have chosent to use is/has for all boolean
// Note: This is enforced by ESLINT
loading;
```

**DO ✅**

```js
// prefixing boolean props with "is/has/should" can help immediately infer that this should expect a boolean.
isLoading;
```

**DO NOT 🚫**

```js
// this prop might be expecting an object, if a name or id is expected, specify that explicitly (see next section)
person;
```

**DO ✅**

```js
// if this prop expects an "id", name it as such. (Note: we use camelCase, unless a class or component name where PascalCase is used)
personId;
```

**DO NOT 🚫**

```js
// without knowing assignment, the prop here doesn't tell us that it should be a string, the prop could be expected to receive an object
person = "Bob";
```

**DO ✅**

```js
personName = "Bob"; // Obviously a name should be expected
```

## Specificity

Ordering specificity by context

**DO NOT 🚫**

```css
/* specificity is jumping back and forth; broadest / specific / middle */
.mainsail-light-blue {
}
.mainsail-medium-blue {
}
.mainsail-dark-blue {
}
```

**DO ✅**

```css
/* choose to describe in order from least to most specific; broadest (namespace) / middle / specific */
.mainsail-blue-light {
}
.mainsail-blue-medium {
}
.mainsail-blue-dark {
}

/*
This specificity ordering convention makes more sense in the context of a group of named items.
By itself `mainsail-light-blue` doesn't seem too egregious. If combined with others of similar nomenclature,
coding/sorting benefits emerge by inverting theses specificity values to `mainsail-blue-light`.
*/
```

> 📂 This applies to file names as well. Structuring files this way will keep them organized and ordered by file systems.

## Imports

Regarding importing, the `mainsail-ui` developer environment supports a few convenient absolute alias resolvers (set up in `jsconfig.json`, `package.json`, and `.storybook/main.js` for editors, jest, and storybook respectively).

The following paths are aliased:

-   components
-   styles
-   utility

These folders are resolved for you so you don't need to use relative paths that leave you scratching your head wondering how deep something should be in a folder import.

**DO NOT 🚫**

```js
// Button.stories.js uses icon component
import { Icon } from "../Icon";
```

**DO ✅**

```js
// Use the absolute alias instead
import { Icon } from "components/Icon";
```

This results in clearer, more readable imports.

💡 **As a rule of thumb, if you have more than one dot in the path, try to make it absolute with an included alias.**

## Enumerable Props

The decision has been made to provide a convention to mitigate [magic string](https://softwareengineering.stackexchange.com/questions/365339/what-is-wrong-with-magic-strings) usage in/for this library.

Props with enum type of values that are utilized in a component should have their values exposed and exported as such. See [Building a Component](<(./?path=/docs/react-developing-building-a-component--page)>) for more details.

For Example:

```js
// Okay: The Button Component has a `variant` prop.

<Button variant="primary" />

// Better

<Button variant={Button.variants.primary} />
```

Usage of the prop could be handled by passing a string of "primary" but it is actually better to provide a means for the end-user-developer to not have to use strings at all for their prop if we can.

_"But why?"_ You might ask.

Magic strings are prone to causing bugs. These bugs are likely to only surface at runtime. Here's some quick benefits

-   If you type a string wrong, you likely won't discover it until the component renders and maybe not until it hits production
-   Autocomplete in most editors is provided by supplying enums/objects
-   Find/Replace becomes easier/more accurate when not using strings
-   Developer friendliness increases as you need to consult the docs less with prop key/values

Setup may look like this:

```js
// Button.js
...
export const variants = {
        primary: "primary",
        secondary: "secondary",
        tertiary: "tertiary",
        link: "link",
        icon: "icon",
    }

// The global export is being deprecated in favor of Component-specific prop name attaching
export const ENUMS = {
    variants
};

...

// Button Component code
...

// Attached prop values
Button.variants = variants

```

Usage may look like this:

```js
// Button.stories.js
import { Button } from "./Button";

export const Primary = Template.bind({});
Primary.args = {
    variant: Button.variants.primary,
    text: "Click me",
};
```

## Exports Concepts

Individual component directories are exported with an `index.js` file solely for cleaner imports within this project.

Also, there are some plop-driven export bits of logic that aid in the building of the libary for distribution.
