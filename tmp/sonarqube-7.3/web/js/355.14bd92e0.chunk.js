(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{1422:function(e,t,n){var a=n(783);e.exports=function(e,t){var n;return a(e,function(e,a,r){return!(n=t(e,a,r))}),!!n}},1423:function(e,t,n){var a=n(383),r=n(63),o=n(1422),l=n(29),c=n(758);e.exports=function(e,t,n){var s=l(e)?a:o;return n&&c(e,t,n)&&(t=void 0),s(e,r(t,3))}},1569:function(e,t,n){"use strict";n.r(t);var a=n(534),r=n.n(a),o=n(538),l=n.n(o),c=n(557),s=n.n(c),i=n(544),u=n(7);function p(){return r.a.createElement("header",{className:"page-header"},r.a.createElement("h1",{className:"page-title"},Object(u.l)("update_key.page")),r.a.createElement("div",{className:"page-description"},Object(u.l)("update_key.page.description")))}var m,d=n(664),h=(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}m(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleConfirm=function(){return t.props.newKey?t.props.onConfirm(t.props.component.key,t.props.newKey):Promise.reject(void 0)},t}return h(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.component,r=e.newKey;return a.createElement(d.a,{confirmButtonText:Object(u.l)("update_verb"),modalBody:a.createElement(a.Fragment,null,Object(u.m)("update_key.are_you_sure_to_change_key",n.name),a.createElement("div",{className:"spacer-top"},Object(u.l)("update_key.old_key"),": ",a.createElement("strong",null,n.key)),a.createElement("div",{className:"spacer-top"},Object(u.l)("update_key.new_key"),": ",a.createElement("strong",null,r))),modalHeader:Object(u.l)("update_key.page"),onConfirm:this.handleConfirm},t)},t}(a.PureComponent),y=n(536),b=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={},t.handleChange=function(e){var n=e.currentTarget.value;t.setState({newKey:n})},t.handleReset=function(){t.setState({newKey:void 0})},t}return b(t,e),t.prototype.render=function(){var e=this,t=this.props.component,n=this.state.newKey,r=null!=n?n:t.key,o=r!==t.key;return a.createElement(f,{component:t,newKey:n,onConfirm:this.props.onKeyChange},function(t){var n=t.onFormSubmit;return a.createElement("form",{onSubmit:n},a.createElement("input",{className:"input-super-large",id:"update-key-new-key",onChange:e.handleChange,placeholder:Object(u.l)("update_key.new_key"),required:!0,type:"text",value:r}),a.createElement("div",{className:"spacer-top"},a.createElement(y.f,{disabled:!o,id:"update-key-submit"},Object(u.l)("update_verb")),a.createElement(y.a,{className:"spacer-left",disabled:!o,id:"update-key-reset",onClick:e.handleReset,type:"reset"},Object(u.l)("reset_verb"))))})},t}(a.PureComponent),_=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSubmit=function(e){e.preventDefault();var n=t.refs.replace.value,a=t.refs.by.value;t.props.onSubmit(n,a)},t}return _(t,e),t.prototype.render=function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"modal-field"},r.a.createElement("label",{htmlFor:"bulk-update-replace"},Object(u.l)("update_key.replace")),r.a.createElement("input",{id:"bulk-update-replace",name:"replace",placeholder:Object(u.l)("update_key.replace_example"),ref:"replace",required:!0,type:"text"})),r.a.createElement("div",{className:"modal-field"},r.a.createElement("label",{htmlFor:"bulk-update-by"},Object(u.l)("update_key.by")),r.a.createElement("input",{id:"bulk-update-by",name:"by",placeholder:Object(u.l)("update_key.by_example"),ref:"by",required:!0,type:"text"}),r.a.createElement(y.f,{className:"big-spacer-left",id:"bulk-update-see-results"},Object(u.l)("update_key.see_results"))))},t.propTypes={onSubmit:l.a.func.isRequired},t}(r.a.PureComponent),E=n(1423),g=n.n(E),z=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return z(t,e),t.prototype.render=function(){var e=this.props,t=e.results,n=e.replace,a=e.by,o=0===t.length,l=g()(t,function(e){return e.duplicate}),c=!o&&!l;return r.a.createElement("div",{className:"big-spacer-top",id:"bulk-update-simulation"},o&&r.a.createElement("div",{className:"spacer-bottom",id:"bulk-update-nothing"},Object(u.m)("update_key.no_key_to_update",n)),l&&r.a.createElement("div",{className:"spacer-bottom",id:"bulk-update-duplicate"},Object(u.m)("update_key.cant_update_because_duplicate_keys",n,a)),c&&r.a.createElement("div",{className:"spacer-bottom"},Object(u.l)("update_key.keys_will_be_updated_as_follows")),!o&&r.a.createElement("table",{className:"data zebra zebra-hover",id:"bulk-update-results"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,Object(u.l)("update_key.old_key")),r.a.createElement("th",null,Object(u.l)("update_key.new_key")))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",{"data-key":e.key,key:e.key},r.a.createElement("td",{className:"js-old-key"},e.key),r.a.createElement("td",{className:"js-new-key"},e.duplicate&&r.a.createElement("span",{className:"spacer-right badge badge-danger"},Object(u.l)("update_key.duplicate_key")),e.newKey))}))),r.a.createElement("div",{className:"big-spacer-top"},c&&r.a.createElement(y.a,{id:"bulk-update-confirm",onClick:this.props.onConfirm},Object(u.l)("update_verb"))))},t.propTypes={results:l.a.array.isRequired,onConfirm:l.a.func.isRequired},t}(r.a.PureComponent),C=function(e){setTimeout(function(){window.location=window.baseUrl+"/project/key?id="+encodeURIComponent(e)},3e3)},j=n(576),M=n(17),N=n(582),H=n(830),w=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),V=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={updating:!1,updated:!1,newComponentKey:null},t}return w(t,e),t.prototype.handleSubmit=function(e,t){this.loadResults(e,t)},t.prototype.handleConfirm=function(){var e=this;this.setState({updating:!0});var t=this.props.component,n=this.state,a=n.replace,r=n.by;Object(j.a)(t.key,a,r).then(function(n){var a=n.keys.find(function(e){return e.key===t.key}),r=null!=a?a.newKey:t.key;r!==t.key&&H.a.remove(t.key),e.props.addGlobalSuccessMessage(Object(u.l)("update_key.key_updated.reload")),e.setState({updating:!1}),C(r)}).catch(function(t){e.setState({updating:!1}),Object(M.parseError)(t).then(function(t){return e.props.addGlobalErrorMessage(t)})})},t.prototype.loadResults=function(e,t){var n=this,a=this.props.component;Object(j.a)(a.key,e,t,!0).then(function(a){n.setState({results:a.keys,replace:e,by:t}),n.props.closeAllGlobalMessages()}).catch(function(e){n.setState({results:null}),Object(M.parseError)(e).then(function(e){return n.props.addGlobalErrorMessage(e)})})},t.prototype.renderUpdating=function(){return r.a.createElement("div",{id:"project-key-bulk-update"},r.a.createElement("i",{className:"spinner"}))},t.prototype.render=function(){var e=this.props.component,t=this.state,n=t.updating,a=t.updated,o=this.state,l=o.results,c=o.replace,s=o.by;return n?this.renderUpdating():a?this.renderUpdated():r.a.createElement("div",{id:"project-key-bulk-update"},r.a.createElement("header",{className:"big-spacer-bottom"},r.a.createElement("div",{className:"spacer-bottom"},Object(u.l)("update_key.bulk_change_description")),r.a.createElement("div",null,Object(u.m)("update_key.current_key_for_project_x_is_x",e.name,e.key))),r.a.createElement(k,{onSubmit:this.handleSubmit.bind(this)}),null!=l&&r.a.createElement(O,{results:l,replace:c,by:s,onConfirm:this.handleConfirm.bind(this)}))},t.propTypes={component:l.a.object.isRequired,addGlobalErrorMessage:l.a.func.isRequired,addGlobalSuccessMessage:l.a.func.isRequired,closeAllGlobalMessages:l.a.func.isRequired},t}(r.a.PureComponent),S=Object(i.connect)(null,{addGlobalErrorMessage:N.a,addGlobalSuccessMessage:N.b,closeAllGlobalMessages:N.c})(V),P=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={},t.handleInputChange=function(e){var n=e.currentTarget.value;t.setState({newKey:n})},t.handleResetClick=function(){t.setState({newKey:void 0})},t}return P(t,e),t.prototype.render=function(){var e=this.props.component,t=this.state.newKey,n=void 0!==t?t:e.key,r=void 0!==t&&t!==e.key;return a.createElement("div",{className:"js-fine-grained-update","data-key":e.key},a.createElement("input",{className:"input-super-large big-spacer-right",onChange:this.handleInputChange,type:"text",value:n}),a.createElement(f,{component:e,newKey:t,onConfirm:this.props.onKeyChange},function(e){var t=e.onClick;return a.createElement(y.a,{disabled:!r,onClick:t},Object(u.l)("update_verb"))}),a.createElement(y.a,{className:"spacer-left",disabled:!r,onClick:this.handleResetClick},Object(u.l)("reset_verb")))},t}(a.PureComponent),K=n(566);function q(e){var t=e.component,n=e.modules,a=[t].concat(n);return r.a.createElement("div",{id:"project-key-fine-grained-update"},r.a.createElement("table",{className:"data zebra"},r.a.createElement("tbody",null,a.map(function(t){return r.a.createElement("tr",{key:t.key},r.a.createElement("td",{className:"width-40"},r.a.createElement(K.a,{qualifier:t.qualifier})," ",t.name),r.a.createElement("td",null,r.a.createElement(A,{component:t,onKeyChange:e.onKeyChange})))}))))}var G=n(782),R=n(545),D=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={tab:"bulk"},t.handleChangeKey=function(e,n){return t.props.changeKey(e,n).then(function(){e===t.props.component.key?(t.props.addGlobalSuccessMessage(Object(u.l)("update_key.key_updated.reload")),H.a.remove(e),C(n)):t.props.addGlobalSuccessMessage(Object(u.l)("update_key.key_updated"))})},t.handleChangeTab=function(e){e.preventDefault(),e.currentTarget.blur();var n=e.currentTarget.dataset.tab;t.setState({tab:n}),t.props.closeAllGlobalMessages()},t}return D(t,e),t.prototype.componentDidMount=function(){this.props.fetchProjectModules(this.props.component.key)},t.prototype.render=function(){var e=this.props,t=e.component,n=e.modules,a=null!=n&&0===n.length,o=null!=n&&n.length>0,l=this.state.tab;return r.a.createElement("div",{className:"page page-limited",id:"project-key"},r.a.createElement(s.a,{title:Object(u.l)("update_key.page")}),r.a.createElement(p,null),null==n&&r.a.createElement("i",{className:"spinner"}),a&&r.a.createElement("div",null,r.a.createElement(v,{component:t,onKeyChange:this.handleChangeKey})),o&&r.a.createElement("div",{className:"boxed-group boxed-group-inner"},r.a.createElement("div",{className:"big-spacer-bottom"},r.a.createElement("ul",{className:"tabs"},r.a.createElement("li",null,r.a.createElement("a",{className:"bulk"===l?"selected":"","data-tab":"bulk",href:"#",id:"update-key-tab-bulk",onClick:this.handleChangeTab},Object(u.l)("update_key.bulk_update"))),r.a.createElement("li",null,r.a.createElement("a",{className:"fine"===l?"selected":"","data-tab":"fine",href:"#",id:"update-key-tab-fine",onClick:this.handleChangeTab},Object(u.l)("update_key.fine_grained_key_update"))))),"bulk"===l&&r.a.createElement(S,{component:t}),"fine"===l&&r.a.createElement(q,{component:t,modules:n,onError:this.props.addGlobalErrorMessage,onKeyChange:this.handleChangeKey,onSuccess:this.props.closeAllGlobalMessages})))},t.propTypes={component:l.a.object,fetchProjectModules:l.a.func.isRequired,changeKey:l.a.func.isRequired,addGlobalErrorMessage:l.a.func.isRequired,addGlobalSuccessMessage:l.a.func.isRequired,closeAllGlobalMessages:l.a.func.isRequired},t}(r.a.PureComponent);t.default=Object(i.connect)(function(e,t){return{modules:Object(R.getProjectAdminProjectModules)(e,t.location.query.id)}},{fetchProjectModules:G.j,changeKey:G.f,addGlobalErrorMessage:N.a,addGlobalSuccessMessage:N.b,closeAllGlobalMessages:N.c})(T)},548:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(534),r=n(570),o=n(535),l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};function c(e){return a.createElement(r,l({className:o("modal",{"modal-medium":e.medium,"modal-large":e.large}),isOpen:!0,overlayClassName:"modal-overlay"},e))}r.setAppElement("#content")},566:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(534),r=n(537),o=n(542),l={app:function(e){var t=e.className,n=e.size;return a.createElement(r.a,{className:t,size:n},a.createElement("path",{d:"M3.014 10.986a2 2 0 1 1-.001 4.001 2 2 0 0 1 .001-4.001zm9.984 0a2 2 0 1 1-.001 4.001 2 2 0 0 1 .001-4.001zm-5.004-.021c1.103 0 2 .896 2 2s-.897 2-2 2a2 2 0 0 1 0-4zm-4.98 1.021a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9.984 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.004-.021a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM2.984 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 2.984 6zm9.984 0a2 2 0 1 1-.001 4.001A2 2 0 0 1 12.968 6zm-5.004-.021c1.103 0 2 .897 2 2a2 2 0 1 1-2-2zM2.984 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9.984 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.004-.021a1.001 1.001 0 0 1 0 2 1 1 0 0 1 0-2zM3 1.025a2 2 0 1 1-.001 4.001A2 2 0 0 1 3 1.025zm9.984 0a2 2 0 1 1-.001 4.001 2 2 0 0 1 .001-4.001zM7.98 1.004c1.103 0 2 .896 2 2s-.897 2-2 2a2 2 0 0 1 0-4zM3 2.025a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9.984 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM7.98 2.004a1.001 1.001 0 0 1 0 2 1 1 0 0 1 0-2z",style:{fill:o.blue}}))},brc:function(e){var t=e.className,n=e.size;return a.createElement(r.a,{className:t,size:n},a.createElement("path",{d:"M8 9V8h6v1h1v1h1v6H6v-6h1V9h1zm7 2H7v4h8v-4zm-1-7v3h-1V5H1v7h4v1H0V4h14zm-1-2v1.5h-1V3H2v.5H1V2h12zm-1-2v1.5h-1V1H3v.5H2V0h10z",style:{fill:o.blue}}))},dev:function(e){var t=e.className,n=e.size;return a.createElement(r.a,{className:t,size:n},a.createElement("path",{d:"M7.974 8.02a3.5 3.5 0 0 1-2.482-1.017 3.428 3.428 0 0 1-1.028-2.455c0-.927.365-1.8 1.028-2.455a3.505 3.505 0 0 1 2.482-1.017 3.5 3.5 0 0 1 2.482 1.017 3.434 3.434 0 0 1 1.027 2.455c0 .928-.365 1.8-1.027 2.455A3.504 3.504 0 0 1 7.974 8.02zm0-5.778c-1.286 0-2.332 1.034-2.332 2.306s1.046 2.307 2.332 2.307c1.285 0 2.332-1.035 2.332-2.307S9.258 2.242 7.974 2.242zm3.534 6.418c.127.016.243.045.348.086.17.066.302.146.406.246.132.124.253.282.36.47.126.218.226.442.3.668.08.253.15.535.206.838.056.313.095.604.113.867.02.28.03.57.03.862 0 .532-.174.758-.306.882-.142.132-.397.31-.973.31H3.948c-.233 0-.437-.03-.606-.09-.14-.05-.26-.123-.366-.222-.13-.123-.306-.35-.306-.88 0-.294.01-.584.03-.863.018-.263.056-.554.112-.867a6.5 6.5 0 0 1 .207-.838c.073-.226.173-.45.298-.667.108-.19.23-.347.36-.47.106-.1.238-.18.407-.247.105-.04.22-.07.348-.086.202.13.432.277.683.435.342.217.756.4 1.265.564.523.166 1.06.25 1.59.25a5.25 5.25 0 0 0 1.592-.25c.51-.164.923-.348 1.266-.565.25-.158.48-.304.682-.435l-.002.002zm-.244-1.18c-.055 0-.184.066-.387.196-.202.13-.43.276-.685.437-.255.16-.586.307-.994.437-.408.13-.818.196-1.23.196-.41 0-.82-.065-1.228-.196a4.303 4.303 0 0 1-.993-.437c-.255-.16-.484-.306-.686-.437-.202-.13-.33-.196-.386-.196-.374 0-.716.06-1.026.183-.31.12-.572.283-.787.487a3.28 3.28 0 0 0-.57.737 4.662 4.662 0 0 0-.395.888c-.098.303-.18.633-.244.988a9.652 9.652 0 0 0-.128.992c-.02.306-.032.62-.032.942 0 .73.224 1.304.672 1.726.448.42 1.043.632 1.785.632h8.044c.743 0 1.34-.21 1.787-.633.447-.42.67-.996.67-1.725 0-.32-.01-.635-.03-.942a9.159 9.159 0 0 0-.374-1.98c-.098-.304-.23-.6-.395-.888a3.23 3.23 0 0 0-.57-.737 2.404 2.404 0 0 0-.788-.487 2.779 2.779 0 0 0-1.026-.183h-.004z",style:{fill:o.blue}}))},dir:s,fil:function(e){var t=e.className,n=e.size;return a.createElement(r.a,{className:t,size:n},a.createElement("path",{d:"M14 15H2V1l7.997.02c1 .034 1.759.758 2.428 1.42.667.663 1.561 1.605 1.574 2.555H14V15zM9 2H3v12h10V6H9V2zm3 10H4v-1h8v1zm0-2H4V9h8v1zm-1.988-5h3.008c-.012-.674-.714-1.443-1.204-1.937-.488-.495-1.039-1.058-1.816-1.055v2.96l.012.032z",style:{fill:o.blue}}))},svw:function(e){var t=e.className,n=e.size;return a.createElement(r.a,{className:t,size:n},a.createElement("path",{d:"M14 7h2v9H7v-2H0V0h14v7zM8 8v7h7V8H8zm3 6H9v-2h2v2zm3 0h-2v-2h2v2zm-1-7V1H1v12h6V7h6zm-7 5H2V8h4v4zm5-1H9V9h2v2zm3 0h-2V9h2v2zM5 9H3v2h2V9zm1-3H2V2h4v4zm6 0H8V2h4v4zM5 3H3v2h2V3zm6 0H9v2h2V3z",style:{fill:o.blue}}))},trk:i,uts:u,vw:function(e){var t=e.className,n=e.size;return a.createElement(r.a,{className:t,size:n},a.createElement("path",{d:"M14.97 14.97H1.016V1.015H14.97V14.97zm-1-12.955H2.015V13.97H13.97V2.015zm-.973 10.982H9V9h3.997v3.997zM7 12.996H3.004V9H7v3.996zM11.997 10H10v1.997h1.997V10zM6 10H4.004v1.996H6V10zm1-3H3.006V3.006H7V7zm5.985 0H9V3.015h3.985V7zM6 4.006H4.006V6H6V4.006zm5.985.009H10V6h1.985V4.015z",style:{fill:o.blue}}))},cla:u,dev_prj:i,lib:function(e){var t=e.className,n=e.size;return a.createElement(r.a,{className:t,size:n},a.createElement("path",{d:"M1 13h4V3H1v10zm3-1H2v-2h2v2zM2 4h2v4H2V4zm4 9h4V3H6v10zm3-1H7v-2h2v2zM7 4h2v4H7V4zm4 9h4V3h-4v10zm3-1h-2v-2h2v2zm-2-8h2v4h-2V4z",style:{fill:o.blue}}))},pac:s};function c(e){if(!e.qualifier)return null;var t=e.qualifier.toLowerCase(),n=l[t];return n?a.createElement(n,{className:e.className}):null}function s(e){var t=e.className,n=e.size;return a.createElement(r.a,{className:t,size:n},a.createElement("path",{d:"M14 12.286V5.703a.673.673 0 0 0-.195-.5.644.644 0 0 0-.49-.203H6.704a.686.686 0 0 1-.5-.214.707.707 0 0 1-.203-.51v-.57c0-.2-.07-.363-.207-.502A.679.679 0 0 0 5.29 3H2.707a.672.672 0 0 0-.5.204.683.683 0 0 0-.206.5v8.582c0 .2.07.367.206.506.137.14.304.208.5.208h10.61a.66.66 0 0 0 .49-.208.685.685 0 0 0 .194-.506H14zm1-6.598v6.65c0 .458-.152.83-.475 1.16-.324.326-.7.502-1.15.502H2.647c-.452 0-.84-.175-1.162-.503a1.572 1.572 0 0 1-.486-1.158V3.654a1.6 1.6 0 0 1 .486-1.17A1.578 1.578 0 0 1 2.648 2h2.7c.45 0 .84.157 1.164.485.324.328.488.714.488 1.17V4h6.373c.452 0 .83.174 1.152.5.323.33.475.73.475 1.187v.001z",style:{fill:o.orange}}))}function i(e){var t=e.className,n=e.size;return a.createElement(r.a,{className:t,size:n},a.createElement("path",{d:"M14.985 13.988L1 14.005 1.02 5h13.966v8.988h-.001zM1.998 5.995l.006 7.02L14.022 13 14 6.004l-12.002-.01v.001zM3 4.5V4h9.996l.004.5h1l-.005-1.497-11.98.003L2 4.5h1zm1-2v-.504h8.002L12 2.5h1l-.004-1.495H3.003L3 2.5h1z",style:{fill:o.blue}}))}function u(e){var t=e.className,n=e.size;return a.createElement(r.a,{className:t,size:n},a.createElement("path",{d:"M14 15H2V1l7.997.02c1.013-.03 1.57.893 2.239 1.555.667.663 1.75 1.47 1.763 2.42H14V15zM9 2H3v12h10V6H9V2zM7 8l-3 2.5L7 13V8zm1 5l3-2.5L8 8v5zm2.012-8h3.008c-.012-.674-.78-1.258-1.27-1.752-.488-.495-.973-1.243-1.75-1.24v2.96l.012.032z",style:{fill:o.blue}}))}},567:function(e,t,n){"use strict";var a,r=n(534),o=n(548),l=(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return l(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return r.createElement(o.a,{contentLabel:this.props.header,onRequestClose:this.props.onClose},this.props.children({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(r.Component);t.a=c},593:function(e,t,n){"use strict";var a,r=n(534),o=(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={modal:!1},t.handleButtonClick=function(){t.setState({modal:!0})},t.handleFormSubmit=function(e){e&&e.preventDefault(),t.setState({modal:!0})},t.handleCloseModal=function(){t.mounted&&t.setState({modal:!1})},t}return o(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return r.createElement(r.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))},t}(r.PureComponent);t.a=l},596:function(e,t,n){"use strict";var a,r=n(534),o=n(567),l=n(550),c=n(7),s=n(536),i=(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.handleSubmit=function(){var e=t.props.onConfirm(t.props.confirmData);return e?e.then(t.props.onClose,function(){}):void t.props.onClose()},t.renderModalContent=function(e){var n=e.onCloseClick,a=e.onFormSubmit,o=e.submitting,i=t.props,u=i.children,p=i.confirmButtonText,m=i.confirmDisable,d=i.header,h=i.isDestructive;return r.createElement("form",{onSubmit:a},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,d)),r.createElement("div",{className:"modal-body"},u),r.createElement("footer",{className:"modal-foot"},r.createElement(l.a,{className:"spacer-right",loading:o}),r.createElement(s.f,{autoFocus:!0,className:h?"button-red":void 0,disabled:o||m},p),r.createElement(s.e,{disabled:o,onClick:n},Object(c.l)("cancel"))))},t}return i(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.header;return r.createElement(o.a,{header:e,onClose:this.props.onClose,onSubmit:this.handleSubmit},this.renderModalContent)},t}(r.PureComponent);t.a=u},664:function(e,t,n){"use strict";var a,r=n(534),o=n(593),l=n(596),c=(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderConfirmModal=function(e){var n=e.onClose;return r.createElement(l.a,{confirmButtonText:t.props.confirmButtonText,confirmData:t.props.confirmData,confirmDisable:t.props.confirmDisable,header:t.props.modalHeader,isDestructive:t.props.isDestructive,onClose:n,onConfirm:t.props.onConfirm},t.props.modalBody)},t}return c(t,e),t.prototype.render=function(){return r.createElement(o.a,{modal:this.renderConfirmModal},this.props.children)},t}(r.PureComponent);t.a=s}}]);
//# sourceMappingURL=355.14bd92e0.chunk.js.map