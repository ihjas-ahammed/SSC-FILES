/* Regression: a downloading async script is not a failed formula renderer. */
const fs=require('fs'),vm=require('vm'),assert=require('assert');
async function setup(mathJax, scriptPresent=true) {
 const listeners=new Map();let timeout;
 const script={addEventListener:(name,fn)=>listeners.set(name,fn),removeEventListener:(name)=>listeners.delete(name)};
 const ctx=vm.createContext({window:{MathJax:mathJax},document:{getElementById:()=>scriptPresent?script:null},setTimeout:fn=>(timeout=fn,1),clearTimeout:()=>{}});
 vm.runInContext(fs.readFileSync(__dirname+'/../app/src/core.tex.js','utf8')+';this.tex=Tex;',ctx);
 return {ctx,listeners,deadline:()=>timeout()};
}
(async()=>{
 const delayed=await setup({startup:{}});let ready=false;
 const waiting=delayed.ctx.tex.ready().then(()=>ready=true);
 await Promise.resolve();assert.equal(ready,false);
 let finishStartup;
 delayed.ctx.window.MathJax={typesetPromise:()=>Promise.resolve(),startup:{promise:new Promise(r=>finishStartup=r)}};
 delayed.listeners.get('load')();await Promise.resolve();assert.equal(ready,false);
 finishStartup();await waiting;assert.equal(ready,true);assert.equal(delayed.listeners.size,0);
 const failed=await setup({startup:{}});const error=failed.ctx.tex.ready();failed.listeners.get('error')();await error;
 const stalled=await setup({startup:{}});const deadline=stalled.ctx.tex.ready();stalled.deadline();await deadline;
 const missing=await setup(undefined,false);await missing.ctx.tex.ready();
 console.log('Formula readiness: delayed load/startup, script error, timeout and missing script passed.');
})().catch(e=>{console.error(e);process.exitCode=1;});
