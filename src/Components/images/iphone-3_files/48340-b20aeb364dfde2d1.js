"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48340,73046],{49034:function(e,t,n){n.d(t,{bV:function(){return W}});var a,s=n(47842),o=n(70865),r=n(26297),i=n(87394),c=n(52322),l=n(67550),d=n(21647),u=n(74601),p=n(80422),m=n(41075),f=n(48289),h=n(39514),x=n(85966),v=n(87992),b=n(73046),g=function(e){var t=e.initialProps;return(0,c.jsx)(b.DrawerStatusMessage,(0,o.Z)({},t))},_=n(88849),j=n(2784),C=n(96670),P=n(75),Z=n(44699),w=n(31880),S=n(8740),I=(0,S.ZL)()(function(e){var t=e.tokens.color;return{alertIcon:{background:"".concat(t.blue.azure,"!important")}}}),y={flagID:"",id:"LEGO-181",name:"TXNS190 Single Image Asset Purchase",treatments:(a={},(0,s.Z)(a,_.NM,function(e){var t=e.experiment,n=e.initialProps;return(0,j.useEffect)(function(){t.recordImpression()},[]),(0,c.jsx)(g,{initialProps:n})}),(0,s.Z)(a,_.vG,function(e){var t=e.experiment,n=e.initialProps,a=I().classes.alertIcon,s=(0,w.$G)(P.AH).t;(0,j.useEffect)(function(){t.recordImpression()},[]);var r=(0,C.Z)((0,o.Z)({},n),{className:a,message:s("download_out_of_credits_warning"),status:Z.H_});return(0,c.jsx)(g,{initialProps:r})}),a)},k=function(){return(0,c.jsx)(c.Fragment,{})},N=function(e){return(0,c.jsx)(v.K,{config:y,initialProps:e,Portal:g,SkeletonLoader:k})},L=n(77812),z=n(10597),T=n(18510),M=n(95775),D=n(22921),E=n(52720),F=n(12281),B=n(9867),A=n(18624),O=(0,F.g)(l.Z),R="left",V=(0,S.ZL)()(function(){return{root:{display:"flex",flexDirection:"column",paddingRight:B.W0.l,width:"100%"}}}),H=function(e){var t=e.ItemComponent,n=(0,r.Z)(e,["ItemComponent"]),a=V().classes;return(0,c.jsx)("div",{className:a.root,children:(0,c.jsx)(t,(0,o.Z)({},n))})},G=(0,S.ZL)()(function(e,t){var n=e.palette,a=e.tokens.font,s=t.isDisabled;return{title:{marginTop:0},popoverPaper:{border:"".concat(B.Cg.width.default," solid ").concat(n.border1Color),boxShadow:"0 ".concat(B.W0.xxs," ").concat(B.W0.xxs,"  0 ").concat(n.border1Color)},selectedItemContainer:{border:"".concat(B.Cg.width.default," solid ").concat(n.border1Color),borderRadius:B.Cg.radius.m,cursor:s?"initial":"pointer",display:"flex",justifyContent:"space-between",padding:B.W0.base,position:"relative",width:"100%"},radioSelectedItemContainer:{paddingLeft:B.W0.s},chevron:{position:"absolute",cursor:"pointer",right:B.W0.base,top:B.W0.base,fontSize:a.size.l,fill:s?n.border1Color:n.primary.main},listRoot:{cursor:"pointer"},listItem:{"&:hover":{backgroundColor:n.action.selected}},footer:{padding:"0 ".concat(B.W0.base," ").concat(B.W0.base," ").concat(B.W0.base)},disabledListItem:{cursor:"auto"},skeleton:{transform:"scale(1)"},oneTimePurchaseBox:{marginBottom:"8px"}}}),W=function(e){var t=e.analyticsLabels,n=e.classesProps,a=e.drawerStatusMessageProps,r=e.ExpandableSelectItemAction,l=e.expandableSelectItemActionProps,v=e.ExtraContentComponent,b=e.extraContentProps,g=e.FooterComponent,_=e.isDisabled,C=e.isLoadingData,P=e.ItemComponent,Z=e.itemProps,w=e.items,S=e.onValueChange,I=e.selectedItem,y=e.title,k=e.hidePopover,F=G({isDisabled:_}),A=F.classes,V=F.cx,W=(0,i.Z)((0,j.useState)(null),2),K=W[0],U=W[1],X=Z.asset,Y=Z.licenseOptions,q=Z.radioPlanOption,$=Z.setRadioPlanOption,J=(0,j.useCallback)(function(){$("none")},[$]),Q=(0,M.IP)({assets:[X],licenseName:Y,shouldFetch:!!X}).data,ee=(0,z.B)(X,Q).isEligible,et=(0,T.R)(null==Q?void 0:Q.subscriptions).lowestCostEntry,en=(0,D.P)(((null==et?void 0:et.currencyCost)*(null==et?void 0:et.credits)).toFixed(2),null==et?void 0:et.currency),ea={data:{pricePerAssetDiscounted:(0,D.P)(null==et?void 0:et.currencyCost,null==et?void 0:et.currency),pricePerAsset:en,isSelected:"none"===q,onClick:J},labels:{productName:null==X?void 0:X.title},classes:{oneTimePurchaseBox:A.oneTimePurchaseBox,selectedItemContainer:A.selectedItemContainer}},es=(0,j.useCallback)(function(e){_||U(e.currentTarget)},[_]),eo=(0,j.useCallback)(function(){U(null)},[]),er=(0,j.useCallback)(function(e){S(w[e]),U(null)},[w,S]),ei=(0,j.useMemo)(function(){return K&&"".concat(K.offsetWidth,"px - 2 * ").concat(B.W0.base," - 2 * ").concat(B.Cg.width.default," - ").concat(B.W0.l)||""},[K]);return(0,c.jsxs)(c.Fragment,{children:[y&&(0,c.jsx)("h5",{className:A.title,children:C?(0,c.jsx)(d.Z,{className:A.skeleton,width:100}):y}),C?(0,c.jsx)(d.Z,{className:A.skeleton,height:54,width:"100%"}):(0,c.jsxs)(c.Fragment,{children:[a&&!ee&&(0,c.jsx)(h.l,(0,o.Z)({},a)),a&&ee&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(N,(0,o.Z)({},a)),(0,c.jsx)(L.Vm,(0,o.Z)({},ea))]}),(0,c.jsxs)(O,{className:V(A.selectedItemContainer,n.selectedItemContainer,(0,s.Z)({},A.radioSelectedItemContainer,null==Z?void 0:Z.showRadioButtons)),display:"flex",justifyContent:"space-between",onClick:es,"aria-label":y,labelTrack:t.dropdownExpand,children:[(0,c.jsx)(H,(0,o.Z)({isDisabled:null==I?void 0:I.isDisabled,ItemComponent:P,item:I,selectedItem:I,isMainItem:!0},Z)),!k&&(0,c.jsx)(r,(0,o.Z)({classesProps:{chevron:A.chevron}},l))]})]}),!k&&(0,c.jsxs)(u.ZP,{open:Boolean(K),anchorEl:K,onClose:eo,anchorOrigin:{vertical:"top",horizontal:R},transitionDuration:0,transformOrigin:{vertical:"top",horizontal:R},classes:{paper:A.popoverPaper},children:[(0,c.jsxs)(p.Z,{classes:{root:A.listRoot},children:[w.map(function(e,a){return(0,c.jsx)(x.H,{"data-automation":"dropdownListItem-".concat(a),onClick:function(){e.isDisabled||er(a)},classes:{root:V(e.isDisabled?A.disabledListItem:A.listItem,n.listItem)},labelTrack:t.dropdownItemSelect,children:(0,c.jsx)(H,(0,o.Z)({isDisabled:e.isDisabled,item:e,ItemComponent:P,selectedItem:I,width:ei},Z))},e.name||e.id)}),v&&(0,c.jsx)(v,(0,o.Z)({classesProps:{root:V(A.listItem,n.listItem)},width:ei},b))]}),g&&(0,c.jsx)(m.ZP,{container:!0,justifyContent:"center",className:A.footer,children:(0,c.jsxs)(m.ZP,{item:!0,xs:12,children:[(0,c.jsx)(f.Z,{}),(0,c.jsx)(g,{})]})}),(0,c.jsx)(E.K,{className:A.chevron,onClick:eo})]})]})};W.defaultProps={analyticsLabels:{},classesProps:{},drawerStatusMessageProps:null,ExpandableSelectItemAction:A.Y,expandableSelectItemActionProps:{},ExtraContentComponent:null,extraContentProps:{},FooterComponent:null,isDisabled:!1,isLoadingData:!1,itemProps:{},items:[],onValueChange:function(){},selectedItem:{},title:"",hidePopover:!1}},18624:function(e,t,n){n.d(t,{Y:function(){return o}});var a=n(52322),s=n(50273),o=function(e){var t=e.classesProps;return e.isShown?(0,a.jsx)(s._,{className:t.chevron}):null};o.defaultProps={classesProps:{},isShown:!0}},47729:function(e,t,n){n.d(t,{e:function(){return y}});var a=n(70865),s=n(52322),o=n(14625),r=n(26515),i=n(67550),c=n(70180),l=n(30902),d=n(72253),u=n(62197),p=n(52417),m=n(84853),f=function(e){var t=e.classes,n=void 0===t?{}:t,a=e.caption,o=e.ItemComponent,r=e.onValueChange,c=e.paymentPlans,l=e.selectedPaymentPlanName,d=e.selectedProductLicenseType,f=e.title;return(0,s.jsxs)(i.Z,{pb:5,children:[(0,s.jsx)(i.Z,{pb:3,className:n.paymentPlanSelectValueListContainer,children:(0,s.jsx)(p.H,{title:f,values:c,onValueChange:r,ItemComponent:o,itemProps:{selectedItemId:l,selectedProductLicenseType:d}})}),(0,s.jsx)(s.Fragment,{children:(0,m.FT)(a).map(function(e,t){return(0,s.jsx)(i.Z,{children:(0,s.jsx)(u.Z,{className:n.paymentPlanSelectValueListCaptions,variant:"caption",color:"textSecondary","aria-label":"On Demand Caption",children:e})},"cap-".concat(t))})})]})};f.defaultProps={caption:"",onValueChange:function(){},paymentPlans:[]};var h=function(e){var t,n,a,o,r,u=e.classes,p=void 0===u?{}:u,m=e.actions,h=e.data,x=e.selectedProductLicenseType,v=e.selectedItemName;return(0,s.jsxs)(s.Fragment,{children:[h.tabs&&(0,s.jsx)(i.Z,{pb:4,className:p.imageProductSelectorComponentTabsContainer,children:(0,s.jsx)(c.Z,{className:p.imageProductSelectorComponentTabs,value:h.tabIndex,onChange:m.onTabChange,indicatorColor:"primary",textColor:"inherit",children:h.tabs.map(function(e){var t=e.label,n=e.analyticsLabel;return(0,s.jsx)(l.O,{className:p.imageProductSelectorComponentTab,label:t,labelTrack:n},t)})})}),(0,s.jsx)(f,{classes:p,caption:null===(t=h.productSelector)||void 0===t?void 0:null===(n=t.labels)||void 0===n?void 0:n.caption,ItemComponent:d.p,onValueChange:m.onItemSelect,paymentPlans:null===(a=h.productSelector)||void 0===a?void 0:a.items,selectedPaymentPlanName:v,selectedProductLicenseType:x,title:null===(o=h.productSelector)||void 0===o?void 0:null===(r=o.labels)||void 0===r?void 0:r.title})]})};h.defaultProps={action:{},classes:{},data:{}};var x=n(47842),v=n(96670),b=n(87394),g=n(1104),_=n(60591),j=n(65532),C=n(70008),P=n(75),Z=n(59877),w=n(2784),S=n(46399),I=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.initialTabIndex,s=t.productSelectorsMap,o=void 0===s?{}:s,r=t.products,i=void 0===r?[]:r,c=t.selectedProductLicenseType,l=t.setSelectedProductToBuy,d=void 0===l?function(){return""}:l,u=t.overrideTabs,p=t.overrideProductSelectorsMap,m=(0,Z.$G)([P.AH,P.Fx_,P.S69]).t,f=(0,j.PE)(),h=(0,C.B)().isIndiaRegion,I=(0,b.Z)((0,w.useState)(void 0===n?0:n),2),y=I[0],k=I[1],N=(0,w.useCallback)(function(e,t){k(t)},[]),L=(0,w.useMemo)(function(){return(0,g.Gk)({productSelectorsMap:o,products:i,t:m,locale:f,isIndiaRegion:h,overrideProductSelectorsMap:p})},[i,o,m,f,h,p]),z=(0,w.useMemo)(function(){return(0,g.JU)({tabs:u||S.wZ,t:m})},[m,u]),T=(0,w.useMemo)(function(){return c===_.HS?S.NP:0===y?S.PU:S.XC},[c,y]),M=(0,w.useMemo)(function(){return L[T]},[T,L]),D=(0,b.Z)((0,w.useState)((0,g.aY)({productSelectorsMap:L})),2),E=D[0],F=D[1],B=(0,w.useCallback)(function(e){var t=e.name,n=e.product.id;d((0,g.lk)({id:n,products:i})),F(function(e){return(0,v.Z)((0,a.Z)({},e),(0,x.Z)({},T,{name:t,id:n}))})},[T,i,d]),A=null===(e=E[T])||void 0===e?void 0:e.name;return(0,w.useEffect)(function(){if(E&&E[T]){var e=E[T].id;d((0,g.lk)({id:e,products:i}))}},[T,E]),{actions:{onTabChange:N,onItemSelect:B},data:{productSelector:M,tabs:(0,w.useMemo)(function(){return c===_.HS?null:z},[c,z]),tabIndex:y,selectedItemName:A}}},y=function(e){var t=e.classes,n=void 0===t?{}:t,i=e.initialTabIndex,c=e.products,l=e.productSelectorsMap,d=void 0===l?o.GN:l,u=e.selectedProductLicenseType,p=e.setSelectedProductToBuy,m=e.shouldShowSelection,f=e.overrideTabs,x=e.overrideProductSelectorsMap,v=(0,r.y)(),b=v.classes,g=v.cx,_=(0,a.Z)({},n,{root:g(b.root,n.root)}),j=I({initialTabIndex:void 0===i?0:i,productSelectorsMap:d,products:c,selectedProductLicenseType:u,setSelectedProductToBuy:p,overrideTabs:void 0===f?void 0:f,overrideProductSelectorsMap:void 0===x||x}),C=j.actions,P=j.data;return(0,s.jsx)(h,{actions:C,classes:_,data:P,selectedProductLicenseType:u,selectedItemName:(void 0===m||m)&&P.selectedItemName||""})}},46399:function(e,t,n){n.d(t,{MA:function(){return _},NP:function(){return m},PU:function(){return u},XC:function(){return p},wZ:function(){return j}});var a,s,o=n(47842),r=n(70865),i=n(96670),c=n(50930),l=n(27739),d=n(75),u="subscription",p="onDemand",m="enhanced",f={translations:{caption:["activation-drawers:sub_product_disclaimer"]},items:[{name:l.tq,translations:{price:"activation-drawers:price_per_month"}},{name:l.v8,translations:{price:"activation-drawers:price_per_month"}},{name:l.dm,translations:{price:"activation-drawers:price_per_month"}}]},h={translations:{title:"standard_dialog:subscriptions_description",namespace:d.S69,caption:["activation-drawers:sub_product_disclaimer"]},items:[{name:l.v8,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}},{name:l.tq,translations:{price:"activation-drawers:price_per_month",description:""}},{name:l.dm,translations:{price:"activation-drawers:price_per_month",description:""}}]},x={translations:{title:"choose_monthly_plan",caption:["activation-drawers:sub_product_disclaimer","activation-drawers:sub_product_sub_disclaimer"]},items:[{name:l.tq,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}},{name:l.cz,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}},{name:l.dF,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}}]};l.EV,l.KB,l.Dy;var v={translations:{title:"images:on_demand_description",namespace:d.jp2,caption:"on_demand_caption"},items:[{name:l.vC},{name:l._x},{name:l.cL}]};(0,i.Z)((0,r.Z)({},v),{items:[{name:l.vC}].concat((0,c.Z)(v.items))});var b={translations:{title:"enhanced_legal_protections",caption:"on_demand_caption"},items:[{name:l.vI},{name:l.zW},{name:l.jh}]},g=(a={},(0,o.Z)(a,u,f),(0,o.Z)(a,p,v),(0,o.Z)(a,m,b),a),_=(s={},(0,o.Z)(s,u,h),(0,o.Z)(s,p,v),(0,o.Z)(s,m,b),s);(0,i.Z)((0,r.Z)({},g),(0,o.Z)({},u,x));var j=[{translations:"subscriptions",analyticsLabel:"subscriptionTab"},{translations:"on_demand_packs",analyticsLabel:"onDemandTab"}]},10241:function(e,t,n){n.d(t,{j:function(){return r}});var a=n(52322),s=n(49034),o=n(18624),r=function(e){var t=e.analyticsLabels,n=e.ExpandableSelectItemAction,o=e.ExtraContentComponent,r=e.FooterComponent,i=e.ItemComponent,c=e.expandableSelectItemActionProps,l=e.extraContentProps,d=e.isDisabled,u=e.itemProps,p=e.onValueChange,m=e.selectedSize,f=e.sizes,h=e.title;return(0,a.jsx)(a.Fragment,{children:!!f.length&&(0,a.jsx)(s.bV,{analyticsLabels:t,ExtraContentComponent:o,ExpandableSelectItemAction:n,FooterComponent:r,ItemComponent:i,extraContentProps:l,expandableSelectItemActionProps:c,isDisabled:d,itemProps:u,items:f,onValueChange:p,selectedItem:m,title:h})})};r.defaultProps={analyticsLabels:{},ExpandableSelectItemAction:o.Y,ExtraContentComponent:null,FooterComponent:null,expandableSelectItemActionProps:{},extraContentProps:{},isDisabled:!1,itemProps:{},onValueChange:function(){},sizes:[],title:""}},41924:function(e,t,n){n.d(t,{_:function(){return Z}});var a=n(52322),s=n(61640),o=n(62197),r=n(21647),i=n(67550),c=n(28903),l=n(94380),d=n(12410),u=n(54112),p=n(50273),m=n(75),f=function(e){var t=e.showShadowsSelect,n=e.value,s=e.onChangeHandler,o=(0,d.Q)().classes,r=(0,u.D)({namespace:[m.AH],translationKeys:{shadows:"shadows",shadowsOn:"common:filters_on",shadowsOff:"common:filters_off"}}).labels;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:r.shadows}),t&&(0,a.jsxs)(c.Z,{className:o.input,classes:{select:o.inputSelect},variant:"standard",value:n,onChange:function(e){return s(e.target.value)},IconComponent:p._,children:[(0,a.jsx)(l.Z,{value:"on",children:r.shadowsOn.toLowerCase()}),(0,a.jsx)(l.Z,{value:"off",children:r.shadowsOff.toLowerCase()})]})]})};f.defaultProps={showShadowsSelect:!1};var h=n(97258),x=n(39232),v=n(18411),b=n(68769),g=n(81232),_=n(59877),j=function(e){var t,n=e.t,a=e.name,s=e.displayName,o=null===(t=v.nd[(0,g.z)(a)])||void 0===t?void 0:t.label;return{formats:n("formats").toLowerCase(),pixels:n("pixels"),dpi:n("dpi"),vectorInfo:n("no_resolution_loss"),rotatedAngle:n("rotated_angle",{ns:m.AH}),translatedName:o?n(o):s}},C=function(e){var t=e.classes,n=e.checked,o=e.labels;return(0,a.jsx)("div",{className:t.radioButtonContainer,"data-automation":"divRadioButton-".concat(o.productName),children:(0,a.jsx)(s.Z,{checked:n,classes:{checked:t.selectedRadioButton,root:t.radioButton},inputProps:{"aria-label":o.productName}})})},P=function(e){var t=e.ready,n=e.pixels,s=e.showRadioButtons,i=e.classes,c=e.heading;return(0,a.jsx)(o.Z,{variant:"body2",className:i.row,children:t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:i.bold,children:c}),n&&!s&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:i.separator,children:"\xb7"}),(0,a.jsx)("span",{children:n})]})]}):(0,a.jsx)(r.Z,{variant:"text",width:"100%"})})},Z=function(e){var t=e.item,n=e.width,s=e.showRadioButtons,c=e.selectedSize,l=e.is3dObject,u=e.selectedShadowsOption,p=e.setSelectedShadowsOption,v=t.displayName,Z=t.format,w=t.dpi,S=t.name,I=(0,_.$G)([m.SiC,m.sm6,m.AH]),y=I.t,k=I.ready,N=(0,d.Q)({width:n}).classes,L=j({t:y,name:S,displayName:v}),z=(0,b.It)({isImageAsset:!0,assetSize:t,labels:L}),T=z.formattedDimensions,M=z.pixels,D=S===x.gf;return(0,a.jsxs)(i.Z,{display:"flex",flexDirection:"row",children:[s&&k&&(0,a.jsx)(C,{checked:t.name===c.name,classes:N,labels:L}),(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(P,{heading:L.translatedName,classes:N,pixels:M,ready:k,showRadioButtons:s}),(0,a.jsx)(o.Z,{variant:"body2",className:N.row,children:k?(0,a.jsxs)(i.Z,{children:[D&&L.vectorInfo,l&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:L.rotatedAngle}),(0,a.jsx)("span",{className:N.separator,children:"\xb7"})]}),T&&(0,a.jsx)("span",{children:T}),l&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:N.separator,children:"\xb7"}),(0,a.jsx)("span",{children:L.shadows}),(0,a.jsx)(f,{value:u,onChangeHandler:p,showShadowsSelect:(0,g.z)(t.name)===h.JJ})]}),w&&!l&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:N.separator,children:"\xb7"}),(0,a.jsx)("span",{children:"".concat(w," ").concat(L.dpi)})]}),Z&&!D&&!l&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:N.separator,children:"\xb7"}),(0,a.jsx)("span",{children:Z.toUpperCase()})]})]}):(0,a.jsx)(r.Z,{variant:"text",width:"100%"})})]})]})};Z.defaultProps={item:{},width:"",is3dObject:!1}},73046:function(e,t,n){n.r(t),n.d(t,{DrawerStatusMessage:function(){return u}});var a=n(47842),s=n(52322),o=n(67550),r=n(62197),i=n(701),c=n(44699),l=n(6348),d=(0,n(8740).ZL)()(function(e,t){var n=e.palette,a=e.tokens,s=a.border,o=a.color,r=a.fontSize,i=a.size,l=a.spacing,d=t.status;return{alertRoot:{"&&":{border:"".concat(s.width.s," solid ").concat(o.gray["onyx-12"]),borderRadius:s.radius.l,padding:0}},alertIcon:{"&&":{alignItems:"center",justifyContent:"center",color:o.white,background:d===c.H_?o.gray.slate:n[d].main,minWidth:i.density.base,borderTopLeftRadius:s.radius.l,borderBottomLeftRadius:s.radius.l,fontSize:r.icon}},alertMessage:{"&&":{color:o.gray["onyx-60"],fontSize:r.s,paddingTop:l.base,paddingBottom:l.base,paddingRight:l.s}}}}),u=function(e){var t=e.status,n=e.message,u=e.className,p=d({status:t}),m=p.classes,f=p.cx;return(0,s.jsx)(o.Z,{justifyContent:"space-around",width:1,mb:3,children:(0,s.jsx)(i.Z,{classes:{root:m.alertRoot,icon:f(u,m.alertIcon),message:m.alertMessage},variant:"outlined",severity:t,iconMapping:(0,a.Z)({},c.cM,(0,s.jsx)(l.d,{})),"data-automation":"LicenseDrawer_NoCreditError",children:(0,s.jsx)(r.Z,{variant:"body2",children:n})})})};u.defaultProps={status:c.cM}},45638:function(e,t,n){n.d(t,{s:function(){return L}});var a=n(52322),s=n(12581),o=n(10241),r=n(15873),i=n(62197),c=n(12410),l=n(9390),d=n(41687),u=n(17604),p=n(94909),m=n(70828),f=n(75),h=n(59877),x=n(8740),v=(0,x.ZL)()(function(e){var t=e.tokens,n=t.color,a=t.font;return{iconWrapper:{display:"flex",paddingLeft:t.spacing.s,alignItems:"center"},openInNewIcon:{fontSize:a.size.l,fill:n.gray.slate}}}),b=function(e){var t=e.t;return{custom:t("common:image_size_custom"),customInfo:t("customize_size")}},g=function(e){var t=e.assetId,n=e.classesProps,s=e.width,o=(0,c.Q)({width:s}).classes,x=v().classes,g=b({t:(0,h.$G)(f.AH).t}),_=(0,p.d)(),j=(0,d.n)().isMobileServer,C=(0,u.t)({asset:{id:t},isTemplateAsset:!1,labels:g}).editorButtonHref;return _||j?null:(0,a.jsx)(r.ZP,{classes:{root:n.root},children:(0,a.jsxs)(l.r,{href:C,target:"_blank",rel:"nofollow","data-automation":"CustomLinkSizeSelectItem_ListItem_customLink",children:[(0,a.jsxs)(i.Z,{variant:"body2",className:o.row,children:[(0,a.jsx)("span",{className:o.bold,children:g.custom}),(0,a.jsx)("span",{className:x.iconWrapper,children:(0,a.jsx)(m._,{className:x.openInNewIcon})})]}),(0,a.jsx)(i.Z,{variant:"body2",className:o.row,children:(0,a.jsx)("span",{children:g.customInfo})})]})})};g.defaultProps={classesProps:{},width:""};var _=n(41924),j=n(25237),C=n.n(j)()(function(){return n.e(67286).then(n.bind(n,67286)).then(function(e){return e.SizeGuideModal})},{loadableGenerated:{webpack:function(){return[67286]}},ssr:!1}),P=n(52417),Z=n(44297),w=n(96495),S=n(87394),I=n(2784),y=function(){var e=(0,S.Z)((0,I.useState)(!1),2),t=e[0],n=e[1];return{isSizeGuideModalOpen:t,sizeGuideModalDisplayHandler:function(){return n(!t)}}},k=(0,x.ZL)()(function(e){return{actionLink:{justifyContent:"flex-start",marginTop:e.tokens.spacing.s,height:"100%"}}}),N={dropdownExpand:"imageSizeInteraction",dropdownItemSelect:"imageSizeSelected"},L=function(e){var t=e.asset,n=e.formattedImageSizes,r=e.selectedImageSize,i=e.setSelectedImageSize,c=e.selectedShadowsOption,l=e.setSelectedShadowsOption,d=y(),u=d.isSizeGuideModalOpen,p=d.sizeGuideModalDisplayHandler,m=(0,w.T)(),f=m.labels,h=m.ready,x=k().classes,v=(0,Z.f8)(t);return(0,a.jsx)(a.Fragment,{children:v?(0,a.jsx)(P.H,{title:f.assetSizeFormat,values:n,onValueChange:i,ItemComponent:_._,itemProps:{showRadioButtons:!0,selectedSize:r,selectedShadowsOption:c,setSelectedShadowsOption:l,is3dObject:v}}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.j,{analyticsLabels:N,ExtraContentComponent:g,FooterComponent:function(){return(0,a.jsx)(s.v,{ready:h,label:f.sizeGuide,onClick:p,classesProps:x})},ItemComponent:_._,extraContentProps:{assetId:t.id},itemProps:{labels:f},selectedSize:r,onValueChange:i,sizes:n,title:f.assetSizeFormat}),u&&(0,a.jsx)(C,{isOpen:u,onClose:p,asset:t})]})})}},77290:function(e,t,n){n.d(t,{r:function(){return D}});var a,s,o,r=n(70865),i=n(96670),c=n(52322),l=n(87992),d=n(40411),u=n(47729),p=function(e){var t=e.initialProps;return(0,c.jsx)(u.e,(0,r.Z)({},t))},m=n(47842),f=n(88849),h=n(40233),x=n(2784),v=n(98788),b=n(87394),g=n(5163),_=n(21647),j=function(){return(0,c.jsxs)("div",{"data-automation":"ImageProductSelector_Loading",children:[(0,c.jsx)(_.Z,{variant:"rectangular",height:40,style:{marginBottom:8}}),(0,c.jsxs)("div",{children:[(0,c.jsx)(_.Z,{variant:"rectangular",height:340,style:{marginBottom:8}}),(0,c.jsx)(_.Z,{variant:"rectangular",height:24,style:{marginBottom:24}})]})]})},C=n(50930),P=n(81740),Z=n(39232),w=n(60591),S=n(49670),I=n(9009),y=n(27739),k=n(87414),N=(a=(0,v.Z)(function(){var e,t;return(0,g.__generator)(this,function(n){switch(n.label){case 0:return e=(0,P.Xp)({queryParams:(0,r.Z)({"filter[group_id]":"p3_variantB"},w.fC[Z.k4])}).formattedUrl,[4,S.uS.get(e)];case 1:return t=n.sent().data,[2,(0,I.O)(t)]}})}),function(){return a.apply(this,arguments)}),L=(s=(0,v.Z)(function(e){var t,n,a,s;return(0,g.__generator)(this,function(o){switch(o.label){case 0:return t=e.products,[4,N()];case 1:return a=(n=o.sent()).filter(function(e){var t=e.name;return y.x1.includes(t)}),s=n.filter(function(e){var t=e.name;return d.C5.includes(t)}),[2,(0,k.p_)({products:(0,C.Z)(t).concat((0,C.Z)(s)),productsToReplace:a})]}})}),function(e){return s.apply(this,arguments)}),z=(o={},(0,m.Z)(o,f.NM,function(e){var t=e.experiment,n=e.initialProps,a=(0,h.d)();return(0,x.useEffect)(function(){t.recordImpression()},[]),(0,x.useEffect)(function(){a({actionName:"P3-1123 - Image product selector",customAttributes:{view:f.NM}})},[a]),(0,c.jsx)(p,{initialProps:n})}),(0,m.Z)(o,f.vG,function(e){var t=e.experiment,n=e.initialProps,a=n.products,s=(0,h.d)(),o=(0,b.Z)((0,x.useState)(),2),l=o[0],u=o[1];return(0,x.useEffect)(function(){(0,v.Z)(function(){return(0,g.__generator)(this,function(e){switch(e.label){case 0:return[4,L({products:a})];case 1:return u(e.sent()),[2]}})})()},[a]),(0,x.useEffect)(function(){t.recordImpression()},[]),(0,x.useEffect)(function(){s({actionName:"P3-1123 - Image product selector",customAttributes:{view:f.vG}})},[s]),l?(0,c.jsx)(p,{initialProps:(0,i.Z)((0,r.Z)({},n),{products:l,productSelectorsMap:d.VP,overrideTabs:d.wZ,overrideProductSelectorsMap:!1})}):(0,c.jsx)(j,{})}),o),T=(0,i.Z)((0,r.Z)({},d.sZ),{treatments:z}),M=function(){return(0,c.jsx)(c.Fragment,{})},D=function(e){return(0,c.jsx)(l.K,{config:T,initialProps:e,Portal:p,SkeletonLoader:M})}},40411:function(e,t,n){n.d(t,{C5:function(){return x},Di:function(){return l},VP:function(){return j},dO:function(){return c},jm:function(){return i},nk:function(){return v},rN:function(){return b},sZ:function(){return d},wZ:function(){return g}});var a,s=n(47842),o=n(14625),r=n(27739),i="P3-1123-India-launch-credit-pack-and-flex",c="P3-1123",l="India - Launch Credit pack and Flex",d={flagID:i,id:c,name:l},u="2_credit_pack",p="5_credit_pack",m="30_credit_pack",f="125_credit_pack",h="250_credit_pack",x=[u,p,m,f,h],v="creditPack",b="pricingCardCreditPack",g=[{translations:"subscriptions",analyticsLabel:"subscriptionTab"},{translations:"credit_packs",analyticsLabel:"creditPacksTab"}],_={translations:{title:"choose_a_plan",caption:["activation-drawers:sub_product_disclaimer"]},items:[{name:r.RY,translations:{price:"activation-drawers:price_per_year",description:"flex_sub_details_images_and_music"}},{name:r.EV,translations:{price:"activation-drawers:price_per_year",description:"flex_sub_details"}},{name:r.Ak,translations:{price:"activation-drawers:price_per_year",description:"flex_sub_details"}}],initialItemIndex:0},j=(a={},(0,s.Z)(a,o.XC,{translations:{title:"credit_packs_title",caption:"on_demand_caption"},items:[{name:u},{name:p},{name:m}],initialItemIndex:1}),(0,s.Z)(a,o.PU,_),(0,s.Z)(a,o.NP,{translations:{title:"enhanced_generic_legal_protections",caption:"on_demand_caption"},items:[{name:m},{name:f},{name:h}],initialItemIndex:0}),a)},50273:function(e,t,n){n.d(t,{_:function(){return r}});var a=n(70865),s=n(52322),o=(0,n(6620).Z)((0,s.jsx)("path",{d:"M9.867 12.133L8 14l8 8 8-8-1.867-1.867L16 18.266l-6.133-6.133z"}),"ChevronDown.svg"),r=function(e){return(0,s.jsx)(o,(0,a.Z)({viewBox:"0 0 32 32"},e))}},52720:function(e,t,n){n.d(t,{K:function(){return r}});var a=n(70865),s=n(52322),o=(0,n(6620).Z)((0,s.jsx)("path",{d:"M22.133 21.2L24 19.333l-8-8-8 8L9.867 21.2 16 15.067l6.133 6.133z"}),"ChevronUp.svg"),r=function(e){return(0,s.jsx)(o,(0,a.Z)({viewBox:"0 0 32 32"},e))}},6348:function(e,t,n){n.d(t,{d:function(){return r}});var a=n(70865),s=n(52322),o=(0,n(6620).Z)((0,s.jsx)("path",{d:"M21.867 3.333H10.134L2.667 10.8v11.733L10.134 30h11.733l7.467-7.467V10.8l-7.467-7.467zm4.8 18.134L20.8 27.334h-9.6l-5.867-5.867v-9.6L11.2 6h9.6l5.867 5.867v9.6zm-12 .533h2.667v2.667h-2.667V22zm0-13.333h2.667v10.667h-2.667V8.667z"}),"Stop.svg"),r=function(e){return(0,s.jsx)(o,(0,a.Z)({viewBox:"0 0 32 32"},e))}},70641:function(e,t,n){n.d(t,{CL:function(){return x},VR:function(){return p},eK:function(){return f},hH:function(){return h},xi:function(){return m}});var a,s=n(47842),o=n(39232),r="pricing",i="video",c="editorial",l="music",d="creative-flow",u=(0,s.Z)({},r,(a={},(0,s.Z)(a,o.k4,"/".concat(r)),(0,s.Z)(a,i,"/".concat(r,"/").concat(i)),(0,s.Z)(a,c,"/".concat(r,"/").concat(c)),(0,s.Z)(a,l,"/".concat(r,"/").concat(l)),(0,s.Z)(a,d,"/".concat(r,"/").concat(d)),a)),p=function(){return[u[r][o.k4],u[r][o.k4]]},m=function(){return[u[r][i],u[r][i]]},f=function(){return[u[r][c],u[r][c]]},h=function(){return[u[r][d],u[r][d]]},x=function(){return[u[r][l],u[r][l]]}}}]);
//# sourceMappingURL=48340-b20aeb364dfde2d1.js.map