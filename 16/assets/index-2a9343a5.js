import{j as s,r as c,u as r,s as p,S as u,O as h,a as _,b as l,c as x,d as j,e as N,f as v,C as O,g}from"./index-fd9249b1.js";import{M as y}from"./index-5a31cc46.js";const S=()=>s.jsx("div",{className:"cities",children:s.jsxs("div",{className:"cities__places-container cities__places-container--empty container",children:[s.jsx("section",{className:"cities__no-places",children:s.jsxs("div",{className:"cities__status-wrapper tabs__content",children:[s.jsx("b",{className:"cities__status",children:"No places to stay available"}),s.jsx("p",{className:"cities__status-description",children:"We could not find any property available at the moment in Paris"})]})}),s.jsx("div",{className:"cities__right-section"})]})}),C=({offers:e})=>{const[i,n]=c.useState(void 0),t=r(p),a=e.length,o=a===0,d=c.useCallback(m=>{n(m)},[]),f=c.useMemo(()=>e.find(m=>m.id===i),[e,i]);return o?s.jsx(S,{}):s.jsx("div",{className:"cities",children:s.jsxs("div",{className:`cities__places-container container ${o&&"cities__places-container--empty"}`,children:[s.jsxs("section",{className:"cities__places places",children:[s.jsx("h2",{className:"visually-hidden",children:"Places"}),s.jsxs("b",{className:"places__found",children:[a," places to stay in ",t]}),s.jsx(u,{}),e.length&&s.jsx(h,{offers:e,type:"default",onOfferHover:d})]}),s.jsx("div",{className:"cities__right-section",children:s.jsx("section",{className:"cities__map",children:e.length&&s.jsx(y,{offers:e,activeCityName:t,selectedOffer:f})})})]})})},H=e=>{const i=r(_);return c.useMemo(()=>[...e].sort((t,a)=>{switch(i){case l.LowToHigh:return t.price-a.price;case l.HighToLow:return a.price-t.price;case l.TopRatedFirst:return a.rating-t.rating;case l.Popular:return 0}}),[e,i])},L=()=>{const{fetchOffers:e}=x(),i=r(p),{offers:n,loading:t,error:a}=r(j),{authorizationStatus:o}=r(N);v(a),c.useEffect(()=>{e()},[e,i,o]);const d=H(n);return s.jsxs("main",{className:"page__main page__main--index",children:[s.jsx("h1",{className:"visually-hidden",children:"Cities"}),s.jsx(O,{}),t?s.jsx(g,{size:"l"}):s.jsx(C,{offers:d})]})};export{L as default};
