window.initSims=initSims;
window.redrawSims=function(){ readPalette(); drawAll(); };
new MutationObserver(()=>window.redrawSims()).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
if(window.matchMedia){ const mq=matchMedia('(prefers-color-scheme:dark)'); if(mq.addEventListener) mq.addEventListener('change',()=>window.redrawSims()); }
})();
