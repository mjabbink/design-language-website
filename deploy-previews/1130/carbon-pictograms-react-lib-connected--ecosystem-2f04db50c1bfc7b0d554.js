"use strict";(self.webpackChunkdesign_language_website=self.webpackChunkdesign_language_website||[]).push([[41063,37965,66095,420,69602],{52520:function(e,t,r){var n=r(2388),c=r(45697),a=r(67294);function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=l(c),o=l(a);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=["className","children","tabIndex"],h=["tabindex"],g=o.default.forwardRef((function(e,t){var r=e.className,c=e.children,a=e.tabIndex,l=b(e,p),i=n.getAttributes(f(f({},l),{},{tabindex:a})),u=i.tabindex,s=b(i,h);return r&&(s.className=r),null!=u&&(s.tabIndex=u),t&&(s.ref=t),o.default.createElement("svg",s,c)}));g.displayName="Icon",g.propTypes={"aria-hidden":i.default.string,"aria-label":i.default.string,"aria-labelledby":i.default.string,children:i.default.node,className:i.default.string,height:i.default.oneOfType([i.default.number,i.default.string]),preserveAspectRatio:i.default.string,tabIndex:i.default.string,viewBox:i.default.string,width:i.default.oneOfType([i.default.number,i.default.string]),xmlns:i.default.string},g.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},t.Icon=g,t._extends=d,t._objectWithoutProperties=b},88787:function(e,t,r){var n=r(52520),c=r(67294);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(2388),r(45697);var l,i=a(c),o=["children"],u=i.default.forwardRef((function(e,t){var r=e.children,c=n._objectWithoutProperties(e,o);return i.default.createElement(n.Icon,n._extends({width:64,height:64,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:t},c),l||(l=i.default.createElement("path",{d:"M16,31.36c-1.25,0-2.276-0.978-2.355-2.208c-3.32-0.592-6.336-2.459-8.361-5.173 C4.914,24.22,4.473,24.36,4,24.36c-1.301,0-2.36-1.059-2.36-2.36c0-1.015,0.644-1.882,1.544-2.215 C2.823,18.562,2.64,17.289,2.64,16h0.72c0,1.241,0.179,2.466,0.533,3.643c0.821-0.038,1.584,0.363,2.032,0.992l4.11-2.055 l-2.353-4.411l0.636-0.339l2.361,4.427l15.074-7.537C25.68,10.494,25.64,10.251,25.64,10c0-0.568,0.202-1.09,0.538-1.498 c-1.905-2.58-4.751-4.359-7.887-4.936C18.036,4.595,17.105,5.36,16,5.36c-1.106,0-2.037-0.765-2.291-1.793 c-1.994,0.366-3.884,1.216-5.487,2.469L7.778,5.469c1.712-1.339,3.734-2.242,5.867-2.622C13.724,1.617,14.75,0.64,16,0.64 s2.276,0.977,2.355,2.207c3.318,0.592,6.335,2.459,8.361,5.173c0.37-0.24,0.811-0.38,1.284-0.38c1.302,0,2.36,1.059,2.36,2.36 c0,1.015-0.644,1.882-1.544,2.214c0.36,1.224,0.544,2.496,0.544,3.786h-0.72c0-1.242-0.179-2.466-0.532-3.643 c-0.806,0.054-1.584-0.363-2.032-0.993l-15.058,7.529l4.202,7.879c0.245-0.086,0.507-0.133,0.78-0.133 c1.105,0,2.036,0.765,2.291,1.793c1.992-0.365,3.883-1.214,5.487-2.468l0.443,0.566c-1.714,1.34-3.736,2.242-5.866,2.622 C18.276,30.384,17.25,31.36,16,31.36z M16,27.36c-0.904,0-1.64,0.735-1.64,1.64s0.736,1.64,1.64,1.64c0.904,0,1.64-0.735,1.64-1.64 S16.904,27.36,16,27.36z M5.823,23.497c1.904,2.579,4.75,4.359,7.886,4.936c0.133-0.535,0.448-0.999,0.876-1.32l-4.211-7.896 l-4.126,2.062C6.32,21.506,6.36,21.748,6.36,22C6.36,22.568,6.158,23.09,5.823,23.497z M4,20.36c-0.904,0-1.64,0.735-1.64,1.64 S3.096,23.64,4,23.64S5.64,22.904,5.64,22S4.904,20.36,4,20.36z M28,8.36c-0.904,0-1.64,0.736-1.64,1.64s0.735,1.64,1.64,1.64 s1.64-0.736,1.64-1.64S28.904,8.36,28,8.36z M16,1.36c-0.904,0-1.64,0.736-1.64,1.64S15.096,4.64,16,4.64 c0.904,0,1.64-0.736,1.64-1.64S16.904,1.36,16,1.36z M30,25.36h-4v-0.72h4V25.36z M31.36,24h-0.72v-4h0.721L31.36,24L31.36,24z M25.36,24h-0.72v-4h0.721L25.36,24L25.36,24z M30,19.36h-4v-0.72h4V19.36z M6,13.36H2v-0.72h4V13.36z M7.36,12H6.64V8h0.72 C7.36,8,7.36,12,7.36,12z M1.36,12H0.64V8h0.72V12z M6,7.36H2V6.64h4V7.36z"})),r)}));e.exports=u}}]);