(this.webpackJsonpapi_practice=this.webpackJsonpapi_practice||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/currentLogo.7b116638.png"},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),l=(a(13),a(1)),s=a(2),u=a(4),i=a(3),m=(a(14),a(15),r.a.Component,function(e){e.source,e.eur;var t=e.gbp,a=e.cad,n=e.pln;return[r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,"US Dollar to Euro"),r.a.createElement("h2",null,t)),r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,"US Dollar to British Pound"),r.a.createElement("h2",null,t)),r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,"US Dollar to Canadian Dollar"),r.a.createElement("h2",null,a)),r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,"US Dollar to Polish zloty"),r.a.createElement("h2",null,n))]}),d=function(e){var t=e.currentRates;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(m,{key:a,source:t[a].source,eur:t[a].quotes.USDEUR,gbp:t[a].quotes.USDGBP,cad:t[a].quotes.USDCAD,pln:t[a].quotes.USDPLN})})))},h=a(7),E=a.n(h),f=(a(16),function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"logo",src:E.a,alt:"Current logo"}))}),p=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={source:"",currentRates:[],success:!1},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://api.currencylayer.com/live?access_key=69d695f9dca70a1baae66074dfabb776&currenciesEUR,GBP,CAD,PLN&sourceUSD&format1").then((function(e){return e.json()})).then((function(t){return e.setState({currentRates:[t],success:!0})}))}},{key:"render",value:function(){var e=this.state;e.currentRates,e.error,e.success;return this.state.success?r.a.createElement("div",{className:"body-container"},r.a.createElement(f,null),r.a.createElement("div",{className:"rates-container"},r.a.createElement(d,{currentRates:this.state.currentRates}))):r.a.createElement("h1",null,"Nothing Loaded")}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ec1f878a.chunk.js.map