<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# log1mexp

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `1-exp(-|x|)`.



<section class="usage">

## Usage

```javascript
import log1mexp from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1mexp@v0.2.0-esm/index.mjs';
```

#### log1mexp( x )

Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `1-exp(-|x|)`.

```javascript
var y = log1mexp( 0.0 );
// returns -Infinity

y = log1mexp( 5.0 );
// returns ~-0.00676

y = log1mexp( 10.0 );
// returns ~-0.00005

y = log1mexp( -10.0 );
// returns ~-0.00005

y = log1mexp( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import incrspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-incrspace@esm/index.mjs';
import log1mexp from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1mexp@v0.2.0-esm/index.mjs';

var x = incrspace( -10.0, 10.0, 0.01 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'x: %d, f(x): %d', x[ i ], log1mexp( x[ i ] ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/exp`][@stdlib/math/base/special/exp]</span><span class="delimiter">: </span><span class="description">natural exponential function.</span>
-   <span class="package-name">[`@stdlib/math-base/special/ln`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/log1p`][@stdlib/math/base/special/log1p]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of 1+x.</span>
-   <span class="package-name">[`@stdlib/math-base/special/log1pexp`][@stdlib/math/base/special/log1pexp]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of 1+exp(x).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-log1mexp.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-log1mexp

[test-image]: https://github.com/stdlib-js/math-base-special-log1mexp/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/math-base-special-log1mexp/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-log1mexp/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-log1mexp?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-log1mexp.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-log1mexp/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-log1mexp/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-log1mexp/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-log1mexp/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-log1mexp/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-log1mexp/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-log1mexp/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-log1mexp/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-log1mexp/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/exp]: https://github.com/stdlib-js/math-base-special-exp/tree/esm

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math-base-special-ln/tree/esm

[@stdlib/math/base/special/log1p]: https://github.com/stdlib-js/math-base-special-log1p/tree/esm

[@stdlib/math/base/special/log1pexp]: https://github.com/stdlib-js/math-base-special-log1pexp/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
