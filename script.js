<script>
  
  // mulai slideshow halaman pertama
  startSlideshow("slide1");
  let current=1;
const totalPages = 5; // jumlah page kamu

function showPage(page){

  document.querySelectorAll(".page").forEach(p=>{
    p.classList.remove("active");
  });

  document.getElementById("page" + page)
          .classList.add("active");

  current = page;
}

function nextPage(){

  if(current < totalPages){
    showPage(current + 1);
  }

}

function prevPage(){

  if(current > 1){
    showPage(current - 1);
  }

}

function nextPage(){
  document.getElementById("page"+current).classList.remove("active");
  current++;
  document.getElementById("page"+current).classList.add("active");

  if(current === 2) typeWriter();
  
  startSlideshow("slide1")
startSlideshow("slide2")
startSlideshow("slide3")

}

/* TYPE EFFECT */
const text = "1 tahun kita bersama bukalah waktu yang singkat. Di dalamnya ada banyak cerita yang gak selalu mudah, ada tawa yang pernah kita bagi, ada diam yang kadang gak terucap, ada luka kecil yang mungkin gak pernah kita bicarakan, dan ada harapan uang pernah kita gantungkan tinggi, serta ada kenyataan yang perlahan mengajarkan bahwa tidak semua yang kita jaga akan tetap tinggal. Tapi entah bagaimana, kita dapat bertahan sampai sejauh ini.Aku belajar banyak hal dari kalian. Tentang bagaimana mencintai tanpa harus memiliki, tentang bagaimana bertahan meski kadang tidak dipahami, dan tentang bagaimana menerima bahwa tidak semua cerita akan berakhir seperti yang kita inginkan. Ada versi dari diriku yang hanya ada saat bersama kalian, dan mungkin versi itu akan tetap tinggal sebagai bagian dari kenangan yang tidak bisa diulang.Terima kasih sudah hadir di sebagian perjalanan hidupku, menjadi alasan aku tersenyum di hari-hari yang berat, dan menjadi seseorang yang tanpa sadar mengajarkanku arti bertahan, memahami, dan menerima. Mungkin aku tidak selalu bisa menjadi orang baik, mungkin ada kata dan sikap yang sering menyakitkan, tapi percayalah, semua yang aku lakukan selalu ada kalian di dalamnya.";


let i=0;
function typeWriter(){
  if(i<text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter,35);
  }
}

/* SLIDESHOW */
function startSlideshow(id){
  let container = document.getElementById(id);
  if(!container) return;

  let imgs = container.querySelectorAll("img");
  let index = 0;

  setInterval(()=>{
    imgs[index].classList.remove("active");
    index = (index+1)%imgs.length;
    imgs[index].classList.add("active");
  },2000);
}

/* HEART */
function heart(){
  let h=document.createElement("div");
  h.classList.add("heart");
  h.innerHTML="🤍";
  h.style.left=Math.random()*75+"vw";
  h.style.fontSize=Math.random()*20+10+"px";
  h.style.animationDuration=Math.random()*3+2+"s";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),5000);
}
setInterval(heart,300);

/* FLOWER */
function flower(){
  let h=document.createElement("div");
  h.classList.add("flower");
  h.innerHTML="💐";
  h.style.left=Math.random()*75+"vw";
  h.style.fontSize=Math.random()*20+10+"px";
  h.style.animationDuration=Math.random()*3+2+"s";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),5000);
}
setInterval(flower,500);

/* STAR */
function star(){
  let s=document.createElement("div");
  s.classList.add("star");
  s.style.left=Math.random()*75+"vw";
  s.style.top=Math.random()*30+"vh";
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),3000);
}
setInterval(star,1200);
window.addEventListener("click", function () {
  document.getElementById("lagu").play();
}, { once: true });

function startSlideshow(id){
  let container = document.getElementById(id);
  if(!container) return;

  let imgs = container.querySelectorAll("img");
  let index = 0;

setInterval(() => {
    imgs[index].classList.remove("active");
    index = (index + 1) % imgs.length;
    imgs[index].classList.add("active");
  }, 2000); // tiap 8 detik ganti foto
}
 
</script>
