!function(n,t){var e=n(".ins-search"),r=e.find(".ins-search-input"),i=e.find(".ins-section-wrapper"),a=e.find(".ins-section-container");function s(e,r,i,a,s){return n("<div>").addClass("ins-selectable").addClass("ins-search-item").append(n("<header>").append(n("<i>").addClass("fa").addClass("fa-"+e)).append(null!=r&&""!=r?r:t.TRANSLATION.UNTITLED).append(i?n("<span>").addClass("ins-slug").text(i):null)).append(a?n("<p>").addClass("ins-search-preview").html(a):null).attr("data-url",s)}function o(e,r,i){var a,o,c,l=u(e);if(0===i.length)return null;switch(a=t.TRANSLATION[r],r){case"POSTS":case"PAGES":o=i.map(function(n){var e=n.firstOccur>20?n.firstOccur-20:0,r="";return delete n.firstOccur,l.forEach(function(t){var e=new RegExp(t,"gi");r=n.text.replace(e,'<em class="search-keyword"> '+t+" </em>")}),r=r?r.slice(e,e+80):n.text.slice(0,80),s("file",n.title,null,r,t.ROOT_URL+n.path)});break;case"CATEGORIES":case"TAGS":o=i.map(function(n){return s("CATEGORIES"===r?"folder":"tag",n.name,n.slug,null,n.permalink)});break;default:return null}return(c=a,n("<section>").addClass("ins-section").append(n("<header>").addClass("ins-section-header").text(c))).append(o)}function c(n,t){var e={};n.pages.concat(n.posts).forEach(function(n){n[t]&&n[t].forEach(function(n){e[n.name]=n})});var r=[];for(var t in e)r.push(e[t]);return r}function u(n){return n.split(" ").filter(function(n){return!!n}).map(function(n){return n.toUpperCase()})}function l(n,t,e){var r=u(n);return r.filter(function(n){return e.filter(function(e){if(!t.hasOwnProperty(e))return!1;var r=t[e].toUpperCase().indexOf(n);return r>-1?("text"==e&&(t.firstOccur=r),!0):void 0}).length>0}).length===r.length}function f(n,t,e,r){var i=0;return u(n).forEach(function(n){var a=new RegExp(n,"img");e.forEach(function(n,e){if(t.hasOwnProperty(n)){var s=t[n].match(a);i+=s?s.length*r[e]:0}})}),i}function p(n,t){var e,r,i=(e=t,{POST:function(n){return f(e,n,["title","text"],[3,1])},PAGE:function(n){return f(e,n,["title","text"],[3,1])},CATEGORY:function(n){return f(e,n,["name","slug"],[1,1])},TAG:function(n){return f(e,n,["name","slug"],[1,1])}}),a=(r=t,{POST:function(n){return l(r,n,["title","text"])},PAGE:function(n){return l(r,n,["title","text"])},CATEGORY:function(n){return l(r,n,["name","slug"])},TAG:function(n){return l(r,n,["name","slug"])}}),s=n.posts,o=n.pages,u=c(n,"tags"),p=c(n,"categories");return{posts:s.filter(a.POST).sort(function(n,t){return i.POST(t)-i.POST(n)}),pages:o.filter(a.PAGE).sort(function(n,t){return i.PAGE(t)-i.PAGE(n)}),categories:p.filter(a.CATEGORY).sort(function(n,t){return i.CATEGORY(t)-i.CATEGORY(n)}),tags:u.filter(a.TAG).sort(function(n,t){return i.TAG(t)-i.TAG(n)})}}function d(t){var e=n.makeArray(a.find(".ins-selectable")),r=-1;e.forEach(function(t,e){n(t).hasClass("active")&&(r=e)});var s=(e.length+r+t)%e.length;n(e[r]).removeClass("active"),n(e[s]).addClass("active"),function(n){if(0!==n.length){var t=i[0].clientHeight,e=n.position().top-i.scrollTop(),r=n[0].clientHeight+n.position().top;r>t+i.scrollTop()&&i.scrollTop(r-i[0].clientHeight),e<0&&i.scrollTop(n.position().top)}}(n(e[s]))}function h(n){n&&n.length&&(location.href=n.attr("data-url"))}e.parent().remove(".ins-search"),n("body").append(e),n.getJSON(t.CONTENT_URL,function(t){"#ins-search"===location.hash.trim()&&e.addClass("show"),r.on("input",function(){var e=n(this).val();!function(n,t){a.empty();for(var e in t)a.append(o(n,e.toUpperCase(),t[e]))}(e,p(t,e))}),r.trigger("input")}),n(document).on("click focus",".search-form-input",function(){e.addClass("show"),e.find(".ins-search-input").focus()}).on("click",".ins-search-item",function(){h(n(this))}).on("click",".ins-close",function(){e.removeClass("show")}).on("keydown",function(n){if(e.hasClass("show"))switch(n.keyCode){case 27:e.removeClass("show");break;case 38:d(-1);break;case 40:d(1);break;case 13:h(a.find(".ins-selectable.active").eq(0))}})}(jQuery,window.INSIGHT_CONFIG);