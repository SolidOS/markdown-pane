# markdown-pane

A SolidOS pane to render, create and edit markdown files.

## Contribute

### Tech stack

- Typescript
- React
- Jest
- Eslint
- Prettier
- SolidOS

### Tests

To run all tests:
```shell script
npm run test
```

#### Unit tests

Unit tests use `jest` and are placed next to the tested file as `*.test.ts(x)` files.

### Dev Server

Start a webpack dev server:

```shell script
npm start
```

Visit `http://localhost:8080/` to render the pane.
 
### Build

```
npm run build
```

The build is done by `tsc`, webpack is only used as dev server and not for production build.