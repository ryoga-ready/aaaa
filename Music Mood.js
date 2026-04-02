setTimeout(() => {
   const splash=document.getElementById("splash");
   splash.classList.add("fadeout")
   
   setTimeout(()=>{
    splash.style.display="none";
    document.getElementById("menu").classList.remove("hidden");
    menu.classList.add("show");
   },1000);
}, 2000);

/*test*/