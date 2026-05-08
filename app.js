// Shared helpers for ClickSellNow PDF tools
(function(){
  function el(id){return document.getElementById(id)}
  function setStatus(msg,type='info'){const s=el('status');if(!s)return;s.textContent=msg;s.className='status '+type;s.style.display='block';}
  function clearStatus(){const s=el('status');if(s)s.style.display='none';}
  function setDownload(name, blob){const wrap=el('downloadWrap');const link=el('downloadLink');if(!wrap||!link)return;const url=URL.createObjectURL(blob);link.href=url;link.download=name;wrap.style.display='block';}
  window.CSN={el,setStatus,clearStatus,setDownload};
})();
