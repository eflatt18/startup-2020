screen.width<=768&&(document.location="mobile.html");var scrollPos,animation=anime({targets:".textContainer",translateY:-400,delay:1e3,opacity:-.5,easing:"linear",autoplay:!1});$(window).scroll(function(){var e=$(document).scrollLeft()/$(document).width();animation.seek(animation.duration*(e/.19)/2),console.log(e/.19)});var countDownDate=new Date("Feb 8, 2020 11:00:00").getTime(),x=setInterval(function(){var e=(new Date).getTime(),t=countDownDate-e,n=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),r=Math.floor(t%36e5/6e4),a=Math.floor(t%6e4/1e3);document.getElementById("countdown").innerHTML=n+" days, "+o+" hours, "+r+" minutes, "+a+" seconds",t<0&&(clearInterval(x),document.getElementById("countdown").innerHTML="EXPIRED")},1e3);window.sr=ScrollReveal(),window.scrollConverter=function(v,u){function o(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});v.addEventListener("test",null,t),v.removeEventListener("test",null,t)}catch(e){}return e}function r(e){var t,n="scroll"+(e=e.toUpperCase()),o="scroll"+("X"===e?"Left":"Top");return v["page"+e+"Offset"]||v[n]||("number"==typeof(t=u.documentElement||u.body.parentNode)[o]?t:u.body)[o]}function n(t,n){if(l=function(e){if(e=e||v.event,!1===function(e,t,n){return!f||(o=0,10,l=(d?d.offsetWidth:0)||0,i=u.body.scrollWidth||0,s=d?d.clientWidth:0,c=Math.max(l,i)-s,Math.abs(t.wheelDeltaX)>Math.abs(t.wheelDeltaY)||(t.detail?o=-240*t.detail:t.wheelDelta&&(o=5*t.wheelDelta),r=o/120*10,0<=(a=e.x-r)&&a<=c?(e.x=a,e.setByScript=!0,v.scrollTo(e.x,e.y)):0!==e.x&&e.x!==c&&(e.x=c<a?c:0,e.setByScript=!0,v.scrollTo(e.x,e.y)),"function"==typeof n&&n(e),!1));var o,r,a,l,i,s,c}(t,e,n)){if(!e.preventDefault||!e.stopPropagation)return!1;e.preventDefault(),e.stopPropagation()}},i=function(){t.setByScript||(t.x=r("x"),t.y=r("y")),t.setByScript=!1},v.addEventListener){var e=!!o()&&{capture:!1,passive:!1};"onmousewheel"in v?v.addEventListener("mousewheel",l,e):v.addEventListener("DOMMouseScroll",l,e),v.addEventListener("scroll",i,e)}else u.attachEvent("onmousewheel",l),v.attachEvent("onscroll",i)}function a(e){return e.preventDefault(),e.stopPropagation(),!1}var l,i,d=u.documentElement,f=!1,s=!1,c=!1;return{activate:function(e){if(f=!0,!c){n({x:0,y:0},e),c=!0}if(s){if(v.addEventListener){var t=!o()||{capture:!0,passive:!1};v.removeEventListener("scroll",a,t)}else v.detachEvent("onscroll",a);s=!1}},deactivate:function(){f=!1,c&&(function(){if(l||i)if(v.removeEventListener){var e=!!o()&&{capture:!1,passive:!1};"onmousewheel"in v?v.removeEventListener("mousewheel",l,e):v.removeEventListener("DOMMouseScroll",l,e),v.removeEventListener("scroll",i,e)}else u.detachEvent("onmousewheel",l),v.detachEvent("onscroll",i)}(),c=!1)},deactivateAllScrolling:function(){if(s=!(f=!1),v.addEventListener){var e=!o()||{capture:!0,passive:!1};v.addEventListener("scroll",a,e)}else v.attachEvent("onscroll",a)}}}(window,document),scrollConverter.activate();
