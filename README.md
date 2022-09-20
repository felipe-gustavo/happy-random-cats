# Happy cats pic

A simple project with sign in/up feature to login in a app with funny cats, enjoy!

[Here is the demo](https://happy-cats-pic.vercel.app/)

## TODO:

- Add unit test;
- Integrate with a backend.

## Pre requisits

The pre requisits to run this is:

- `node@14.20.0`;
- `yarn@1.22.19`;
- `nvm@0.35.0` (recommended).

# Getting Started

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install project dependencies

Navigate to the project root directory and run:

```bash
yarn install
```

## Development preparation

Make sure to prepare husky to run pre-commit hooks configured for this project before pushing your first commit.

```bash
npm run husky:prepare
```

Run the follow command to add pre-commit file as executable file.

```bash
chmod ug+x .husky/pre-commit
```

## Starts the app

Run the bellow command to start the app. See more commands and what they make on [script section](#scripts).

```bash
yarn start
```

# Project structure

This project follows the below structure:

- `src/App.js`, here is the app
- `src/assets/**`, where the assets stay like locale files, images and others.
- `src/components/`, here is the components.
- `src/config/**`, here is the config files, like the `setupTests` and others.
- `src/context/**`, app contexts datas to share data between components.
- `src/errors/**`, error instances to aid in the development.
- `src/hooks/**`, react hooks to aid in the development.
- `src/mock/**`, a in memory data to simulate a user manipulation.
- `src/pages/**`, site pages.
- `src/services/**`, here is the services responsible for retrieve and treat the external data.
- `src/utils/**`, function to aid in the development.

The test and stories pattern is inline, whithout a specific folder.

## Scripts

In the project directory, you can run:

### `yarn lint`

Performs the linter over the files, fixing them for
the defined pattern.

### `yarn husky:prepare`

Prepares the git hooks to husky works. See the
[section about the husky](https://github.com/typicode/husky/tree/main/docs)

### `yarn storybook`

Runs the storybook on development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:watch`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
