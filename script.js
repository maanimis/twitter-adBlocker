// ==UserScript==
// @name        twitter
// @namespace   Violentmonkey Scripts
// @match       https://twitter.com/home
// @grant       none
// @version     1.0
// @author      -
// @description 9/6/2023, 12:21:09 PM
// ==/UserScript==

setInterval(()=>{
    document.querySelectorAll('[data-testid="placementTracking"]').forEach(e=>e.remove())
},3000)
