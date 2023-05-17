# Week3 - Components

## Setup testing

```shell
npm i -D @testing-library/dom @testing-library/user-event @testing-library/jest-dom
```

jest.config.js

```js
/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
};
```
