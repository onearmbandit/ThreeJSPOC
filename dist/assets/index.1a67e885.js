import{S as L,P,W as S,G as T,A as g,a as v,b as A,T as p,M,c as C,d as z,C as H,V as u}from"./vendor.269fb08c.js";const R=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))w(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&w(d)}).observe(document,{childList:!0,subtree:!0});function x(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function w(e){if(e.ep)return;e.ep=!0;const n=x(e);fetch(e.href,n)}};R();const s=new L,a=new P(75,window.innerWidth/window.innerHeight,.1,1e3),l=new S({canvas:document.querySelector("#bg")});l.setPixelRatio(window.devicePixelRatio);l.setSize(window.innerWidth,window.innerHeight);a.position.setZ(30);a.position.setX(-3);l.render(s,a);const E=new T;let m=new g,f=!1;const G=new H;let o=null;E.load("/models/bulldognew.glb",function(t){t.scene.scale.set(65,65,65),t.scene.position.set(25,-15,-15),t.scene.rotation.y=-.5,m=new g(t.scene),m.clipAction(t.animations[0]).play(),o=t.scene,s.add(t.scene),f=!0},t=>{console.log(t.loaded/t.total*100+"% loaded")},t=>{console.log(t)});const y=new v(16777215);y.position.set(5,5,5);const O=new A(16777215);s.add(y,O);const W=new p().load("/images/Court.jpg");s.background=W;const j=new p().load("/images/moon.jpg"),k=new p().load("/images/normal.jpg"),r=new M(new C(3,32,32),new z({map:j,normalMap:k}));s.add(r);r.position.z=10;r.position.y=40;r.position.setX(-100);function q(){console.log(i),i=(document.documentElement.scrollTop||document.body.scrollTop)/((document.documentElement.scrollHeight||document.body.scrollHeight)-document.documentElement.clientHeight)*100,f&&(i<10?(o.scale.set(65,65,65),o.position.set(25,-20,-20),o.rotation.y=-.5,o.rotation.x=0,o.rotation.z=0):i>90?(o.scale.lerp(new u(65,65,65),i*.001),o.rotation.y=-.5,o.rotation.x=0,o.rotation.z=0):(o.scale.lerp(new u(55,55,55),i*5e-4),o.position.lerp(new u(30,-20,-15),i*5e-4),o.rotation.x=-i*.005,o.rotation.y=i*.06))}let i=0;function h(){document.body.getBoundingClientRect().top,r.rotation.x+=.05,r.rotation.y+=.075,r.rotation.z+=.05}document.body.onscroll=h;h();function b(){requestAnimationFrame(b),q(),r.rotation.x+=.005,f&&m.update(G.getDelta()),l.render(s,a)}b();