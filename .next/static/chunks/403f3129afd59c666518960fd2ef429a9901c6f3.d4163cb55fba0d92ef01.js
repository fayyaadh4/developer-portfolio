(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),o=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery;return n||i&&(void 0!==o&&o)}t.isInAmpMode=s,t.useAmp=function(){return s(i.default.useContext(o.AmpStateContext))}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var r,i=n("q1tI");var o=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),s=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return o.computeId(t,n)})).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=s},"5Yp1":function(e,t,n){"use strict";var r=n("MX0m"),i=n.n(r),o=n("q1tI"),s=n.n(o),a=n("8Kt/"),u=n.n(a),c=n("YFqc"),l=n.n(c),f=n("wx14"),p=n("zLVn"),d=n("TSYQ"),h=n.n(d),v=n("JCAc"),m=n("YdCC"),y=n("vUet"),g=s.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.as,o=Object(p.a)(e,["bsPrefix","className","as"]);n=Object(y.a)(n,"navbar-brand");var a=i||(o.href?"a":"span");return s.a.createElement(a,Object(f.a)({},o,{ref:t,className:h()(r,n)}))}));g.displayName="NavbarBrand";var b=g,_=n("dI71"),x=n("7j6X"),S=n("SJxq"),E=n("GEtZ"),w=S.a&&"ontransitionend"in window;function C(e,t,n){void 0===n&&(n=5);var r=!1,i=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=Object(E.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(i),o()}}var j=function(e,t,n){return w?(null==n&&(n=function(e){var t=Object(x.a)(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0),C(e,n),Object(E.a)(e,"transitionend",t)):C(e,0,0)},O=(n("17x9"),n("i8i4")),T=n.n(O),k=!1,N=s.a.createContext(null),P="unmounted",R="exited",A="entering",I="entered",F=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var i,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(i=R,r.appearStatus=A):i=I:i=t.unmountOnExit||t.mountOnEnter?P:R,r.state={status:i},r.nextCallback=null,r}Object(_.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===P?{status:R}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==A&&n!==I&&(t=A):n!==A&&n!==I||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=T.a.findDOMNode(this);t===A?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===R&&this.setState({status:P})},n.performEnter=function(e,t){var n=this,r=this.props.enter,i=this.context?this.context.isMounting:t,o=this.getTimeouts(),s=i?o.appear:o.enter;!t&&!r||k?this.safeSetState({status:I},(function(){n.props.onEntered(e)})):(this.props.onEnter(e,i),this.safeSetState({status:A},(function(){n.props.onEntering(e,i),n.onTransitionEnd(e,s,(function(){n.safeSetState({status:I},(function(){n.props.onEntered(e,i)}))}))})))},n.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n&&!k?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,(function(){t.safeSetState({status:R},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:R},(function(){t.props.onExited(e)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===P)return null;var t=this.props,n=t.children,r=Object(p.a)(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"===typeof n)return s.a.createElement(N.Provider,{value:null},n(e,r));var i=s.a.Children.only(n);return s.a.createElement(N.Provider,{value:null},s.a.cloneElement(i,r))},t}(s.a.Component);function M(){}F.contextType=N,F.propTypes={},F.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:M,onEntering:M,onEntered:M,onExit:M,onExiting:M,onExited:M},F.UNMOUNTED=0,F.EXITED=1,F.ENTERING=2,F.ENTERED=3,F.EXITING=4;var D=F;var z,L=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e.apply(this,r),t.apply(this,r)}}),null)};var U={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var q=((z={})[R]="collapse",z.exiting="collapsing",z[A]="collapsing",z[I]="collapse show",z),B={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=U[e];return n+parseInt(Object(x.a)(t,r[0]),10)+parseInt(Object(x.a)(t,r[1]),10)}},V=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var n=t.getDimension();e.style[n]=t._getScrollDimensionValue(e,n)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var n=t.getDimension();e.style[n]=t.props.getDimensionValue(n,e)+"px",e.offsetHeight},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(_.a)(t,e);var n=t.prototype;return n.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},n.render=function(){var e=this,t=this.props,n=t.onEnter,r=t.onEntering,i=t.onEntered,o=t.onExit,a=t.onExiting,u=t.className,c=t.children,l=Object(p.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete l.dimension,delete l.getDimensionValue;var d=L(this.handleEnter,n),v=L(this.handleEntering,r),m=L(this.handleEntered,i),y=L(this.handleExit,o),g=L(this.handleExiting,a);return s.a.createElement(D,Object(f.a)({addEndListener:j},l,{"aria-expanded":l.role?l.in:null,onEnter:d,onEntering:v,onEntered:m,onExit:y,onExiting:g}),(function(t,n){return s.a.cloneElement(c,Object(f.a)({},n,{className:h()(u,c.props.className,q[t],"width"===e.getDimension()&&"width")}))}))},t}(s.a.Component);V.defaultProps=B;var W=V,J=s.a.createContext(null),X=s.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,i=Object(p.a)(e,["children","bsPrefix"]);return r=Object(y.a)(r,"navbar-collapse"),s.a.createElement(J.Consumer,null,(function(e){return s.a.createElement(W,Object(f.a)({in:!(!e||!e.expanded)},i),s.a.createElement("div",{ref:t,className:r},n))}))}));X.displayName="NavbarCollapse";var Z=X,Y=n("ZCiN"),Q=s.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.children,a=e.label,u=e.as,c=void 0===u?"button":u,l=e.onClick,d=Object(p.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(y.a)(n,"navbar-toggler");var v=Object(o.useContext)(J)||{},m=v.onToggle,g=v.expanded,b=Object(Y.a)((function(e){l&&l(e),m&&m()}));return"button"===c&&(d.type="button"),s.a.createElement(c,Object(f.a)({},d,{ref:t,onClick:b,"aria-label":a,className:h()(r,n,!g&&"collapsed")}),i||s.a.createElement("span",{className:n+"-icon"}))}));Q.displayName="NavbarToggle",Q.defaultProps={label:"Toggle navigation"};var H=Q,K=s.a.createContext(),G=s.a.forwardRef((function(e,t){var n=Object(v.a)(e,{expanded:"onToggle"}),r=n.bsPrefix,i=n.expand,a=n.variant,u=n.bg,c=n.fixed,l=n.sticky,d=n.className,m=n.children,g=n.as,b=void 0===g?"nav":g,_=n.expanded,x=n.onToggle,S=n.onSelect,E=n.collapseOnSelect,w=Object(p.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]);r=Object(y.a)(r,"navbar");var C=Object(o.useCallback)((function(){S&&S.apply(void 0,arguments),E&&_&&x(!1)}),[S,E,_,x]);void 0===w.role&&"nav"!==b&&(w.role="navigation");var j=r+"-expand";"string"===typeof i&&(j=j+"-"+i);var O=Object(o.useMemo)((function(){return{onToggle:function(){return x(!_)},bsPrefix:r,expanded:_}}),[r,_,x]);return s.a.createElement(J.Provider,{value:O},s.a.createElement(K.Provider,{value:C},s.a.createElement(b,Object(f.a)({ref:t},w,{className:h()(d,r,i&&j,a&&r+"-"+a,u&&"bg-"+u,l&&"sticky-"+l,c&&"fixed-"+c)}),m)))}));G.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},G.displayName="Navbar",G.Brand=b,G.Toggle=H,G.Collapse=Z,G.Text=Object(m.a)("navbar-text",{Component:"span"});var $=G,ee=s.a.createElement,te={marginRight:15,color:"white"},ne=function(){return ee("div",{className:"jsx-2750671077 links"},ee($,{bg:"primary",variant:"dark"},ee(l.a,{href:"/"},ee("a",{style:te,className:"jsx-2750671077"},"Home")),ee(l.a,{href:"/about"},ee("a",{style:te,className:"jsx-2750671077"},"About")),ee(l.a,{href:"/projects"},ee("a",{style:te,className:"jsx-2750671077"},"Projects")),ee(l.a,{href:"/contact"},ee("a",{style:te,className:"jsx-2750671077"},"Contact"))),ee(i.a,{id:"2750671077"},[".links.jsx-2750671077{padding:10px;margin-bottom:10px;}"]))},re=s.a.createElement,ie={borderTop:"1px solid",padding:10,marginTop:100,textAlign:"right",color:"green"},oe=function(){return re("div",{style:ie},re("p",null,"This online portfolio was developed using Next.js"))},se=s.a.createElement,ae={textAlign:"center",margin:20,padding:20,border:"1px solid #DDD"};t.a=function(e){return se("div",{className:"jsx-4184271659"},se(u.a,null,se("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossOrigin:"anonymous",className:"jsx-4184271659"})),se("div",{style:ae,className:"jsx-4184271659"},se(ne,null),e.children,se(oe,null)),se(i.a,{id:"4184271659"},["h2{color:red;}"]))}},"7j6X":function(e,t,n){"use strict";var r=n("dZvc");function i(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var o=/([A-Z])/g;var s=/^ms-/;function a(e){return function(e){return e.replace(o,"-$1").toLowerCase()}(e).replace(s,"-ms-")}var u=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(a(t))||i(e).getPropertyValue(a(t));Object.keys(t).forEach((function(i){var o=t[i];o||0===o?!function(e){return!(!e||!u.test(e))}(i)?n+=a(i)+": "+o+";":r+=i+"("+o+") ":e.style.removeProperty(a(i))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),o=r(n("Xuae")),s=n("lwAK"),a=n("FYa8"),u=n("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var a=0,u=f.length;a<u;a++){var c=f[a];if(i.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var l=i.props[c],p=r[c]||new Set;p.has(l)?o=!1:(p.add(l),r[c]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}var d=o.default();function h(e){var t=e.children;return i.default.createElement(s.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return i.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:u.isInAmpMode(e)},t)}))}))}h.rewind=d.rewind,t.default=h},"8oxB":function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=a(p);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},GEtZ:function(e,t,n){"use strict";var r=n("SJxq"),i=!1,o=!1;try{var s={get passive(){return i=!0},get once(){return o=i=!0}};r.a&&(window.addEventListener("test",s,s),window.removeEventListener("test",s,!0))}catch(c){}var a=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!o){var s=r.once,a=r.capture,u=n;!o&&s&&(u=n.__once||function e(r){this.removeEventListener(t,e,a),n.call(this,r)},n.__once=u),e.addEventListener(t,u,i?r:a)}e.addEventListener(t,n,r)};var u=function(e,t,n,r){var i=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,i),n.__once&&e.removeEventListener(t,n.__once,i)};t.a=function(e,t,n,r){return a(e,t,n,r),function(){u(e,t,n,r)}}},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("wx14"),i=n("zLVn"),o=n("q1tI");n("QLaP");function s(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function a(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function u(e,t){return Object.keys(t).reduce((function(n,u){var c,l=n,f=l[s(u)],p=l[u],d=Object(i.a)(l,[s(u),u].map(a)),h=t[u],v=function(e,t,n){var r=Object(o.useRef)(void 0!==e),i=Object(o.useState)(t),s=i[0],a=i[1],u=void 0!==e,c=r.current;return r.current=u,!u&&c&&s!==t&&a(t),[u?e:s,Object(o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];n&&n.apply(void 0,[e].concat(r)),a(e)}),[n])]}(p,f,e[h]),m=v[0],y=v[1];return Object(r.a)({},d,((c={})[u]=m,c[h]=y,c))}),e)}n("dI71");function c(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function f(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}c.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0},MX0m:function(e,t,n){e.exports=n("3niX")},QA0p:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,r=n.propTypes,o=n.defaultProps,s=n.allowFallback,a=void 0!==s&&s,u=n.displayName,c=void 0===u?e.name||e.displayName:u,l=function(t,n){return e(t,n)};return Object.assign(i.default.forwardRef||!a?i.default.forwardRef(l):function(e){return l(e,null)},{displayName:c,propTypes:r,defaultProps:o})};var r,i=(r=n("q1tI"))&&r.__esModule?r:{default:r}},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,i,o,s,a){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,s,a],l=0;(u=new Error(t.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},RIqP:function(e,t,n){var r=n("Ijbi"),i=n("EbDI"),o=n("Bnag");e.exports=function(e){return r(e)||i(e)||o()}},SJxq:function(e,t,n){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=o(n("9kyW")),i=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=o,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),o=t+i;return e[o]||(e[o]="jsx-"+(0,r.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var o=this.computeId(i,r);return{styleId:o,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=i.apply(null,r);s&&e.push(s)}else if("object"===o)for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),i=n("a1gu"),o=n("Nsbk"),s=n("PJYZ"),a=n("W8MJ"),u=n("7W2i"),c=n("RIqP");Object.defineProperty(t,"__esModule",{value:!0});var l=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){function l(e){var a;return r(this,l),a=i(this,o(l).call(this,e)),f&&(t.add(s(a)),n(s(a))),a}return u(l,c),a(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(l.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},YdCC:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("wx14"),i=n("zLVn"),o=n("TSYQ"),s=n.n(o),a=/-(.)/g;var u=n("q1tI"),c=n.n(u),l=n("vUet"),f=function(e){return e[0].toUpperCase()+(t=e,t.replace(a,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function p(e,t){var n=void 0===t?{}:t,o=n.displayName,a=void 0===o?f(e):o,u=n.Component,p=void 0===u?"div":u,d=n.defaultProps,h=c.a.forwardRef((function(t,n){var o=t.className,a=t.bsPrefix,u=t.as,f=void 0===u?p:u,d=Object(i.a)(t,["className","bsPrefix","as"]),h=Object(l.a)(a,e);return c.a.createElement(f,Object(r.a)({ref:n,className:s()(o,h)},d))}));return h.defaultProps=d,h.displayName=a,h}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");var i=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=i(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,n=t.name,o=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,u=void 0===a?r:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,o,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,n){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),a&&n(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),i=n("W8MJ"),o=n("a1gu"),s=n("Nsbk"),a=n("7W2i"),u=n("TqRt"),c=n("284h");t.__esModule=!0,t.default=void 0;var l,f=c(n("q1tI")),p=n("QmWs"),d=n("g/15"),h=u(n("nOHt"));function v(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var m=new Map,y=window.IntersectionObserver,g={};function b(){return l||(y?l=new y((function(e){e.forEach((function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),m.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var _=function(e){function t(e){var n;return r(this,t),(n=o(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(i,o){if(r&&i===t&&o===n)return r;var s=e(i,o);return t=i,n=o,r=s,s}}((function(e,t){return{href:v(e),as:t?v(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,i=t.target;if("A"!==r||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),s=o.href,a=o.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var u=window.location.pathname;s=(0,p.resolve)(u,s),a=a?(0,p.resolve)(u,a):s,e.preventDefault();var c=n.props.scroll;null==c&&(c=a.indexOf("#")<0),h.default[n.props.replace?"replace":"push"](s,a,{shallow:n.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return a(t,e),i(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,i=(0,p.resolve)(e,n);return[i,r?(0,p.resolve)(e,r):i]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,i=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var o=f.Children.only(t),s={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=i||r),f.default.cloneElement(o,s)}}]),t}(f.Component);t.default=_},dI71:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI"));t.AmpStateContext=i.createContext({})},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("wx14"),n("QA0p");var r=n("q1tI"),i=n.n(r),o=i.a.createContext({});o.Consumer,o.Provider;function s(e,t){var n=Object(r.useContext)(o);return e||n[t]||t}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return r}))}}]);