import{$ as u,$a as I,A as M,B as Ie,C as j,Da as Fe,E as De,F as we,Fa as $e,G as Ce,I as w,J as d,K as l,L as E,La as Ue,M as oe,Ma as Ve,N as ae,U as o,Ua as J,V as f,Va as de,W as y,Wa as qe,X as Me,Xa as Je,Y as be,Ya as Ke,Z as L,_ as p,a as N,b as q,ba as Re,bb as ze,c as A,d as ee,da as le,db as K,e as ye,ea as Ae,f as S,fa as Oe,g as te,ga as C,h as x,ha as Le,i as ne,j as m,ja as R,k as P,ka as _e,l as O,la as ce,m as Se,ma as Ne,n as Ee,na as Pe,oa as He,ob as Ye,pa as Be,q as ie,qa as ke,r as Te,ra as je,s as re,sa as _,t as xe,ta as b,u as H,v as se,w as B,y as k,z as a}from"./chunk-RFERAXR7.js";var he=class extends Oe{constructor(){super(...arguments),this.supportsDOMEvents=!0}},fe=class r extends he{static makeCurrent(){Ae(new r)}onAndCancel(e,s,t){return e.addEventListener(s,t),()=>{e.removeEventListener(s,t)}}dispatchEvent(e,s){e.dispatchEvent(s)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,s){return s=s||this.getDefaultDocument(),s.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,s){return s==="window"?window:s==="document"?e:s==="body"?e.body:null}getBaseHref(e){let s=dt();return s==null?null:pt(s)}resetBaseElement(){F=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Le(document.cookie,e)}},F=null;function dt(){return F=F||document.querySelector("base"),F?F.getAttribute("href"):null}function pt(r){return new URL(r,document.baseURI).pathname}var ut=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac});let r=e;return r})(),me=new ne(""),Xe=(()=>{let e=class e{constructor(t,n){this._zone=n,this._eventNameToPlugin=new Map,t.forEach(i=>{i.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,i){return this._findPluginFor(n).addEventListener(t,n,i)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(c=>c.supports(t)),!n)throw new te(5101,!1);return this._eventNameToPlugin.set(t,n),n}};e.\u0275fac=function(n){return new(n||e)(m(me),m(j))},e.\u0275prov=x({token:e,factory:e.\u0275fac});let r=e;return r})(),z=class{constructor(e){this._doc=e}},pe="ng-app-id",Qe=(()=>{let e=class e{constructor(t,n,i,c={}){this.doc=t,this.appId=n,this.nonce=i,this.platformId=c,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=ce(c),this.resetHostNodes()}addStyles(t){for(let n of t)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(t){for(let n of t)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(n=>n.remove()),t.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let n of this.getAllStyles())this.addStyleToHost(t,n)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let n of this.hostNodes)this.addStyleToHost(n,t)}onStyleRemoved(t){let n=this.styleRef;n.get(t)?.elements?.forEach(i=>i.remove()),n.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${pe}="${this.appId}"]`);if(t?.length){let n=new Map;return t.forEach(i=>{i.textContent!=null&&n.set(i.textContent,i)}),n}return null}changeUsageCount(t,n){let i=this.styleRef;if(i.has(t)){let c=i.get(t);return c.usage+=n,c.usage}return i.set(t,{usage:n,elements:[]}),n}getStyleElement(t,n){let i=this.styleNodesInDOM,c=i?.get(n);if(c?.parentNode===t)return i.delete(n),c.removeAttribute(pe),c;{let h=this.doc.createElement("style");return this.nonce&&h.setAttribute("nonce",this.nonce),h.textContent=n,this.platformIsServer&&h.setAttribute(pe,this.appId),t.appendChild(h),h}}addStyleToHost(t,n){let i=this.getStyleElement(t,n),c=this.styleRef,h=c.get(n)?.elements;h?h.push(i):c.set(n,{elements:[i],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}};e.\u0275fac=function(n){return new(n||e)(m(C),m(re),m(se,8),m(H))},e.\u0275prov=x({token:e,factory:e.\u0275fac});let r=e;return r})(),ue={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},ge=/%COMP%/g,et="%COMP%",ht=`_nghost-${et}`,ft=`_ngcontent-${et}`,mt=!0,vt=new ne("",{providedIn:"root",factory:()=>mt});function gt(r){return ft.replace(ge,r)}function yt(r){return ht.replace(ge,r)}function tt(r,e){return e.map(s=>s.replace(ge,r))}var Ze=(()=>{let e=class e{constructor(t,n,i,c,h,v,g,T=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=c,this.doc=h,this.platformId=v,this.ngZone=g,this.nonce=T,this.rendererByCompId=new Map,this.platformIsServer=ce(v),this.defaultRenderer=new $(t,h,g,this.platformIsServer)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===P.ShadowDom&&(n=q(N({},n),{encapsulation:P.Emulated}));let i=this.getOrCreateRenderer(t,n);return i instanceof Y?i.applyToHost(t):i instanceof U&&i.applyStyles(),i}getOrCreateRenderer(t,n){let i=this.rendererByCompId,c=i.get(n.id);if(!c){let h=this.doc,v=this.ngZone,g=this.eventManager,T=this.sharedStylesHost,D=this.removeStylesOnCompDestroy,Q=this.platformIsServer;switch(n.encapsulation){case P.Emulated:c=new Y(g,T,n,this.appId,D,h,v,Q);break;case P.ShadowDom:return new ve(g,T,t,n,h,v,this.nonce,Q);default:c=new U(g,T,n,D,h,v,Q);break}i.set(n.id,c)}return c}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(n){return new(n||e)(m(Xe),m(Qe),m(re),m(vt),m(C),m(H),m(j),m(se))},e.\u0275prov=x({token:e,factory:e.\u0275fac});let r=e;return r})(),$=class{constructor(e,s,t,n){this.eventManager=e,this.doc=s,this.ngZone=t,this.platformIsServer=n,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,s){return s?this.doc.createElementNS(ue[s]||s,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,s){(Ge(e)?e.content:e).appendChild(s)}insertBefore(e,s,t){e&&(Ge(e)?e.content:e).insertBefore(s,t)}removeChild(e,s){e&&e.removeChild(s)}selectRootElement(e,s){let t=typeof e=="string"?this.doc.querySelector(e):e;if(!t)throw new te(-5104,!1);return s||(t.textContent=""),t}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,s,t,n){if(n){s=n+":"+s;let i=ue[n];i?e.setAttributeNS(i,s,t):e.setAttribute(s,t)}else e.setAttribute(s,t)}removeAttribute(e,s,t){if(t){let n=ue[t];n?e.removeAttributeNS(n,s):e.removeAttribute(`${t}:${s}`)}else e.removeAttribute(s)}addClass(e,s){e.classList.add(s)}removeClass(e,s){e.classList.remove(s)}setStyle(e,s,t,n){n&(k.DashCase|k.Important)?e.style.setProperty(s,t,n&k.Important?"important":""):e.style[s]=t}removeStyle(e,s,t){t&k.DashCase?e.style.removeProperty(s):e.style[s]=""}setProperty(e,s,t){e!=null&&(e[s]=t)}setValue(e,s){e.nodeValue=s}listen(e,s,t){if(typeof e=="string"&&(e=le().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${s}`);return this.eventManager.addEventListener(e,s,this.decoratePreventDefault(t))}decoratePreventDefault(e){return s=>{if(s==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(s)):e(s))===!1&&s.preventDefault()}}};function Ge(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var ve=class extends ${constructor(e,s,t,n,i,c,h,v){super(e,i,c,v),this.sharedStylesHost=s,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let g=tt(n.id,n.styles);for(let T of g){let D=document.createElement("style");h&&D.setAttribute("nonce",h),D.textContent=T,this.shadowRoot.appendChild(D)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,s){return super.appendChild(this.nodeOrShadowRoot(e),s)}insertBefore(e,s,t){return super.insertBefore(this.nodeOrShadowRoot(e),s,t)}removeChild(e,s){return super.removeChild(this.nodeOrShadowRoot(e),s)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},U=class extends ${constructor(e,s,t,n,i,c,h,v){super(e,i,c,h),this.sharedStylesHost=s,this.removeStylesOnCompDestroy=n,this.styles=v?tt(v,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Y=class extends U{constructor(e,s,t,n,i,c,h,v){let g=n+"-"+t.id;super(e,s,t,i,c,h,v,g),this.contentAttr=gt(g),this.hostAttr=yt(g)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,s){let t=super.createElement(e,s);return super.setAttribute(t,this.contentAttr,""),t}},St=(()=>{let e=class e extends z{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,i){return t.addEventListener(n,i,!1),()=>this.removeEventListener(t,n,i)}removeEventListener(t,n,i){return t.removeEventListener(n,i)}};e.\u0275fac=function(n){return new(n||e)(m(C))},e.\u0275prov=x({token:e,factory:e.\u0275fac});let r=e;return r})(),We=["alt","control","meta","shift"],Et={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Tt={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},xt=(()=>{let e=class e extends z{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,i){let c=e.parseEventName(n),h=e.eventCallback(c.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>le().onAndCancel(t,c.domEventName,h))}static parseEventName(t){let n=t.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let c=e._normalizeKey(n.pop()),h="",v=n.indexOf("code");if(v>-1&&(n.splice(v,1),h="code."),We.forEach(T=>{let D=n.indexOf(T);D>-1&&(n.splice(D,1),h+=T+".")}),h+=c,n.length!=0||c.length===0)return null;let g={};return g.domEventName=i,g.fullKey=h,g}static matchEventFullKeyCode(t,n){let i=Et[t.key]||t.key,c="";return n.indexOf("code.")>-1&&(i=t.code,c="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),We.forEach(h=>{if(h!==i){let v=Tt[h];v(t)&&(c+=h+".")}}),c+=i,c===n)}static eventCallback(t,n,i){return c=>{e.matchEventFullKeyCode(c,t)&&i.runGuarded(()=>n(c))}}static _normalizeKey(t){return t==="esc"?"escape":t}};e.\u0275fac=function(n){return new(n||e)(m(C))},e.\u0275prov=x({token:e,factory:e.\u0275fac});let r=e;return r})();function nt(r,e){return Re(N({rootComponent:r},It(e)))}function It(r){return{appProviders:[...bt,...r?.providers??[]],platformProviders:Mt}}function Dt(){fe.makeCurrent()}function wt(){return new ie}function Ct(){return Te(document),document}var Mt=[{provide:H,useValue:_e},{provide:xe,useValue:Dt,multi:!0},{provide:C,useFactory:Ct,deps:[]}];var bt=[{provide:Ee,useValue:"root"},{provide:ie,useFactory:wt,deps:[]},{provide:me,useClass:St,multi:!0,deps:[C,j,H]},{provide:me,useClass:xt,multi:!0,deps:[C]},Ze,Qe,Xe,{provide:Ie,useExisting:Ze},{provide:Ne,useClass:ut,deps:[]},[]];var G=(()=>{let e=class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}};e.\u0275fac=function(n){return new(n||e)(m(C))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var W=class{http;prefix;suffix;constructor(e,s="/assets/i18n/",t=".json"){this.http=e,this.prefix=s,this.suffix=t}getTranslation(e){return this.http.get(`${this.prefix}${e}${this.suffix}`)}};var it={providers:[Be(),Se(b.forRoot({defaultLanguage:"en",loader:{provide:ke,useFactory:At,deps:[Pe]}})),G,J,{provide:He,useClass:de,multi:!0},Ke,de]};function At(r){return new W(r,"./assets/i18n/",".json")}var rt={appVersion:"2.0.0",byPassCheckSum:!1};var V=q(N({},rt),{production:!0,lang:"en"});var ot=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=O({type:e,selectors:[["app-instruction"]],inputs:{helpTextSequences:"helpTextSequences",lang:"lang"},standalone:!0,features:[L],decls:178,vars:121,consts:[["id","no-border","role","note",1,"wb-fnote"],["id","tr1"],[1,"fn-rtn"],["href","#tr1-rf"],[1,"wb-inv"],[1,"fn-rep"],["id","tr2"],[3,"innerHTML"],["href","#tr2-rf"],["id","tr3"],["href","#tr3-rf"],["id","tr4"],["href","#tr4-rf"],["id","tr5"],["href","#tr5-rf"],["id","tr6"],["href","#tr6-rf"],["id","tr7"],["href","#tr7-rf"],["id","tr8"],["href","#tr8-rf"]],template:function(n,i){n&1&&(d(0,"aside",0)(1,"dl")(2,"dt"),o(3),l(),d(4,"dd",1)(5,"p",2)(6,"a",3)(7,"span",4),o(8),p(9,"translate"),l(),o(10),d(11,"span",4),o(12," referrer"),l()()(),d(13,"div",5)(14,"p"),o(15),p(16,"translate"),l(),d(17,"ul")(18,"li"),o(19),p(20,"translate"),l(),d(21,"li"),o(22),p(23,"translate"),l()()()(),d(24,"dt")(25,"span",4),o(26),p(27,"translate"),l(),o(28),l(),d(29,"dd",6)(30,"div",5)(31,"p"),o(32),p(33,"translate"),l(),E(34,"p",7),p(35,"translate"),E(36,"p",7),p(37,"translate"),d(38,"p",2)(39,"a",8)(40,"span",4),o(41),p(42,"translate"),l(),o(43),d(44,"span",4),o(45," referrer"),l()()()()(),d(46,"dt")(47,"span",4),o(48),p(49,"translate"),l(),o(50),l(),d(51,"dd",9)(52,"div",5)(53,"p"),o(54),p(55,"translate"),l(),d(56,"p"),o(57),p(58,"translate"),l(),d(59,"p"),o(60),p(61,"translate"),l(),d(62,"p"),o(63),p(64,"translate"),l(),d(65,"p",2)(66,"a",10)(67,"span",4),o(68),p(69,"translate"),l(),o(70),d(71,"span",4),o(72," referrer"),l()()()()(),d(73,"dt")(74,"span",4),o(75),p(76,"translate"),l(),o(77),l(),d(78,"dd",11)(79,"div",5)(80,"p"),o(81),p(82,"translate"),l(),d(83,"p"),o(84),p(85,"translate"),l(),d(86,"p",2)(87,"a",12)(88,"span",4),o(89),p(90,"translate"),l(),o(91),d(92,"span",4),o(93," referrer"),l()()()()(),d(94,"dt")(95,"span",4),o(96),p(97,"translate"),l(),o(98),l(),d(99,"dd",13)(100,"div",5)(101,"p"),o(102),p(103,"translate"),l(),d(104,"p"),o(105),p(106,"translate"),l(),d(107,"p",2)(108,"a",14)(109,"span",4),o(110),p(111,"translate"),l(),o(112),d(113,"span",4),o(114," referrer"),l()()()()(),d(115,"dt")(116,"span",4),o(117),p(118,"translate"),l(),o(119),l(),d(120,"dd",15)(121,"div",5)(122,"p"),o(123),p(124,"translate"),l(),d(125,"p"),o(126),p(127,"translate"),l(),d(128,"p",2)(129,"a",16)(130,"span",4),o(131),p(132,"translate"),l(),o(133),d(134,"span",4),o(135," referrer"),l()()()()(),d(136,"dt")(137,"span",4),o(138),p(139,"translate"),l(),o(140),l(),d(141,"dd",17)(142,"div",5)(143,"p"),o(144),p(145,"translate"),l(),d(146,"p"),o(147),p(148,"translate"),l(),d(149,"p",2)(150,"a",18)(151,"span",4),o(152),p(153,"translate"),l(),o(154),d(155,"span",4),o(156," referrer"),l()()()()(),d(157,"dt")(158,"span",4),o(159),p(160,"translate"),l(),o(161),l(),d(162,"dd",19)(163,"div",5)(164,"p"),o(165),p(166,"translate"),l(),d(167,"p"),o(168),p(169,"translate"),l(),d(170,"p",2)(171,"a",20)(172,"span",4),o(173),p(174,"translate"),l(),o(175),d(176,"span",4),o(177," referrer"),l()()()()()()()),n&2&&(a(3),f(i.helpTextSequences.loadFileIndx),a(5),f(u(9,51,"return.instruction")),a(2),y(" ",i.helpTextSequences.loadFileIndx," "),a(5),f(u(16,53,"load.file")),a(4),f(u(20,55,"hlp_load2")),a(3),f(u(23,57,"hlp_load3")),a(4),y("",u(27,59,"Instruction")," "),a(2),f(i.helpTextSequences.dossierIdIndx),a(4),f(u(33,61,"dossier.id")),a(2),w("innerHTML",u(35,63,"instruction.dossier.id.line1"),B),a(2),w("innerHTML",u(37,65,"instruction.dossier.id.line2"),B),a(5),f(u(42,67,"return.instruction")),a(2),y(" ",i.helpTextSequences.dossierIdIndx," "),a(5),y("",u(49,69,"Instruction")," "),a(2),f(i.helpTextSequences.holderAddrIndx),a(4),f(u(55,71,"heading.holder.address")),a(3),f(u(58,73,"hlp_holder.address1")),a(3),f(u(61,75,"hlp_holder.address2")),a(3),f(u(64,77,"hlp_holder.address3")),a(5),f(u(69,79,"return.instruction")),a(2),y(" ",i.helpTextSequences.holderAddrIndx," "),a(5),y("",u(76,81,"Instruction")," "),a(2),f(i.helpTextSequences.agentAddrIndx),a(4),f(u(82,83,"heading.agent.address")),a(3),f(u(85,85,"hlp_agent.address")),a(5),f(u(90,87,"return.instruction")),a(2),y(" ",i.helpTextSequences.agentAddrIndx," "),a(5),y("",u(97,89,"Instruction")," "),a(2),f(i.helpTextSequences.confmValidIndx),a(4),f(u(103,91,"info.confirmation")),a(3),f(u(106,93,"hlp_confirm")),a(5),f(u(111,95,"return.instruction")),a(2),y(" ",i.helpTextSequences.confmValidIndx," "),a(5),y("",u(118,97,"Instruction")," "),a(2),f(i.helpTextSequences.feeNoteIndx),a(4),f(u(124,99,"panel.title.fees")),a(3),f(u(127,101,"hlp_fee.note")),a(5),f(u(132,103,"return.instruction")),a(2),y(" ",i.helpTextSequences.feeNoteIndx," "),a(5),y("",u(139,105,"Instruction")," "),a(2),f(i.helpTextSequences.accessLetrIndx),a(4),f(u(145,107,"are.access.letters")),a(3),f(u(148,109,"hlp_access.letter")),a(5),f(u(153,111,"return.instruction")),a(2),y(" ",i.helpTextSequences.accessLetrIndx," "),a(5),y("",u(160,113,"Instruction")," "),a(2),f(i.helpTextSequences.accountNumIndx),a(4),f(u(166,115,"account.num")),a(3),f(u(169,117,"hlp_account.num")),a(5),f(u(174,119,"return.instruction")),a(2),y(" ",i.helpTextSequences.accountNumIndx," "))},dependencies:[R,b,_],encapsulation:2});let r=e;return r})();var X=(()=>{let e=class e{constructor(t){this._dataService=t,this.keywordsJsonPath=I+"keywords.json",this.countriesJsonPath=I+"countries.json",this.provincesJsonPath=I+"provinces.json",this.statesJsonPath=I+"states.json",this.mfTypesJsonPath=I+"mfTypes.json",this.txDescriptionsJsonPath=I+"txDescriptions.json",this.mfUsesJsonPath=I+"mfUses.json"}getLanguageList(){return this.cashedLanguages$||(this.cashedLanguages$=this._dataService.getData(this.keywordsJsonPath).pipe(A(t=>t.find(n=>n.name==="languages")?.data||[]),S(1))),this.cashedLanguages$}getYesNoList(){return this.cachedYesNo$||(this.cachedYesNo$=this._dataService.getData(this.keywordsJsonPath).pipe(A(t=>t.find(n=>n.name==="yesno")?.data||[]),S(1))),this.cachedYesNo$}getWhoResponsibleList(){return this.cachedWhoResponsible$||(this.cachedWhoResponsible$=this._dataService.getData(this.keywordsJsonPath).pipe(A(t=>t.find(n=>n.name==="whoResponsible")?.data||[]),S(1))),this.cachedWhoResponsible$}getCountryList(){return this.cachedCountries$||(this.cachedCountries$=this._dataService.getData(this.countriesJsonPath).pipe(S(1))),this.cachedCountries$}getProvinceList(){return this.cachedProvinces$||(this.cachedProvinces$=this._dataService.getData(this.provincesJsonPath).pipe(S(1))),this.cachedProvinces$}getStateList(){return this.cachedStates$||(this.cachedStates$=this._dataService.getData(this.statesJsonPath).pipe(S(1))),this.cachedStates$}getMasterFileTypes(){return this.mfTypeOptions$=this._dataService.getData(this.mfTypesJsonPath).pipe(S(1)),this.mfTypeOptions$}getTxDescriptions(){return this.txDescs$||(this.txDescs$=this._dataService.getSortedData(this.txDescriptionsJsonPath,Ue.PRIORITY).pipe(S(1))),this.txDescs$}getMasterFileTypeAndTransactionDescription(){let t=this._dataService.getData(I+"mfTypeTxDescription.json").pipe();return this.mfTypeTxDescOptions$=ee([t,this.getTxDescriptions()]).pipe(A(([n,i])=>n.map(c=>({parentId:c.mfId,children:i.filter(h=>c.descIds.includes(h.id))}))),S(1)),this.mfTypeTxDescOptions$}getMasterFileRevisedTypeAndTransactionDescription(){let t=this._dataService.getData(I+"mfRevisedTypeTxDescription.json");return this.mfRevisedTypeTxDescOptions$=ee([t,this.getTxDescriptions()]).pipe(A(([n,i])=>n.map(c=>({parentId:c.mfId,children:i.filter(h=>c.descIds.includes(h.id))}))),S(1)),this.mfRevisedTypeTxDescOptions$}getMasterFileUses(){return this.mfUseOptions$=this._dataService.getData(this.mfUsesJsonPath).pipe(S(1)),this.mfUseOptions$}};e.\u0275fac=function(n){return new(n||e)(m(Ve))},e.\u0275prov=x({token:e,factory:e.\u0275fac});let r=e;return r})();var Nt=()=>[import("./chunk-HZN3SNGO.js").then(r=>r.FormBaseComponent)];function Pt(r,e){r&1&&E(0,"app-form-base")}var at=(()=>{let e=class e{constructor(t,n){this._globalService=t,this._formDataLoader=n,this.devEnv=!1,this.loadFormBaseComponent=!1,this.dataSources=[this._formDataLoader.getCountryList(),this._formDataLoader.getProvinceList(),this._formDataLoader.getStateList(),this._formDataLoader.getYesNoList(),this._formDataLoader.getMasterFileTypes(),this._formDataLoader.getMasterFileUses(),this._formDataLoader.getTxDescriptions(),this._formDataLoader.getMasterFileTypeAndTransactionDescription(),this._formDataLoader.getMasterFileRevisedTypeAndTransactionDescription(),this._formDataLoader.getWhoResponsibleList(),this._formDataLoader.getLanguageList()]}ngOnInit(){this.language=this._globalService.currLanguage,this.helpIndex=this._globalService.helpIndex,this.devEnv=this._globalService.devEnv,ye(this.dataSources).subscribe(t=>{this._globalService.countryList=t[0],this._globalService.provinceList=t[1],this._globalService.stateList=t[2],this._globalService.yesnoList=t[3],this._globalService.mfTypes=t[4],this._globalService.mfUses=t[5],this._globalService.txDescs=t[6],this._globalService.mfTypeTxDescs=t[7],this._globalService.mfRevisedTypeDescs=t[8],this._globalService.whoResponsible=t[9],this._globalService.languageList=t[10],this.loadFormBaseComponent=!0})}};e.\u0275fac=function(n){return new(n||e)(M(K),M(X))},e.\u0275cmp=O({type:e,selectors:[["app-container"]],standalone:!0,features:[be([X]),L],decls:25,vars:17,consts:[["header",""],[1,"module-attention"],[1,"background-medium"],[3,"lang","purposeOfCollection"],[3,"lang"],[3,"helpTextSequences","lang"],["body",""]],template:function(n,i){n&1&&(d(0,"lib-layout"),oe(1,0),d(2,"section",1)(3,"details")(4,"summary",2),o(5),p(6,"translate"),l(),E(7,"lib-privacy-statement",3),p(8,"translate"),l()(),d(9,"div",1)(10,"details")(11,"summary",2),o(12),p(13,"translate"),l(),E(14,"lib-security-disclaimer",4),l()(),d(15,"section",1)(16,"details")(17,"summary",2),o(18),p(19,"translate"),l(),E(20,"app-instruction",5),l()(),ae(),oe(21,6),De(22,Pt,1,0),we(23,22,Nt),ae(),l()),n&2&&(a(5),f(u(6,9,"top.privacy.statement")),a(2),w("lang",i.language)("purposeOfCollection",u(8,11,"purpose.of.collection")),a(5),f(u(13,13,"top.security.declaimer")),a(2),w("lang",i.language),a(4),f(u(19,15,"top.instruction")),a(2),w("helpTextSequences",i.helpIndex)("lang",i.language),a(3),Ce(i.loadFormBaseComponent))},dependencies:[R,b,_,Fe,qe,Je,ot,Ye],encapsulation:2});let r=e;return r})();var lt=(()=>{let e=class e{constructor(t,n,i,c){this.translate=t,this._versionService=n,this.titleService=i,this._globalService=c,this.language=$e,this.appVersion="0.0.0",t.setDefaultLang(this.language),this.language=V.lang,t.use(this.language),this._globalService.currLanguage=this.language,this._globalService.helpIndex=ze,this._globalService.appVersion=this._versionService.getApplicationVersion(V),this._globalService.devEnv=!V.production,this._globalService.byPassChecksum=V.byPassCheckSum,this.translate.get("form.title").subscribe(h=>{this.setTitle(h)}),this.appVersion=this._globalService.appVersion}setTitle(t){this.titleService.setTitle(t)}};e.\u0275fac=function(n){return new(n||e)(M(je),M(J),M(G),M(K))},e.\u0275cmp=O({type:e,selectors:[["app-root"]],standalone:!0,features:[L],decls:8,vars:10,consts:[["property","name","id","wb-cont"],[1,"pagetag"],[3,"innerHTML"]],template:function(n,i){n&1&&(d(0,"h1",0),o(1),p(2,"translate"),p(3,"translate"),l(),d(4,"p",1),E(5,"strong",2),p(6,"translate"),l(),E(7,"app-container")),n&2&&(a(),Me("",u(2,4,"form.title")," (",u(3,6,"version")," ",i.appVersion,")"),a(4),w("innerHTML",u(6,8,"top.fromHC"),B))},dependencies:[R,b,_,at],encapsulation:2});let r=e;return r})();nt(lt,it).catch(r=>console.error(r));
