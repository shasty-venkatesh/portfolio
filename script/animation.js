//navbar animation
const tl1 = gsap.timeline();
tl1.to("header ul li a", {
  y: -200,
  opacity: 0,
  stagger: 0.2,
  duration: 0,
});
tl1.to("header ul li a", {
  y: 0,
  duration: 0.2,
  stagger: {
    each: 0.5,
    ease: "power3.inOut",
  },
  opacity: 1,
});

//line animation

const initialpath = `M 10 25 Q 640 25 1515 25`;

const path = document.querySelector(".line");

path.addEventListener("mousemove", function (event) {
  const anipath = `M 10 25 Q ${event.x} ${event.y} 1515 25`;
  gsap.to(".line path", {
    attr: {
      d: anipath,
    },
    duration: 0.2,
  });
});
path.addEventListener("mouseleave", function () {
  gsap.to(".line path", {
    attr: {
      d: initialpath,
    },
    duration: 1,
    ease: "elastic.out(1,0.2)",
  });
});

//letter animation

const tl2 = gsap.timeline();

tl2.to(".letter svg", {
  top: 0,
  rotate: 360,
  duration: 1,
});
tl2.to(
  ".letter p",
  {
    top: 0,
    duration: 1,
  },
  0
);
tl2.to(".letter svg", {
  rotate: -270,
  repeat: -1,
  delay: 1.5,
  duration: 1.5,
});

const tl3 = gsap.timeline();

tl3.from(".letter1 svg", {
  scale: 3,
  duration: 5,
  ease: "elastic.out(1,0.2)",
});
tl3.to(
  ".letter1 svg",
  {
    opacity: 0,
  },
  2
);
tl3.to(
  ".letter1 p",
  {
    opacity: 1,
  },
  2
);

// animate the card

gsap.from(".id", {
  y: -600,
  duration: 3,
  ease: "elastic.out(0.3)",
});
const card = document.querySelector(".id");

card.addEventListener("mouseover", function () {
  gsap.to(".id", {
    rotateX: 25,
  });
});
card.addEventListener("mouseleave", function () {
  gsap.to(".id", {
    rotateX: 0,
  });
});

//animation for about title

gsap.from(".open", {
  x: 130,
  duration: 2,
  scrollTrigger: ".open",
});
gsap.from(".close", {
  x: -150,
  duration: 2,
  scrollTrigger: ".close",
});
gsap.from(".about1", {
  opacity: 0,
  duration: 1,
  delay: 2,
  scrollTrigger: ".about1",
});

// animation for word1

const word1 = document.querySelector(".word1");
const text = word1.textContent.split("");
word1.innerHTML = "";
for (const i of text) {
  word1.innerHTML += `<span class="b">${i}</span>`;
}
gsap.from(".b", {
  color: "rgb(29, 255, 116)",
  stagger: 0.1,
  duration: 0.1,
  opacity: 0.5,
  scrollTrigger: ".b",
});

//animation for word2

const word2 = document.querySelector(".word2");
const text1 = word2.textContent.split("");
word2.innerHTML = "";
for (const i of text1) {
  word2.innerHTML += `<span class="c">${i}</span>`;
}
gsap.from(".c", {
  color: "#fffce1",
  rotate: 360,
  stagger: 0.1,
  duration: 0.5,
  scrollTrigger: ".c",
});
gsap.to(".c", {
  color: "rgb(29, 255, 116)",
  stagger: 0.1,
  scrollTrigger: ".c",
});

//animation for word3

const word3 = document.querySelector(".word3");
const text2 = word3.textContent.split("");
word3.innerHTML = "";
for (const i of text2) {
  word3.innerHTML += `<span class="d">${i}</span>`;
}
gsap.from(".d", {
  color: "rgb(29, 255, 116)",
  y: 20,
  stagger: 0.1,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: ".d",
});

//animation for project

window.addEventListener("wheel",(event)=>{
  if(event.deltaY >0){
    gsap.to(" .work svg ",{
      rotate:0
   })
    gsap.to(".work",{
       transform:"translateX(0%)",
       duration:10,
       ease:"none"
    })
  }
  else{
    gsap.to(" .work svg ",{
       rotate:180
    })
    gsap.to(".work",{
      transform:"translateX(-72%)",
      duration:25,
      ease:"none",
   })
  }
})

//animation for skill card
gsap.registerPlugin(Flip);
button1=document.querySelector(".web a")
button2=document.querySelector(".mobile a")
button3=document.querySelector(".language a")
card1=document.querySelector(".web")
card2=document.querySelector(".mobile")
card3=document.querySelector(".language")


