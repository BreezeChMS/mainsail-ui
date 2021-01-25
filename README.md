# Mainsail-UI


[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Uses Storybook](https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg)](https://storybook.js.org/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


This is the home of [_Mainsail_](https://en.wikipedia.org/wiki/Mainsail) — The Design System UI-kit of [Breeze](https://www.breezechms.com/).

> WARNING!!! This REPO is under heavy development and should not be used anywhere close to production, yet.
___

[Storybook](https://storybook.js.org/) is used for local development of components in an isolated environment.

- Create React App is used solely for the setup of Storybook.
- At compile time, CRA is not used and a custom rollup config is used.


## Live Storybook Demo

[View the current Storybook here.](https://master--6000b9fe63cdbd0021082b92.chromatic.com)
## Contributing

Please see the wiki for valuable information on [Contributing](https://github.com/BreezeChMS/mainsail-ui/wiki/Contributing-to-Mainsail)

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
|  |  ├─ Button.test.js
|  |  └─ index.js
```
___

## Installing (to a project)

Install the npm package just like any other.

```
npm install @breezechms/mainsail-ui

// or

yarn add @breezechms/mainsail-ui
```

Then import and use your desired component:

```js
import { Button } from "@breezechms/mainsail-ui";

<Button text="Do Stuff" />
```

___

## Publishing & Deploying Changes

TODO

```
// Build out the package/deploy process
```
