import{S as h,P as b,W as x,G as L,A as P,a as S,b as M,T as f,M as m,c as u,d as p,e as v}from"./vendor.40978c75.js";const A=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};A();const r=new h,i=new b(75,window.innerWidth/window.innerHeight,.1,1e3),d=new x({canvas:document.querySelector("#bg")});d.setPixelRatio(window.devicePixelRatio);d.setSize(window.innerWidth,window.innerHeight);i.position.setZ(30);i.position.setX(-3);d.render(r,i);const T=new L;new P;T.load("/models/Parrot.glb",function(o){o.scene.scale.set(.1,.1,.1),o.scene.position.set(5,4,-20),r.add(o.scene)},o=>{console.log(o.loaded/o.total*100+"% loaded")},o=>{console.log(o)});const w=new S(16777215);w.position.set(5,5,5);const z=new M(16777215);r.add(w,z);function F(){const o=new u(.25,24,24),s=new p({color:16777215}),a=new m(o,s),[c,e,t]=Array(3).fill().map(()=>v.randFloatSpread(100));a.position.set(c,e,t),r.add(a)}Array(200).fill().forEach(F);const G=new f().load("/images/beachPhoto.jpg");r.background=G;const O=new f().load("/images/moon.jpg"),R=new f().load("/images/normal.jpg"),n=new m(new u(3,32,32),new p({map:O,normalMap:R}));r.add(n);n.position.z=10;n.position.y=40;n.position.setX(-100);function g(){const o=document.body.getBoundingClientRect().top;n.rotation.x+=.05,n.rotation.y+=.075,n.rotation.z+=.05,i.position.z=o*-.01,i.position.x=o*-2e-4,i.rotation.y=o*-2e-4}document.body.onscroll=g;g();function y(){requestAnimationFrame(y),n.rotation.x+=.005,d.render(r,i)}y();
