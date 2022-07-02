// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r};var n=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return n&&"symbol"==typeof Symbol.toStringTag},e=Object.prototype.toString,u=e;var o=function(r){return u.call(r)},i=Object.prototype.hasOwnProperty;var a=function(r,n){return null!=r&&i.call(r,n)},f="function"==typeof Symbol?Symbol.toStringTag:"",c=a,y=f,v=e;var l=o,p=function(r){var n,t,e;if(null==r)return v.call(r);t=r[y],n=c(r,y);try{r[y]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[y]=t:delete r[y],e},A=t()?p:l,w=A,b="function"==typeof Uint32Array;var U="function"==typeof Uint32Array?Uint32Array:null,m=function(r){return b&&r instanceof Uint32Array||"[object Uint32Array]"===w(r)},h=U;var N=function(){var r,n;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,4294967296,4294967297]),r=m(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var I="function"==typeof Uint32Array?Uint32Array:void 0,d=function(){throw new Error("not implemented")},s=N()?I:d,F=A,S="function"==typeof Float64Array;var H="function"==typeof Float64Array?Float64Array:null,O=function(r){return S&&r instanceof Float64Array||"[object Float64Array]"===F(r)},g=H;var E=function(){var r,n;if("function"!=typeof g)return!1;try{n=new g([1,3.14,-3.14,NaN]),r=O(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var j="function"==typeof Float64Array?Float64Array:void 0,T=function(){throw new Error("not implemented")},G=E()?j:T,L=A,W="function"==typeof Uint8Array;var M="function"==typeof Uint8Array?Uint8Array:null,x=function(r){return W&&r instanceof Uint8Array||"[object Uint8Array]"===L(r)},P=M;var V=function(){var r,n;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),r=x(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Y="function"==typeof Uint8Array?Uint8Array:void 0,_=function(){throw new Error("not implemented")},k=V()?Y:_,q=A,z="function"==typeof Uint16Array;var B="function"==typeof Uint16Array?Uint16Array:null,C=function(r){return z&&r instanceof Uint16Array||"[object Uint16Array]"===q(r)},D=B;var J=function(){var r,n;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,65536,65537]),r=C(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var K,Q="function"==typeof Uint16Array?Uint16Array:void 0,R=function(){throw new Error("not implemented")},X={uint16:J()?Q:R,uint8:k};(K=new X.uint16(1))[0]=4660;var Z=52===new X.uint8(K.buffer)[0],$=s,rr=!0===Z?1:0,nr=new G(1),tr=new $(nr.buffer);var er=function(r){return nr[0]=r,tr[rr]},ur=s,or=!0===Z?1:0,ir=new G(1),ar=new ur(ir.buffer);var fr=function(r,n){return ir[0]=r,ar[or]=n>>>0,ir[0]},cr=fr,yr=Number.POSITIVE_INFINITY,vr=Number.NEGATIVE_INFINITY;var lr=r,pr=er,Ar=cr,wr=yr,br=vr,Ur=function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313},mr=.6931471803691238,hr=1.9082149292705877e-10;var Nr=function(r){var n,t,e,u,o,i,a,f,c,y,v,l;if(r===wr||lr(r))return r;if(r===br)return-1;if(0===r)return r;if(r<0?(t=!0,a=-r):(t=!1,a=r),a>=38.816242111356935){if(t)return-1;if(a>=709.782712893384)return wr}if(o=0|pr(a),a>.34657359027997264)a<1.0397207708399179?t?(e=r+mr,u=-hr,l=-1):(e=r-mr,u=hr,l=1):(l=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(y=l|=0)*mr,u=y*hr),c=e-(r=e-u)-u;else{if(o<1016070144)return r;l=0}return v=(f=r*(n=.5*r))*(((i=1+f*Ur(f))-(y=3-i*n))/(6-r*y)),0===l?r-(r*v-f):(v=r*(v-c)-c,v-=f,-1===l?.5*(r-v)-.5:1===l?r<-.25?-2*(v-(r+.5)):1+2*(r-v):l<=-2||l>56?(e=pr(a=1-(v-r))+(l<<20)|0,(a=Ar(a,e))-1):(y=1,l<20?a=(y=Ar(y,e=1072693248-(2097152>>l)|0))-(v-r):(a=r-(v+(y=Ar(y,e=1023-l<<20|0))),a+=1),e=pr(a)+(l<<20)|0,Ar(a,e)))},Ir=Math.floor,dr=Math.ceil,sr=Ir,Fr=dr;var Sr=function(r){return r<0?Fr(r):sr(r)},Hr=yr,Or=vr;var gr,Er,jr=function(r){return r===Hr||r===Or};!0===Z?(gr=1,Er=0):(gr=0,Er=1);var Tr=s,Gr={HIGH:gr,LOW:Er},Lr=new G(1),Wr=new Tr(Lr.buffer),Mr=Gr.HIGH,xr=Gr.LOW;var Pr=function(r,n){return Lr[0]=n,r[0]=Wr[Mr],r[1]=Wr[xr],r};var Vr,Yr,_r=function(r,n){return 1===arguments.length?Pr([0,0],r):Pr(r,n)};!0===Z?(Vr=1,Yr=0):(Vr=0,Yr=1);var kr=s,qr={HIGH:Vr,LOW:Yr},zr=new G(1),Br=new kr(zr.buffer),Cr=qr.HIGH,Dr=qr.LOW;var Jr=function(r,n){return Br[Cr]=r,Br[Dr]=n,zr[0]},Kr=_r,Qr=er,Rr=Jr,Xr=[0,0];var Zr=function(r){return Math.abs(r)},$r=jr,rn=r,nn=Zr;var tn=function(r,n){return rn(n)||$r(n)?(r[0]=n,r[1]=0,r):0!==n&&nn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var en=er;var un=function(r){var n=en(r);return(n=(2146435072&n)>>>20)-1023|0},on=yr,an=vr,fn=r,cn=jr,yn=function(r,n){var t,e;return Kr(Xr,r),t=Xr[0],t&=2147483647,e=Qr(n),Rr(t|=e&=2147483648,Xr[1])},vn=function(r,n){return 1===arguments.length?tn([0,0],r):tn(r,n)},ln=un,pn=_r,An=Jr,wn=[0,0],bn=[0,0];var Un=function(r,n){var t,e;return 0===n||0===r||fn(r)||cn(r)?r:(vn(wn,r),n+=wn[1],(n+=ln(r=wn[0]))<-1074?yn(0,r):n>1023?r<0?an:on:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,pn(bn,r),t=bn[0],t&=2148532223,e*An(t|=n+1023<<20,bn[1])))};var mn=Un,hn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Nn=r,In=Sr,dn=vr,sn=yr,Fn=function(r,n,t){var e,u,o;return o=(e=r-n)-(u=e*e)*hn(u),mn(1-(n-e*o/(2-o)-r),t)};var Sn=function(r){var n;return Nn(r)||r===sn?r:r===dn?0:r>709.782712893384?sn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=In(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),Fn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))};var Hn=r,On=er,gn=cr,En=yr,jn=vr,Tn=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},Gn=.6931471803691238,Ln=1.9082149292705877e-10;var Wn=function(r){var n,t,e,u,o,i,a,f,c,y;if(r<-1||Hn(r))return NaN;if(-1===r)return jn;if(r===En)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,u=r,t=1)}return 0!==y&&(e<9007199254740992?(o=(y=((t=On(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),o/=c):(y=((t=On(c=r))>>20)-1023,o=0),(t&=1048575)<434334?c=gn(c,1072693248|t):(y+=1,c=gn(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?y*Gn+(o+=y*Ln):y*Gn-((f=n*(1-.6666666666666666*u))-(y*Ln+o)-u):(f=(a=(i=u/(2+u))*i)*Tn(a),0===y?u-(n-i*(n+f)):y*Gn-(n-(i*(n+f)+(y*Ln+o))-u))};var Mn=er,xn=cr,Pn=r,Vn=vr,Yn=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},_n=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},kn=.6931471803691238,qn=1.9082149292705877e-10;var zn=function(r){var n,t,e,u,o,i,a,f,c,y,v;return 0===r?Vn:Pn(r)||r<0?NaN:(u=0,(t=Mn(r))<1048576&&(u-=54,t=Mn(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(a=(t&=1048575)+614244&1048576|0)>>20|0,i=(r=xn(r,t|1072693248^a))-1,(1048575&2+t)<3?0===i?0===u?0:u*kn+u*qn:(o=i*i*(.5-.3333333333333333*i),0===u?i-o:u*kn-(o-u*qn-i)):(a=t-398458|0,f=440401-t|0,e=(y=(v=(c=i/(2+i))*c)*v)*Yn(y),o=v*_n(y)+e,(a|=f)>0?(n=.5*i*i,0===u?i-(n-c*(n+o)):u*kn-(n-(c*(n+o)+u*qn)-i)):0===u?i-c*(i-o):u*kn-(c*(i-o)-u*qn-i))))};function Bn(n){var t;return r(n)?NaN:0===n?vr:0<(t=Zr(n))&&t<=.6931471805599453?zn(-Nr(-t)):Wn(-Sn(-t))}export{Bn as default};
//# sourceMappingURL=mod.js.map
