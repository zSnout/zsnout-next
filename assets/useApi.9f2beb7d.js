async function a(r){try{const t=await fetch(`/api/${r.api}`,{method:r.method,body:r.body&&JSON.stringify(r.body),headers:r.body?{"content-type":"application/json"}:void 0});if(t.status===404)return new Error(`This instance of zSnout can't ${r.desc}.`);const n=await t.text();try{const e=JSON.parse(n);if(typeof e!="object")return new Error("Expected a JSON object as a response.");if(e.error!=null)return new Error(e.error);for(const o of r.resultKeys)if(typeof e[o]!="string")return new Error(`Expected '${o}' to be a string.`);return e}catch{return new Error(n)}}catch(t){return t instanceof Error?t:new Error(""+t)}}export{a as u};
