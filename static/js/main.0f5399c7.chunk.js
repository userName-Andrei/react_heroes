(this.webpackJsonphero_admin_panel=this.webpackJsonphero_admin_panel||[]).push([[0],{200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(72),s=n.n(a),i=n(4),o=n(82),l=n(83),d=n(48),u=n.n(d),b=n(75),j=function(){return{request:function(){var e=Object(b.a)(u.a.mark((function e(t){var n,c,r,a,s,i=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",c=i.length>2&&void 0!==i[2]?i[2]:null,r=i.length>3&&void 0!==i[3]?i[3]:{"Content-Type":"application/json"},e.prev=3,e.next=6,fetch(t,{method:n,body:c,headers:r});case 6:if((a=e.sent).ok){e.next=9;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 9:return e.next=11,a.json();case 11:return s=e.sent,e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}()}},m=n(205),h=n(207),f=n(7),O=n(34),p=Object(f.c)(),x=p.getSelectors((function(e){return e.heroes})).selectAll,g=p.getInitialState({heroesLoadingStatus:"idle"}),v=Object(f.b)("heroes/fetchHeroes",(function(){return(0,j().request)("http://localhost:3001/heroes")})),N=Object(f.d)({name:"heroes",initialState:g,reducers:{addHero:function(e,t){p.addOne(e,t.payload)},deleteHero:function(e,t){p.removeOne(e,t.payload)}},extraReducers:function(e){e.addCase(v.pending,(function(e){e.heroesLoadingStatus="loading"})).addCase(v.fulfilled,(function(e,t){p.setAll(e,t.payload),e.heroesLoadingStatus="idle"})).addCase(v.rejected,(function(e){e.heroesLoadingStatus="error"})).addDefaultCase((function(){}))}}),w=N.actions,y=N.reducer,S=Object(O.a)((function(e){return e.filters.activeFilter}),x,(function(e,t){return"all"===e?t:t.filter((function(t){return t.element===e}))})),F=(w.heroesFetching,w.heroesFetched,w.heroesFetchingError),C=w.addHero,L=w.deleteHero,k=n(76),E=n(1),q=function(e){var t=e.id,n=e.name,c=e.description,r=e.element,a=e.onDeleteHero,s=k({"bg-gradient":!0,"bg-danger":"fire"===r,"bg-primary":"water"===r,"bg-success":"wind"===r,"bg-secondary":"earth"===r,"bg-warning":"fire"!==r&&"water"!==r&&"wind"!==r&&"earth"!==r});return Object(E.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-white ".concat(s),children:[Object(E.jsx)("img",{src:"http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg",className:"img-fluid w-25 d-inline",alt:"unknown hero",style:{objectFit:"cover"}}),Object(E.jsxs)("div",{className:"card-body",children:[Object(E.jsx)("h3",{className:"card-title",children:n}),Object(E.jsx)("p",{className:"card-text",children:c})]}),Object(E.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light",children:Object(E.jsx)("button",{type:"button",className:"btn-close btn-close","aria-label":"Close",onClick:function(){return a(t)}})})]})},T=function(){return Object(E.jsx)("div",{className:"spinner-border mx-auto mt-5",role:"status",children:Object(E.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},H=(n(99),function(){var e=Object(i.c)(S),t=Object(i.c)((function(e){return e.heroes.heroesLoadingStatus})),n=Object(i.b)(),r=j().request,a=Object(c.useCallback)((function(e){r("http://localhost:3001/heroes/".concat(e),"DELETE").then((function(){return n(L(e))})).catch((function(){return n(F())}))}),[r]);if(Object(c.useEffect)((function(){n(v())}),[]),"loading"===t)return Object(E.jsx)(T,{});if("error"===t)return Object(E.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var s,d=0===(s=e).length?Object(E.jsx)(m.a,{timeout:400,classNames:"card",children:Object(E.jsx)("h5",{className:"text-center mt-5",children:"\u0413\u0435\u0440\u043e\u0435\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"})}):s.map((function(e){var t=e.id,n=Object(l.a)(e,["id"]);return Object(E.jsx)(m.a,{timeout:400,classNames:"card",children:Object(E.jsx)(q,Object(o.a)({id:t,onDeleteHero:a},n))},t)}));return Object(E.jsx)(h.a,{component:"ul",appear:!1,children:d})}),A=n(206),_=n(12),D=n(26),I=Object(f.c)(),J=I.getInitialState({filtersLoadingStatus:"idle",activeFilter:"all"}),R=Object(f.b)("filters/fetchFilters",(function(){return(0,j().request)("http://localhost:3001/filters")})),W=Object(f.d)({name:"filters",initialState:J,reducers:{setActiveFilter:function(e,t){e.activeFilter=t.payload}},extraReducers:function(e){e.addCase(R.pending,(function(e){e.filtersLoadingStatus="loading"})).addCase(R.fulfilled,(function(e,t){I.setAll(e,t.payload),e.filtersLoadingStatus="idle"})).addCase(R.rejected,(function(e){e.filtersLoadingStatus="error"})).addDefaultCase((function(){}))}}),z=W.actions,B=W.reducer,G=I.getSelectors((function(e){return e.filters})).selectAll,M=(z.filtersFetching,z.filtersFetchingError,z.setActiveFilter),P=function(){var e=Object(i.c)(G),t=Object(i.b)(),n=j().request,c=e.filter((function(e){return"all"!==e.name})).map((function(e,t){var n=e.name,c=e.label;return Object(E.jsx)("option",{value:n,children:c},t)}));return Object(E.jsx)(_.d,{initialValues:{id:Object(A.a)(),name:"",description:"",element:""},validationSchema:Object(D.a)({name:Object(D.b)().min(2,"\u0412 \u0438\u043c\u0435\u043d\u0438 \u0434\u043e\u043b\u0436\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430!").max(120,"\u041d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 120 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432!").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"),description:Object(D.b)().min(2,"\u0412 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0434\u043e\u043b\u0436\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430!").max(150,"\u041d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 150 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432!").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"),element:Object(D.b)().oneOf(["fire","water","wind","earth"],"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!")}),onSubmit:function(e,c){var r;r=e,n("http://localhost:3001/heroes","POST",JSON.stringify(r)).then((function(e){return t(C(e))})),c.resetForm()},children:Object(E.jsxs)(_.c,{className:"border p-4 shadow-lg rounded",children:[Object(E.jsxs)("div",{className:"mb-3",children:[Object(E.jsx)("label",{htmlFor:"name",className:"form-label fs-4",children:"\u0418\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0433\u0435\u0440\u043e\u044f"}),Object(E.jsx)(_.b,{type:"text",name:"name",className:"form-control",id:"name",placeholder:"\u041a\u0430\u043a \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442?"}),Object(E.jsx)(_.a,{name:"name",component:"div",style:{marginTop:"5px",fontWeight:"500",color:"crimson"}})]}),Object(E.jsxs)("div",{className:"mb-3",children:[Object(E.jsx)("label",{htmlFor:"text",className:"form-label fs-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(E.jsx)(_.b,{component:"textarea",name:"description",className:"form-control",id:"text",placeholder:"\u0427\u0442\u043e \u044f \u0443\u043c\u0435\u044e?",style:{height:"130px",resize:"none"}}),Object(E.jsx)(_.a,{name:"description",component:"div",style:{marginTop:"5px",fontWeight:"500",color:"crimson"}})]}),Object(E.jsxs)("div",{className:"mb-3",children:[Object(E.jsx)("label",{htmlFor:"element",className:"form-label",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0433\u0435\u0440\u043e\u044f"}),Object(E.jsxs)(_.b,{component:"select",className:"form-select",id:"element",name:"element",children:[Object(E.jsx)("option",{children:"\u042f \u0432\u043b\u0430\u0434\u0435\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c..."}),c]}),Object(E.jsx)(_.a,{name:"element",component:"div",style:{marginTop:"5px",fontWeight:"500",color:"crimson"}})]}),Object(E.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})},V=function(){var e=Object(i.c)(G),t=Object(i.c)((function(e){return e.filters})),n=t.filtersLoadingStatus,r=t.activeFilter,a=Object(i.b)();if(Object(c.useEffect)((function(){a(R())}),[]),0===e.length||!e)return Object(E.jsx)("h5",{className:"text-center mt-5",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u043d\u0435 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e!"});if("error"===n)return Object(E.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438!"});var s=e.map((function(e,t){var n=e.className,c=e.label,s=e.name;return Object(E.jsx)("button",{className:"btn ".concat(n," ").concat(s===r?"active":""),onClick:function(){return a(M(s))},children:c},t)}));return Object(E.jsx)("div",{className:"card shadow-lg mt-4",children:Object(E.jsxs)("div",{className:"card-body",children:[Object(E.jsx)("p",{className:"card-text",children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0439\u0442\u0435 \u0433\u0435\u0440\u043e\u0435\u0432 \u043f\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c"}),Object(E.jsx)("div",{className:"btn-group",children:s})]})})},K=(n(200),function(){return Object(E.jsx)("main",{className:"app",children:Object(E.jsxs)("div",{className:"content",children:[Object(E.jsx)(H,{}),Object(E.jsxs)("div",{className:"content__interactive",children:[Object(E.jsx)(P,{}),Object(E.jsx)(V,{})]})]})})}),Q=Object(f.a)({reducer:{heroes:y,filters:B},devTools:!1});n(201);s.a.createRoot(document.getElementById("root")).render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(i.a,{store:Q,children:Object(E.jsx)(K,{})})}))},99:function(e,t,n){}},[[202,1,2]]]);
//# sourceMappingURL=main.0f5399c7.chunk.js.map