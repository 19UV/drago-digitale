(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4],{280:function(e,t,n){"use strict";n.r(t);var r={name:"Navigation",props:{links:{type:Array,default:function(){return[{name:"Home",path:"/",same:!0}]}}}},o=n(51),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"nav"},e._l(e.links,(function(t){return n("li",{key:t.id},[t.external?n("a",{attrs:{href:t.path,rel:"noreferrer",target:t.same?"_self":"_blank"}},[e._v("\n      ["+e._s(t.name)+"]\n    ")]):n("NuxtLink",{attrs:{to:t.path}},[e._v("\n      ["+e._s(t.name)+"]\n    ")])],1)})),0)}),[],!1,null,null,null);t.default=component.exports},281:function(e,t,n){"use strict";n.r(t);var r={name:"Logo",props:{addition:{type:String,default:void 0}}},o=n(51),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",[e._v("Drago Digitale"+e._s(e.addition?": "+e.addition:""))]),e._v(" "),e._m(0)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("i",[e._v("  Trevor Martin - 19UV")])])}],!1,null,null,null);t.default=component.exports},295:function(e,t,n){"use strict";n.r(t);var r=n(8);n(52);function o(e){return e[Math.floor(Math.random()*e.length)]}var l={asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.$get("./shakespeare_chain.json");case 3:if(r=t.sent){t.next=6;break}throw new Error("Unable to Retrieve Sonnets");case 6:return o=r.chain,l=r.starters,t.abrupt("return",{chain:o,starters:l});case 8:case"end":return t.stop()}}),t)})))()},data:function(){return{links:[{name:"Home",path:"/",same:!0},{name:"Article",path:"/articles/procedural-shakespeare",same:!0}],quote:""}},mounted:function(){this.generateShakespeare()},methods:{generateShakespeare:function(){var e,line="";for(e=o(this.starters);e in this.chain;e=o(this.chain[e]))line+=(line?" ":"")+e;line+=(line?" ":"")+e,this.quote=line}}},c=n(51),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("Logo",{attrs:{addition:"Procedural Shakespeare"}}),e._v(" "),n("Navigation",{attrs:{links:e.links}}),e._v(" "),n("br"),e._v(" "),n("h3",{staticStyle:{"text-align":"center"}},[e._v('\n    "'+e._s(e.quote)+'" ~ Shakespeare Maybe\n  ')]),e._v(" "),n("br"),e._v(" "),n("button",{staticClass:"noselect",on:{click:e.generateShakespeare}},[e._v("\n    Generate\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Logo:n(281).default,Navigation:n(280).default})}}]);