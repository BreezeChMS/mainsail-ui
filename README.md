# Mainsail-UI


[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is the home of [_Mainsail_](https://en.wikipedia.org/wiki/Mainsail) — The Design System UI-kit of [Breeze](https://www.breezechms.com/).

> WARNING!!! This REPO is under heavy development and should not be used anywhere close to production, yet.
___

This project [will] contain(s) the library package(s) for using Mainsail as an npm package.

It utilizes [Storybook](https://storybook.js.org/) for local development of components in an isolated environment.

Create React App is used solely for the setup of Storybook. At compile time, CRA is not used and a custom webpack config is used.

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


