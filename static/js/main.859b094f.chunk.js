(this["webpackJsonpyoutube-search"]=this["webpackJsonpyoutube-search"]||[]).push([[0],{119:function(e,t,r){e.exports={preloaderWrapper:"Preloader_preloaderWrapper__1nkrm",preloader:"Preloader_preloader__3-DO8",spinner:"Preloader_spinner__2wdil",spin:"Preloader_spin__3MQn3"}},159:function(e,t,r){e.exports={searchPageWrapper:"SearchPage_searchPageWrapper__2sGXw"}},160:function(e,t,r){e.exports={NotFoundWrapper:"NotFound_NotFoundWrapper__3fan6"}},175:function(e,t,r){},266:function(e,t,r){"use strict";r.r(t);var a=r(0),s=r.n(a),n=r(22),c=r.n(n),i=(r(174),r(175),r(12)),o=r(268),u=r(269),l=r(270),j=r(273),d=r(66),h=r(48),m=r.n(h),f=r(24),b=r(4),p={labelCol:{span:24},wrapperCol:{span:24}},O={wrapperCol:{span:24}},x=function(e){return e.isAuth?Object(b.jsx)(f.a,{to:"/"}):Object(b.jsx)(o.a,{className:m.a.formWrapper,align:"middle",children:Object(b.jsx)(u.a,{flex:"auto",children:Object(b.jsxs)(l.a,Object(i.a)(Object(i.a)({},p),{},{name:"basic",initialValues:{},onFinish:function(t){e.loginMe(t.username,t.password)},onFinishFailed:function(e){console.log("Failed:",e)},className:m.a.form,children:[Object(b.jsx)(o.a,{children:Object(b.jsx)(u.a,{flex:"auto",children:Object(b.jsx)("div",{className:m.a.formTitle,children:"\u0412\u0445\u043e\u0434"})})}),Object(b.jsx)(o.a,{children:Object(b.jsx)(u.a,{flex:"auto",children:Object(b.jsxs)("div",{className:m.a.formInfo,children:[Object(b.jsx)("div",{className:m.a.formInfoItem,children:"test test"}),Object(b.jsx)("div",{className:m.a.formInfoItem,children:"test2 test"}),Object(b.jsx)("div",{className:m.a.formInfoItem,children:"test3 test"})]})})}),Object(b.jsx)(l.a.Item,{className:m.a.formItem,label:"\u041b\u043e\u0433\u0438\u043d",name:"username",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f"}],children:Object(b.jsx)(j.a,{})}),Object(b.jsx)(l.a.Item,{className:m.a.formItem,label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}],children:Object(b.jsx)(j.a.Password,{})}),e.errorFormMessage&&Object(b.jsx)("div",{children:e.errorFormMessage}),Object(b.jsx)(l.a.Item,Object(i.a)(Object(i.a)({},O),{},{className:m.a.formItem,children:Object(b.jsx)(d.a,{disabled:e.isSubmitting,type:"primary",htmlType:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})}))]}))})})},v=r(86),_=r(47),y=r(155),g=r(23),I=r.n(g),S=r(37),P=r(85),N=r.n(P),q={login:function(){var e=Object(S.a)(I.a.mark((function e(t,r){var a,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/youtubeSearch/users.json");case 2:return a=e.sent,s=a.data.users.filter((function(e){return e.username===t&&e.password===r})),e.abrupt("return",new Promise((function(e,t){if(s.length){var r=s[0];e({status:!0,errorMessage:null,profileUser:{id:r.id,username:r.username,token:r.token}})}else e({status:!1,errorMessage:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",profileUser:null})})));case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),me:function(){var e=Object(S.a)(I.a.mark((function e(t){var r,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/youtubeSearch/users.json");case 2:return r=e.sent,a=r.data.users.filter((function(e){return e.token===t})),e.abrupt("return",new Promise((function(e,t){a.length&&e(a[0].id)})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return P.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=".concat(e.filterBy,"&type=video&q=").concat(e.query,"&key=").concat("AIzaSyBAZO2bs3tpjhRFgXd3SJGhJdUqRxcoT68","&maxResults=").concat(e.maxCount))},F=function(){return localStorage.getItem("token")},T=function(e){return JSON.parse(localStorage.getItem("queries_id_".concat(e)))},C=function(e,t){localStorage.setItem("queries_id_".concat(t),JSON.stringify(e))},k=function(e){return q.me(e)},Q=function(e,t){return q.login(e,t)},A="auth/SET_ERROR_FORM",M="auth/SET_SUBMITTING",R="auth/SET_AUTH",L={userId:null,isAuth:!1,errorFormMessage:null,isSubmitting:!1},W=function(e){return{type:A,msg:e}},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:R,auth:e,id:t}},B=function(e){return{type:M,submitting:e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(i.a)(Object(i.a)({},e),{},{isAuth:!1,errorFormMessage:t.msg});case R:return Object(i.a)(Object(i.a)({},e),{},{isAuth:t.auth,userId:t.id});case M:return Object(i.a)(Object(i.a)({},e),{},{isSubmitting:t.submitting});default:return e}},H="favorites/CHANGE_CURRENT_QUERY",U="favorites/SET_QUERY_ARRAY",V={currentQuery:{query:"",queryTitle:"",filterBy:"relevance",maxCount:12,position:null},queryArray:null},J=function(e){return{type:U,newArray:e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(i.a)(Object(i.a)({},e),{},{queryArray:t.newArray});case H:return Object(i.a)(Object(i.a)({},e),{},{currentQuery:t.query});default:return e}},X="SET_INITIALIZATION",Y={init:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(i.a)(Object(i.a)({},e),{},{init:!0});default:return e}},z="search/SET_POSTS",K="search/SET_QUERY_PARAMS",$="search/CLEAR_PARAMS_POSTS",ee={queryParams:{query:"",queryTitle:"",filterBy:"relevance",maxCount:12},posts:null},te=function(e){return{type:z,posts:e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(i.a)(Object(i.a)({},e),{},{queryParams:t.query});case z:return Object(i.a)(Object(i.a)({},e),{},{posts:t.posts});case $:return Object(i.a)(Object(i.a)({},e),{},{queryParams:{query:"",queryTitle:"",filterBy:"relevance",maxCount:12},posts:null});default:return e}},ae=Object(_.c)({auth:D,app:Z,searchPage:re,favoritesPage:G}),se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.d,ne=Object(_.e)(ae,se(Object(_.a)(y.a))),ce=r(40),ie=r(41),oe=r(156),ue=r(157),le=r(168),je=r(165),de=function(e){return{auth:e.auth.isAuth}},he=function(e){var t=function(t){Object(le.a)(a,t);var r=Object(je.a)(a);function a(){return Object(oe.a)(this,a),r.apply(this,arguments)}return Object(ue.a)(a,[{key:"render",value:function(){return this.props.auth?Object(b.jsx)(e,Object(i.a)({},this.props)):Object(b.jsx)(f.a,{to:"/login"})}}]),a}(s.a.Component);return Object(v.b)(de)(t)},me=r(45),fe=r.n(me),be=r.p+"static/media/heart.77b355ab.svg",pe=r.p+"static/media/heart_saved.d3c10237.svg",Oe=function(e){var t=l.a.useForm(),r=Object(ie.a)(t,1)[0],s=Object(a.useState)(!1),n=Object(ie.a)(s,2),c=n[0],h=n[1];Object(a.useEffect)((function(){return r.setFieldsValue({search:e.queryParams.query}),function(){e.clearParamsPosts()}}),[]);return Object(b.jsx)(o.a,{className:e.searchResult?fe.a.searchWrapper+" "+fe.a.searchWrapperWithResult:fe.a.searchWrapper,children:Object(b.jsxs)(u.a,{flex:"100%",children:[Object(b.jsx)("div",{className:fe.a.searchHeader,children:"\u041f\u043e\u0438\u0441\u043a \u0432\u0438\u0434\u0435\u043e"}),Object(b.jsx)(l.a,{form:r,name:"basic",initialValues:{search:e.queryParams.query},onFinish:function(t){h(!0);var r=Object(i.a)(Object(i.a)({},e.queryParams),{},{query:t.search});e.setQueryParams(r),e.getPosts(r).then((function(){h(!1)}))},children:Object(b.jsxs)(o.a,{children:[Object(b.jsxs)(u.a,{span:"20",className:fe.a.searchLine,children:[Object(b.jsx)(l.a.Item,{name:"search",rules:[{required:!0,message:"\u0421\u0442\u0440\u043e\u043a\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439"}],children:Object(b.jsx)(j.a,{})}),Object(b.jsxs)("div",{className:fe.a.saveSearchWrapper,children:[Object(b.jsx)("span",{className:fe.a.saveSearchIcn,onClick:function(){r.validateFields(["search"]).then((function(t){if(t.search){var r=Object(i.a)(Object(i.a)({},e.queryParams),{},{query:t.search});e.setQueryParams(r),e.showModal()}}))},children:Object(b.jsx)("img",{src:e.isSaved?pe:be,alt:"Save"})}),Object(b.jsxs)("div",{className:e.isSaved?fe.a.saveSearchText+" "+fe.a.active:fe.a.saveSearchText,children:["\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \xab\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435\xbb",Object(b.jsx)(ce.b,{to:"/favorites/",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})]})]})]}),Object(b.jsx)(u.a,{span:"4",children:Object(b.jsx)(l.a.Item,{className:fe.a.formItem,children:Object(b.jsx)(d.a,{type:"primary",htmlType:"submit",loading:c,children:"\u041d\u0430\u0439\u0442\u0438"})})})]})})]})})},xe=r(274),ve=r(271),_e=r(272),ye=r(163),ge=r(70),Ie=r.n(ge),Se={labelCol:{span:24},wrapperCol:{span:24}},Pe=function(e){var t=e.isModalVisible,r=e.hideModal,s=e.queryDisabled,n=void 0!==s&&s,c=e.queryParams,h=e.onSubmitForm,m=e.formTitle,f=e.formButton,p=l.a.useForm(),O=Object(ie.a)(p,1)[0],x=xe.a.Option;Object(a.useEffect)((function(){O.setFieldsValue(Object(i.a)({},c))}),[c,O]);var v=function(e){O.setFieldsValue({maxCount:e})};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(ye.a,{onCancel:function(){r()},visible:t,footer:null,forceRender:!0,children:Object(b.jsxs)(l.a,{className:Ie.a.form,form:O,name:"basic",initialValues:c,onFinish:function(e){h(e,c.position),r()},children:[Object(b.jsx)("div",{className:Ie.a.formTitle,children:m}),Object(b.jsx)(l.a.Item,Object(i.a)(Object(i.a)({className:Ie.a.formItem},Se),{},{label:"\u0417\u0430\u043f\u0440\u043e\u0441",name:"query",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441"}],children:Object(b.jsx)(j.a,{disabled:n})})),Object(b.jsx)(l.a.Item,Object(i.a)(Object(i.a)({className:Ie.a.formItem},Se),{},{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"queryTitle",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}],children:Object(b.jsx)(j.a,{})})),Object(b.jsx)(l.a.Item,Object(i.a)(Object(i.a)({className:Ie.a.formItem,name:"filterBy",label:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e"},Se),{},{children:Object(b.jsxs)(xe.a,{style:{width:"100%"},children:[Object(b.jsx)(x,{value:"relevance",children:"\u041f\u043e \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u0438"}),Object(b.jsx)(x,{value:"date",children:"\u041f\u043e \u0434\u0430\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),Object(b.jsx)(x,{value:"viewCount",children:"\u041f\u043e \u0447\u0438\u0441\u043b\u0443 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"}),Object(b.jsx)(x,{value:"rating",children:"\u041f\u043e \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0443"}),Object(b.jsx)(x,{value:"title",children:"\u041f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"}),Object(b.jsx)(x,{value:"videoCount",children:"\u041f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u0432\u0438\u0434\u0435\u043e"})]})})),Object(b.jsxs)(o.a,{children:[Object(b.jsx)(u.a,{span:24,children:Object(b.jsx)("div",{className:Ie.a.formDescr,children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e:"})}),Object(b.jsx)(u.a,{span:20,children:Object(b.jsx)(l.a.Item,{name:"maxCount",children:Object(b.jsx)(ve.a,{min:1,max:50,onChange:v})})}),Object(b.jsx)(u.a,{span:4,children:Object(b.jsx)(l.a.Item,{name:"maxCount",children:Object(b.jsx)(_e.a,{min:1,max:50,onChange:v})})})]}),Object(b.jsx)(d.a,{type:"primary",htmlType:"submit",children:f})]})})})},Ne=r(159),qe=r.n(Ne),we=r(46),Fe=r.n(we),Te=function(e){var t=e.item;return"row"===e.isRowLayout?Object(b.jsx)(u.a,{span:24,children:Object(b.jsxs)("a",{className:Fe.a.post+" "+Fe.a.postRow,target:"_blank",rel:"noreferrer",href:t.link,children:[Object(b.jsx)("div",{className:Fe.a.postLeft,children:Object(b.jsx)("div",{className:Fe.a.postImage,children:Object(b.jsx)("img",{src:t.img,alt:"videoIMG"})})}),Object(b.jsxs)("div",{className:Fe.a.postRight,children:[Object(b.jsx)("div",{className:Fe.a.postTitle,children:t.title}),Object(b.jsx)("div",{className:Fe.a.postDescr,children:t.description})]})]})}):Object(b.jsx)(u.a,{span:6,children:Object(b.jsxs)("a",{className:Fe.a.post,target:"_blank",rel:"noreferrer",href:t.link,children:[Object(b.jsx)("div",{className:Fe.a.postImage,children:Object(b.jsx)("img",{src:t.img,alt:"videoIMG"})}),Object(b.jsx)("div",{className:Fe.a.postTitle,children:t.title}),Object(b.jsx)("div",{className:Fe.a.postDescr,children:t.description})]})})},Ce=r(51),ke=r.n(Ce),Qe=r.p+"static/media/list.02b67eab.svg",Ae=r.p+"static/media/grid.10e3a154.svg",Me=function(e){var t=Object(a.useState)("row"),r=Object(ie.a)(t,2),s=r[0],n=r[1];return Object(b.jsxs)("div",{className:ke.a.postsContainer,children:[Object(b.jsxs)(o.a,{className:ke.a.postsFilter,children:[Object(b.jsxs)(u.a,{flex:"50%",children:["\u0412\u0438\u0434\u0435\u043e \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443  \xab",e.queryName,"\xbb"]}),Object(b.jsx)(u.a,{flex:"50%",children:Object(b.jsxs)("div",{className:ke.a.layoutIcons,children:[Object(b.jsx)("div",{onClick:function(){n("row")},className:"row"===s?ke.a.active+" "+ke.a.layoutIcn:ke.a.layoutIcn,children:Object(b.jsx)("img",{src:Qe,alt:"row"})}),Object(b.jsx)("div",{onClick:function(){n("grid")},className:"grid"===s?ke.a.active+" "+ke.a.layoutIcn:ke.a.layoutIcn,children:Object(b.jsx)("img",{src:Ae,alt:"grid"})})]})})]}),Object(b.jsx)(o.a,{gutter:16,children:e.posts.length?e.posts.map((function(e,t){return Object(b.jsx)(Te,{isRowLayout:s,item:e,i:t},t)})):""})]})},Re=Object(_.d)(he)((function(e){var t=Object(a.useState)(!1),r=Object(ie.a)(t,2),s=r[0],n=r[1],c=Object(a.useState)(!1),i=Object(ie.a)(c,2),o=i[0],u=i[1];Object(a.useEffect)((function(){return function(){u(!1)}}),[]);var l=function(){n(!0)};return Object(b.jsxs)("div",{className:qe.a.searchPageWrapper,children:[Object(b.jsx)(Oe,{isSaved:o,searchResult:!!e.posts,clearParamsPosts:e.clearParamsPosts,setQueryParams:e.setQueryParams,queryParams:e.queryParams,showModal:l,getPosts:e.getPosts}),e.posts&&Object(b.jsx)(Me,{queryName:e.queryParams.query,posts:e.posts}),Object(b.jsx)(Pe,{onSubmitForm:function(t){u(!0),e.addQueries(t,e.userId).then((function(){setTimeout((function(){u(!1)}),3e3)}))},queryParams:e.queryParams,isModalVisible:s,showModal:l,hideModal:function(){n(!1)},queryDisabled:!0,formTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441",formButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})),Le=r(88),We=r.n(Le),Ee=Object(_.d)(he)((function(e){var t=Object(a.useState)(!1),r=Object(ie.a)(t,2),s=r[0],n=r[1];Object(a.useEffect)((function(){e.getFavorites()}),[]);var c=function(){n(!0)};return Object(b.jsxs)("div",{className:We.a.favWrapper,children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})}),e.queryArray?e.queryArray.map((function(t,r){return Object(b.jsxs)("div",{className:We.a.favItem,children:[Object(b.jsx)("div",{className:We.a.favTitle,children:t.queryTitle}),Object(b.jsxs)("div",{className:We.a.favButtons,children:[Object(b.jsx)(ce.b,{to:"/",onClick:function(){!function(t){e.setQueryParams(e.queryArray[t]),e.getPosts(e.queryArray[t])}(r)},children:"\u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c"}),Object(b.jsx)(d.a,{type:"link",onClick:function(){!function(t){var r=Object(i.a)(Object(i.a)({},e.queryArray[t]),{},{position:t});e.changeCurrentQuery(r),c()}(r)},children:"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(b.jsx)(d.a,{type:"link",danger:!0,onClick:function(){!function(t){e.deleteQuery(t)}(r)},children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"})]})]},r)})):"\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442",Object(b.jsx)(Pe,{onSubmitForm:function(t,r){e.changeQueries(t,r)},queryParams:e.currentQuery,isModalVisible:s,showModal:c,hideModal:function(){n(!1)},queryDisabled:!1,formTitle:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441",formButton:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})})),Be=r(64),De=r.n(Be),He=function(e){var t=e.logout;return Object(b.jsx)("header",{children:Object(b.jsx)("div",{className:De.a.headerContainer,children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(u.a,{flex:"50%",children:Object(b.jsxs)("div",{className:De.a.headerLeft,children:[Object(b.jsx)(ce.c,{className:De.a.headerLink,exact:!0,to:"/",activeClassName:De.a.active,children:"\u041f\u043e\u0438\u0441\u043a"}),Object(b.jsx)(ce.c,{className:De.a.headerLink,exact:!0,to:"/favorites/",activeClassName:De.a.active,children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})]})}),Object(b.jsx)(u.a,{flex:"50%",children:Object(b.jsx)("div",{className:De.a.headerRight,children:Object(b.jsx)(d.a,{type:"link",onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})})})]})})})},Ue=r(160),Ve=r.n(Ue),Je=function(){return Object(b.jsx)("div",{className:Ve.a.NotFoundWrapper,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"404"}),"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"]})})},Ge=r(119),Xe=r.n(Ge),Ye=function(){return Object(b.jsx)("div",{className:Xe.a.preloaderWrapper,children:Object(b.jsx)("div",{className:Xe.a.preloader,children:Object(b.jsx)("div",{className:Xe.a.spinner})})})},Ze=Object(v.b)((function(e){return{init:e.app.init,errorFormMessage:e.auth.errorFormMessage,isAuth:e.auth.isAuth,isSubmitting:e.auth.isSubmitting,posts:e.searchPage.posts,queryParams:e.searchPage.queryParams,queryArray:e.favoritesPage.queryArray,currentQuery:e.favoritesPage.currentQuery}}),{loginMe:function(e,t){return function(){var r=Object(S.a)(I.a.mark((function r(a){var s;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(B(!0)),r.next=3,Q(e,t);case 3:(s=r.sent).status?(a(E(!0,s.profileUser.id)),a(B(!1)),localStorage.setItem("token",s.profileUser.token)):(a(W(s.errorMessage)),setTimeout((function(){a(W(null)),a(B(!1))}),3e3));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},changeQueries:function(e,t){return function(){var r=Object(S.a)(I.a.mark((function r(a,s){var n,c;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=ne.getState().auth.userId,(c=T(n))[t]=e,C(c,n),a(J(c));case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},setInit:function(){return function(e){e(function(){var e=Object(S.a)(I.a.mark((function e(t){var r,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:if(!(r=e.sent)){e.next=11;break}return e.next=6,k(r);case 6:return a=e.sent,t(E(!0,a)),e.abrupt("return",a);case 11:t(E(!1,null));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(t){var r=T(t);e(J(r)),e({type:X})}))}},getPosts:function(e){return function(){var t=Object(S.a)(I.a.mark((function t(r){var a,s;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e);case 3:a=t.sent,s=a.data.items.map((function(e){return{title:e.snippet.title,description:e.snippet.description,img:e.snippet.thumbnails.medium.url,link:"https://youtu.be/"+e.id.videoId}})),r(te(s)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},logout:function(){return function(e){localStorage.removeItem("token"),e(E(!1,null))}},setQueryParams:function(e){return{type:K,query:e}},addQueries:function(e){return function(){var t=Object(S.a)(I.a.mark((function t(r,a){var s,n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=ne.getState().auth.userId,(n=T(s))?(n.push(e),C(n,s)):C(n=[e],s),r(J(n));case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},clearParamsPosts:function(){return{type:$}},changeCurrentQuery:function(e){return{type:H,query:e}},deleteQuery:function(e){return function(){var t=Object(S.a)(I.a.mark((function t(r,a){var s,n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=ne.getState().auth.userId,(n=T(s)).splice(e,1),null===n||n.length||(n=null),C(n,s),r(J(n));case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},getFavorites:function(){return function(){var e=Object(S.a)(I.a.mark((function e(t,r){var a,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=ne.getState().auth.userId,s=T(a),t(J(s));case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}})((function(e){return Object(a.useEffect)((function(){e.setInit()}),[]),e.init?Object(b.jsxs)("div",{children:[e.isAuth&&Object(b.jsx)(He,{logout:e.logout}),Object(b.jsxs)(f.d,{children:[Object(b.jsx)(f.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(Re,{clearParamsPosts:e.clearParamsPosts,addQueries:e.addQueries,setQueryParams:e.setQueryParams,queryParams:e.queryParams,getPosts:e.getPosts,posts:e.posts})}}),Object(b.jsx)(f.b,{path:"/login",render:function(){return Object(b.jsx)(x,{isSubmitting:e.isSubmitting,isAuth:e.isAuth,loginMe:e.loginMe,errorFormMessage:e.errorFormMessage})}}),Object(b.jsx)(f.b,{path:"/favorites",render:function(){return Object(b.jsx)(Ee,{getFavorites:e.getFavorites,deleteQuery:e.deleteQuery,getPosts:e.getPosts,setQueryParams:e.setQueryParams,changeQueries:e.changeQueries,changeCurrentQuery:e.changeCurrentQuery,currentQuery:e.currentQuery,queryArray:e.queryArray})}}),Object(b.jsx)(f.b,{path:"*",render:function(){return Object(b.jsx)(Je,{})}})]})]}):Object(b.jsx)(Ye,{})})),ze=function(){return Object(b.jsx)(ce.a,{children:Object(b.jsx)(v.a,{store:ne,children:Object(b.jsx)(Ze,{})})})},Ke=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,275)).then((function(t){var r=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;r(e),a(e),s(e),n(e),c(e)}))};c.a.render(Object(b.jsx)(ze,{}),document.getElementById("root")),Ke()},45:function(e,t,r){e.exports={searchWrapper:"Search_searchWrapper__2WwqI",searchWrapperWithResult:"Search_searchWrapperWithResult__1SJCY",searchHeader:"Search_searchHeader__2Yw2E",saveSearchWrapper:"Search_saveSearchWrapper__CpQZo",formItem:"Search_formItem__249_u",searchLine:"Search_searchLine__a4PYU",saveSearchText:"Search_saveSearchText__1uorQ",active:"Search_active__3SCnb",saveSearchIcn:"Search_saveSearchIcn__1gqFX"}},46:function(e,t,r){e.exports={post:"SearchPost_post__2OZS9",postRow:"SearchPost_postRow__2Z5cB",postLeft:"SearchPost_postLeft__1PHeR",postRight:"SearchPost_postRight__6t8mi",postImage:"SearchPost_postImage__3klMq",postTitle:"SearchPost_postTitle__Alpvm",postDescr:"SearchPost_postDescr__1IWIL"}},48:function(e,t,r){e.exports={formWrapper:"Login_formWrapper___7IUW",form:"Login_form__2rIzt",formTitle:"Login_formTitle__32F15",formLogo:"Login_formLogo__2Afop",formInfo:"Login_formInfo__1_yeS",formInfoItem:"Login_formInfoItem__25zcI",formItem:"Login_formItem__ODlvF"}},51:function(e,t,r){e.exports={postsContainer:"SearchPosts_postsContainer__3R36E",postsFilter:"SearchPosts_postsFilter__1-f8S",layoutIcons:"SearchPosts_layoutIcons__1XHta",layoutIcn:"SearchPosts_layoutIcn__2x4JZ",active:"SearchPosts_active__3IGlC"}},64:function(e,t,r){e.exports={headerContainer:"Header_headerContainer__2QCdA",headerLeft:"Header_headerLeft__2X0dH",headerLink:"Header_headerLink__1pOrH",active:"Header_active__1y02-",headerLogo:"Header_headerLogo__2z5yR",headerRight:"Header_headerRight__2OLvs"}},70:function(e,t,r){e.exports={form:"ModalForm_form__2gs3K",formTitle:"ModalForm_formTitle__382bj",formDescr:"ModalForm_formDescr__3iQ33",formItem:"ModalForm_formItem__Nm7Sf"}},88:function(e,t,r){e.exports={favWrapper:"Favorites_favWrapper__2clVf",favItem:"Favorites_favItem__3jMFi",favTitle:"Favorites_favTitle__8-T5R",favButtons:"Favorites_favButtons__2l-EF"}}},[[266,1,2]]]);
//# sourceMappingURL=main.859b094f.chunk.js.map