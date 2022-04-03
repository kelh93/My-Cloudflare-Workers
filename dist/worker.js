async function n(e){return new Response(e,{headers:{"content-type":"application/json;charset=UTF-8"}})}addEventListener("fetch",e=>{let t={hello:new Date+"\u5E78\u8FD0\u6570\u5B57\u{1F9D0} => "+Math.ceil(Math.random()*100)},s=JSON.stringify(t,null,2);return e.respondWith(n(s))});
//# sourceMappingURL=worker.js.map
