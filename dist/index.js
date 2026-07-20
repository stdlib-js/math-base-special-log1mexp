"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var u=t(function(g,i){
var v=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-special-expm1/dist'),q=require('@stdlib/math-base-special-exp/dist'),s=require('@stdlib/math-base-special-log1p/dist'),p=require('@stdlib/math-base-special-ln/dist'),o=require('@stdlib/math-base-special-abs/dist'),x=require('@stdlib/constants-float64-ln-two/dist'),N=require('@stdlib/constants-float64-ninf/dist');function f(e){var r;return v(e)?NaN:e===0?N:(r=o(e),0<r&&r<=x?p(-n(-r)):s(-q(-r)))}i.exports=f
});var l=u();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
