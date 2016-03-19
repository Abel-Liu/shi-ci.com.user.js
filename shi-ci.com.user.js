// ==UserScript==
// @name         shi-ci.com.user.js
// @namespace    http://abelliu.com
// @version      1.1
// @description  change article style.
// @author       abel
// @require      https://code.jquery.com/jquery-2.2.2.min.js
// @import       http://www.shi-ci.com/*
// @grant        none
// ==/UserScript==

$(function() {
    var e = $("div.poem-read p");
    e.css("font-size","20px");
    e.css("line-height","1");
    e.css("letter-spacing","0");

    $("div.x-box").css("padding","3px 10px");
    $("div.x-box-top").css("padding","5px");

    $("body").css("background-image","url(a.jpg)");
    console.log("shici");
});
