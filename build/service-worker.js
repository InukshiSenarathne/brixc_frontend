"use strict";var precacheConfig=[["/index.html","b061fb7584e438ef4bd65000c15b397d"],["/static/css/main.67ae815e.css","67ae815e46c751ce1f9104e5436fde0d"],["/static/js/0.c6043b62.chunk.js","fe08d546c69e45ec3a603b0284851150"],["/static/js/1.254b7b78.chunk.js","9c8a3d43257c92296c8bc2a813f6cf85"],["/static/js/2.240c1ab8.chunk.js","539df7f449d8b60228e1ea42005b4000"],["/static/js/3.a2f0f506.chunk.js","0593830e19c1b85ccf62815139387c70"],["/static/js/5.3f91da3e.chunk.js","3d1913e92853e2573420cc47fb3679fc"],["/static/js/6.c6b4ca64.chunk.js","9281f497ad0cb50a97aa7492a2cdf2eb"],["/static/js/7.106e9dd7.chunk.js","80fc7c3cb741cc7018e30dba082fbb92"],["/static/js/8.f32d850e.chunk.js","f14fd571ff7b4d19e669933075d593c4"],["/static/js/9.4a69c851.chunk.js","8e5078f63a9aeb69843e18f5a2c2a1c6"],["/static/js/main.fc1a425d.js","e9970f2863c33b27efa18404433b0de0"],["/static/media/Linearicons-Free.03e91f12.woff2","03e91f122aa5fd425abbe23c85546eb0"],["/static/media/Linearicons-Free.2f3e9f80.ttf","2f3e9f80fff7d699dd3de6904d7d1647"],["/static/media/Linearicons-Free.65060723.woff","65060723fe964f85afa0a82d0bb78cf9"],["/static/media/Linearicons-Free.71ad32ce.svg","71ad32ce1ab07350277dfcf1f7a503a5"],["/static/media/Linearicons-Free.b9b7f23c.eot","b9b7f23cb61b1f503e1249b63d980448"],["/static/media/Pe-icon-7-stroke.01798bc1.ttf","01798bc13e33afc36a52f2826638d386"],["/static/media/Pe-icon-7-stroke.71394c0c.eot","71394c0c7ad6c1e7d5c77e8ac292fba5"],["/static/media/Pe-icon-7-stroke.b38ef310.woff","b38ef310874bdd008ac14ef3db939032"],["/static/media/Pe-icon-7-stroke.c45f7de0.svg","c45f7de008ab976a8e817e3c0e5095ca"],["/static/media/abstract1.74469765.jpg","744697657fa614add7943a9b16f1487e"],["/static/media/city1.36cba8e6.jpg","36cba8e6418af4d614325995e2000fb1"],["/static/media/logo-inverse.f64a19c9.png","f64a19c945cdfc4a26cf36c156d8a392"],["/static/media/logo.f64a19c9.png","f64a19c945cdfc4a26cf36c156d8a392"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});