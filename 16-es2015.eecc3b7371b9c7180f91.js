(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{AkJU:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{}var i=u("pMnS"),e=u("MKJQ"),r=u("sZkV"),b=u("iInd"),a=u("SVse"),c=u("s7LF"),h=u("mrSG");class s{constructor(l,n,u){this.popoverController=l,this.NavCtrl=n,this.navParams=u,this.timeLeft=0,this.timeDisplay=0}ngOnInit(){this.interval=setInterval(()=>{this.timeLeft<1500&&(this.timeLeft++,this.timeDisplay=this.timeLeft)},1e3)}close(){this.popoverController.dismiss()}}class p{constructor(l,n,u){this.storage=l,this.popoverController=n,this.nav=u,this.wheel="0",this.pickUp=0,this.scoreIn=0,this.scoreOut=0,this.scoreLow=0,this.trench=0,this.numArray=[],this.timeLeft=0,this.timeDisplay=0,this.isButtonVisible=!1,this.fillClimb="outline",this.climbStat=0,this.matchDataArray=[]}ngOnInit(){}ionViewDidEnter(){const l=["name","teamNum","alliance","matchType","matchNum","win"];for(let n=0;n<l.length;n++)this.storage.get(l[n]).then(l=>{this.numArray.push(l),this.matchDataArray.push(l)});console.log(this.numArray),this.timeLeft=0,this.interval=setInterval(()=>{this.timeLeft<1500?(this.timeLeft++,this.timeDisplay=this.timeLeft/10):1500===this.timeLeft&&(this.submit(),this.isButtonVisible=!0)},100),this.storage.remove("matchData")}climb(){this.matchDataArray.push(this.timeDisplay.toString(),"c",this.climbS),console.log(this.matchDataArray)}crossedInit(){this.initLine="true",this.matchDataArray.push(this.timeDisplay.toString(),"1",this.initLine),console.log(this.matchDataArray)}wheelSpin(){this.wheel="1",this.matchDataArray.push(this.timeDisplay.toString(),"w",this.wheel),console.log(this.matchDataArray)}stageInt(){this.matchDataArray.push(this.timeDisplay.toString(),"ss",this.stage),console.log(this.matchDataArray)}ballPickUp(){this.pickUp++,this.matchDataArray.push(this.timeDisplay.toString(),"pu","1"),console.log(this.matchDataArray)}innerScore(){this.matchDataArray.push(this.timeDisplay.toString(),"s","i"),console.log(this.matchDataArray)}outerScore(){this.matchDataArray.push(this.timeDisplay.toString(),"s","o"),console.log(this.matchDataArray)}lowerScore(){this.matchDataArray.push(this.timeDisplay.toString(),"s","l"),console.log(this.matchDataArray)}outerInnerFail(){this.matchDataArray.push(this.timeDisplay.toString(),"f","o"),console.log(this.matchDataArray)}lowerFail(){this.matchDataArray.push(this.timeDisplay.toString(),"f","l"),console.log(this.matchDataArray)}ballDropped(){this.matchDataArray.push(this.timeDisplay.toString(),"pu","f"),console.log(this.matchDataArray)}trenchRun(){this.trench++,this.matchDataArray.push(this.timeDisplay.toString(),"tr",this.trench.toString()),console.log(this.matchDataArray)}presentPopover(l){return h.a(this,void 0,void 0,(function*(){this.matchDataArray.push(this.timeDisplay.toString(),"d","st"),console.log(this.matchDataArray);const n=yield this.popoverController.create({component:s,event:l,cssClass:"custom-popover",backdropDismiss:!1});return n.onDidDismiss().then(()=>{this.matchDataArray.push(this.timeDisplay.toString(),"d","en"),console.log(this.matchDataArray)}),yield n.present()}))}attemptClimb(){this.fillClimb="solid",this.matchDataArray.push(this.timeDisplay.toString(),"c","st"),console.log(this.matchDataArray)}submit(){this.storage.set("matchData",this.matchDataArray)}}var g=u("xgBC"),m=t.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}ion-card[_ngcontent-%COMP%]{width:100%;height:100%;margin:0}ion-grid[_ngcontent-%COMP%]{height:100%}.row[_ngcontent-%COMP%]{height:10.5%}ion-button[_ngcontent-%COMP%]{height:90%;width:100%}.goalRow[_ngcontent-%COMP%]{height:35%}.goalRow[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:100%;width:100%}.oneTimeRow[_ngcontent-%COMP%]{height:25%}ion-segment-button[_ngcontent-%COMP%]{--indicator-color:#989aa2}.stageRow[_ngcontent-%COMP%]{height:35%}.goalRowAction[_ngcontent-%COMP%], .infoRow[_ngcontent-%COMP%], .scoreRow[_ngcontent-%COMP%]{height:25%}.goalRowAction[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;height:100%}.pickRow[_ngcontent-%COMP%]{height:20%}.pickRow[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;height:100%}.nextBtn[_ngcontent-%COMP%]{width:100%;height:100%;position:right}.defenseBtn[_ngcontent-%COMP%]{position:center}"]],data:{}});function k(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,8,"ion-button",[["class","nextBtn"],["float-right",""],["routerDirection","forward"],["routerLinkActive","router-link-active"]],null,[[null,"click"]],(function(l,n,u){var o=!0,i=l.component;return"click"===n&&(o=!1!==t.Ab(l,2).onClick()&&o),"click"===n&&(o=!1!==t.Ab(l,4).onClick(u)&&o),"click"===n&&(o=!1!==i.submit()&&o),o}),e.x,e.b)),t.ob(1,49152,null,0,r.h,[t.h,t.k,t.x],{routerDirection:[0,"routerDirection"]},null),t.ob(2,16384,[[3,4]],0,b.n,[b.m,b.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Bb(3,1),t.ob(4,737280,null,0,r.Gb,[a.g,r.Bb,t.k,b.m,[2,b.n]],{routerDirection:[0,"routerDirection"]},null),t.ob(5,1720320,null,2,b.o,[b.m,t.k,t.B,[2,b.n],[2,b.p]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Db(603979776,3,{links:1}),t.Db(603979776,4,{linksWithHrefs:1}),(l()(),t.Fb(-1,0,[" Next "]))],(function(l,n){l(n,1,0,"forward");var u=l(n,3,0,"/third");l(n,2,0,u),l(n,4,0,"forward"),l(n,5,0,"router-link-active")}),null)}function d(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,14,"ion-header",[],null,null,null,e.G,e.k)),t.ob(1,49152,null,0,r.y,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,12,"ion-toolbar",[],null,null,null,e.R,e.v)),t.ob(3,49152,null,0,r.wb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,e.y,e.c)),t.ob(5,49152,null,0,r.i,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,e.M,e.q)),t.ob(7,49152,null,0,r.O,[t.h,t.k,t.x],null,null),(l()(),t.pb(8,0,null,0,6,"ion-title",[],null,null,null,e.Q,e.u)),t.ob(9,49152,null,0,r.ub,[t.h,t.k,t.x],null,null),(l()(),t.pb(10,0,null,0,2,"ion-label",[],null,null,null,e.K,e.o)),t.ob(11,49152,null,0,r.K,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Scout "])),(l()(),t.pb(13,0,null,0,1,"ion-icon",[["name","eye-outline"]],null,null,null,e.H,e.l)),t.ob(14,49152,null,0,r.z,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(15,0,null,null,207,"ion-content",[["class","ion-text-justify"]],null,null,null,e.E,e.i)),t.ob(16,49152,null,0,r.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(17,0,null,0,205,"ion-grid",[],null,null,null,e.F,e.j)),t.ob(18,49152,null,0,r.x,[t.h,t.k,t.x],null,null),(l()(),t.pb(19,0,null,0,30,"ion-row",[],null,null,null,e.N,e.r)),t.ob(20,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(21,0,null,0,15,"ion-col",[],null,null,null,e.D,e.h)),t.ob(22,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(23,0,null,0,13,"ion-list",[],null,null,null,e.L,e.p)),t.ob(24,49152,null,0,r.L,[t.h,t.k,t.x],null,null),(l()(),t.pb(25,0,null,0,5,"ion-item",[],null,null,null,e.J,e.n)),t.ob(26,49152,null,0,r.E,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Team # "])),(l()(),t.pb(28,0,null,0,2,"ion-chip",[],null,null,null,e.C,e.g)),t.ob(29,49152,null,0,r.p,[t.h,t.k,t.x],null,null),(l()(),t.Fb(30,0,[" "," "])),(l()(),t.pb(31,0,null,0,5,"ion-item",[],null,null,null,e.J,e.n)),t.ob(32,49152,null,0,r.E,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Alliance "])),(l()(),t.pb(34,0,null,0,2,"ion-chip",[],null,null,null,e.C,e.g)),t.ob(35,49152,null,0,r.p,[t.h,t.k,t.x],null,null),(l()(),t.Fb(36,0,[" "," "])),(l()(),t.pb(37,0,null,0,12,"ion-col",[],null,null,null,e.D,e.h)),t.ob(38,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(39,0,null,0,10,"ion-list",[],null,null,null,e.L,e.p)),t.ob(40,49152,null,0,r.L,[t.h,t.k,t.x],null,null),(l()(),t.pb(41,0,null,0,2,"ion-item",[],null,null,null,e.J,e.n)),t.ob(42,49152,null,0,r.E,[t.h,t.k,t.x],null,null),(l()(),t.Fb(43,0,[" Time: "," "])),(l()(),t.pb(44,0,null,0,5,"ion-item",[],null,null,null,e.J,e.n)),t.ob(45,49152,null,0,r.E,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Match "])),(l()(),t.pb(47,0,null,0,2,"ion-chip",[],null,null,null,e.C,e.g)),t.ob(48,49152,null,0,r.p,[t.h,t.k,t.x],null,null),(l()(),t.Fb(49,0,[" "," "," "])),(l()(),t.pb(50,0,null,0,48,"ion-row",[],null,null,null,e.N,e.r)),t.ob(51,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(52,0,null,0,46,"ion-col",[],null,null,null,e.D,e.h)),t.ob(53,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(54,0,null,0,44,"ion-card",[],null,null,null,e.B,e.d)),t.ob(55,49152,null,0,r.j,[t.h,t.k,t.x],null,null),(l()(),t.pb(56,0,null,0,11,"ion-row",[],null,null,null,e.N,e.r)),t.ob(57,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(58,0,null,0,4,"ion-col",[["size","6"]],null,null,null,e.D,e.h)),t.ob(59,49152,null,0,r.q,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(60,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.crossedInit()&&t),t}),e.x,e.b)),t.ob(61,49152,null,0,r.h,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Crosed Init Line "])),(l()(),t.pb(63,0,null,0,4,"ion-col",[["size","6"]],null,null,null,e.D,e.h)),t.ob(64,49152,null,0,r.q,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(65,0,null,0,2,"ion-button",[["class","ctrlBtn"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.wheelSpin()&&t),t}),e.x,e.b)),t.ob(66,49152,null,0,r.h,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Control Panel "])),(l()(),t.pb(68,0,null,0,30,"ion-row",[],null,null,null,e.N,e.r)),t.ob(69,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(70,0,null,0,4,"ion-col",[],null,null,null,e.D,e.h)),t.ob(71,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(72,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.attemptClimb()&&t),t}),e.x,e.b)),t.ob(73,49152,null,0,r.h,[t.h,t.k,t.x],{fill:[0,"fill"]},null),(l()(),t.Fb(-1,0,[" Attempt Climb "])),(l()(),t.pb(75,0,null,0,23,"ion-col",[],null,null,null,e.D,e.h)),t.ob(76,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(77,0,null,0,21,"ion-segment",[["id","c"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==t.Ab(l,78)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Ab(l,78)._handleChangeEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(i.climbS=u)&&o),"ionChange"===n&&(o=!1!==i.climb()&&o),o}),e.P,e.s)),t.ob(78,16384,null,0,r.Hb,[t.k],null,null),t.Cb(1024,null,c.b,(function(l){return[l]}),[r.Hb]),t.ob(80,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,c.c,null,[c.e]),t.ob(82,16384,null,0,c.d,[[4,c.c]],null,null),t.ob(83,49152,null,0,r.fb,[t.h,t.k,t.x],null,null),(l()(),t.pb(84,0,null,0,4,"ion-segment-button",[["id","c"],["value","Failed "]],null,null,null,e.O,e.t)),t.ob(85,49152,null,0,r.gb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.pb(86,0,null,0,2,"ion-label",[],null,null,null,e.K,e.o)),t.ob(87,49152,null,0,r.K,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Failed "])),(l()(),t.pb(89,0,null,0,4,"ion-segment-button",[["id","c"],["value","Climb"]],null,null,null,e.O,e.t)),t.ob(90,49152,null,0,r.gb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.pb(91,0,null,0,2,"ion-label",[],null,null,null,e.K,e.o)),t.ob(92,49152,null,0,r.K,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Climb "])),(l()(),t.pb(94,0,null,0,4,"ion-segment-button",[["id","c"],["value","Level"]],null,null,null,e.O,e.t)),t.ob(95,49152,null,0,r.gb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.pb(96,0,null,0,2,"ion-label",[],null,null,null,e.K,e.o)),t.ob(97,49152,null,0,r.K,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Level "])),(l()(),t.pb(99,0,null,0,56,"ion-row",[["class","goalRow"]],null,null,null,e.N,e.r)),t.ob(100,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(101,0,null,0,54,"ion-col",[],null,null,null,e.D,e.h)),t.ob(102,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(103,0,null,0,52,"ion-card",[],null,null,null,e.B,e.d)),t.ob(104,49152,null,0,r.j,[t.h,t.k,t.x],null,null),(l()(),t.pb(105,0,null,0,11,"ion-row",[["class","pickRow"]],null,null,null,e.N,e.r)),t.ob(106,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(107,0,null,0,4,"ion-col",[],null,null,null,e.D,e.h)),t.ob(108,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(109,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.ballPickUp()&&t),t}),e.x,e.b)),t.ob(110,49152,null,0,r.h,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Picked Up Ball "])),(l()(),t.pb(112,0,null,0,4,"ion-col",[],null,null,null,e.D,e.h)),t.ob(113,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(114,0,null,0,2,"ion-button",[["color","danger"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.ballDropped()&&t),t}),e.x,e.b)),t.ob(115,49152,null,0,r.h,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.Fb(-1,0,[" Failed "])),(l()(),t.pb(117,0,null,0,12,"ion-row",[["class","goalRowAction"]],null,null,null,e.N,e.r)),t.ob(118,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(119,0,null,0,4,"ion-col",[["size","10"]],null,null,null,e.D,e.h)),t.ob(120,49152,null,0,r.q,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(121,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.innerScore()&&t),t}),e.x,e.b)),t.ob(122,49152,null,0,r.h,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Scored Inner Port "])),(l()(),t.pb(124,0,null,0,5,"ion-col",[["size","2"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.outerInnerFail()&&t),t}),e.D,e.h)),t.ob(125,49152,null,0,r.q,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(126,0,null,0,3,"ion-button",[["color","danger"]],null,null,null,e.x,e.b)),t.ob(127,49152,null,0,r.h,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.pb(128,0,null,0,1,"ion-icon",[["name","close-circle"]],null,null,null,e.H,e.l)),t.ob(129,49152,null,0,r.z,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(130,0,null,0,12,"ion-row",[["class","goalRowAction"]],null,null,null,e.N,e.r)),t.ob(131,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(132,0,null,0,4,"ion-col",[["size","10"]],null,null,null,e.D,e.h)),t.ob(133,49152,null,0,r.q,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(134,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.outerScore()&&t),t}),e.x,e.b)),t.ob(135,49152,null,0,r.h,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Scored Outer Port "])),(l()(),t.pb(137,0,null,0,5,"ion-col",[["size","2"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.outerInnerFail()&&t),t}),e.D,e.h)),t.ob(138,49152,null,0,r.q,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(139,0,null,0,3,"ion-button",[["color","danger"]],null,null,null,e.x,e.b)),t.ob(140,49152,null,0,r.h,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.pb(141,0,null,0,1,"ion-icon",[["name","close-circle"]],null,null,null,e.H,e.l)),t.ob(142,49152,null,0,r.z,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(143,0,null,0,12,"ion-row",[["class","goalRowAction"]],null,null,null,e.N,e.r)),t.ob(144,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(145,0,null,0,4,"ion-col",[["size","10"]],null,null,null,e.D,e.h)),t.ob(146,49152,null,0,r.q,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(147,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.lowerScore()&&t),t}),e.x,e.b)),t.ob(148,49152,null,0,r.h,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Scored Lower Port "])),(l()(),t.pb(150,0,null,0,5,"ion-col",[["size","2"]],null,null,null,e.D,e.h)),t.ob(151,49152,null,0,r.q,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(152,0,null,0,3,"ion-button",[["color","danger"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.lowerFail()&&t),t}),e.x,e.b)),t.ob(153,49152,null,0,r.h,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.pb(154,0,null,0,1,"ion-icon",[["name","close-circle"]],null,null,null,e.H,e.l)),t.ob(155,49152,null,0,r.z,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(156,0,null,0,47,"ion-row",[],null,null,null,e.N,e.r)),t.ob(157,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(158,0,null,0,45,"ion-col",[],null,null,null,e.D,e.h)),t.ob(159,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(160,0,null,0,43,"ion-card",[],null,null,null,e.B,e.d)),t.ob(161,49152,null,0,r.j,[t.h,t.k,t.x],null,null),(l()(),t.pb(162,0,null,0,25,"ion-row",[],null,null,null,e.N,e.r)),t.ob(163,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(164,0,null,0,23,"ion-col",[],null,null,null,e.D,e.h)),t.ob(165,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(166,0,null,0,21,"ion-segment",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==t.Ab(l,167)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Ab(l,167)._handleChangeEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(i.stage=u)&&o),"ionChange"===n&&(o=!1!==i.stageInt()&&o),o}),e.P,e.s)),t.ob(167,16384,null,0,r.Hb,[t.k],null,null),t.Cb(1024,null,c.b,(function(l){return[l]}),[r.Hb]),t.ob(169,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,c.c,null,[c.e]),t.ob(171,16384,null,0,c.d,[[4,c.c]],null,null),t.ob(172,49152,null,0,r.fb,[t.h,t.k,t.x],null,null),(l()(),t.pb(173,0,null,0,4,"ion-col",[],null,null,null,e.D,e.h)),t.ob(174,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(175,0,null,0,2,"ion-segment-button",[["value","1"]],null,null,null,e.O,e.t)),t.ob(176,49152,null,0,r.gb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.Fb(-1,0,[" Stage 1 "])),(l()(),t.pb(178,0,null,0,4,"ion-col",[],null,null,null,e.D,e.h)),t.ob(179,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(180,0,null,0,2,"ion-segment-button",[["value","2"]],null,null,null,e.O,e.t)),t.ob(181,49152,null,0,r.gb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.Fb(-1,0,[" Stage 2 "])),(l()(),t.pb(183,0,null,0,4,"ion-col",[],null,null,null,e.D,e.h)),t.ob(184,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(185,0,null,0,2,"ion-segment-button",[["value","3"]],null,null,null,e.O,e.t)),t.ob(186,49152,null,0,r.gb,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.Fb(-1,0,[" Stage 3 "])),(l()(),t.pb(188,0,null,0,15,"ion-row",[],null,null,null,e.N,e.r)),t.ob(189,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(190,0,null,0,13,"ion-col",[],null,null,null,e.D,e.h)),t.ob(191,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(192,0,null,0,11,"ion-row",[],null,null,null,e.N,e.r)),t.ob(193,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(194,0,null,0,4,"ion-col",[],null,null,null,e.D,e.h)),t.ob(195,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(196,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.trenchRun()&&t),t}),e.x,e.b)),t.ob(197,49152,null,0,r.h,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Trench Run "])),(l()(),t.pb(199,0,null,0,4,"ion-col",[],null,null,null,e.D,e.h)),t.ob(200,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(201,0,null,0,2,"ion-button",[["backdrop-dismiss","false"],["class","defenseBtn"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.presentPopover(u)&&t),t}),e.x,e.b)),t.ob(202,49152,null,0,r.h,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Defense "])),(l()(),t.pb(204,0,null,0,18,"ion-row",[["text-right",""]],null,null,null,e.N,e.r)),t.ob(205,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(206,0,null,0,10,"ion-col",[["size","4"]],null,null,null,e.D,e.h)),t.ob(207,49152,null,0,r.q,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(208,0,null,0,8,"ion-button",[["routerLinkActive","router-link-active"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Ab(l,210).onClick()&&o),"click"===n&&(o=!1!==t.Ab(l,212).onClick(u)&&o),o}),e.x,e.b)),t.ob(209,49152,null,0,r.h,[t.h,t.k,t.x],null,null),t.ob(210,16384,[[1,4]],0,b.n,[b.m,b.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Bb(211,1),t.ob(212,737280,null,0,r.Gb,[a.g,r.Bb,t.k,b.m,[2,b.n]],null,null),t.ob(213,1720320,null,2,b.o,[b.m,t.k,t.B,[2,b.n],[2,b.p]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Db(603979776,1,{links:1}),t.Db(603979776,2,{linksWithHrefs:1}),(l()(),t.Fb(-1,0,[" Back "])),(l()(),t.pb(217,0,null,0,1,"ion-col",[["size","4"]],null,null,null,e.D,e.h)),t.ob(218,49152,null,0,r.q,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(219,0,null,0,3,"ion-col",[["size","4"]],null,null,null,e.D,e.h)),t.ob(220,49152,null,0,r.q,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.eb(16777216,null,0,1,null,k)),t.ob(222,16384,null,0,a.h,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,14,0,"eye-outline"),l(n,59,0,"6"),l(n,64,0,"6"),l(n,73,0,u.fillClimb),l(n,80,0,u.climbS),l(n,85,0,"Failed "),l(n,90,0,"Climb"),l(n,95,0,"Level"),l(n,115,0,"danger"),l(n,120,0,"10"),l(n,125,0,"2"),l(n,127,0,"danger"),l(n,129,0,"close-circle"),l(n,133,0,"10"),l(n,138,0,"2"),l(n,140,0,"danger"),l(n,142,0,"close-circle"),l(n,146,0,"10"),l(n,151,0,"2"),l(n,153,0,"danger"),l(n,155,0,"close-circle"),l(n,169,0,u.stage),l(n,176,0,"1"),l(n,181,0,"2"),l(n,186,0,"3"),l(n,207,0,"4");var t=l(n,211,0,"/home");l(n,210,0,t),l(n,212,0),l(n,213,0,"router-link-active"),l(n,218,0,"4"),l(n,220,0,"4"),l(n,222,0,u.isButtonVisible)}),(function(l,n){var u=n.component;l(n,30,0,u.numArray[1]),l(n,36,0,u.numArray[2]),l(n,43,0,u.timeDisplay),l(n,49,0,u.numArray[3],u.numArray[4]),l(n,77,0,t.Ab(n,82).ngClassUntouched,t.Ab(n,82).ngClassTouched,t.Ab(n,82).ngClassPristine,t.Ab(n,82).ngClassDirty,t.Ab(n,82).ngClassValid,t.Ab(n,82).ngClassInvalid,t.Ab(n,82).ngClassPending),l(n,166,0,t.Ab(n,171).ngClassUntouched,t.Ab(n,171).ngClassTouched,t.Ab(n,171).ngClassPristine,t.Ab(n,171).ngClassDirty,t.Ab(n,171).ngClassValid,t.Ab(n,171).ngClassInvalid,t.Ab(n,171).ngClassPending)}))}function x(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-second",[],null,null,null,d,m)),t.ob(1,114688,null,0,p,[g.b,r.Fb,r.Bb],null,null)],(function(l,n){l(n,1,0)}),null)}var D=t.lb("app-second",p,x,{},{},[]),y=t.nb({encapsulation:0,styles:[[".Screen[_ngcontent-%COMP%]{height:100%;width:100%}.header[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function v(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"h1",[["class","header"],["style","font-size: 95px;"]],null,null,null,null,null)),(l()(),t.Fb(1,null,[" ",""])),(l()(),t.pb(2,0,null,null,1,"h5",[["class","header"],["style","padding: 5%;"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" During this time, the robot can not score. Press exit to deactivate this "])),(l()(),t.pb(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,3,"div",[["class","header"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.close()&&t),t}),e.x,e.b)),t.ob(8,49152,null,0,r.h,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,[" Exit "]))],null,(function(l,n){l(n,1,0,n.component.timeDisplay)}))}function C(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-popover",[],null,null,null,v,y)),t.ob(1,114688,null,0,s,[r.Fb,r.Bb,r.Cb],null,null)],(function(l,n){l(n,1,0)}),null)}var A=t.lb("app-popover",s,C,{},{},[]);class f{}u.d(n,"SecondPageModuleNgFactory",(function(){return w}));var w=t.mb(o,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[i.a,D,A]],[3,t.j],t.v]),t.yb(4608,a.j,a.i,[t.s,[2,a.p]]),t.yb(4608,c.g,c.g,[]),t.yb(4608,r.a,r.a,[t.x,t.g]),t.yb(4608,r.Ab,r.Ab,[r.a,t.j,t.p]),t.yb(4608,r.Fb,r.Fb,[r.a,t.j,t.p]),t.yb(5120,g.b,g.d,[g.c]),t.yb(1073742336,a.b,a.b,[]),t.yb(1073742336,c.f,c.f,[]),t.yb(1073742336,c.a,c.a,[]),t.yb(1073742336,r.yb,r.yb,[]),t.yb(1073742336,b.q,b.q,[[2,b.v],[2,b.m]]),t.yb(1073742336,f,f,[]),t.yb(1073742336,g.a,g.a,[]),t.yb(1073742336,o,o,[]),t.yb(1024,b.k,(function(){return[[{path:"",component:p}]]}),[]),t.yb(256,g.c,null,[])])}))}}]);