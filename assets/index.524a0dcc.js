import{j as x,r as c,S as g,F as N,a as b,v as f,B as w,b as v,c as S,d as T,R as k,e as C}from"./vendor.d5534593.js";const j=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=l(r);fetch(r.href,n)}};j();const e=x.exports.jsx,a=x.exports.jsxs;function D(){const t=[{id:"title-tasks-icon",options:{delay:900,distance:"-4em"}},{id:"title-h1",options:{delay:500,distance:"1em"}},{id:"title-h2",options:{delay:700,distance:"0.85em"}},{id:"title-start",options:{delay:1500}}];return c.exports.useEffect(()=>{t.forEach(s=>{g().reveal(`#${s.id}`,s.options)})},[]),a("section",{className:"h-screen flex flex-col items-center justify-center",children:[e("span",{id:"title-tasks-icon",className:"p-3 m-2 border-4 border-primary border-opacity-50 rounded-lg",children:e(N,{className:"text-2xl text-primary"})}),e("h1",{id:"title-h1",className:"font-gilroy-bold text-primary text-5xl p-2",children:"NoteApp"}),e("h2",{id:"title-h2",className:"font-gilroy-medium text-xl",children:"For all of your chores."}),a("span",{id:"title-start",className:"flex flex-col items-center relative top-36",children:[e("p",{className:"font-gilroy-regular text-primary",children:"Start working!"}),e(b,{className:"text-primary m-2"})]})]})}const L=({handleAddNote:t})=>{const[s,l]=c.exports.useState(""),[i,r]=c.exports.useState(""),[n,o]=c.exports.useState(f()),d=200,u=m=>{m.preventDefault(),d-+m.target.value.length>=0&&l(m.target.value)},p=m=>{m.preventDefault(),r(m.target.value)},h=()=>{r(""),l("")},y=()=>{i===""?alert("Warning: Title is required!"):i!==""&&(o(f()),t(n,i,s),h())};return a("article",{className:"font-gilroy-regular flex flex-col justify-center items-center bg-primary border-2 rounded-xl w-72 shadow-md p-2",children:[e("input",{type:"text",value:i,onChange:p,placeholder:"An interesting title...",className:"rounded-md w-11/12 p-2 m-4 outline-none"}),e("textarea",{className:"resize-none rounded-lg p-2 outline-none",rows:8,cols:24,placeholder:"Type your new note!",value:s,onChange:u}),a("span",{className:"mt-1 p-2 flex justify-around items-center w-full",children:[a("small",{className:"text-white text-base",children:[d-s.length," remaining"]}),e("button",{onClick:y,className:"text-white text-2xl transition duration-150 hover:text-gray-200",children:e(w,{})})]})]})},E=t=>a("article",{className:"flex flex-col justify-between border-2 rounded-2xl p-3 w-72 shadow-md",children:[a("span",{children:[e("p",{className:"text-xl font-gilroy-bold text-primary underline break-words",children:t.title}),e("p",{className:"font-gilroy-regular break-words",children:t.description})]}),a("span",{className:"inline-flex justify-between mt-5",children:[e("small",{className:"font-gilroy-light opacity-30 w-10/12",children:t.id}),e("button",{onClick:()=>t.handleDeleteNote(t.id),className:"text-xl transition duration-200 hover:text-primary",children:e(v,{})})]})]}),F=({notes:t,handleAddNote:s,handleDeleteNote:l})=>a("section",{className:"grid lg:grid-cols-4 gap-4",children:[t.map(i=>e(E,{id:i.id,title:i.title,description:i.description,handleDeleteNote:l},i.id)),e(L,{handleAddNote:s})]}),A=({handleSearchText:t})=>a("div",{className:"flex items-center bg-gray-200 p-2 mt-1 mb-4 rounded-lg",children:[e(S,{className:"text-2xl m-2 text-primary"}),e("input",{className:"font-gilroy-medium bg-gray-200 p-2 rounded-md outline-none transition duration-200 border-b-2 focus:border-primary focus:bg-gray-50",onChange:s=>{t(s.target.value)},type:"text",placeholder:"Type to search..."})]});function O(){const[t,s]=c.exports.useState([{id:f(),title:"Create your own note!",description:"Title is needed, description is optional :D"}]),[l,i]=c.exports.useState("");c.exports.useEffect(()=>{const o=JSON.parse(localStorage.getItem("noteapp-notes"));o&&s(o)},[]),c.exports.useEffect(()=>{localStorage.setItem("noteapp-notes",JSON.stringify(t))},[t]),c.exports.useEffect(()=>{g().reveal(".section-tasks",{delay:300})},[]);const r=(o,d,u)=>{const p={id:o,title:d,description:u},h=[...t,p];s(h)},n=o=>{const d=t.filter(u=>u.id!==o);s(d)};return a("section",{className:"section-tasks h-screen flex flex-col items-center relative",children:[e("h3",{className:"font-gilroy-medium text-3xl text-primary mb-4 border-b border-primary",children:"Your notes"}),e(A,{handleSearchText:i}),e(F,{notes:t.filter(o=>{if(o.description.toLowerCase().includes(l)||o.title.toLowerCase().includes(l))return o}),handleAddNote:r,handleDeleteNote:n})]})}const B=()=>e("footer",{className:"mt-36 text-center bg-primary p-2",children:a("p",{className:"font-gilroy-medium inline-flex items-center text-white",children:["Made with  ",e(T,{className:"mx-2 text-red-500"})," ",e("a",{className:"transition duration-200 border-b border-opacity-50 text-gray-200 border-white hover:text-white hover:border-opacity-100",href:"https://github.com/Ti7oyan",target:"_blank",rel:"noreferrer",children:"Ticiano Morvan"})]})});function I(){return a("main",{className:"grid gap-24",children:[e(D,{}),e(O,{}),e(B,{})]})}k.render(e(C.StrictMode,{children:e(I,{})}),document.getElementById("root"));