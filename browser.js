// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,i=Object.prototype.hasOwnProperty,a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"",c=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,a,c,u;if(null==r)return n.call(r);t=r[o],u=o,e=null!=(c=r)&&i.call(c,u);try{r[o]=void 0}catch(e){return n.call(r)}return a=n.call(r),e?r[o]=t:delete r[o],a}:function(r){return n.call(r)},u="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,s="function"==typeof Uint32Array?Uint32Array:void 0;e=function(){var r,e,t;if("function"!=typeof f)return!1;try{e=new f(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(u&&t instanceof Uint32Array||"[object Uint32Array]"===c(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?s:function(){throw new Error("not implemented")};var l,p=e,y="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;l=function(){var r,e,t;if("function"!=typeof g)return!1;try{e=new g([1,3.14,-3.14,NaN]),t=e,r=(y&&t instanceof Float64Array||"[object Float64Array]"===c(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h,v=l,w="function"==typeof Uint8Array,b="function"==typeof Uint8Array?Uint8Array:null,m="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var r,e,t;if("function"!=typeof b)return!1;try{e=new b(e=[1,3.14,-3.14,256,257]),t=e,r=(w&&t instanceof Uint8Array||"[object Uint8Array]"===c(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?m:function(){throw new Error("not implemented")};var A,_=h,E="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;A=function(){var r,e,t;if("function"!=typeof U)return!1;try{e=new U(e=[1,3.14,-3.14,65536,65537]),t=e,r=(E&&t instanceof Uint16Array||"[object Uint16Array]"===c(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?S:function(){throw new Error("not implemented")};var x,I={uint16:A,uint8:_};(x=new I.uint16(1))[0]=4660;var k=52===new I.uint8(x.buffer)[0],F=!0===k?1:0,j=new v(1),T=new p(j.buffer);function N(r){return j[0]=r,T[F]}var O,V,$=!0===k?1:0,G=new v(1),H=new p(G.buffer);function W(r,e){return G[0]=r,H[$]=e>>>0,G[0]}!0===k?(O=1,V=0):(O=0,V=1);var C={HIGH:O,LOW:V},L=new v(1),P=new p(L.buffer),R=C.HIGH,Z=C.LOW;function M(r,e){return P[R]=r,P[Z]=e,L[0]}var X=Number.POSITIVE_INFINITY,Y=Number.NEGATIVE_INFINITY,z=1023,q=.34657359027997264,B=709.782712893384,D=.6931471803691238,J=1.9082149292705877e-10,K=1.4426950408889634,Q=38.816242111356935,rr=1.0397207708399179,er=Math.floor,tr=Math.ceil;function nr(r){return r<0?tr(r):er(r)}var ir=1023,ar=-1023,or=-1074;function cr(r){return r===X||r===Y}var ur=2147483648,fr=2147483647,sr="function"==typeof Object.defineProperty?Object.defineProperty:null,lr=Object.defineProperty;function pr(r){return"number"==typeof r}function yr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function gr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+yr(i):yr(i)+r,n&&(r="-"+r)),r}var dr=String.prototype.toLowerCase,hr=String.prototype.toUpperCase;function vr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!pr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=gr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=gr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===hr.call(r.specifier)?hr.call(t):dr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var wr=Math.abs,br=String.prototype.toLowerCase,mr=String.prototype.toUpperCase,Ar=String.prototype.replace,_r=/e\+(\d)$/,Er=/e-(\d)$/,Ur=/^(\d+)$/,Sr=/^(\d+)e/,xr=/\.0$/,Ir=/\.0*e/,kr=/(\..*[^0])0*e/;function Fr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!pr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":wr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ar.call(t,kr,"$1e"),t=Ar.call(t,Ir,"e"),t=Ar.call(t,xr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ar.call(t,_r,"e+0$1"),t=Ar.call(t,Er,"e-0$1"),r.alternate&&(t=Ar.call(t,Ur,"$1."),t=Ar.call(t,Sr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===mr.call(r.specifier)?mr.call(t):br.call(t)}function jr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var Tr=String.fromCharCode,Nr=Array.isArray;function Or(r){return r!=r}function Vr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $r(r){var e,t,n,i,a,o,c,u,f,s,l,p,y;if(!Nr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if("string"==typeof(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=Vr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Or(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Or(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=vr(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!Or(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Or(a)?String(n.arg):Tr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Fr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=gr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,l=n.width,p=n.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+jr(y):jr(y)+s)),o+=n.arg||"",c+=1}return o}var Gr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Hr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Wr(r){var e,t,n,i;for(t=[],i=0,n=Gr.exec(r);n;)(e=r.slice(i,Gr.lastIndex-n[0].length)).length&&t.push(e),t.push(Hr(n)),i=Gr.lastIndex,n=Gr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Cr(r){var e,t;if("string"!=typeof r)throw new TypeError(Cr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Wr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return $r.apply(null,e)}var Lr,Pr,Rr=Object.prototype,Zr=Rr.toString,Mr=Rr.__defineGetter__,Xr=Rr.__defineSetter__,Yr=Rr.__lookupGetter__,zr=Rr.__lookupSetter__,qr=function(){try{return sr({},"x",{}),!0}catch(r){return!1}}()?lr:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Zr.call(r))throw new TypeError(Cr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Zr.call(t))throw new TypeError(Cr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Yr.call(r,e)||zr.call(r,e)?(n=r.__proto__,r.__proto__=Rr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Mr&&Mr.call(r,e,t.get),o&&Xr&&Xr.call(r,e,t.set),r};function Br(r,e,t){qr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===k?(Lr=1,Pr=0):(Lr=0,Pr=1);var Dr={HIGH:Lr,LOW:Pr},Jr=new v(1),Kr=new p(Jr.buffer),Qr=Dr.HIGH,re=Dr.LOW;function ee(r,e,t,n){return Jr[0]=r,e[n]=Kr[Qr],e[n+t]=Kr[re],e}function te(r){return ee(r,[0,0],1,0)}Br(te,"assign",ee);var ne=[0,0],ie=22250738585072014e-324;function ae(r){return Math.abs(r)}var oe=4503599627370496;function ce(e,t,n,i){return r(e)||cr(e)?(t[i]=e,t[i+n]=0,t):0!==e&&ae(e)<ie?(t[i]=e*oe,t[i+n]=-52,t):(t[i]=e,t[i+n]=0,t)}Br((function(r){return ce(r,[0,0],1,0)}),"assign",ce);var ue=2146435072,fe=2220446049250313e-31,se=2148532223,le=[0,0],pe=[0,0];function ye(e,t){var n,i,a,o,c,u;return 0===t||0===e||r(e)||cr(e)?e:(ce(e,le,1,0),e=le[0],t+=le[1],t+=function(r){var e=N(r);return(e=(e&ue)>>>20)-z|0}(e),t<or?(a=0,o=e,te.assign(a,ne,1,0),c=ne[0],c&=fr,u=N(o),M(c|=u&=ur,ne[1])):t>ir?e<0?Y:X:(t<=ar?(t+=52,i=fe):i=1,te.assign(e,pe,1,0),n=pe[0],n&=se,i*M(n|=t+z<<20,pe[1])))}var ge=.6931471803691238,de=1.9082149292705877e-10,he=1.4426950408889634,ve=709.782712893384,we=-745.1332191019411,be=1/(1<<28),me=-be;function Ae(e){var t;return r(e)||e===X?e:e===Y?0:e>ve?X:e<we?0:e>me&&e<be?1+e:function(r,e,t){var n,i,a,o;return ye(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(e-(t=nr(e<0?he*e-.5:he*e+.5))*ge,t*de,t)}var _e=.6931471803691238,Ee=1.9082149292705877e-10,Ue=.41421356237309503,Se=-.2928932188134525,xe=1.862645149230957e-9,Ie=5551115123125783e-32,ke=9007199254740992,Fe=.6666666666666666,je=.6931471803691238,Te=1.9082149292705877e-10,Ne=0x40000000000000,Oe=.3333333333333333,Ve=1048575,$e=2146435072,Ge=1048576,He=1072693248;return function(e){var t;return r(e)?NaN:0===e?Y:0<(t=ae(e))&&t<=.6931471805599453?function(e){var t,n,i,a,o,c,u,f,s,l,p,y;return 0===e?Y:r(e)||e<0?NaN:(o=0,(n=N(e))<Ge&&(o-=54,n=N(e*=Ne)),n>=$e?e+e:(o+=(n>>20)-z|0,o+=(f=614244+(n&=Ve)&1048576|0)>>20|0,u=(e=W(e,n|f^He))-1,(Ve&2+n)<3?0===u?0===o?0:o*je+o*Te:(c=u*u*(.5-Oe*u),0===o?u-c:o*je-(c-o*Te-u)):(f=n-398458|0,s=440401-n|0,a=(p=(y=(l=u/(2+u))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),c=i+a,(f|=s)>0?(t=.5*u*u,0===o?u-(t-l*(t+c)):o*je-(t-(l*(t+c)+o*Te)-u)):0===o?u-l*(u-c):o*je-(l*(u-c)-o*Te-u))))}(-function(e){var t,n,i,a,o,c,u,f,s,l,p,y,g;if(e===X||r(e))return e;if(e===Y)return-1;if(0===e)return e;if(e<0?(i=!0,f=-e):(i=!1,f=e),f>=Q){if(i)return-1;if(f>=B)return X}if(c=0|N(f),f>q)f<rr?i?(a=e+D,o=-J,g=-1):(a=e-D,o=J,g=1):(g=i?K*e-.5:K*e+.5,a=e-(p=g|=0)*D,o=p*J),l=a-(e=a-o)-o;else{if(c<1016070144)return e;g=0}return u=1+(s=e*(t=.5*e))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(s),y=s*((u-(p=3-u*t))/(6-e*p)),0===g?e-(e*y-s):(n=M(z+g<<20,0),y=e*(y-l)-l,y-=s,-1===g?.5*(e-y)-.5:1===g?e<-.25?-2*(y-(e+.5)):1+2*(e-y):g<=-2||g>56?(f=1-(y-e),1024===g?f=W(f,a=N(f)+(g<<20)|0):f*=n,f-1):(p=1,g<20?f=(p=W(p,a=1072693248-(2097152>>g)|0))-(y-e):(f=e-(y+(p=W(p,a=z-g<<20|0))),f+=1),f*=n))}(-t)):function(e){var t,n,i,a,o,c,u,f,s,l;if(e<-1||r(e))return NaN;if(-1===e)return Y;if(e===X)return e;if(0===e)return e;if(l=1,(i=e<0?-e:e)<Ue){if(i<xe)return i<Ie?e:e-e*e*.5;e>Se&&(l=0,a=e,n=1)}return 0!==l&&(i<ke?(o=(l=((n=N(s=1+e))>>20)-z)>0?1-(s-e):e-(s-1),o/=s):(l=((n=N(s=e))>>20)-z,o=0),(n&=1048575)<434334?s=W(s,1072693248|n):(l+=1,s=W(s,1071644672|n),n=1048576-n>>2),a=s-1),t=.5*a*a,0===n?0===a?l*_e+(o+=l*Ee):l*_e-((f=t*(1-Fe*a))-(l*Ee+o)-a):(f=(u=(c=a/(2+a))*c)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?a-(t-c*(t+f)):l*_e-(t-(c*(t+f)+(l*Ee+o))-a))}(-Ae(-t))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).log1mexp=e();
//# sourceMappingURL=browser.js.map
