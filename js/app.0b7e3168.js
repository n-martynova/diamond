(function(t){function e(e){for(var i,n,a=e[0],l=e[1],c=e[2],d=0,f=[];d<a.length;d++)n=a[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);h&&h(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,a=1;a<s.length;a++){var l=s[a];0!==r[l]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var i={},r={app:0},o=[];function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/diamond/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var h=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},2899:function(t,e,s){"use strict";var i=s("bdda"),r=s.n(i);r.a},"56d7":function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.current,attrs:{id:"app"}},[s("div",{staticClass:"header"},[s("div",{staticClass:"logo",on:{click:function(e){"match3"===t.current&&(t.current="landing")}}}),t._v(" "),t.faqVisible?t._e():s("div",{staticClass:"faq-btn",on:{click:t.showFaq}},[t._v("FAQ")])]),t._v(" "),s("div",{staticClass:"main"},[s("landing",{directives:[{name:"show",rawName:"v-show",value:"landing"===t.current,expression:"current === 'landing'"}],on:{codeSent:function(e){return t.onCodeSent(e)}}}),t._v(" "),s("match3",{directives:[{name:"show",rawName:"v-show",value:"match3"===t.current,expression:"current === 'match3'"}],attrs:{token:t.token}})],1),t._v(" "),s("b-modal",{attrs:{id:"faq-modal",centered:"",scrollable:"","hide-header":"","hide-footer":"","no-fade":""}},[s("div",{staticClass:"close-btn",on:{click:t.hideFaq}}),t._v(" "),s("div",{staticClass:"faq"},[s("div",{staticClass:"faq-container"},[s("div",{staticClass:"col"},[s("p",{staticClass:"faq-question"},[t._v("Сколько можно получить очков за игру?")]),t._v(" "),s("p",{staticClass:"faq-answer"},[t._v("За одиночные цепочки"),s("br"),t._v("\n                        3 в ряд — 100 очков, 4 — 250 очков, 5 — 500 очков \n                        "),s("br"),s("br"),t._v("\n                        За комбо"),s("br"),t._v("\n                        3 по горизонтали и 3 по вертикали — 500 очков"),s("br"),t._v("\n                        3 по горизонтали и 4 по вертикали — 1000\n                    ")]),t._v(" "),s("p",{staticClass:"faq-question"},[t._v("А сколько у меня попыток?")]),t._v(" "),s("p",{staticClass:"faq-answer"},[t._v("Одна, но можно пригласить в игру друга и получить ещё одну попытку. За каждого друга — дополнительная попытка\n                    ")]),t._v(" "),s("p",{staticClass:"faq-question"},[t._v("Можно ли сыграть больше раз и получить за это больше призов?")]),t._v(" "),s("p",{staticClass:"faq-answer"},[t._v("Нет, количество призов ограничено. В розыгрыше будет засчитана попытка, за которую вы набрали больше всего очков\n                    ")])]),t._v(" "),s("div",{staticClass:"col"},[s("p",{staticClass:"faq-question"},[t._v("Могу ли я участвовать, если у меня Рокет Виртуалка?")]),t._v(" "),s("p",{staticClass:"faq-answer"},[t._v("Нет, сначала нужно выпустить пластиковую карту. После этого можно участвовать\n                    ")]),t._v(" "),s("p",{staticClass:"faq-question"},[t._v("Как я узнаю о победе?")]),t._v(" "),s("p",{staticClass:"faq-answer"},[t._v("В случае выигрыша мы напишем вам в чат приложения, а также опубликуем ваше имя и почту на этой страничке до 23:59 ХХ февраля\n                    ")])])])])])],1)},o=[];let n=()=>{console.clear(),console.log("%c\n\n    ██████╗  ██████╗  ██████╗██╗  ██╗███████╗████████╗\n    ██╔══██╗██╔═══██╗██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝\n    ██████╔╝██║   ██║██║     █████╔╝ █████╗     ██║   \n    ██╔══██╗██║   ██║██║     ██╔═██╗ ██╔══╝     ██║   \n    ██║  ██║╚██████╔╝╚██████╗██║  ██╗███████╗   ██║   \n    ╚═╝  ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝   \n                                                      \n     ██████╗  █████╗ ███╗   ███╗███████╗███████╗      \n    ██╔════╝ ██╔══██╗████╗ ████║██╔════╝██╔════╝      \n    ██║  ███╗███████║██╔████╔██║█████╗  ███████╗      \n    ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  ╚════██║      \n    ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗███████║      \n     ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝      \n\n\n",'font-family: "Courier New";')};var a=n,l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"game-container"},[s("div",{staticClass:"score-container",class:t.maxReached?"completed":"",attrs:{id:"score"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col left"},[s("div",{staticClass:"score"},[t._v(t._s(t._f("formatNumber")(t.animatedScore)))]),t._v(" "),s("div",{staticClass:"share-btn",on:{click:function(e){t.shareModalVisible=!0}}}),t._v(" "),s("div",{staticClass:"score-text"},[t._v("Очков собрано")])]),t._v(" "),s("div",{staticClass:"col right"},[s("div",{staticClass:"score-max"},[t._v(t._s(t._f("formatNumber")(t.maxScore)))]),t._v(" "),s("div",{staticClass:"score-text"},[t._v("Для участия в розыгрыше")])])]),t._v(" "),s("div",{staticClass:"progress-container",class:t.maxReached?"completed":""},[s("div",{staticClass:"progress"}),t._v(" "),s("div",{staticClass:"progress-mask",style:"width: "+(t.maxReached?0:100-t.progressPercent)+"%"})])]),t._v(" "),s("transition",{attrs:{name:"fade",mode:"out-in"}},[t.popupVisible?s("div",{staticClass:"popup 10k"},[s("div",{staticClass:"popup-container"},[s("div",{staticClass:"grats"},[t._v("Поздравляем! Вы набрали")]),t._v(" "),s("div",{staticClass:"score-max"},[t._v(t._s(t._f("formatNumber")(t.maxScore)))]),t._v(" "),s("div",{staticClass:"popup-text"},[t._v("\n                    И теперь участвуете в розыгрыше нового мерча от Рокетбанка. Ждите итоги XX февраля на этой странице и делитесь игрой с друзьями\n                ")]),t._v(" "),s("div",{staticClass:"resume-btn",on:{click:function(e){t.popupVisible=!1}}},[t._v("Продолжить игру")])])]):t._e()]),t._v(" "),s("transition",{attrs:{name:"fade",mode:"out-in"}},[t.shareModalVisible?s("div",{staticClass:"popup share-modal"},[s("div",{staticClass:"popup-container"},[s("div",{staticClass:"close-btn",on:{click:function(e){t.shareModalVisible=!1}}}),t._v(" "),s("div",{staticClass:"grats"},[t._v("Ваш результат")]),t._v(" "),s("div",{staticClass:"score-share"},[t._v(t._s(t._f("formatNumber")(t.score)))]),t._v(" "),s("div",{staticClass:"popup-text"},[t._v("\n                    Вы можете поделиться им со своими друзьями\n                ")]),t._v(" "),s("div",{staticClass:"social"},[s("a",{attrs:{href:t.fbLink,alt:"фейсбук",target:"_blank"}}),t._v(" "),s("a",{attrs:{href:t.vkLink,alt:"вконтакте",target:"_blank"}}),t._v(" "),s("a",{attrs:{href:t.twitterLink,alt:"твиттер",target:"_blank"}})])])]):t._e()])],1)},c=[],h=s("22a2");h["c"].prototype.removeFromParent=function(t){return t&&this.destroy({children:!0}),this.parent?(-1==this.parent.getChildIndex(this)||this.parent.removeChild(this),this):this},h["d"].prototype.alignAnchor=function(t){if(t=t||5,t<1||t>9)throw`Wrong number ${t} for aligning anchor`;let e=Math.floor((t-1)/3),s=t-1-3*e;return this.anchor.set(.5*s,.5*e),this};const d=888,f=563;let p=new h["a"]({width:d,height:f,transparent:!1,resolution:2,autoResize:!0});p.data={W:d,H:f};var v=p;let u={paths:{imagesUri:"img/"},field:{frontTileSpeed:550,frontTileWidth:87,frontTileHeight:85,matchPatterns:[{name:"horizontal",minMatch:3,score:100,extraScore:[150,400,900],list:[[0,0],[1,0],["+",0]]},{name:"vertical",minMatch:3,score:100,extraScore:[150,400,900],list:[[0,0],[0,1],[0,"+"]]}]},initialCIDs:{1:["icon","iconSelected","score100","score250","score500"],2:["icon","iconSelected","score100","score250","score500"],3:["icon","iconSelected","score100","score250","score500"],4:["icon","iconSelected","score100","score250","score500"],5:["icon","iconSelected","score100","score250","score500"],7:["icon"],8:["score1000"]},frontCIDs:[1,2,3,4,5],content:{1:{cid:1,name:"pink",icon:"pink.png",iconSelected:"pink-selected.png",color:"0xf100ff",score100:"pink-score-100.png",score250:"pink-score-250.png",score500:"pink-score-500.png"},2:{cid:2,name:"orange",icon:"orange.png",iconSelected:"orange-selected.png",color:"0xfd9e12",score100:"orange-score-100.png",score250:"orange-score-250.png",score500:"orange-score-500.png"},3:{cid:3,name:"green",icon:"green.png",iconSelected:"green-selected.png",color:"0x3ffd00",score100:"green-score-100.png",score250:"green-score-250.png",score500:"green-score-500.png"},4:{cid:4,name:"blue",icon:"blue.png",iconSelected:"blue-selected.png",color:"0x00ffff",score100:"blue-score-100.png",score250:"blue-score-250.png",score500:"blue-score-500.png"},5:{cid:5,name:"r",icon:"r.png",iconSelected:"r-selected.png",color:"0xfdffff",score100:"r-score-100.png",score250:"r-score-250.png",score500:"r-score-500.png"},6:{cid:6,name:"level",cols:6,rows:6},7:{cid:7,name:"bg",icon:"scene-straight.png"},8:{cid:8,name:"score-1000",score1000:"score-1000.png"}}};var _=u;class g extends h["b"]{constructor(){super()}loadContent(){return new Promise((t,e)=>{let s;for(let i in _.initialCIDs)s=_.content[i],_.initialCIDs[i].forEach(t=>{v.loader.add(s[t],_.paths.imagesUri+s[t])});v.loader.load((e,s)=>{setTimeout(t,100)})}).catch(t=>{console.log("ERROR Preloader: loadContent: ",t)})}}var m=s("c1ac");let b={rotated:function(t,e,s,i){let r=new h["d"](h["e"].from(i));r.scale.set(.4,.4),r.alignAnchor(),r.position.set(e,s),r.rotation=.1,t.stage.addChild(r);let o=200,n=r.y+r.height,a=new m["b"];function l(){r.removeFromParent(!0)}a.to(r,n/o,{y:0-r.height,rotation:-.05,ease:Power0.easeNone,onComplete:l}).to(r,.3,{alpha:0},"-=.8")}};var w=b;class C{constructor(t){this._field=t}generate(){let t,e,s;for(let i=0;i<this._field.levelObj.cols;i++){this._field.frontTiles[i]=[];for(let r=0;r<this._field.levelObj.rows;r++)s=[],e=this.getFront(i,r-1),e&&s.push(e.obj.cid),e=this.getFront(i-1,r),e&&s.push(e.obj.cid),e=this.getFront(i+1,r),e&&s.push(e.obj.cid),e=this.getFront(i,r+1),e&&s.push(e.obj.cid),t=this.getRndCID(s),this._field.createFrontTile(t,i,r)}this.checkPossibleMoves(!0)}match(){let t=this.getMatches();if(t.length<1)return!1;this.isMatching=!0;let e,s,i=this,r={vertical:0,horizontal:0};for(let n=0;n<t.length;n++){t.length>1&&(r[t[n].pattern.name]=Math.max(r[t[n].pattern.name],t[n].match.length)),r.vertical&&r.horizontal?this._field.score.addMatch(t[n],r):this._field.score.addMatch(t[n]);for(let i=0;i<t[n].match.length;i++)e=t[n].match[i],s=n+1==t.length&&i+1==t[n].match.length,this._field.frontTiles[e.col][e.row]=null,e.remove(s?o:void 0)}return!0;function o(){i.isMatching=!1,i.supplement()}}checkPossibleMoves(t,e){if(this.hasPossibleMoves())return e?e():void 0;this.shuffle(t,e)}shuffle(t,e){this.isShuffling=!0;let s=[],i=this;for(let p,v=0;v<this._field.frontTiles.length;v++)for(let t=0;t<this._field.frontTiles[v].length;t++)p=this._field.frontTiles[v][t],s.push(p),this._field.frontTiles[v][t].__resolverSaved=[p.x,p.y];let r,o,n,a,l,c=0,h=!1,d=1e3;do{if(c++,c>=d){h=!0;break}r=s.concat(),o=r.pop();while((l=r.length)>0)n=Math.round(Math.random()*(r.length-1)),a=r[n],this._field.swapper.swap(o,a,!1,void 0,!0),r.splice(n,1)}while(!this.hasPossibleMoves()||this.hasMatch());if(!t){let t,e=.4;for(let i,r=0;r<s.length;r++)i=s[r],t={x:i.__resolverSaved[0],y:i.__resolverSaved[1],ease:m["a"].easeNone},r+1>=s.length&&(t.onComplete=f),TweenLite.from(i,e,t)}function f(){i.isShuffling=!1}}hasPossibleMoves(){let t,e,s,i=[[0,-1],[1,0],[0,1],[-1,0]];for(let r=0;r<this._field.frontTiles.length;r++)for(let o=0;o<this._field.frontTiles[r].length;o++)if(t=this._field.frontTiles[r][o],t)for(let n=0;n<i.length;n++)if(e=this.getFront(r+i[n][0],o+i[n][1]),e&&(this._field.swapper.swap(t,e,!1,void 0,!0),s=this.hasMatch(),this._field.swapper.swap(t,e,!1,void 0,!0),s))return!0;return!1}supplement(){this.isSupplementing=!0;let t,e,s=this,i={},r=0;for(let a=0;a<this._field.frontTiles[0].length;a++)for(let s=0;s<this._field.frontTiles.length;s++)t=this._field.frontTiles[s][a],t||(t=o(s,a),t?this._field.moveFrontTile(t,s,a,n):(e=i[s]?this._field.getTimeByCells(i[s]):0,this._field.createFrontTile(this.getRndCID(),s,a,s,6,n,e).appear(e),i[s]||(i[s]=0),i[s]++),r++);function o(t,e){let i;for(e+=1;e<s._field.frontTiles[t].length;e++)if(i=s._field.frontTiles[t][e],i)return i;return null}function n(){r--,r<1&&(s.isSupplementing=!1,s.match()||s.checkPossibleMoves())}}getMatches(t){let e,s=[],i=[];t:for(let r=0;r<this._field.frontTiles.length;r++)for(let o=0;o<this._field.frontTiles[r].length;o++)if(e=this.getMatchFor(this._field.frontTiles[r][o].col,this._field.frontTiles[r][o].row,s),e&&(s=s.concat(e.match),i.push(e),!0===t))break t;return i}getMatchFor(t,e,s){let i,r,o,n,a,l,c;for(let h=0;h<_.field.matchPatterns.length;h++){l=_.field.matchPatterns[h],c=[];for(let h=0;h<l.list.length;h++){if(a=l.list[h],i=a[0],r=a[1],o="number"!=typeof i||"number"!=typeof r,o&&h--,i="+"==i?c.length>0?c[c.length-1].col+1:t:"-"==i?c.length>0?c[c.length-1].col-1:t:t+a[0],r="+"==r?c.length>0?c[c.length-1].row+1:e:"-"==r?c.length>0?c[c.length-1].row-1:e:e+a[1],n=this.getFront(i,r),!n){if(o){h++;continue}break}if(s&&-1!=s.indexOf(n)){if(o){h++;continue}break}if(-1==c.indexOf(n)){if(c.length>0&&c[0].obj.cid!=n.obj.cid){if(o){h++;continue}break}c.push(n)}else o&&h++}if(c.length>=l.minMatch)return{match:c,pattern:l}}return null}hasMatch(){let t=this.getMatches(!0);return t.length>0&&t[0]}getFront(t,e){return t<0||e<0||t>=this._field.frontTiles.length||e>=this._field.frontTiles[0].length?null:this._field.frontTiles[t][e]}areNear(t,e){return Math.abs(t.col-e.col)+Math.abs(t.row-e.row)===1}getRndCID(t){let e,s=_.frontCIDs.concat();if(t)for(let i=0;i<t.length;i++)e=s.indexOf(t[i]),-1!=e&&s.splice(e,1);return s[Math.round(Math.random()*(s.length-1))]}}class T{constructor(t){this._field=t}pick(t,e){if(t<0||e<0||t>=this._field.frontTiles.length||e>=this._field.frontTiles.length)return;let s=this._field.frontTiles[t][e];s&&(this._firstFrontTile?s==this._firstFrontTile?(s.select(!1),this._firstFrontTile=void 0):this._field.resolver.areNear(this._firstFrontTile,s)?(this._firstFrontTile.select(!1),this.swap(this._firstFrontTile,s),this._firstFrontTile=void 0):(this._firstFrontTile.select(!1),s.select(!0),this._firstFrontTile=s):(s.select(!0),this._firstFrontTile=s))}swap(t,e,s,i,r,o){void 0===s&&(s=!0),this.isSwapping=!0;let n,a,l=this,c=this._field.getCoordsByPos(e.col,e.row),h=this._field.getCoordsByPos(t.col,t.row),d=t.col,f=t.row;function p(){l.isSwapping=!1,l.afterSwap(t,e),!0===s?l.onSwapped(t,e,i,r):i&&i()}t.col=e.col,t.row=e.row,e.col=d,e.row=f,this._field.frontTiles[t.col][t.row]=t,this._field.frontTiles[e.col][e.row]=e,r?(t.position.set.apply(t.position,c),e.position.set.apply(e.position,h),p()):(a={x:c[0],y:c[1]},a=Object.assign(a,o),n=o&&o.time?o.time:Math.max(this._field.getTimeByCoords(a.x,t.x),this._field.getTimeByCoords(a.y,t.y)),this._tweenSwap1=m["c"].to(t,n,a),a={x:h[0],y:h[1],onComplete:p},a=Object.assign(a,o),this._tweenSwap2=m["c"].to(e,n,a))}onSwapped(t,e,s,i){this._field.resolver.hasMatch()?(this._field.resolver.match(),s&&s()):this.swap(t,e,!1,s,i)}afterSwap(t,e){t.select(!1),e.select(!1)}destroy(){this._tweenSwap1&&(this._tweenSwap1.kill(),delete this._tweenSwap1),this._tweenSwap2&&(this._tweenSwap2.kill(),delete this._tweenSwap2)}}var y=new i["a"];class S{constructor(t){this._field=t,this._score=0}addMatch(t,e){let s,i=t.pattern.score,r=t.match.length-t.pattern.minMatch-1;s=e?3===e.vertical&&3===e.horizontal?400:900:!t.pattern.extraScore||r<0?0:r>=t.pattern.extraScore.length?t.pattern.extraScore[t.pattern.extraScore.length-1]:t.pattern.extraScore[r],this._score+=i+s,y.$emit("scoreChanged",this._score);let o,n=[],a=[];for(let l=0;l<t.match.length;l++)o=t.match[l].toGlobal(v.stage),n.push(o.x),a.push(o.y);n=n.reduce((t,e)=>t+e)/n.length,a=a.reduce((t,e)=>t+e)/a.length-20,window.ratio<1&&(n/=window.ratio,a/=window.ratio),s?900===s?w.rotated(v,n+25,a-25,_.content[8].score1000):w.rotated(v,n+25,a-25,t.match[0].obj[`score${i+s}`]):w.rotated(v,n,a,t.match[0].obj[`score${i}`])}}class k extends h["b"]{constructor(t,e,s){super(),this.col=e,this.row=s,this.obj=_.content[t],this._bg=new h["d"](h["e"].from(this.obj.icon)),this._bg.anchor.set(.5,.5),this._bg.angle=-45,this._bg.width=80,this._bg.height=150,5===t&&(this._bg.position.y+=8),this.addChild(this._bg)}appear(t,e){this.alpha=0,this._tweenAppearing=TweenLite.to(this,.3,{delay:t,alpha:1,onComplete:e,onCompleteParams:[this]})}select(t){this.isSelected!=t&&(this.isSelected=t,this._bg.texture=!0===t?h["e"].from(this.obj.iconSelected):h["e"].from(this.obj.icon))}remove(t){this._tweenRemoving=TweenLite.to(this,.3,{alpha:0,onComplete:()=>{t&&t(this),this.removeFromParent(!0)}})}}class x extends h["b"]{constructor(t){super(),this.levelObj=_.content[t],this.score=new S(this),this.resolver=new C(this),this.swapper=new T(this),this.cont=new h["b"],this.addChild(this.cont),this.fillFrontTiles(),this.interactive=!0,this.on("pointerdown",this.onStartClick=this.onStartClick.bind(this))}onStartClick(t){if(this.isFieldBlocked())return;let e=t.data.getLocalPosition(this),s=this.getPosByCoords(e.x,e.y);this.swapper.pick(s[0],s[1])}isFieldBlocked(){return!0===this.swapper.isSwapping||!0===this.resolver.isMatching||!0===this.resolver.isSupplementing||!0===this.resolver.isShuffling}createFrontTile(t,e,s,i,r,o,n){let a=new k(t,e,s);if(this.frontTiles[e][s]=a,this.cont.addChild(a),void 0!==i&&void 0!==r){a.position.set.apply(a.position,this.getCoordsByPos(i,r));let t=this.getCoordsByPos(e,s);this.tweenFrontTile(a,t[0],t[1],o,n)}else a.position.set.apply(a.position,this.getCoordsByPos(e,s)),o&&o(a);return a}moveFrontTile(t,e,s,i){this.frontTiles[t.col][t.row]=null,this.frontTiles[e][s]=t,t.col=e,t.row=s;let r=this.getCoordsByPos(e,s);return this.tweenFrontTile(t,r[0],r[1],i),t}tweenFrontTile(t,e,s,i,r){m["c"].to(t,this.getTimeByCoords(s,t.y),{delay:r,x:e,y:s,ease:m["a"].easeNone,onComplete:i,onCompleteParams:[t]})}fillFrontTiles(){!0!==this._isFrontTilesFilled&&(this.frontTiles=[],this.resolver.generate(),this._isFrontTilesFilled=!0)}getCoordsByPos(t,e){let s=_.field.frontTileWidth,i=_.field.frontTileHeight;return[.5*s+s*t,.5*i+i*e]}getPosByCoords(t,e){let s=_.field.frontTileWidth,i=_.field.frontTileHeight;return[Math.floor(t/s),Math.floor(e/i)]}getTimeByCoords(t,e){return Math.abs(t-e)/_.field.frontTileSpeed}getTimeByCells(t){return this.getTimeByCoords(this.getCoordsByPos(0,0)[1],this.getCoordsByPos(0,t)[1])}destroy(){for(var t=0;t<this.frontTiles.length;t++)for(var e=0;e<this.frontTiles[t].length;e++)this.frontTiles[t][e]&&m["c"].killTweensOf(this.frontTiles[t][e]);this.resolver.destroy(),this.swapper.destroy(),super.destroy()}}class M extends h["b"]{constructor(t){super(),this.obj=_.content[7],this._bgSprite=new h["d"](h["e"].from(this.obj.icon)),this._bgSprite.scale.set(.5,.5),this._bgSprite.position.set(35,30),this.addChild(this._bgSprite),this._field=new x(t),this.addChild(this._field)}destroy(){super.destroy()}}const F=888,P=563;window.ratio=1;class q{constructor(){let t=document.querySelector(".game-container"),e=document.getElementById("score");t.insertBefore(v.view,e),this._preloader=new g,this._preloader.loadContent().then(t=>this.onLoaded()),v.stage.addChild(this._preloader)}onLoaded(){this._preloader.removeFromParent(!0);let t=new M(6,6),e=new h["b"];e.skew.y=-.25,e.skew.x=-.25,e.angle=45,e.position.set(F/2-5,0),v.stage.addChild(e),e.addChild(t),this.resize(this),window.addEventListener("resize",this.resize())}resize(){let t=window.innerWidth;ratio=t/F;let e=P*ratio;t<F&&(v.renderer.resize(t,e),v.stage.scale.x=v.stage.scale.y=ratio)}}var j={name:"match3",props:{token:{type:String,default:""}},data(){return{score:0,animatedScore:0,maxScore:1e4,maxReached:!1,interval:!1,shareModalVisible:!1,popupVisible:!1}},filters:{formatNumber(t){return new Intl.NumberFormat("ru-RU").format(Math.round(t))}},computed:{progressPercent(){return this.score/1e4*100},inviteUrl(){return"https://n-martynova.github.io/diamond/"},fbLink(){return`https://www.facebook.com/sharer.php?u=${this.inviteUrl}&hashtag=%23&quote=Мой результат — ${this.score} очков!`},vkLink(){return`https://vk.com/share.php?url=${this.inviteUrl}&title=Мой результат — ${this.score} очков!`},twitterLink(){return"https://twitter.com/intent/tweet?hashtags=рокетбанк&&related=rocketbank"+`&text=Мой результат — ${this.score} очков!&tw_p=tweetbutton&url=${this.inviteUrl}&via=rocketbank`}},watch:{score:function(){clearInterval(this.interval),this.score>=this.maxScore&&!this.maxReached&&(this.maxReached=!0,this.popupVisible=!0),this.interval=window.setInterval(function(){if(this.displayedScore!==this.score){var t=(this.score-this.animatedScore)/10;t=t>=0?Math.ceil(t):Math.floor(t),this.animatedScore=this.animatedScore+t}}.bind(this),20)}},mounted(){new q,this.displayedScore=this.score?this.score:0,y.$on("scoreChanged",t=>{this.score=t})},methods:{}},O=j,$=(s("6b81"),s("2877")),B=Object($["a"])(O,l,c,!1,null,null,null),R=B.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"landing"},[(t.isMobile,s("div",{staticClass:"bg-container"},[s("div",{staticClass:"bg-back",attrs:{"data-rellax-speed":"-7"}}),t._v(" "),s("div",{staticClass:"bg-front",attrs:{"data-rellax-speed":"2"}})])),t._v(" "),s("div",{staticClass:"landing-container"},[t._m(0),t._v(" "),s("h3",[t._v("Смотрите, что есть")]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"game-section"},[t._m(2),t._v(" "),s("div",{staticClass:"col"},[s("h3",[t._v("Конечно, подарим")]),t._v(" "),s("p",[t._v("За то, что сыграете три в ряд — великий и красивый тайм-киллер")]),t._v(" "),s("p",[t._v("Зарабатывайте очки, собирая как можно больше одинаковых стрелочек подряд")]),t._v(" "),s("p",[t._v("Среди набравших 10 000 очков мы разыграем 10 паков: сумка + носки + кардхолдер")]),t._v(" "),s("p",[t._v("Итоги розыгрыша объявим 29 февраля")]),t._v(" "),s("div",{staticClass:"play-btn",on:{click:function(e){return t.onCodeSent(e)}}},[t._v("Играть")])])]),t._v(" "),t._m(3),t._v(" "),s("a",{attrs:{href:"#"}},[t._v("Узнать больше о тарифе")]),t._v(" "),s("p",{staticClass:"license"},[t._v("КИВИ Банк (АО), qiwi.com, лицензия Банка России № 2241 от 22.01.2015 филиал Рокетбанк.")]),t._v(" "),s("a",{attrs:{href:"#"}},[t._v("Условия акции")])])])},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"landing-header"},[s("h1",[t._v("Игра не на жизнь,"),s("br"),t._v("а на мерч")]),t._v(" "),s("p",[t._v("Не прошло и полугода от нового года. "),s("br"),t._v("Это самый свежий мерч!")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"merch"},[s("div",{staticClass:"col"},[s("div",{staticClass:"merch-img"}),t._v(" "),s("div",{staticClass:"merch-title"},[t._v("Кардхолдер")]),t._v(" "),s("div",{staticClass:"merch-description"},[t._v("Одёжка для карты")])]),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"merch-img"}),t._v(" "),s("div",{staticClass:"merch-title"},[t._v("Сумка")]),t._v(" "),s("div",{staticClass:"merch-description"},[t._v("На пояс")])]),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"merch-img"}),t._v(" "),s("div",{staticClass:"merch-title"},[t._v("Носки")]),t._v(" "),s("div",{staticClass:"merch-description"},[t._v("А точнее, целая пара")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col"},[i("img",{attrs:{src:s("d967"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about-rocket"},[s("h3",[t._v("Рокетбанк − это:")]),t._v(" "),s("div",{staticClass:"rocket-card"}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"about-title"},[t._v("Бесплатная карта")]),t._v(" "),s("div",{staticClass:"about-text"},[t._v("Мы не берём комиссию за выпуск, доставку и обслуживание карты")])]),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"about-title"},[t._v("Выгодный кешбэк")]),t._v(" "),s("div",{staticClass:"about-text"},[t._v("Кешбэк до 20% у партнёров и 1% с остальных покупок")])]),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"about-title"},[t._v("Процент на остаток")]),t._v(" "),s("div",{staticClass:"about-text"},[t._v("Каждый месяц начисляем 4,5% годовых в рублях на любой остаток по карте")])])]),t._v(" "),s("a",{staticClass:"get-card-btn",attrs:{href:"https://rocketbank.ru/welcome/try-now/",target:"_blank"}},[t._v("Заказать карту")]),t._v(" "),s("p",{staticClass:"cities"},[s("strong",[t._v("Бесплатно доставим карту в города:")]),t._v(" Москва, Санкт-Петербург, Барнаул, Волгоград, Воронеж, Екатеринбург, Ижевск, Иркутск, Казань, Калининград, Краснодар, Красноярск, Набережные Челны, Нижний Новгород, Новосибирск, Омск, Оренбург, Пермь, Ростов-на‑Дону, Самара, Саратов, Сочи, Тольятти, Томск, Тула, Тюмень, Уфа, Челябинск и Ярославль")])])}],L=s("1db3"),z=s.n(L),E={name:"landing",data(){return{}},computed:{isMobile(){return window.innerWidth<1250},utm(){return window.location.search}},mounted(){new z.a(".bg-front",{breakpoints:[],vertical:!0,horizontal:!1}),new z.a(".bg-back",{breakpoints:[],vertical:!0,horizontal:!1})},methods:{onCodeSent(t){this.$emit("codeSent",t)}}},V=E,U=(s("2899"),Object($["a"])(V,N,I,!1,null,null,null)),D=U.exports,W=(s("bc3a"),{name:"app",components:{match3:R,landing:D},data(){return{token:"",current:"landing",faqVisible:!1,isClient:!1,signupUrl:"",targetElement:null}},computed:{utm(){return window.location.search}},created(){a()},mounted(){},methods:{onCodeSent(t){this.isClient=t.client,t.client||(this.signupUrl=this.utm?t.signupUrl+this.utm:t.signupUrl),this.token=t.token,this.current="match3"},showFaq(){this.faqVisible=!0,this.$bvModal.show("faq-modal")},hideFaq(){this.faqVisible=!1,this.$nextTick(()=>{this.$bvModal.hide("faq-modal")})}}}),A=W,H=(s("5c0b"),Object($["a"])(A,r,o,!1,null,null,null)),J=H.exports,X=s("dbbe");i["a"].config.productionTip=!1,i["a"].use(X["a"]),new i["a"]({render:function(t){return t(J)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var i=s("9c0c"),r=s.n(i);r.a},"6b81":function(t,e,s){"use strict";var i=s("e596"),r=s.n(i);r.a},"9c0c":function(t,e,s){},bdda:function(t,e,s){},d967:function(t,e,s){t.exports=s.p+"img/demo.0635ba00.gif"},e596:function(t,e,s){}});