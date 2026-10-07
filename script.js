let remaining=30;
const ids=["days","hours","minutes","seconds"];
function render(){
  const d=Math.floor(remaining/86400),h=Math.floor((remaining%86400)/3600),
        m=Math.floor((remaining%3600)/60),s=remaining%60;
  [d,h,m,s].forEach((v,i)=>document.getElementById(ids[i]).textContent=String(v).padStart(2,"0"));
}
render();
setInterval(()=>{remaining--;if(remaining<0) remaining=30;render();},1000);
function joinNow(e){
  e.preventDefault();
  alert("Apna Telegram / WhatsApp / offer link yahan add karein.");
}