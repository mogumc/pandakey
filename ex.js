// ==UserScript==
// @name 熊猫书签
// @namespace https://ex.mo23.me/
// @description zh-cn
// @version 1.1.0
// @match *://ex.mo23.me/
// @match *://exhentai.org/*
// @match *://e-hentai.org/*
// @icon https://exhentai.org/favicon.ico
// @supportURL https://ex.mo23.me/
// @updateURL https://ex.mo23.me/ex.js
// @grant none
// ==/UserScript==

(function(){function panda_init(c){if(c>=3){return;};let n=['https://expanda.now.sh/','https://ghcdn.rawgit.org/noprogramming/expanda/master/','https://noprogramming.github.io/expanda/'];let t=setTimeout(function(){clearTimeout(t);panda_init(c+1);},3000);let s=document.createElement('script');s.src=(n[c]?n[c]:n[0])+'panda.js?'+parseInt(Date.parse(new Date())/600000)+c;s.onerror=function(){clearTimeout(t);panda_init(c+1);};s.onload=function(){clearTimeout(t);};s.setAttribute('exkey','c85b32b04583bdf636cf3b87c46f73be5543239x576a58691');document.body.appendChild(s);};panda_init(0);}());