(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{471:function(e,t,n){__NEXT_REGISTER_PAGE("/document",function(){return e.exports=n(490),{page:e.exports.default}})},490:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(27),i=n(9),l=(n(2),n(57)),s=n(89),c=n.n(s),d=n(55),u=n.n(d),f=n(56),p=n.n(f),m=n(4),A=n.n(m);n(264);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=["文档1abc","文档2abc","文档3abc","文档4abc","文档5abc","文档6abc","文档7abc","文档8abc","文档9abc","文档10abc"],x=["菜单1abc","菜单2abc","菜单3abc","菜单4abc","菜单1abc","菜单1abc","菜单1abc","菜单1abc","菜单1abc","菜单1abc"],E=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=v(this,h(t).call(this))).state={selectedindex:0,menuopen:!1},e}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,a["Component"]),n=t,(r=[{key:"onListitemClick",value:function(e){this.setState({selectedindex:e})}},{key:"downmenuClick",value:function(){var e=!this.state.menuopen;this.setState({menuopen:e})}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state.menuopen;return o.a.createElement("div",{className:t.bkdiv},o.a.createElement("div",{className:t.downlist,style:{display:n?"block":"none",animation:n?"0.15s open linear":"0.15s close linear"}},o.a.createElement("br",null),x.map(function(e,n){return o.a.createElement("div",{key:n,className:t.nemutexts},x[n],o.a.createElement("br",null),o.a.createElement("br",null))})),o.a.createElement(l.a,{className:t.bar,downlistClicked:this.downmenuClick.bind(this)}),o.a.createElement(A.a,{className:t.grid,container:!0,direction:"row",justify:"center",alignItems:"flex-start",style:{marginLeft:n?"200px":"0px",width:n?"calc(100% - 200px)":"100%"}},o.a.createElement(A.a,{item:!0,xs:3},o.a.createElement(u.a,{className:t.list},C.map(function(n,a){return o.a.createElement(p.a,{button:!0,key:a,onClick:function(){return e.onListitemClick(a)},disableRipple:!0},o.a.createElement("img",{src:c.a,alt:""}),o.a.createElement("div",{className:t.listcontent},o.a.createElement("p",{className:t.content1,style:{color:a===e.state.selectedindex?"#3fc2ff":"#666"}},n),o.a.createElement("p",{className:t.content2},"Jan 9, 2014")))}))),o.a.createElement(A.a,{item:!0,xs:9},o.a.createElement("div",{className:t.content},C[this.state.selectedindex]))))}}])&&g(n.prototype,r),i&&g(n,i),t}(),N=Object(i.withStyles)(function(e){return{bkdiv:{backgroundColor:"#e1e1e1"},list:{backgroundColor:"#fff",margin:"20px"},content:{backgroundColor:"#fff",margin:"20px",minHeight:"80vh",padding:"20px"},bar:{},grid:{backgroundColor:"#ffffff00"},listcontent:{marginLeft:"10px",width:"100%"},content1:{color:"#666",fontSize:"15px",marginBottom:"0px"},content2:{color:"#666",fontSize:"12px",marginTop:"0px"},downlist:{width:"200px",position:"absolute",backgroundColor:"#666",color:"#fff",fontSize:"14px",marginTop:"40px"},nemutexts:{textAlign:"center"}}})(E),w=n(28),T=n.n(w);t.default=function(){return o.a.createElement(r.a,null,o.a.createElement(T.a,null,o.a.createElement("title",null,"文档")),o.a.createElement(N,null))}},55:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=a(n(82))},56:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=a(n(83))},82:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=a(n(3)),r=a(n(10)),i=a(n(5)),l=a(n(11)),s=a(n(12)),c=a(n(13)),d=a(n(14)),u=a(n(15)),f=a(n(0)),p=a(n(2)),m=a(n(6)),A=a(n(7)),b={root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{paddingTop:4,paddingBottom:4},subheader:{paddingTop:0}};t.styles=b;var g=function(e){function t(){return(0,l.default)(this,t),(0,c.default)(this,(0,d.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,s.default)(t,[{key:"getChildContext",value:function(){return{dense:this.props.dense}}},{key:"render",value:function(){var e,t=this.props,n=t.children,a=t.classes,l=t.className,s=t.component,c=t.dense,d=t.disablePadding,u=t.subheader,p=(0,i.default)(t,["children","classes","className","component","dense","disablePadding","subheader"]),A=(0,m.default)(a.root,(e={},(0,r.default)(e,a.dense,c&&!d),(0,r.default)(e,a.padding,!d),(0,r.default)(e,a.subheader,u),e),l);return f.default.createElement(s,(0,o.default)({className:A},p),u,n)}}]),t}(f.default.Component);g.propTypes={},g.defaultProps={component:"ul",dense:!1,disablePadding:!1},g.childContextTypes={dense:p.default.bool};var v=(0,A.default)(b,{name:"MuiList"})(g);t.default=v},83:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=a(n(3)),r=a(n(10)),i=a(n(5)),l=a(n(11)),s=a(n(12)),c=a(n(13)),d=a(n(14)),u=a(n(15)),f=a(n(0)),p=a(n(2)),m=a(n(6)),A=a(n(7)),b=a(n(46)),g=n(84),v=function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:12,paddingBottom:12,"&$selected":{backgroundColor:e.palette.action.selected}},container:{position:"relative"},focusVisible:{backgroundColor:e.palette.action.hover},default:{},dense:{paddingTop:8,paddingBottom:8},disabled:{opacity:.5},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:e.mixins.gutters(),button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:32},selected:{}}};t.styles=v;var h=function(e){function t(){return(0,l.default)(this,t),(0,c.default)(this,(0,d.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,s.default)(t,[{key:"getChildContext",value:function(){return{dense:this.props.dense||this.context.dense||!1}}},{key:"render",value:function(){var e,t=this.props,n=t.button,a=t.children,l=t.classes,s=t.className,c=t.component,d=t.ContainerComponent,u=t.ContainerProps,p=(u=void 0===u?{}:u).className,A=(0,i.default)(u,["className"]),v=t.dense,h=t.disabled,y=t.disableGutters,C=t.divider,x=t.focusVisibleClassName,E=t.selected,N=(0,i.default)(t,["button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),w=v||this.context.dense||!1,T=f.default.Children.toArray(a),k=T.some(function(e){return(0,g.isMuiElement)(e,["ListItemAvatar"])}),O=T.length&&(0,g.isMuiElement)(T[T.length-1],["ListItemSecondaryAction"]),P=(0,m.default)(l.root,l.default,(e={},(0,r.default)(e,l.dense,w||k),(0,r.default)(e,l.gutters,!y),(0,r.default)(e,l.divider,C),(0,r.default)(e,l.disabled,h),(0,r.default)(e,l.button,n),(0,r.default)(e,l.secondaryAction,O),(0,r.default)(e,l.selected,E),e),s),V=(0,o.default)({className:P,disabled:h},N),B=c||"li";return n&&(V.component=c||"div",V.focusVisibleClassName=(0,m.default)(l.focusVisible,x),B=b.default),O?(B=V.component||c?B:"div","li"===d&&("li"===B?B="div":"li"===V.component&&(V.component="div")),f.default.createElement(d,(0,o.default)({className:(0,m.default)(l.container,p)},A),f.default.createElement(B,V,T),T.pop())):f.default.createElement(B,V,T)}}]),t}(f.default.Component);h.propTypes={},h.defaultProps={button:!1,ContainerComponent:"li",dense:!1,disabled:!1,disableGutters:!1,divider:!1,selected:!1},h.contextTypes={dense:p.default.bool},h.childContextTypes={dense:p.default.bool};var y=(0,A.default)(v,{name:"MuiListItem"})(h);t.default=y},84:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.cloneElementWithClassName=i,t.cloneChildrenWithClassName=function(e,t){return o.default.Children.map(e,function(e){return o.default.isValidElement(e)&&i(e,t)})},t.isMuiElement=function(e,t){return o.default.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)};var o=a(n(0)),r=a(n(6));function i(e,t){return o.default.cloneElement(e,{className:(0,r.default)(e.props.className,t)})}},89:function(e,t){e.exports="data:image/png;base64,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"}},[[471,1,0,2]]]);