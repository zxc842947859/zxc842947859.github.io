(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46b2ce24"],{"49df":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("van-cell",{staticClass:"myCell",attrs:{"is-link":"",icon:t.icon,center:""},scopedSlots:t._u([{key:"title",fn:function(){return[i("div",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")])]},proxy:!0},{key:"default",fn:function(){return["img"===t.type&&t.value?i("img",{staticClass:"img",attrs:{src:t.value,alt:""}}):"img"!==t.type||t.value?i("div",{staticClass:"value"},[t._v(" "+t._s(t.value)+" ")]):i("img",{staticClass:"img",attrs:{src:n("cf05"),alt:""}})]},proxy:!0}])})},o=[],s={props:["title","value","type","icon"]},a=s,c=(n("88d6"),n("2877")),l=Object(c["a"])(a,i,o,!1,null,null,null);e["a"]=l.exports},5648:function(t,e,n){},"88d6":function(t,e,n){"use strict";var i=n("5648"),o=n.n(i);o.a},ca3b:function(t,e,n){"use strict";var i=n("f919"),o=n.n(i);o.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},dda3:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("van-nav-bar",{staticClass:"hmNavbar",attrs:{title:"个人信息","right-text":"保存","left-arrow":""},on:{"click-left":t.backMy,"click-right":t.saveInfo}}),n("div",{staticClass:"cell1"},[n("myCell",{attrs:{title:"头像",type:"img"},nativeOn:{click:function(e){return t.showPopup3(t.infoList.photo)}},model:{value:t.infoList.photo,callback:function(e){t.$set(t.infoList,"photo",e)},expression:"infoList.photo"}}),n("myCell",{attrs:{title:"昵称"},nativeOn:{click:function(e){return t.showPopup(t.infoList.name)}},model:{value:t.infoList.name,callback:function(e){t.$set(t.infoList,"name",e)},expression:"infoList.name"}}),n("myCell",{attrs:{title:"介绍"},nativeOn:{click:function(e){return t.showPopup2(t.myList.intro)}},model:{value:t.myList.intro,callback:function(e){t.$set(t.myList,"intro",e)},expression:"myList.intro"}})],1),n("div",{staticClass:"cell2"},[n("myCell",{attrs:{title:"性别",value:0===t.infoList.gender?"男":"女"},nativeOn:{click:function(e){t.show2=!0}}}),n("myCell",{attrs:{title:"生日",value:t._f("fromtime2")(t.infoList.birthday)},nativeOn:{click:function(e){t.show3=!0}}})],1),n("van-popup",{staticClass:"show5",style:{height:"152px",width:"90%"},model:{value:t.show5,callback:function(e){t.show5=e},expression:"show5"}},[n("van-uploader",{attrs:{"before-read":t.beforeRead,"after-read":t.afterRead,"max-count":"1"},on:{delete:t.deleteEvent}},[n("div",[t._v("从相册中选择")])]),n("div",{staticClass:"show5center"},[t._v("拍照")]),n("div",[t._v("取消")])],1),n("van-image-preview",{attrs:{images:[t.imgUrl]},on:{close:t.closeImg},model:{value:t.show6,callback:function(e){t.show6=e},expression:"show6"}}),n("van-popup",{style:{height:"20%"},attrs:{position:"bottom"},on:{closed:t.changeName},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("van-field",{attrs:{placeholder:"请输入"},model:{value:t.valueInput,callback:function(e){t.valueInput=e},expression:"valueInput"}})],1),n("van-popup",{style:{height:"20%"},attrs:{position:"bottom"},on:{closed:t.changeIntroduce},model:{value:t.show4,callback:function(e){t.show4=e},expression:"show4"}},[n("van-field",{attrs:{placeholder:"请输入"},model:{value:t.valueInput2,callback:function(e){t.valueInput2=e},expression:"valueInput2"}})],1),n("van-popup",{style:{height:"40%"},attrs:{position:"bottom"},model:{value:t.show2,callback:function(e){t.show2=e},expression:"show2"}},[n("van-picker",{attrs:{title:"性别","show-toolbar":"",columns:Object.values(t.genderObj),"default-index":t.infoList.gender},on:{confirm:t.changeGender,cancel:function(e){t.show2=!1}}})],1),n("van-popup",{style:{height:"40%"},attrs:{position:"bottom"},model:{value:t.show3,callback:function(e){t.show3=e},expression:"show3"}},[n("van-datetime-picker",{attrs:{type:"date",title:"选择年月日","min-date":t.minDate,"max-date":t.maxDate},on:{confirm:t.changeBirthday},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1)},o=[],s=(n("b0c0"),n("96cf"),n("1da1")),a=n("49df"),c=n("5a0c"),l=n.n(c),r=n("80c2"),u={data:function(){return{infoList:{},show:!1,show2:!1,show3:!1,show4:!1,show5:!1,show6:!1,minDate:new Date(1940,1,1),maxDate:new Date(2020,12,31),currentDate:"",valueInput:"",valueInput2:"",valueInput3:"",Introduce:"",kind:"",genderObj:{0:"男",1:"女"},myList:{},imgUrl:""}},methods:{initMy:function(){var t=this;Object(r["c"])().then((function(e){console.log(e),t.myList=e.data.data,t.$store.commit("setUserInfo",t.myList)})).catch((function(){t.$toast.fail("我的页面初始化失败")}))},closeImg:function(){this.show6=!1},backMy:function(){this.$router.push("/my")},saveInfo:function(){this.editInfo(),this.$router.push("/my")},getUserInfo:function(){var t=this;Object(r["b"])().then((function(e){console.log(e),t.infoList=e.data.data}))},showPopup:function(t){this.show=!0,this.valueInput=t},showPopup2:function(t){this.show4=!0,this.valueInput2=t},showPopup3:function(t){this.show5=!0,this.valueInput5=t},changeName:function(){this.infoList.name=this.valueInput,this.show1=!1},changeIntroduce:function(){this.myList.intro=this.valueInput2,this.$store.commit("setUserInfo",this.myList)},changeGender:function(t,e){this.show2=!1,this.infoList.gender=e},changeBirthday:function(t){this.infoList.birthday=this.currentDate,this.show3=!1},beforeRead:function(t){var e="image/png"===t.type||"image/jpeg"===t.type||"image/gif"===t.type;e||this.$toast.fail("请上传png,jpg,gif图片格式");var n=t.size/1024/1024<2;return n||this.$toast.fail("请上传2M内的图片"),e&&n},afterRead:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return window.console.log("res",t),n.next=3,Object(r["h"])(t);case 3:i=n.sent,console.log(i),e.imgUrl="http://p3.pstatp.com/large/dfic-imagehandler/d94034e2-8079-4de2-a05f-c81fc6f53212",e.show5=!1,e.show6=!0;case 8:case"end":return n.stop()}}),n)})))()},deleteEvent:function(){this.inputValue=""},editInfo:function(){var t=this,e=this.infoList.name,n=this.myList.intro,i=this.infoList.gender,o=l()(this.infoList.birthday).format("YYYY-MM-DD");Object(r["g"])({name:e,gender:i,birthday:o,intro:n}).then((function(e){t.$toast.fail("修改成功")})).catch((function(){t.$toast.fail("修改失败")}))}},components:{myCell:a["a"]},created:function(){this.getUserInfo(),this.initMy()}},h=u,f=(n("ca3b"),n("2877")),p=Object(f["a"])(h,i,o,!1,null,"44753d8b",null);e["default"]=p.exports},f919:function(t,e,n){}}]);
//# sourceMappingURL=chunk-46b2ce24.dcce868e.js.map