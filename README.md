# preact-1

## CLI Commands

``` bash
# install dependencies
npm install
```
## Documentation
This is the default template for preact-cli.
For Preact: General information about how to work with Preact, not specific to this template

## Usage
$ npx preact-cli create default my-project
$ cd my-project
$ npm install
$ npm run dev
Development server runs on port 8080. If the default port is already in use on your machine it will start the development server on a random port.

## Commands
``` bash
npm run dev: Run a development, HMR server

npm run serve: Run a production-like server

npm run build: Production-ready build

npm run lint: Pass JavaScript files using ESLint

npm run test: Run Jest and Enzyme with enzyme-adapter-preact-pure for your tests
```

## How to Test
The default template provides a basic test setup with Jest, Enzyme, and enzyme-adapter-preact-pure. You are free to change Enzyme with any other testing library (eg. Preact Testing Library).

You can run all additional Jest CLI commands with the npm run test command as described in the Jest docs. For example, running jest in watch mode would be :
``` bash
npm run test -- --watch instead of jest --watch
```
