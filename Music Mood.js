setTimeout(() => {
   const splash=document.getElementById("splash");
   splash.classList.add("fadeout")
   
   setTimeout(()=>{
    splash.style.display="none";
    document.getElementById("menu1")
    const menu1=document.getElementById("menu1");
    menu1.classList.add("show");
   },1000);
}, 2000);



function searchScene(question1){
   const menucontainer1=document.getElementById("menu-container1")
   const menu1=document.getElementById("menu1");
   const read1=document.getElementById("read1")
   const answer1=document.querySelector(".answer1")
            answer1.textContent=question1;

   menucontainer1.classList.add("fadeout")
   setTimeout(()=>{
       menucontainer1.style.display = "none";
       menucontainer1.classList.remove("fadeout");
       menucontainer1.classList.remove("show");
     setTimeout(()=>{
      read1.style.display = "block";
      read1.classList.remove("fadeout");
      read1.classList.remove("show");
      setTimeout(()=>{
      read1.classList.add("show");
      },10);
   },10);
   },1000);
   

setTimeout(()=>{
 read1.classList.add("fadeout")
setTimeout(()=>{
read1.style.display = "none";
read1.classList.remove("fadeout");
   },1000);
},3000);
   



   const btn21=document.querySelector(".btn1")
   const btn22=document.querySelector(".btn2")
   const btn23=document.querySelector(".btn3")
   const btn24=document.querySelector(".btn4")
   const Q2=document.querySelector(".Q1")
   const S2=document.querySelector(".S1")

   setTimeout(()=>{
       menucontainer1.style.display = "flex";
       read1.classList.remove("show");
       setTimeout(()=>{
       menucontainer1.classList.add("fadein");
      },10);
},4000);



}
