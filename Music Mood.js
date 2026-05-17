


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
 let clickCount = 0;
 let answer1=""
 let answer2=""


function searchScene(question1){

clickCount++;

/*------------------------------------★ステップ1開始★------------------------------------*/ 

if(step===0){
   const menucontainer1=document.getElementById("menu-container1")
   const menu1=document.getElementById("menu1");
   const read1=document.getElementById("read1")
   if(clickCount === 1){
  const text = question1.textContent;
  answer1=text;

}

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
   btn21.textContent="最近の曲が聞きたい"
   btn22.textContent="気分を上げたい"
   btn23.textContent="懐かしい曲が聞きたい"
   btn24.textContent="落ち着きたい"
   },1000);
}

if(answer1==="ドライブを楽しみたい"&&step===1){
setTimeout(()=>{
   answer12=true
   step+=1;
   btn21.textContent="アニソンメドレーが聞きたい"
   btn22.textContent="テンション上げたい"
   btn23.textContent="落ち着いた曲がいい"
   btn24.textContent="ドラマチックな曲がいい"
    },1000);
}

if(answer1==="リラックスしたい"&&step===1){
   setTimeout(()=>{
   answer13=true
   step+=1;
   btn21.textContent="気持ちを上げたい気分"
   btn22.textContent="落ち着きたい気分"
   btn23.textContent="ポップな洋楽な気分"
   btn24.textContent="失恋ソングな気分"
   },1000);
}

if(answer1==="作業に集中したい"&&step===1){
   setTimeout(()=>{
   answer14=true
   step+=1;
   btn21.textContent="とにかくずっと流しててほしい"
   btn22.textContent="メドレーが聞きたい"
   btn23.textContent="洋楽を流しててほしい"
   btn24.textContent="思い出に浸りたい"
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
},2500);

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
},3000);
/*-----------------------------ステップ2表示完了-----------------------------*/ 
   
}
/*------------------------------------★ステップ1終了★------------------------------------*/ 


/*------------------------------------★ステップ2開始★------------------------------------*/ 

if(step===2){
  document.querySelector(".answer2").textContent = answer2;
  if(clickCount === 2){
   const text = question1.textContent;
  answer2=text;
}

   const menucontainer1=document.getElementById("menu-container1")
   const menu1=document.getElementById("menu1");
   const read2=document.getElementById("read2")

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
 },10);
   

/*-----------------------------ステップ2ロード開始-----------------------------*/ 

let searchtime = 0;

const search=setInterval(() => {

  if(searchtime>= 3){
    clearInterval(search);
    showResult();
    read2.classList.remove("fadein");
    read2.classList.add("fadeout");
    return
  }
  read2.classList.remove("fadein");
  read2.classList.add("fadeout");

  setTimeout(()=>{
  read2.classList.remove("fadeout");
  read2.classList.add("fadein");

  },1010);
  searchtime++
}, 2000);

/*search();

function search(){
  if(searchtime >= 3){

     read2.style.display="none";
  step+=1;
  showResult();
    return;
  }
  setTimeout(()=>{
    read2.classList.add("fadeout");
    setTimeout(()=>{
      read2.classList.remove("fadeout");
    setTimeout(()=>{
      read2.classList.add("show");
    setTimeout(()=>{
      read2.classList.remove("show");

 searchtime+= 1;
   search();

    },1000);
     },1000);
    },1000);
  },1000);

  
}/*
/*-----------------------------ステップ2ロード完了-----------------------------*/ 
/*if(searchtime>=3){
  read2.style.display="none"
  step+=1;
}*/

}/*------------------------------------★ステップ2終了★------------------------------------*/ 



/*------------------------------------★ステップ3開始★------------------------------------*/ 
function showResult(){

  const read3 = document.getElementById("read3");
  read3.style.display = "block";
  read3.classList.add("show");

console.log("answer2:", answer2);

  const query = answer1 + " " + answer2+"J-POP official";
  searchYouTube(query);
}

/*-----------------------------YOUTUBE API開始-----------------------------*/

  const API_KEY = "AIzaSyBSB19O-OoQqonLwdDcfard8BHOpnP93P8";

  async function searchYouTube(query) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(query)}&key=${API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

  if(!data.items){
    console.log("エラー:", data);
    return;
  }


    const resultsDiv = document.getElementById("youtube-results");
    resultsDiv.innerHTML = "";

    data.items.forEach(item => {
      const videoId = item.id.videoId;
      const title = item.snippet.title;

      const videoElement = document.createElement("div");
      videoElement.innerHTML = `
        <p>${title}</p>
        <iframe width="300" height="200"
          src="https://www.youtube.com/embed/${videoId}?enablejsapi=1">
        </iframe>
      `;
      resultsDiv.appendChild(videoElement);
    });


  }

  
}

/*-----------------------------YOUTUBE API終了-----------------------------*/

/*------------------------------------★ステップ3終了★------------------------------------*/ 

function reset(){
  step=0;
  clickCount=0;
  answer1="";
  answer2="";
  document.getElementById("read3").classList.add("fadeout")
  console.log("reset動いた！");

  setTimeout(()=>{
  const menucontainer1=document.getElementById("menu-container1")
  const read1=document.getElementById("read1")
  const read2=document.getElementById("read2")
  const read3=document.getElementById("read3")

menucontainer1.style.display="flex"
read1.style.display="none"
read2.style.display="none"
read3.style.display="none"

read3.classList.remove("fadein");
read3.classList.remove("fadeout");

menucontainer1.classList.add("fadein")

  },1000);

}







