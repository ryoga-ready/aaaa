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

let step=0;

 let answer11=false
 let answer12=false
 let answer13=false
 let answer14=false
 let answer1="";



function searchScene(question1){

/*------------------------------------★ステップ1開始★------------------------------------*/ 

if(step===0){
   const menucontainer1=document.getElementById("menu-container1")
   const menu1=document.getElementById("menu1");
   const read1=document.getElementById("read1")
   answer1=question1;

   const btn1=document.querySelector(".btn1")
   const btn2=document.querySelector(".btn2")
   const btn3=document.querySelector(".btn3")
   const btn4=document.querySelector(".btn4")

   btn1.classList.add("no-click");
   btn2.classList.add("no-click");
   btn3.classList.add("no-click");
   btn4.classList.add("no-click");

setTimeout(()=>{
  btn1.classList.remove("no-click");
  btn2.classList.remove("no-click");
  btn3.classList.remove("no-click");
  btn4.classList.remove("no-click");
},2000);


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
      document.querySelector(".answer1").textContent = answer1;
      },10);
   },10);
   },1000);
   
/*-----------------------------ステップ2準備中-----------------------------*/ 

   step+=1;

   const btn21=document.querySelector(".btn1")
   const btn22=document.querySelector(".btn2")
   const btn23=document.querySelector(".btn3")
   const btn24=document.querySelector(".btn4")
   const Q2=document.querySelector(".Q1")
   const S2=document.querySelector(".S1")

if(answer1==="少しだけ音楽を聴きたい"&&step===1){
   setTimeout(()=>{
   answer11=true
   step+=1;
   btn21.textContent="質問11-1"
   btn22.textContent="質問11-2"
   btn23.textContent="質問11-3"
   btn24.textContent="質問11-4"
   },1000);
}

if(answer1==="ドライブを楽しみたい"&&step===1){
setTimeout(()=>{
   answer12=true
   step+=1;
   btn21.textContent="質問12-1"
   btn22.textContent="質問12-2"
   btn23.textContent="質問12-3"
   btn24.textContent="質問14-4"
    },1000);
}

if(answer1==="リラックスしたい"&&step===1){
   setTimeout(()=>{
   answer13=true
   step+=1;
   btn21.textContent="質問13-1"
   btn22.textContent="質問13-2"
   btn23.textContent="質問13-3"
   btn24.textContent="質問13-4"
   },1000);
}

if(answer1==="作業に集中したい"&&step===1){
   setTimeout(()=>{
   answer14=true
   step+=1;
   btn21.textContent="質問14-1"
   btn22.textContent="質問14-2"
   btn23.textContent="質問14-3"
   btn24.textContent="質問14-4"
   },1000);
}

/*-----------------------------ステップ2準備完了-----------------------------*/ 

/*-----------------------------ステップ1ロード開始-----------------------------*/ 
setTimeout(()=>{
 read1.classList.add("fadeout")
setTimeout(()=>{
read1.style.display = "none";
read1.classList.remove("fadeout");
   },1000);
},3000);

/*-----------------------------ステップ1ロード完了-----------------------------*/ 

/*-----------------------------ステップ2表示中-----------------------------*/ 

   setTimeout(()=>{
       menucontainer1.style.display = "flex";
       read1.classList.remove("show");
       btn1.classList.remove("no-click");
       btn2.classList.remove("no-click");
       btn3.classList.remove("no-click");
       btn4.classList.remove("no-click");
       setTimeout(()=>{
       menucontainer1.classList.add("fadein");
      },10);
},4000);
/*-----------------------------ステップ2表示完了-----------------------------*/ 
   
}
/*------------------------------------★ステップ1終了★------------------------------------*/ 


/*------------------------------------★ステップ2開始★------------------------------------*/ 

if(step===2){
   const menucontainer1=document.getElementById("menu-container1")
   const menu1=document.getElementById("menu1");
   const read2=document.getElementById("read2")
   answer1=question1;

   const btn1=document.querySelector(".btn1")
   const btn2=document.querySelector(".btn2")
   const btn3=document.querySelector(".btn3")
   const btn4=document.querySelector(".btn4")


btn1.classList.add("no-click");
btn2.classList.add("no-click");
btn3.classList.add("no-click");
btn4.classList.add("no-click");

setTimeout(()=>{
btn1.classList.remove("no-click");
btn2.classList.remove("no-click");
btn3.classList.remove("no-click");
btn4.classList.remove("no-click");
},2000);


menucontainer1.classList.add("fadeout")
   setTimeout(()=>{
       menucontainer1.style.display = "none";
       menucontainer1.classList.remove("fadeout");
       menucontainer1.classList.remove("show");
     setTimeout(()=>{
      read2.style.display = "block";
      read2.classList.remove("fadeout");
      read2.classList.remove("show");
      setTimeout(()=>{
      read2.classList.add("show");
      },10);
   },10);
 },1000);
   

/*-----------------------------ステップ2ロード開始-----------------------------*/ 

let searchtime = 0;
search();

function search(){
  if(searchtime >= 3){
    return;
  }
  setTimeout(()=>{
    read2.classList.add("fadeout");
    setTimeout(()=>{
      read2.classList.remove("show");
    setTimeout(()=>{
      read2.classList.add("show");
    setTimeout(()=>{
      read2.classList.remove("fadeout");
      searchtime+= 1;
      search();
    },1000);
     },2000);
    },1000);
  },2000);
  
}

/*-----------------------------ステップ2ロード完了-----------------------------*/ 

}/*------------------------------------★ステップ2終了★------------------------------------*/ 



}




