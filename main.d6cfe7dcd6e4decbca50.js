(()=>{"use strict";var e={531:(e,t,r)=>{var n=r(294),o=r(935),a=r(252);const l=function(){return n.createElement("div",null,n.createElement("nav",{className:"relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-500 mb-3"},n.createElement("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between"},n.createElement("div",{className:"lg:flex flex-grow items-center"},n.createElement("ul",{className:"flex flex-col lg:flex-row list-none ml-auto"},n.createElement("li",{className:"nav-item"},n.createElement(a.rU,{className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",to:""},"Home")),n.createElement("li",{className:"nav-item"},n.createElement(a.rU,{className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",to:"game"},"Game")))))))},i=function(){return n.createElement("div",null,n.createElement("main",{className:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},n.createElement("div",{className:"sm:text-center lg:text-left"},n.createElement("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"},n.createElement("span",{className:"block xl:inline"},"Welcome to"),n.createElement("span",{className:"block text-indigo-600 xl:inline"},"Color Mixing Fun!")),n.createElement("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."),n.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},n.createElement("div",{className:"rounded-md shadow"},n.createElement(a.rU,{to:"game",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"},"Go To Game"))))))};var c=r(697),s=r.n(c),u=r(321),m=(0,u.QM)({mixingBtn:{border:[["thin","solid","#ddd"]],width:45,height:45,margin:10,"font-size":"25px",transform:"scale(1)",backgroundColor:function(e){return e.colorMixing},outline:function(e){return e.outline},"&:focus":{outline:function(e){return e.outline}}}}),d=function(e){var t=m(e);return n.createElement("button",{className:t.mixingBtn,onClick:function(){return e.onClick(e.colorMixing)}})};d.propTypes={onClick:s().func.isRequired,colorMixing:s().string.isRequired,outline:s().string};const f=d;var p=(0,u.QM)({mixedBtn:{border:[["thin","solid","#ddd"]],width:45,height:45,margin:10,transition:"all 0.5s","font-size":"25px",backgroundColor:function(e){return e.mixedColor}}}),x=function(e){var t=p(e);return n.createElement("div",{className:t.mixedBtn})};x.propTypes={mixedColor:s().string.isRequired};const g=x;var y=(0,u.QM)({playAgainBtn:{border:[["thin","solid","#3b82f6"]],borderRadius:"15px",width:100,height:60,padding:10,transition:"all 0.5s"}}),b=function(e){var t=y(e);return n.createElement("div",{className:"mb-10"},n.createElement("button",{className:t.playAgainBtn,onClick:e.onClick},"Play Again"))};b.propTypes={onClick:s().func.isRequired};const h=b;var v={orange:["red","yellow"],grey:["black","white"],purple:["red","blue"],green:["yellow","blue"],brown:["red","green"]},E=Object.keys(v),S=[];E.forEach((function(e){S=S.concat(v[e])})),S=Array.from(new Set(S));const w={colors:v,colorsMixedArr:E,colorMixingArr:S,pauseDuration:2e3,correctFb:"green",incorrectFb:"red",defaultFb:"blue",correctOutline:"3px solid green",incorrectOutline:"3px solid red",defaultOutline:"3px dotted blue",STATUSES:{newSet:"newSet",incomplete:"incomplete",correct:"correct",incorrect:"incorrect",complete:"complete"}};function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var A=w.STATUSES,C=function(e){var t,r,o=(t=(0,n.useState)(0),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],l=o[1];return(0,n.useEffect)((function(){var t=null;return e.gameStatus!==A.complete?t=setInterval((function(){l((function(e){return e+1}))}),1e3):clearInterval(t),function(){return clearInterval(t)}}),[a,e.gameStatus]),e.gameStatus===A.complete?n.createElement("div",{className:"mb-10"},n.createElement("p",null,"You used ",a,"s")):n.createElement("div",{className:"mb-10"},n.createElement("p",null,"Game started!"),n.createElement("p",null,"Time(s): ",a))};C.propTypes={gameStatus:s().string.isRequired};const j=C;var k=r(863),T=w.STATUSES,M=function(e){var t=e.gameStatus,r=e.status,o=e.correctNum,a=(0,k.q_)({from:{x:0},x:r===T.newSet?0:1,config:{duration:800},reset:!0}).x;return n.createElement("div",null,n.createElement(k.q.div,{style:{color:t===T.complete?w.defaultFb:r===T.correct?w.correctFb:r===T.incorrect?w.incorrectFb:w.defaultFb,opacity:a.interpolate({range:[0,1],output:[.6,1]}),transform:a.interpolate({range:[0,.25,.35,.45,.55,.65,.75,1],output:[1,.97,.9,1.1,.9,1.1,1.03,1]}).interpolate((function(e){return"scale(".concat(e,")")}))}},t===T.complete?n.createElement("p",null,o," correct"):r===T.correct?n.createElement("p",null,"Correct!"):r===T.incorrect?n.createElement("p",null,"Incorrect!"):n.createElement("p",null,"Please select")))};M.propTypes={gameStatus:s().string.isRequired,status:s().string.isRequired,correctNum:s().number};const O=M;function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}(e,t)||q(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){if(e){if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(e,t):void 0}}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var F=w.colors,R=w.colorsMixedArr,G=w.colorMixingArr,B=w.pauseDuration,P=w.STATUSES,_=function(e){var t=function(){var e=I((0,n.useState)(R),2),t=e[0],r=e[1],o=I((0,n.useState)(0),2),a=o[0],l=o[1],i=I((0,n.useState)(P.newSet),2),c=i[0],s=i[1],u=I((0,n.useState)([]),2),m=u[0],d=u[1],f=I((0,n.useState)(P.incomplete),2),p=f[0],x=f[1],g=I((0,n.useState)(t[Math.floor(Math.random()*t.length)]),2),y=g[0],b=g[1],h=I((0,n.useState)(F[y]),2),v=h[0],E=h[1];return{mixedColor:y,status:c,chosenColors:m,setChosenColors:d,mixCheck:function(e){r(t.filter((function(e){return e!==y}))),v.sort().join()===e.sort().join()?(s(P.correct),l(a+1)):s(P.incorrect),1===t.length?setTimeout((function(){x(P.complete)}),B):setTimeout((function(){d([]);var e=Math.floor(Math.random()*t.filter((function(e){return e!==y})).length);r(t.filter((function(e){return e!==y}))),b(t.filter((function(e){return e!==y}))[e]),E(F[t.filter((function(e){return e!==y}))[e]]),s(P.newSet)}),B)},gameStatus:p,correctNum:a}}(),r=t.mixedColor,o=t.status,a=t.chosenColors,l=t.setChosenColors,i=t.mixCheck,c=t.gameStatus,s=t.correctNum,u=function(e){var t;l([].concat(function(e){if(Array.isArray(e))return U(e)}(t=a)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||q(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e])),a.length>=1&&i(a.concat(e))};return n.createElement("div",null,n.createElement("main",{className:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},n.createElement("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl px-4 sm:px-6 lg:px-8"},n.createElement("span",{className:"block text-indigo-600 xl:inline"},"Color Mixing Game")),n.createElement("div",{className:"py-12 bg-white"},n.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},n.createElement(j,{gameStatus:c}),c===P.incomplete?n.createElement("div",{className:"mb-10"},n.createElement("dl",{className:"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"},n.createElement("div",{className:"flex"},n.createElement("div",{className:"left"},n.createElement(g,{mixedColor:r}))),n.createElement("div",{className:"flex"},n.createElement("div",{className:"right"},G.map((function(e){var t,r=(t=e,a.indexOf(t)>-1?o===P.correct?w.correctOutline:o===P.incorrect?w.incorrectOutline:w.defaultOutline:"none");return console.log(r),n.createElement(f,{key:"color-".concat(e),outline:r,colorMixing:e,onClick:u})})))))):n.createElement(h,{onClick:e.startNewGame}),n.createElement(O,{gameStatus:c,status:o,correctNum:s})))))};_.propTypes={startNewGame:s().func.isRequired};const Q=_;function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const z=function(){var e,t,r=(e=(0,n.useState)(1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];return n.createElement("div",null,n.createElement(l,null),n.createElement(a.F0,null,n.createElement(i,{path:"/color-mixing"}),n.createElement(Q,{path:"/color-mixing/game",key:o,startNewGame:function(){return c(o+1)}})))};(0,o.render)(n.createElement(z,null),document.getElementById("content"))}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n](o,o.exports,r),o.loaded=!0,o.exports}r.m=e,r.x=e=>{},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[531,983]],n=e=>{},o=(o,a)=>{for(var l,i,[c,s,u,m]=a,d=0,f=[];d<c.length;d++)i=c[d],r.o(e,i)&&e[i]&&f.push(e[i][0]),e[i]=0;for(l in s)r.o(s,l)&&(r.m[l]=s[l]);for(u&&u(r),o&&o(a);f.length;)f.shift()();return m&&t.push.apply(t,m),n()},a=self.webpackChunkcolor_mixing=self.webpackChunkcolor_mixing||[];function l(){for(var n,o=0;o<t.length;o++){for(var a=t[o],l=!0,i=1;i<a.length;i++){var c=a[i];0!==e[c]&&(l=!1)}l&&(t.splice(o--,1),n=r(r.s=a[0]))}return 0===t.length&&(r.x(),r.x=e=>{}),n}a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a));var i=r.x;r.x=()=>(r.x=i||(e=>{}),(n=l)())})(),r.x()})();
//# sourceMappingURL=main.d6cfe7dcd6e4decbca50.js.map