button1.addEventListener("click",()=>{
  const state = Flip.getState(card1);
  if (card1.style.gridColumn!="span 3")
  {
    card1.children[3].style.display="none";
    card1.style.gridColumn="span 3";
    card1.style.height="25rem";
    card3.style.gridColumn="span 1";
    card3.style.gridRow=null;
    card3.style.height="10rem";
    card3.children[1].style.display="none";
    card3.children[2].textContent="Show Skill";
    card2.style.gridColumn="span 1";
    card2.style.gridRow=null;
    card2.style.height="10rem";
    card2.children[1].style.display="none";
    card2.children[2].textContent="Show Skill";
    Flip.from(state, {
      duration: 0.5,
      ease: "power1.inOut",
      onComplete:listcard1
    });
  }
  else
  {
    card1.style.gridColumn="span 1";
    card1.style.height="10rem";
    card1.children[1].style.display="none";
    card1.children[2].style.display="none";
    card1.children[3].textContent="Show Skill";
    Flip.from(state, {
      duration: 0.5,
      ease: "power1.inOut",
    });
  }
  
})
function listcard1()
{
  card1.children[1].style.display="flex";
  card1.children[2].style.display="flex";
  card1.children[3].textContent="Exit";
  card1.children[3].style.display=null;
}

button2.addEventListener("click",()=>{
  const state = Flip.getState(card2);
  if (card2.style.gridColumn!="span 3")
  {
    card2.children[2].style.display="none";
    card2.style.gridColumn="span 3";
    card2.style.gridRow="1";
    card2.style.height="16rem";
    card1.style.gridColumn="span 1";
    card1.style.height="10rem";
    card1.children[1].style.display="none";
    card1.children[2].style.display="none";
    card1.children[3].textContent="Show Skill";
    card3.style.gridColumn="span 1";
    card3.style.gridRow=null;
    card3.style.height="10rem";
    card3.children[1].style.display="none";
    card3.children[2].textContent="Show Skill"
    Flip.from(state, {
      duration: 0.5,
      ease: "power1.inOut",
      onComplete:listcard2
    });
  }
  else
  {
    card2.style.gridColumn="span 1";
    card2.style.gridRow=null;
    card2.style.height="10rem";
    card2.children[1].style.display="none";
    card2.children[2].textContent="Show Skill"
    Flip.from(state, {
      duration: 0.5,
      ease: "power1.inOut",
    });
  }
})
function listcard2()
{
  card2.children[1].style.display="flex";
  card2.children[2].textContent="Exit";
  card2.children[2].style.display=null;
}

button3.addEventListener("click",()=>{
  const state = Flip.getState(card3);
  if (card3.style.gridColumn!="span 3")
  {
    card3.children[2].style.display="none";
    card3.style.gridColumn="span 3";
    card3.style.gridRow="1";
    card3.style.height="16rem";
    card3.children[1].style.display="flex";
    card3.children[2].textContent="Exit";
    card1.style.gridColumn="span 1";
    card1.style.height="10rem";
    card1.children[1].style.display="none";
    card1.children[2].style.display="none";
    card1.children[3].textContent="Show Skill";
    card2.style.gridColumn="span 1";
    card2.style.gridRow=null;
    card2.style.height="10rem";
    card2.children[1].style.display="none";
    card2.children[2].textContent="Show Skill";
    Flip.from(state, {
      duration: 0.5,
      ease: "power1.inOut",
      onComplete:listcard3
    });
  }
  else
  {
    card3.style.gridColumn="span 1";
    card3.style.gridRow=null;
    card3.style.height="10rem";
    card3.children[1].style.display="none";
    card3.children[2].textContent="Show Skill";
    Flip.from(state, {
      duration: 0.5,
      ease: "power1.inOut",
    });
  }
})

function listcard3()
{
  card3.children[1].style.display="flex";
  card3.children[2].textContent="Exit";
  card3.children[2].style.display=null;
}

// animation for animation card
gsap.to(".projectlist",{
  transform:"translateX(-50%)",
  duration:10,
  scrollTrigger:{
      trigger:".projectlist",
      scrub:1,
      pin:".projectlist",
      start:"top 10%"
  }
})

gsap.from(".projectcard",{
  opacity:0,
  scale:0,
  duration:2,
  stagger:2,
  scrollTrigger:{
    trigger:".projectlist",
    scrub:1
}
})
gsap.to(".projecttitle",{
  transform:"translateX(35%)",
  delay:2,
  duration:10,
  scrollTrigger:{
    trigger:".projectlist",
    scrub:1
}
})

//animation for contact

gsap.from(".emailcontact",{
    scale:1.3,
    scrollTrigger:{
      trigger:".contact",
      scrub:1
    }
})




