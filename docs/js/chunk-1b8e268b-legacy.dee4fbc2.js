(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b8e268b"],{"71a9":function(t,a,n){"use strict";var s=n("d725"),e=n.n(s);e.a},"8b84":function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("Main",{staticClass:"worksarea",attrs:{title:"참여 작품 모음",subtitle:"어떤 멋진 작품들이 제출되었을까요?",id:"area3"}},[n("h1",[t._v("\n\t\t1차\n\t")]),n("h1",[t._v("\n\t\t2차\n\t")]),n("Thumb",{attrs:{"works-id":"5bece16922321f320de51da8"}})],1)},e=[],r=n("2614"),i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"thumb"},[n("div",{staticClass:"thumbnail",style:{backgroundImage:"url('"+t.thumbnail+"')"}}),n("div",{staticClass:"info"},[t._v("\n    "+t._s(t.workData.name)+"\n  ")])])},o=[],u={name:"Thumb",data:function(){return{thumbnail:"https://playentry.org/uploads/thumb/".concat(this.worksId.substring(0,4),"/").concat(this.worksId,".png"),workData:{name:" "}}},methods:{getData:function(){var t=this;this.$http({url:"https://playentry.org/api/project/".concat(this.worksId),adapter:this.$jsonpAdapter}).then(function(a){t.workData=a.data})}},props:{worksId:String},mounted:function(){this.getData()}},c=u,l=(n("71a9"),n("2877")),h=Object(l["a"])(c,i,o,!1,null,"00e53f20",null),d=h.exports,p={name:"WorksPage",components:{Main:r["a"],Thumb:d}},b=p,m=Object(l["a"])(b,s,e,!1,null,null,null);a["default"]=m.exports},d725:function(t,a,n){}}]);
//# sourceMappingURL=chunk-1b8e268b-legacy.dee4fbc2.js.map