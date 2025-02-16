let words =document.querySelectorAll(".word");
words.forEach((word) =>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter) =>{
        let span =document.createElement("span");
        span. textContent = letter;
        span.className = "letter"
        word.append(span);
    })
})

let currentwordIndex = 0;
let maxWordIndex = words.length -1;
words[currentwordIndex].style.opacity ="1";

let changeText = () =>{
    let currentWord = words[currentwordIndex];
    let nextWord = currentwordIndex === maxWordIndex ? words[0]: words[currentwordIndex + 1];
    

    Array.from(currentWord.children) .forEach((letter,i) =>{
          setTimeout(()=>{
   letter.className ="letter out";
          
    },i * 80);

});
nextWord.style.opacity="1";
Array.from(nextWord.children).forEach((letter,i)=>{
    letter.className = "letter behind";
    setTimeout(()=>{
        letter.className = "letter in";
    }, 340 +i *80);
});
currentwordIndex = currentwordIndex === maxWordIndex? 0 : currentwordIndex + 1;
};

changeText();
setInterval(changeText , 3000)

//circle skill
const circles =document.querySelectorAll('.circle');
circles.forEach(elem=>{
    let dots = elem.getAttribute("data-dots");
    let marked = elem.getAttribute("data-percent");
    let percent = Math.floor(dots*marked/100);
    let points = " ";
    let rotate = 360 / dots;

    for (let i=0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"> </div>`
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
    
})

//active menu
let menuLi= document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop){} 
     menuLi.forEach(sec => sec.classList.remove("active"));
     menuLi[len].classList.add("active");

    
}
activeMenu();
window.addEventListener("scroll",activeMenu);


//sticy header
const header = document.querySelector("header");
window.addEventListener("scroll" ,function(){
    header.classList.toggle("sticky" , window.scrollY >50)
})
//  toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist")

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("fa-x")
  navlist.classList.toggle("open")
}

window.onscroll = ()=>{
    menuIcon.classList.remove("fa-x");
    navlist.classList.remove("open");
}
