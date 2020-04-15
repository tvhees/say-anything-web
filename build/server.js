!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t){e.exports=require("xstate")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("socket.io")},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(2),c=n.n(i),u=n(3),s=n.n(u),a={message:"message",clientConnect:"connect",clientDisconnect:"disconnect"},l={state:"GAME_STATE",start:"GAME_START"},f={join:"PLAYER_JOIN",leave:"PLAYER_LEAVE",setName:"PLAYER_NAME",setAnswer:"PLAYER_ANSWER"},y=n(0);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}var g=function(e){return Object.keys(e).length};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=Object(y.assign)({hostId:function(e,t){var n=e.players,r=e.hostId,o=t.id;return g(n)?r:o}}),h=Object(y.assign)({players:function(e,t){return O({},e.players,j({},t.id,{name:t.name}))}}),P=Object(y.assign)({players:function(e,t){return function(e,t){e[t];return b(e,[t].map(d))}(e.players,t.id)}}),E=function(e){return Object(y.assign)({isReady:e})},_={initial:"count players",context:{isReady:!1},states:{"count players":{on:{"":[{target:"ready",cond:function(e){var t=e.players;return g(t)>=4}},{target:"waiting"}]}},waiting:{entry:[E(!1)],on:{PLAYER_NAME:{target:"count players",actions:[v,h]},PLAYER_LEAVE:{target:"count players",actions:[P]}}},ready:{entry:[E(!0)],on:{PLAYER_LEAVE:{target:"count players",actions:[P]}}}}},S={initial:"judge pick question",context:{judgeId:!1},states:{"judge pick question":{entry:[Object(y.assign)({judgeId:function(e){var t=e.players;return Object.keys(t)[0]}}),Object(y.assign)({questions:{c1q1:"What's the best video game of all time?",c1q2:"What's the best excuse for forgetting your anniversary?",c1q3:"What would be the coolest name for a band?",c1q4:"What would be the worst thing to scream during church?",c1q5:"There's no crying in ________!"}})]},"write answers":{}}},w={initial:"lobby",context:{players:{},hostId:!1},states:{lobby:O({on:{GAME_START:"game"}},_),game:O({},S)}},A=Object(y.Machine)(w),x=Object(y.interpret)(A);var R={initialise:function(e){var t={};x.start().onChange((function(e){t=e})),e.on(a.clientConnect,(function(e){e.emit(a.message,"User Connected"),e.on(a.clientDisconnect,(function(){return x.send(f.leave,{id:e.id})})),e.on(f.setName,(function(t){return x.send(f.setName,{id:e.id,name:t})})),e.on(l.start,(function(){return x.send(l.start,{id:e.id})}))})),setInterval((function(){e.sockets.emit(l.state,t)}),1e3/60)}},q=o()(),T=c.a.Server(q),L=s()(T),M=process.env.PORT||8080;q.set("port",M),q.use(o.a.static("build")),T.listen(M,(function(){return console.log("Starting server on port "+M)})),R.initialise(L)}]);