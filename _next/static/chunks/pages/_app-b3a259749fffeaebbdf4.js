(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},9756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,{Z:function(){return r}})},8679:function(t,e,n){"use strict";var r=n(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function u(t){return r.isMemo(t)?c:i[t.$$typeof]||o}i[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[r.Memo]=c;var f=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;t.exports=function t(e,n,r){if("string"!==typeof n){if(y){var o=d(n);o&&o!==y&&t(e,o,r)}var c=s(n);l&&(c=c.concat(l(n)));for(var i=u(e),v=u(n),m=0;m<c.length;++m){var h=c[m];if(!a[h]&&(!r||!r[h])&&(!v||!v[h])&&(!i||!i[h])){var b=p(n,h);try{f(e,h,b)}catch(g){}}}}return e}},6103:function(t,e){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function S(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case s:case l:case a:case i:case c:case d:return t;default:switch(t=t&&t.$$typeof){case f:case p:case m:case v:case u:return t;default:return e}}case o:return e}}}function O(t){return S(t)===l}e.AsyncMode=s,e.ConcurrentMode=l,e.ContextConsumer=f,e.ContextProvider=u,e.Element=r,e.ForwardRef=p,e.Fragment=a,e.Lazy=m,e.Memo=v,e.Portal=o,e.Profiler=i,e.StrictMode=c,e.Suspense=d,e.isAsyncMode=function(t){return O(t)||S(t)===s},e.isConcurrentMode=O,e.isContextConsumer=function(t){return S(t)===f},e.isContextProvider=function(t){return S(t)===u},e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===r},e.isForwardRef=function(t){return S(t)===p},e.isFragment=function(t){return S(t)===a},e.isLazy=function(t){return S(t)===m},e.isMemo=function(t){return S(t)===v},e.isPortal=function(t){return S(t)===o},e.isProfiler=function(t){return S(t)===i},e.isStrictMode=function(t){return S(t)===c},e.isSuspense=function(t){return S(t)===d},e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===a||t===l||t===i||t===c||t===d||t===y||"object"===typeof t&&null!==t&&(t.$$typeof===m||t.$$typeof===v||t.$$typeof===u||t.$$typeof===f||t.$$typeof===p||t.$$typeof===b||t.$$typeof===g||t.$$typeof===w||t.$$typeof===h)},e.typeOf=S},1296:function(t,e,n){"use strict";t.exports=n(6103)},2556:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e),n.d(e,{default:function(){return Vt}});var o=n(5893),a=(n(2702),n(4494)),c=n(7757),i=n.n(c);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var l="function"===typeof Symbol&&Symbol.observable||"@@observable",p=function(){return Math.random().toString(36).substring(7).split("").join(".")},d={INIT:"@@redux/INIT"+p(),REPLACE:"@@redux/REPLACE"+p(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+p()}};function y(t){if("object"!==typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function v(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}var m=function(t){return"@@redux-saga/"+t},h=m("CANCEL_PROMISE"),b=m("CHANNEL_END"),g=m("IO"),w=m("MATCH"),S=m("MULTICAST"),O=m("SAGA_ACTION"),E=m("SELF_CANCELLATION"),P=m("TASK"),j=m("TASK_CANCEL"),C=m("TERMINATE"),x=m("LOCATION"),A=n(2122),T=n(9756),N=function(t){return"function"===typeof t},M=function(t){return"string"===typeof t},k=Array.isArray,_=function(t){return t&&N(t.then)},R=function(t){return t&&N(t.next)&&N(t.throw)},D=function(t){return Boolean(t)&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype};var I=function(t){return function(){return t}}(!0),$=function(){};var L=function(t){return t};"function"===typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var F=function(t,e){(0,A.Z)(t,e),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(e).forEach((function(n){t[n]=e[n]}))};function B(t,e){var n=t.indexOf(e);n>=0&&t.splice(n,1)}var q=function(t){throw t},W=function(t){return{value:t,done:!0}};function Z(t,e,n){void 0===e&&(e=q),void 0===n&&(n="iterator");var r={meta:{name:n},next:t,throw:e,return:W,isSagaIterator:!0};return"undefined"!==typeof Symbol&&(r[Symbol.iterator]=function(){return r}),r}function H(t,e){var n=e.sagaStack;console.error(t),console.error(n)}var U=function(t){return Array.apply(null,new Array(t))},K=function(t){return function(e){return t(Object.defineProperty(e,O,{value:!0}))}},Q=function(t){return t===C},G=function(t){return t===j},z=function(t){return Q(t)||G(t)};function X(t,e){var n=Object.keys(t),r=n.length;var o,a=0,c=k(t)?U(r):{},i={};return n.forEach((function(t){var n=function(n,i){o||(i||z(n)?(e.cancel(),e(n,i)):(c[t]=n,++a===r&&(o=!0,e(c))))};n.cancel=$,i[t]=n})),e.cancel=function(){o||(o=!0,n.forEach((function(t){return i[t].cancel()})))},i}function J(t){return{name:t.name||"anonymous",location:V(t)}}function V(t){return t[x]}function Y(t,e){void 0===t&&(t=10);var n=new Array(t),r=0,o=0,a=0,c=function(e){n[o]=e,o=(o+1)%t,r++},i=function(){if(0!=r){var e=n[a];return n[a]=null,r--,a=(a+1)%t,e}},u=function(){for(var t=[];r;)t.push(i());return t};return{isEmpty:function(){return 0==r},put:function(i){var f;if(r<t)c(i);else switch(e){case 1:throw new Error("Channel's Buffer overflow!");case 3:n[o]=i,a=o=(o+1)%t;break;case 4:f=2*t,n=u(),r=n.length,o=n.length,a=0,n.length=f,t=f,c(i)}},take:i,flush:u}}var tt=function(t){return Y(t,4)};function et(){var t={};return t.promise=new Promise((function(e,n){t.resolve=e,t.reject=n})),t}var nt=et,rt=[],ot=0;function at(t){try{ut(),t()}finally{ft()}}function ct(t){rt.push(t),ot||(ut(),st())}function it(t){try{return ut(),t()}finally{st()}}function ut(){ot++}function ft(){ot--}function st(){var t;for(ft();!ot&&void 0!==(t=rt.shift());)at(t)}var lt=function(t){return function(e){return t.some((function(t){return mt(t)(e)}))}},pt=function(t){return function(e){return t(e)}},dt=function(t){return function(e){return e.type===String(t)}},yt=function(t){return function(e){return e.type===t}},vt=function(){return I};function mt(t){var e,n="*"===t?vt:M(t)?dt:k(t)?lt:N(e=t)&&e.hasOwnProperty("toString")?dt:N(t)?pt:D(t)?yt:null;if(null===n)throw new Error("invalid pattern: "+t);return n(t)}var ht={type:b},bt=function(t){return t&&t.type===b};function gt(t){void 0===t&&(t=tt());var e=!1,n=[];return{take:function(r){e&&t.isEmpty()?r(ht):t.isEmpty()?(n.push(r),r.cancel=function(){B(n,r)}):r(t.take())},put:function(r){if(!e){if(0===n.length)return t.put(r);n.shift()(r)}},flush:function(n){e&&t.isEmpty()?n(ht):n(t.flush())},close:function(){if(!e){e=!0;var t=n;n=[];for(var r=0,o=t.length;r<o;r++){(0,t[r])(ht)}}}}}function wt(){var t=function(){var t,e=!1,n=[],r=n,o=function(){r===n&&(r=n.slice())},a=function(){e=!0;var t=n=r;r=[],t.forEach((function(t){t(ht)}))};return(t={})[S]=!0,t.put=function(t){if(!e)if(bt(t))a();else for(var o=n=r,c=0,i=o.length;c<i;c++){var u=o[c];u[w](t)&&(u.cancel(),u(t))}},t.take=function(t,n){void 0===n&&(n=vt),e?t(ht):(t[w]=n,o(),r.push(t),t.cancel=function(t){var e=!1;return function(){e||(e=!0,t())}}((function(){o(),B(r,t)})))},t.close=a,t}(),e=t.put;return t.put=function(t){t[O]?e(t):ct((function(){e(t)}))},t}function St(t,e){var n=t[h];N(n)&&(e.cancel=n),t.then(e,(function(t){e(t,!0)}))}var Ot,Et=0,Pt=function(){return++Et};function jt(t){t.isRunning()&&t.cancel()}var Ct=((Ot={}).TAKE=function(t,e,n){var r,o=e.channel,a=void 0===o?t.channel:o,c=e.pattern,i=e.maybe,u=function(t){t instanceof Error?n(t,!0):!bt(t)||i?n(t):n(C)};try{a.take(u,null!==(r=c)&&void 0!==r?mt(c):null)}catch(f){return void n(f,!0)}n.cancel=u.cancel},Ot.PUT=function(t,e,n){var r=e.channel,o=e.action,a=e.resolve;ct((function(){var e;try{e=(r?r.put:t.dispatch)(o)}catch(c){return void n(c,!0)}a&&_(e)?St(e,n):n(e)}))},Ot.ALL=function(t,e,n,r){var o=r.digestEffect,a=Et,c=Object.keys(e);if(0!==c.length){var i=X(e,n);c.forEach((function(t){o(e[t],a,i[t],t)}))}else n(k(e)?[]:{})},Ot.RACE=function(t,e,n,r){var o=r.digestEffect,a=Et,c=Object.keys(e),i=k(e)?U(c.length):{},u={},f=!1;c.forEach((function(t){var e=function(e,r){f||(r||z(e)?(n.cancel(),n(e,r)):(n.cancel(),f=!0,i[t]=e,n(i)))};e.cancel=$,u[t]=e})),n.cancel=function(){f||(f=!0,c.forEach((function(t){return u[t].cancel()})))},c.forEach((function(t){f||o(e[t],a,u[t],t)}))},Ot.CALL=function(t,e,n,r){var o=e.context,a=e.fn,c=e.args,i=r.task;try{var u=a.apply(o,c);if(_(u))return void St(u,n);if(R(u))return void It(t,u,i.context,Et,J(a),!1,n);n(u)}catch(f){n(f,!0)}},Ot.CPS=function(t,e,n){var r=e.context,o=e.fn,a=e.args;try{var c=function(t,e){var r;null===(r=t)||void 0===r?n(e):n(t,!0)};o.apply(r,a.concat(c)),c.cancel&&(n.cancel=c.cancel)}catch(i){n(i,!0)}},Ot.FORK=function(t,e,n,r){var o=e.context,a=e.fn,c=e.args,i=e.detached,u=r.task,f=function(t){var e=t.context,n=t.fn,r=t.args;try{var o=n.apply(e,r);if(R(o))return o;var a=!1;return Z((function(t){return a?{value:t,done:!0}:(a=!0,{value:o,done:!_(o)})}))}catch(c){return Z((function(){throw c}))}}({context:o,fn:a,args:c}),s=function(t,e){return t.isSagaIterator?{name:t.meta.name}:J(e)}(f,a);it((function(){var e=It(t,f,u.context,Et,s,i,void 0);i?n(e):e.isRunning()?(u.queue.addTask(e),n(e)):e.isAborted()?u.queue.abort(e.error()):n(e)}))},Ot.JOIN=function(t,e,n,r){var o=r.task,a=function(t,e){if(t.isRunning()){var n={task:o,cb:e};e.cancel=function(){t.isRunning()&&B(t.joiners,n)},t.joiners.push(n)}else t.isAborted()?e(t.error(),!0):e(t.result())};if(k(e)){if(0===e.length)return void n([]);var c=X(e,n);e.forEach((function(t,e){a(t,c[e])}))}else a(e,n)},Ot.CANCEL=function(t,e,n,r){var o=r.task;e===E?jt(o):k(e)?e.forEach(jt):jt(e),n()},Ot.SELECT=function(t,e,n){var r=e.selector,o=e.args;try{n(r.apply(void 0,[t.getState()].concat(o)))}catch(a){n(a,!0)}},Ot.ACTION_CHANNEL=function(t,e,n){var r=e.pattern,o=gt(e.buffer),a=mt(r),c=function e(n){bt(n)||t.channel.take(e,a),o.put(n)},i=o.close;o.close=function(){c.cancel(),i()},t.channel.take(c,a),n(o)},Ot.CANCELLED=function(t,e,n,r){n(r.task.isCancelled())},Ot.FLUSH=function(t,e,n){e.flush(n)},Ot.GET_CONTEXT=function(t,e,n,r){n(r.task.context[e])},Ot.SET_CONTEXT=function(t,e,n,r){var o=r.task;F(o.context,e),n()},Ot);function xt(t,e){return t+"?"+e}function At(t){var e=t.name,n=t.location;return n?e+"  "+xt(n.fileName,n.lineNumber):e}function Tt(t){var e=function(t,e){var n;return(n=[]).concat.apply(n,e.map(t))}((function(t){return t.cancelledTasks}),t);return e.length?["Tasks cancelled due to error:"].concat(e).join("\n"):""}var Nt=null,Mt=[],kt=function(t){t.crashedEffect=Nt,Mt.push(t)},_t=function(){Nt=null,Mt.length=0},Rt=function(){var t=Mt[0],e=Mt.slice(1),n=t.crashedEffect?function(t){var e=V(t);return e?e.code+"  "+xt(e.fileName,e.lineNumber):""}(t.crashedEffect):null;return["The above error occurred in task "+At(t.meta)+(n?" \n when executing effect "+n:"")].concat(e.map((function(t){return"    created by "+At(t.meta)})),[Tt(Mt)]).join("\n")};function Dt(t,e,n,r,o,a,c){var i;void 0===c&&(c=$);var u,f,s=0,l=null,p=[],d=Object.create(n),y=function(t,e,n){var r,o=[],a=!1;function c(t){e(),u(),n(t,!0)}function i(e){o.push(e),e.cont=function(i,u){a||(B(o,e),e.cont=$,u?c(i):(e===t&&(r=i),o.length||(a=!0,n(r))))}}function u(){a||(a=!0,o.forEach((function(t){t.cont=$,t.cancel()})),o=[])}return i(t),{addTask:i,cancelAll:u,abort:c,getTasks:function(){return o}}}(e,(function(){p.push.apply(p,y.getTasks().map((function(t){return t.meta.name})))}),v);function v(e,n){if(n){if(s=2,kt({meta:o,cancelledTasks:p}),m.isRoot){var r=Rt();_t(),t.onError(e,{sagaStack:r})}f=e,l&&l.reject(e)}else e===j?s=1:1!==s&&(s=3),u=e,l&&l.resolve(e);m.cont(e,n),m.joiners.forEach((function(t){t.cb(e,n)})),m.joiners=null}var m=((i={})[P]=!0,i.id=r,i.meta=o,i.isRoot=a,i.context=d,i.joiners=[],i.queue=y,i.cancel=function(){0===s&&(s=1,y.cancelAll(),v(j,!1))},i.cont=c,i.end=v,i.setContext=function(t){F(d,t)},i.toPromise=function(){return l||(l=nt(),2===s?l.reject(f):0!==s&&l.resolve(u)),l.promise},i.isRunning=function(){return 0===s},i.isCancelled=function(){return 1===s||0===s&&1===e.status},i.isAborted=function(){return 2===s},i.result=function(){return u},i.error=function(){return f},i);return m}function It(t,e,n,r,o,a,c){var i=t.finalizeRunEffect((function(e,n,r){if(_(e))St(e,r);else if(R(e))It(t,e,f.context,n,o,!1,r);else if(e&&e[g]){(0,Ct[e.type])(t,e.payload,r,s)}else r(e)}));l.cancel=$;var u={meta:o,cancel:function(){0===u.status&&(u.status=1,l(j))},status:0},f=Dt(t,u,n,r,o,a,c),s={task:f,digestEffect:p};return c&&(c.cancel=f.cancel),l(),f;function l(t,n){try{var o;n?(o=e.throw(t),_t()):G(t)?(u.status=1,l.cancel(),o=N(e.return)?e.return(j):{done:!0,value:j}):o=Q(t)?N(e.return)?e.return():{done:!0}:e.next(t),o.done?(1!==u.status&&(u.status=3),u.cont(o.value)):p(o.value,r,l)}catch(a){if(1===u.status)throw a;u.status=2,u.cont(a,!0)}}function p(e,n,r,o){void 0===o&&(o="");var a,c=Pt();function u(n,o){a||(a=!0,r.cancel=$,t.sagaMonitor&&(o?t.sagaMonitor.effectRejected(c,n):t.sagaMonitor.effectResolved(c,n)),o&&function(t){Nt=t}(e),r(n,o))}t.sagaMonitor&&t.sagaMonitor.effectTriggered({effectId:c,parentEffectId:n,label:o,effect:e}),u.cancel=$,r.cancel=function(){a||(a=!0,u.cancel(),u.cancel=$,t.sagaMonitor&&t.sagaMonitor.effectCancelled(c))},i(e,c,u)}}function $t(t,e){var n=t.channel,r=void 0===n?wt():n,o=t.dispatch,a=t.getState,c=t.context,i=void 0===c?{}:c,u=t.sagaMonitor,f=t.effectMiddlewares,s=t.onError,l=void 0===s?H:s;for(var p=arguments.length,d=new Array(p>2?p-2:0),y=2;y<p;y++)d[y-2]=arguments[y];var m=e.apply(void 0,d);var h,b=Pt();if(u&&(u.rootSagaStarted=u.rootSagaStarted||$,u.effectTriggered=u.effectTriggered||$,u.effectResolved=u.effectResolved||$,u.effectRejected=u.effectRejected||$,u.effectCancelled=u.effectCancelled||$,u.actionDispatched=u.actionDispatched||$,u.rootSagaStarted({effectId:b,saga:e,args:d})),f){var g=v.apply(void 0,f);h=function(t){return function(e,n,r){return g((function(e){return t(e,n,r)}))(e)}}}else h=L;var w={channel:r,dispatch:K(o),getState:a,sagaMonitor:u,onError:l,finalizeRunEffect:h};return it((function(){var t=It(w,m,i,b,J(e),!0,void 0);return u&&u.effectResolved(b,t),t}))}var Lt=function(t){var e,n=void 0===t?{}:t,r=n.context,o=void 0===r?{}:r,a=n.channel,c=void 0===a?wt():a,i=n.sagaMonitor,u=(0,T.Z)(n,["context","channel","sagaMonitor"]);function f(t){var n=t.getState,r=t.dispatch;return e=$t.bind(null,(0,A.Z)({},u,{context:o,channel:c,dispatch:r,getState:n,sagaMonitor:i})),function(t){return function(e){i&&i.actionDispatched&&i.actionDispatched(e);var n=t(e);return c.put(e),n}}}return f.run=function(){return e.apply(void 0,arguments)},f.setContext=function(t){F(o,t)},f};function Ft(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Bt(t){return function(t){if(Array.isArray(t))return Ft(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return Ft(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ft(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var qt=n(448);function Wt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Zt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Wt(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Ht={companyList:[{id:1,name:"WazirX",website:"https://careers.wazirx.com/jobs",domain:"Fintech",logo:"https://media-exp3.licdn.com/dms/image/C4E0BAQHfjTMcCunuOw/company-logo_200_200/0/1623824571975?e=1632960000&v=beta&t=_pCbSyYClLIXcJlTI7ohW5Z1bqVMCqPlmyo5vnTdRwU",location:"Mumbai, Maharashtra"},{id:2,name:"Groww",website:"https://groww.in/about-us",domain:"Fintech",logo:"https://media-exp3.licdn.com/dms/image/C4D0BAQHSl3byAWi9ow/company-logo_200_200/0/1519952564040?e=1632960000&v=beta&t=wtQEncFEZ1pMtFFPNaHb9hGd7UyZ5trVXBAkd2p0v1I",location:"Bangalore, Karnataka"},{id:3,name:"HackerEarth",website:"https://hackerearthjobs.recruiterbox.com/",domain:"Software",logo:"https://media-exp3.licdn.com/dms/image/C4D0BAQHgoMowHLH6Rw/company-logo_200_200/0/1622540336050?e=1632960000&v=beta&t=uPB6QAiQxl9kgeuLpTNFfJXRsuacPlGfgwTk82Pd2KA",location:"Bangalore, Karnataka"},{id:4,name:"Zebpay",website:"https://zebpay.com/careers/",domain:"Fintech",logo:"https://media-exp3.licdn.com/dms/image/C560BAQFsTTpZZeQAtg/company-logo_200_200/0/1583130938756?e=1632960000&v=beta&t=ZSolQDLUlpodIlrxADKJZdeujcbJyqSXXGsOUP1eZ04",location:"Ahmedabad, Gujarat"},{id:5,name:"Recko Inc.",website:"https://recko-team.freshteam.com/jobs",domain:"Fintech",logo:"https://media-exp3.licdn.com/dms/image/C560BAQFkP-cSbCe28A/company-logo_200_200/0/1604400287450?e=1632960000&v=beta&t=E-W8I9pSx7wViKD9--ICAg00gsPKbe6dCTxiW2AxMDI",location:"Bengaluru, Karnataka"},{id:6,name:"Treebo Hotels",website:"https://www.linkedin.com/company/treebohotels/jobs/?originalSubdomain=in",domain:"Hospitality",logo:"https://media-exp3.licdn.com/dms/image/C4E0BAQH-f7GkG6f9ww/company-logo_200_200/0/1601487380882?e=1632960000&v=beta&t=imrXmfWgnGLx3Yk-iFVhWppaq1UUygE05aSbJtDnrn8",location:"Bengaluru, Karnataka"},{id:7,name:"PharmEasy",website:"https://pharmeasy.in/careers/",domain:"Healthtech",logo:"https://media-exp3.licdn.com/dms/image/C510BAQH4-n66jA6urw/company-logo_200_200/0/1552381250138?e=1632960000&v=beta&t=WQFtJHvUAYP_fKqesyNDRL_DRfb-eW7A8rgUOqKfmsc",location:"Mumbai, Maharashtra"},{id:8,name:"Upstox",website:"https://jobs.lever.co/upstox",domain:"Fintech",logo:"https://media-exp3.licdn.com/dms/image/C510BAQGQMzN22PJz1g/company-logo_200_200/0/1552649200386?e=1632960000&v=beta&t=ZEGcdRrXhgIRjWTr7MEWdWNvfiWkPUUWeXqTevLBg3o",location:"Mumbai, Maharashtra"},{id:9,name:"Dream11",website:"https://jobs.lever.co/dreamsports",domain:"Gametech",logo:"https://media-exp3.licdn.com/dms/image/C4D0BAQHNFdSdu8chdQ/company-logo_200_200/0/1519890073011?e=1632960000&v=beta&t=17055R4HwDSB4JxnkhPiq0GO_Vaov24IdySPAIdPBt0",location:"Mumbai, Maharashtra"}],saved:[]},Ut=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case qt.l:var n=e.data;return Zt(Zt({},t),{},{saved:[].concat(Bt(t.saved),[n])});case qt.r:var r=e.data,o=t.saved.filter((function(t){return t.id!==r.id}));return Zt(Zt({},t),{},{saved:o});default:return t}},Kt=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})),Qt=function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var o=e[r];0,"function"===typeof t[o]&&(n[o]=t[o])}var a,c=Object.keys(n);try{!function(t){Object.keys(t).forEach((function(e){var n=t[e];if("undefined"===typeof n(void 0,{type:d.INIT}))throw new Error(s(12));if("undefined"===typeof n(void 0,{type:d.PROBE_UNKNOWN_ACTION()}))throw new Error(s(13))}))}(n)}catch(i){a=i}return function(t,e){if(void 0===t&&(t={}),a)throw a;for(var r=!1,o={},i=0;i<c.length;i++){var u=c[i],f=n[u],l=t[u],p=f(l,e);if("undefined"===typeof p){e&&e.type;throw new Error(s(14))}o[u]=p,r=r||p!==l}return(r=r||c.length!==Object.keys(t).length)?o:t}}({react:Ut}),Gt=Lt(),zt=function t(e,n,r){var o;if("function"===typeof n&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error(s(0));if("function"===typeof n&&"undefined"===typeof r&&(r=n,n=void 0),"undefined"!==typeof r){if("function"!==typeof r)throw new Error(s(1));return r(t)(e,n)}if("function"!==typeof e)throw new Error(s(2));var a=e,c=n,i=[],u=i,f=!1;function p(){u===i&&(u=i.slice())}function v(){if(f)throw new Error(s(3));return c}function m(t){if("function"!==typeof t)throw new Error(s(4));if(f)throw new Error(s(5));var e=!0;return p(),u.push(t),function(){if(e){if(f)throw new Error(s(6));e=!1,p();var n=u.indexOf(t);u.splice(n,1),i=null}}}function h(t){if(!y(t))throw new Error(s(7));if("undefined"===typeof t.type)throw new Error(s(8));if(f)throw new Error(s(9));try{f=!0,c=a(c,t)}finally{f=!1}for(var e=i=u,n=0;n<e.length;n++){(0,e[n])()}return t}function b(t){if("function"!==typeof t)throw new Error(s(10));a=t,h({type:d.REPLACE})}function g(){var t,e=m;return(t={subscribe:function(t){if("object"!==typeof t||null===t)throw new Error(s(11));function n(){t.next&&t.next(v())}return n(),{unsubscribe:e(n)}}})[l]=function(){return this},t}return h({type:d.INIT}),(o={dispatch:h,subscribe:m,getState:v,replaceReducer:b})[l]=g,o}(Qt,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(){var n=t.apply(void 0,arguments),r=function(){throw new Error(s(15))},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},a=e.map((function(t){return t(o)}));return r=v.apply(void 0,a)(n.dispatch),f(f({},n),{},{dispatch:r})}}}(Gt));function Xt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Jt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Xt(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Xt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}Gt.run(Kt);var Vt=function(t){var e=t.Component,n=t.pageProps;return(0,o.jsx)(a.zt,{store:zt,children:(0,o.jsx)(e,Jt({},n))})}},448:function(t,e,n){"use strict";n.d(e,{l:function(){return r},r:function(){return o}});var r="ADD_TO_SAVE",o="DELETE_FROM_SAVE"},1780:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2556)}])},2702:function(){},4494:function(t,e,n){"use strict";n.d(e,{zt:function(){return s},$j:function(){return F}});var r=n(7294),o=(n(5697),r.createContext(null));var a=function(t){t()},c=function(){return a},i={notify:function(){}};var u=function(){function t(t,e){this.store=t,this.parentSub=e,this.unsubscribe=null,this.listeners=i,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var e=t.prototype;return e.addNestedSub=function(t){return this.trySubscribe(),this.listeners.subscribe(t)},e.notifyNestedSubs=function(){this.listeners.notify()},e.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},e.isSubscribed=function(){return Boolean(this.unsubscribe)},e.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var t=c(),e=null,n=null;return{clear:function(){e=null,n=null},notify:function(){t((function(){for(var t=e;t;)t.callback(),t=t.next}))},get:function(){for(var t=[],n=e;n;)t.push(n),n=n.next;return t},subscribe:function(t){var r=!0,o=n={callback:t,next:null,prev:n};return o.prev?o.prev.next=o:e=o,function(){r&&null!==e&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}())},e.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=i)},t}(),f="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;var s=function(t){var e=t.store,n=t.context,a=t.children,c=(0,r.useMemo)((function(){var t=new u(e);return t.onStateChange=t.notifyNestedSubs,{store:e,subscription:t}}),[e]),i=(0,r.useMemo)((function(){return e.getState()}),[e]);f((function(){var t=c.subscription;return t.trySubscribe(),i!==e.getState()&&t.notifyNestedSubs(),function(){t.tryUnsubscribe(),t.onStateChange=null}}),[c,i]);var s=n||o;return r.createElement(s.Provider,{value:c},a)},l=n(2122),p=n(9756),d=n(8679),y=n.n(d),v=n(2973),m=[],h=[null,null];function b(t,e){var n=t[1];return[e.payload,n+1]}function g(t,e,n){f((function(){return t.apply(void 0,e)}),n)}function w(t,e,n,r,o,a,c){t.current=r,e.current=o,n.current=!1,a.current&&(a.current=null,c())}function S(t,e,n,r,o,a,c,i,u,f){if(t){var s=!1,l=null,p=function(){if(!s){var t,n,p=e.getState();try{t=r(p,o.current)}catch(d){n=d,l=d}n||(l=null),t===a.current?c.current||u():(a.current=t,i.current=t,c.current=!0,f({type:"STORE_UPDATED",payload:{error:n}}))}};n.onStateChange=p,n.trySubscribe(),p();return function(){if(s=!0,n.tryUnsubscribe(),n.onStateChange=null,l)throw l}}}var O=function(){return[null,0]};function E(t,e){void 0===e&&(e={});var n=e,a=n.getDisplayName,c=void 0===a?function(t){return"ConnectAdvanced("+t+")"}:a,i=n.methodName,f=void 0===i?"connectAdvanced":i,s=n.renderCountProp,d=void 0===s?void 0:s,E=n.shouldHandleStateChanges,P=void 0===E||E,j=n.storeKey,C=void 0===j?"store":j,x=(n.withRef,n.forwardRef),A=void 0!==x&&x,T=n.context,N=void 0===T?o:T,M=(0,p.Z)(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]),k=N;return function(e){var n=e.displayName||e.name||"Component",o=c(n),a=(0,l.Z)({},M,{getDisplayName:c,methodName:f,renderCountProp:d,shouldHandleStateChanges:P,storeKey:C,displayName:o,wrappedComponentName:n,WrappedComponent:e}),i=M.pure;var s=i?r.useMemo:function(t){return t()};function E(n){var o=(0,r.useMemo)((function(){var t=n.reactReduxForwardedRef,e=(0,p.Z)(n,["reactReduxForwardedRef"]);return[n.context,t,e]}),[n]),c=o[0],i=o[1],f=o[2],d=(0,r.useMemo)((function(){return c&&c.Consumer&&(0,v.isContextConsumer)(r.createElement(c.Consumer,null))?c:k}),[c,k]),y=(0,r.useContext)(d),E=Boolean(n.store)&&Boolean(n.store.getState)&&Boolean(n.store.dispatch);Boolean(y)&&Boolean(y.store);var j=E?n.store:y.store,C=(0,r.useMemo)((function(){return function(e){return t(e.dispatch,a)}(j)}),[j]),x=(0,r.useMemo)((function(){if(!P)return h;var t=new u(j,E?null:y.subscription),e=t.notifyNestedSubs.bind(t);return[t,e]}),[j,E,y]),A=x[0],T=x[1],N=(0,r.useMemo)((function(){return E?y:(0,l.Z)({},y,{subscription:A})}),[E,y,A]),M=(0,r.useReducer)(b,m,O),_=M[0][0],R=M[1];if(_&&_.error)throw _.error;var D=(0,r.useRef)(),I=(0,r.useRef)(f),$=(0,r.useRef)(),L=(0,r.useRef)(!1),F=s((function(){return $.current&&f===I.current?$.current:C(j.getState(),f)}),[j,_,f]);g(w,[I,D,L,f,F,$,T]),g(S,[P,j,A,C,I,D,L,$,T,R],[j,A,C]);var B=(0,r.useMemo)((function(){return r.createElement(e,(0,l.Z)({},F,{ref:i}))}),[i,e,F]);return(0,r.useMemo)((function(){return P?r.createElement(d.Provider,{value:N},B):B}),[d,B,N])}var j=i?r.memo(E):E;if(j.WrappedComponent=e,j.displayName=E.displayName=o,A){var x=r.forwardRef((function(t,e){return r.createElement(j,(0,l.Z)({},t,{reactReduxForwardedRef:e}))}));return x.displayName=o,x.WrappedComponent=e,y()(x,e)}return y()(j,e)}}function P(t,e){return t===e?0!==t||0!==e||1/t===1/e:t!==t&&e!==e}function j(t,e){if(P(t,e))return!0;if("object"!==typeof t||null===t||"object"!==typeof e||null===e)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(e,n[o])||!P(t[n[o]],e[n[o]]))return!1;return!0}function C(t){return function(e,n){var r=t(e,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function x(t){return null!==t.dependsOnOwnProps&&void 0!==t.dependsOnOwnProps?Boolean(t.dependsOnOwnProps):1!==t.length}function A(t,e){return function(e,n){n.displayName;var r=function(t,e){return r.dependsOnOwnProps?r.mapToProps(t,e):r.mapToProps(t)};return r.dependsOnOwnProps=!0,r.mapToProps=function(e,n){r.mapToProps=t,r.dependsOnOwnProps=x(t);var o=r(e,n);return"function"===typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=x(o),o=r(e,n)),o},r}}var T=[function(t){return"function"===typeof t?A(t):void 0},function(t){return t?void 0:C((function(t){return{dispatch:t}}))},function(t){return t&&"object"===typeof t?C((function(e){return function(t,e){var n={},r=function(r){var o=t[r];"function"===typeof o&&(n[r]=function(){return e(o.apply(void 0,arguments))})};for(var o in t)r(o);return n}(t,e)})):void 0}];var N=[function(t){return"function"===typeof t?A(t):void 0},function(t){return t?void 0:C((function(){return{}}))}];function M(t,e,n){return(0,l.Z)({},n,t,e)}var k=[function(t){return"function"===typeof t?function(t){return function(e,n){n.displayName;var r,o=n.pure,a=n.areMergedPropsEqual,c=!1;return function(e,n,i){var u=t(e,n,i);return c?o&&a(u,r)||(r=u):(c=!0,r=u),r}}}(t):void 0},function(t){return t?void 0:function(){return M}}];function _(t,e,n,r){return function(o,a){return n(t(o,a),e(r,a),a)}}function R(t,e,n,r,o){var a,c,i,u,f,s=o.areStatesEqual,l=o.areOwnPropsEqual,p=o.areStatePropsEqual,d=!1;function y(o,d){var y=!l(d,c),v=!s(o,a);return a=o,c=d,y&&v?(i=t(a,c),e.dependsOnOwnProps&&(u=e(r,c)),f=n(i,u,c)):y?(t.dependsOnOwnProps&&(i=t(a,c)),e.dependsOnOwnProps&&(u=e(r,c)),f=n(i,u,c)):v?function(){var e=t(a,c),r=!p(e,i);return i=e,r&&(f=n(i,u,c)),f}():f}return function(o,s){return d?y(o,s):(i=t(a=o,c=s),u=e(r,c),f=n(i,u,c),d=!0,f)}}function D(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,o=e.initMergeProps,a=(0,p.Z)(e,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),c=n(t,a),i=r(t,a),u=o(t,a);return(a.pure?R:_)(c,i,u,t,a)}function I(t,e,n){for(var r=e.length-1;r>=0;r--){var o=e[r](t);if(o)return o}return function(e,r){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function $(t,e){return t===e}function L(t){var e=void 0===t?{}:t,n=e.connectHOC,r=void 0===n?E:n,o=e.mapStateToPropsFactories,a=void 0===o?N:o,c=e.mapDispatchToPropsFactories,i=void 0===c?T:c,u=e.mergePropsFactories,f=void 0===u?k:u,s=e.selectorFactory,d=void 0===s?D:s;return function(t,e,n,o){void 0===o&&(o={});var c=o,u=c.pure,s=void 0===u||u,y=c.areStatesEqual,v=void 0===y?$:y,m=c.areOwnPropsEqual,h=void 0===m?j:m,b=c.areStatePropsEqual,g=void 0===b?j:b,w=c.areMergedPropsEqual,S=void 0===w?j:w,O=(0,p.Z)(c,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),E=I(t,a,"mapStateToProps"),P=I(e,i,"mapDispatchToProps"),C=I(n,f,"mergeProps");return r(d,(0,l.Z)({methodName:"connect",getDisplayName:function(t){return"Connect("+t+")"},shouldHandleStateChanges:Boolean(t),initMapStateToProps:E,initMapDispatchToProps:P,initMergeProps:C,pure:s,areStatesEqual:v,areOwnPropsEqual:h,areStatePropsEqual:g,areMergedPropsEqual:S},O))}}var F=L();var B,q=n(3935);B=q.unstable_batchedUpdates,a=B},8359:function(t,e){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function S(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case s:case l:case a:case i:case c:case d:return t;default:switch(t=t&&t.$$typeof){case f:case p:case m:case v:case u:return t;default:return e}}case o:return e}}}function O(t){return S(t)===l}e.isContextConsumer=function(t){return S(t)===f}},2973:function(t,e,n){"use strict";t.exports=n(8359)}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(1780),e(4651)}));var n=t.O();_N_E=n}]);