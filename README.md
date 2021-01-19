# Mainsail-UI


[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is the home of [_Mainsail_](https://en.wikipedia.org/wiki/Mainsail) — The Design System UI-kit of [Breeze](https://www.breezechms.com/).

___

This project [will] contain(s) the library package(s) for using Mainsail as an npm package.

It utilizes [Storybook](https://storybook.js.org/) for local development of components in an isolated environment.

## Style, Conventions and Ethos

This section will likely be moved into the Wiki at some point but it will remain here until then.

The library uses Prettier code styling for simplicity.

### Naming things

When it comes to naming conventions, there are two primary driving motivations behind all naming choices:

- Readability/Reason-Ability
- Explicitness/Specificity

#### Readability / Reason-Ability

Ideally, developers should be able to immediately look at a prop and understand what it is for without reading the docs. Prop names should immediately denote what they are for and set out to do. Favor verbosity (within reason). We want to make our code easy to reason about.



**DO NOT 🚫**

```js
update // Context of this is ambiguous, make sure this is not an action/event/callback
```

**DO NOT 🚫**
```js
updatePerson = () => {} // While more specific and denotes an action, we want to favor using the `on` convention to denote that this is something that happens when a person is updated
```

**DO NOT 🚫**
```js
isLoading // usage of "is" is debatable here, if there is no ambiguity that the prop would be a boolean, just leave the is off
```

**DO NOT 🚫**
```js
person // this should be expecting an object, if a name or id is expected, specify that (see next section)
```


**DO ✅**

```js
onUpdate // prefixing event/actionable things with "on" will help the next user understand immediately that is prop should expect something to happen when something updates.
```

**DO ✅**
```js
onPersonUpdate // if current use case has more than one context, specify the context
```

**DO ✅**
```js
loading // prefixing boolean props with "is" can help immediately infer that this should expect a boolean, but it is not always necessary. E.g. "loading" is fairly self-explanatory as a boolean, since you likely wouldn't pass anything else to this prop
```

**DO ✅**
```js
personId // if this prop expects an "id", name it as such. (Note: we use camelCase, unless a class or component name)
```

#### Explicitness / Specificity

TODO Expand this section

**DO NOT 🚫**

```css
/* specificity is jumping back and forth; broadest / specific / middle */
.mainsail-light-blue
.mainsail-medium-blue
.mainsail-dark-blue
```

**DO NOT 🚫**
```js
person = "Bob" // without knowing assignment, the prop here doesn't tell us that it should be a string, the prop could be expected to receive an object
```


**DO ✅**


```css
/* choose to describe in order from least to most specific; broadest (namespace) / middle / specific */
.mainsail-blue-light
.mainsail-blue-medium
.mainsail-blue-dark
    /* This specificity ordering convention makes more sense in the context of a group of named items. By itself `mainsail-light-blue` doesn't seem too egregious. If combined with others of similar nomenclature, benefits emerge by flipping the specificity values.*/
```
> ! This applies to file names as well. Structuring files this way will keep them organized and ordered by file systems.

**DO ✅**

```js
personName = "Bob" // Obviously a name should be expected
```

### Enumerable Props

The decision has been made to provide a convention to mitigate [magic string](https://softwareengineering.stackexchange.com/questions/365339/what-is-wrong-with-magic-strings) usage in this library.

Props that are utilized in a component should have their ENUM values exposed and exported as such.

For Example:
```js
// The Button Component has a `variant` prop.

<Button variant="primary" />

// Vs

<Button variant={variants.primary} />
```

Usage of the prop could be handled by passing a string of "primary" but it is actually better to provide a means for the end-user-developer to not have to use strings at all for their prop if we can.

"But why?" You might ask.

Magic strings are prone to causing bugs. These bugs are likely to only surface at runtime. Here's some quick benefits
- If you type a string wrong, you likely won't discover it until the component renders and maybe not until it hits production
- Autocomplete in most editors is provided by supplying enums/objects
- Find/Replace becomes easier when not using strings
- Developer friendliness increases as you need to consult the docs less

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
};

...

// Component code below
```

Usage may look like this:
```js
// Button.stories.js
import { Button, variants } from "./Button";

export const Primary = Template.bind({});
Primary.args = {
    variant: variants.primary,
    text: "Click me",
};

```
___
## Installing Locally For Development

1. Clone the repo
1. `cd mainsail-ui`
1. `yarn install`

## Developing 🔨

When working on Mainsail, you can run Storybook locally:
#### Requirements

- Node 12+

#### Run Storybook

```
yarn storybook
```

### Scaffold Your Files 🎉

When developing components, it can be time-consuming and cumbersome to try to mimic current project conventions.

We have taken the guesswork out of this and included built-in generators to help you scaffold the proper related component files in their respective locations. This eliminates boilerplate grunt work.

Behind the scenes this uses the fantastic [Plopjs](https://plopjs.com/).

To generate boilerplate and work on a new component:

```
yarn scaffold component
```

This will prompt you to answer some questions and generate the necessary working files for you.

The structure will look like this:

```src
├─ assets
├─ components
|  ├─ Button
|  |  ├─ Button.js
|  |  ├─ Button.scss
|  |  ├─ Button.stories.js
|  |  └─ Button.test.js
```
___
## Publishing & Deploying

TODO

```
// Build out the package/deploy process
```

___
## Building Storybook to Static Site

TODO

```
// Build out the static site deploy process
```

___
## Installing (to a project)

TODO

```
// Build out the install process
```


