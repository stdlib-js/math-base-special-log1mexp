"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=a(function(c,i){
var t=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-expm1/dist'),n=require('@stdlib/math-base-special-exp/dist'),q=require('@stdlib/math-base-special-log1p/dist'),s=require('@stdlib/math-base-special-ln/dist'),p=require('@stdlib/math-base-special-abs/dist'),o=require('@stdlib/constants-float64-ln-two/dist'),x=require('@stdlib/constants-float64-ninf/dist');function N(e){var r;return t(e)?NaN:e===0?x:(r=p(e),0<r&&r<=o?s(-v(-r)):q(-n(-r)))}i.exports=N
});var f=u();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
