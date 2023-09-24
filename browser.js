// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,i=Object.prototype.hasOwnProperty,a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"",c=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,a,c,u;if(null==r)return n.call(r);t=r[o],u=o,e=null!=(c=r)&&i.call(c,u);try{r[o]=void 0}catch(e){return n.call(r)}return a=n.call(r),e?r[o]=t:delete r[o],a}:function(r){return n.call(r)},u="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,s="function"==typeof Uint32Array?Uint32Array:void 0;e=function(){var r,e,t;if("function"!=typeof f)return!1;try{e=new f(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(u&&t instanceof Uint32Array||"[object Uint32Array]"===c(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?s:function(){throw new Error("not implemented")};var l,p=e,y="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;l=function(){var r,e,t;if("function"!=typeof g)return!1;try{e=new g([1,3.14,-3.14,NaN]),t=e,r=(y&&t instanceof Float64Array||"[object Float64Array]"===c(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h,w=l,v="function"==typeof Uint8Array,b="function"==typeof Uint8Array?Uint8Array:null,m="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var r,e,t;if("function"!=typeof b)return!1;try{e=new b(e=[1,3.14,-3.14,256,257]),t=e,r=(v&&t instanceof Uint8Array||"[object Uint8Array]"===c(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?m:function(){throw new Error("not implemented")};var A,_=h,E="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,x="function"==typeof Uint16Array?Uint16Array:void 0;A=function(){var r,e,t;if("function"!=typeof U)return!1;try{e=new U(e=[1,3.14,-3.14,65536,65537]),t=e,r=(E&&t instanceof Uint16Array||"[object Uint16Array]"===c(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?x:function(){throw new Error("not implemented")};var I,S={uint16:A,uint8:_};(I=new S.uint16(1))[0]=4660;var k=52===new S.uint8(I.buffer)[0],F=!0===k?1:0,j=new w(1),N=new p(j.buffer);function T(r){return j[0]=r,N[F]}var O,V,$=!0===k?1:0,G=new w(1),H=new p(G.buffer);function W(r,e){return G[0]=r,H[$]=e>>>0,G[0]}!0===k?(O=1,V=0):(O=0,V=1);var C={HIGH:O,LOW:V},L=new w(1),P=new p(L.buffer),R=C.HIGH,Z=C.LOW;function M(r,e){return P[R]=r,P[Z]=e,L[0]}var X=Number.POSITIVE_INFINITY,Y=Number.NEGATIVE_INFINITY,z=1023,q=.6931471803691238,B=1.9082149292705877e-10,D=1.4426950408889634,J=Math.floor,K=Math.ceil;function Q(r){return r<0?K(r):J(r)}function rr(r){return r===X||r===Y}var er="function"==typeof Object.defineProperty?Object.defineProperty:null,tr=Object.defineProperty;function nr(r){return"number"==typeof r}function ir(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ar(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+ir(i):ir(i)+r,n&&(r="-"+r)),r}var or=String.prototype.toLowerCase,cr=String.prototype.toUpperCase;function ur(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!nr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ar(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ar(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===cr.call(r.specifier)?cr.call(t):or.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function fr(r){return"string"==typeof r}var sr=Math.abs,lr=String.prototype.toLowerCase,pr=String.prototype.toUpperCase,yr=String.prototype.replace,gr=/e\+(\d)$/,dr=/e-(\d)$/,hr=/^(\d+)$/,wr=/^(\d+)e/,vr=/\.0$/,br=/\.0*e/,mr=/(\..*[^0])0*e/;function Ar(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!nr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":sr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=yr.call(t,mr,"$1e"),t=yr.call(t,br,"e"),t=yr.call(t,vr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=yr.call(t,gr,"e+0$1"),t=yr.call(t,dr,"e-0$1"),r.alternate&&(t=yr.call(t,hr,"$1."),t=yr.call(t,wr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===pr.call(r.specifier)?pr.call(t):lr.call(t)}function _r(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Er(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_r(n):_r(n)+r}var Ur=String.fromCharCode,xr=isNaN,Ir=Array.isArray;function Sr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function kr(r){var e,t,n,i,a,o,c,u,f;if(!Ir(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(fr(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=Sr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,xr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,xr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=ur(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!xr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=xr(a)?String(n.arg):Ur(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Ar(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ar(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Er(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Fr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function jr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Nr(r){var e,t,n,i;for(t=[],i=0,n=Fr.exec(r);n;)(e=r.slice(i,Fr.lastIndex-n[0].length)).length&&t.push(e),t.push(jr(n)),i=Fr.lastIndex,n=Fr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Tr(r){return"string"==typeof r}function Or(r){var e,t,n;if(!Tr(r))throw new TypeError(Or("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Nr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return kr.apply(null,t)}var Vr,$r,Gr=Object.prototype,Hr=Gr.toString,Wr=Gr.__defineGetter__,Cr=Gr.__defineSetter__,Lr=Gr.__lookupGetter__,Pr=Gr.__lookupSetter__,Rr=function(){try{return er({},"x",{}),!0}catch(r){return!1}}()?tr:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Hr.call(r))throw new TypeError(Or("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Hr.call(t))throw new TypeError(Or("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Lr.call(r,e)||Pr.call(r,e)?(n=r.__proto__,r.__proto__=Gr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Wr&&Wr.call(r,e,t.get),o&&Cr&&Cr.call(r,e,t.set),r};function Zr(r,e,t){Rr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===k?(Vr=1,$r=0):(Vr=0,$r=1);var Mr={HIGH:Vr,LOW:$r},Xr=new w(1),Yr=new p(Xr.buffer),zr=Mr.HIGH,qr=Mr.LOW;function Br(r,e,t,n){return Xr[0]=r,e[n]=Yr[zr],e[n+t]=Yr[qr],e}function Dr(r){return Br(r,[0,0],1,0)}Zr(Dr,"assign",Br);var Jr=[0,0];function Kr(r){return Math.abs(r)}function Qr(e,t,n,i){return r(e)||rr(e)?(t[i]=e,t[i+n]=0,t):0!==e&&Kr(e)<22250738585072014e-324?(t[i]=4503599627370496*e,t[i+n]=-52,t):(t[i]=e,t[i+n]=0,t)}Zr((function(r){return Qr(r,[0,0],1,0)}),"assign",Qr);var re=[0,0],ee=[0,0];function te(e,t){var n,i,a,o,c,u;return 0===t||0===e||r(e)||rr(e)?e:(Qr(e,re,1,0),t+=re[1],t+=function(r){var e=T(r);return(e=(2146435072&e)>>>20)-z|0}(e=re[0]),t<-1074?(a=0,o=e,Dr.assign(a,Jr,1,0),c=Jr[0],c&=2147483647,u=T(o),M(c|=u&=2147483648,Jr[1])):t>1023?e<0?Y:X:(t<=-1023?(t+=52,i=2220446049250313e-31):i=1,Dr.assign(e,ee,1,0),n=ee[0],n&=2148532223,i*M(n|=t+z<<20,ee[1])))}var ne=1.4426950408889634,ie=1/(1<<28);function ae(e){var t;return r(e)||e===X?e:e===Y?0:e>709.782712893384?X:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<ie?1+e:function(r,e,t){var n,i,a,o;return te(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(e-.6931471803691238*(t=Q(e<0?ne*e-.5:ne*e+.5)),1.9082149292705877e-10*t,t)}var oe=.6931471803691238,ce=1.9082149292705877e-10,ue=.6931471803691238,fe=1.9082149292705877e-10,se=1048575;return function(e){var t;return r(e)?NaN:0===e?Y:0<(t=Kr(e))&&t<=.6931471805599453?function(e){var t,n,i,a,o,c,u,f,s,l,p,y;return 0===e?Y:r(e)||e<0?NaN:(o=0,(n=T(e))<1048576&&(o-=54,n=T(e*=0x40000000000000)),n>=2146435072?e+e:(o+=(n>>20)-z|0,o+=(f=614244+(n&=se)&1048576|0)>>20|0,u=(e=W(e,n|1072693248^f))-1,(se&2+n)<3?0===u?0===o?0:o*ue+o*fe:(c=u*u*(.5-.3333333333333333*u),0===o?u-c:o*ue-(c-o*fe-u)):(f=n-398458|0,s=440401-n|0,a=(p=(y=(l=u/(2+u))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),c=i+a,(f|=s)>0?(t=.5*u*u,0===o?u-(t-l*(t+c)):o*ue-(t-(l*(t+c)+o*fe)-u)):0===o?u-l*(u-c):o*ue-(l*(u-c)-o*fe-u))))}(-function(e){var t,n,i,a,o,c,u,f,s,l,p,y,g;if(e===X||r(e))return e;if(e===Y)return-1;if(0===e)return e;if(e<0?(i=!0,f=-e):(i=!1,f=e),f>=38.816242111356935){if(i)return-1;if(f>=709.782712893384)return X}if(c=0|T(f),f>.34657359027997264)f<1.0397207708399179?i?(a=e+q,o=-B,g=-1):(a=e-q,o=B,g=1):(g=i?D*e-.5:D*e+.5,a=e-(p=g|=0)*q,o=p*B),l=a-(e=a-o)-o;else{if(c<1016070144)return e;g=0}return u=1+(s=e*(t=.5*e))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(s),y=s*((u-(p=3-u*t))/(6-e*p)),0===g?e-(e*y-s):(n=M(z+g<<20,0),y=e*(y-l)-l,y-=s,-1===g?.5*(e-y)-.5:1===g?e<-.25?-2*(y-(e+.5)):1+2*(e-y):g<=-2||g>56?(f=1-(y-e),1024===g?f=W(f,a=T(f)+(g<<20)|0):f*=n,f-1):(p=1,g<20?f=(p=W(p,a=1072693248-(2097152>>g)|0))-(y-e):(f=e-(y+(p=W(p,a=z-g<<20|0))),f+=1),f*=n))}(-t)):function(e){var t,n,i,a,o,c,u,f,s,l;if(e<-1||r(e))return NaN;if(-1===e)return Y;if(e===X)return e;if(0===e)return e;if(l=1,(i=e<0?-e:e)<.41421356237309503){if(i<1.862645149230957e-9)return i<5551115123125783e-32?e:e-e*e*.5;e>-.2928932188134525&&(l=0,a=e,n=1)}return 0!==l&&(i<9007199254740992?(o=(l=((n=T(s=1+e))>>20)-z)>0?1-(s-e):e-(s-1),o/=s):(l=((n=T(s=e))>>20)-z,o=0),(n&=1048575)<434334?s=W(s,1072693248|n):(l+=1,s=W(s,1071644672|n),n=1048576-n>>2),a=s-1),t=.5*a*a,0===n?0===a?l*oe+(o+=l*ce):l*oe-((f=t*(1-.6666666666666666*a))-(l*ce+o)-a):(f=(u=(c=a/(2+a))*c)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?a-(t-c*(t+f)):l*oe-(t-(c*(t+f)+(l*ce+o))-a))}(-ae(-t))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).log1mexp=e();
//# sourceMappingURL=browser.js.map
