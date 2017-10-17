# postcss-bom [![Build Status][ci-img]][ci]

[PostCSS] Add a UTF-8 BOM to files.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/dichuvichkin/postcss-bom.svg
[ci]:      https://travis-ci.org/dichuvichkin/postcss-bom

> Add a [UTF-8 BOM](http://en.wikipedia.org/wiki/Byte_order_mark#UTF-8) to files

From Wikipedia:

> The Unicode Standard permits the BOM in UTF-8, but does not require nor recommend its use. Byte order has no meaning in UTF-8.

Postcss port of [gulp-bom](https://github.com/sindresorhus/gulp-bom)

**Don't use this unless you really need to.**

## Usage

```js
postcss([ require('postcss-bom') ])
```

See [PostCSS] docs for examples for your environment.
