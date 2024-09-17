// let carousel = document.querySelector(".carousel");
// let btn1 = document.querySelector(".carouselbutton");
// let btn2 = document.querySelector(".carouselbutton1");
// let btn3 = document.querySelector(".carouselbutton2");
// let btn4 = document.querySelector(".carouselbutton3");
// let btn5 = document.querySelector(".carouselbutton4");
// let index = 0;




// function circlebtn1(){
//     const temp = index + 0.2 * 280;
//    carousel.style.transform = `translatex(-${temp}px)`
//    btn1.classList.add("button__color");
//    btn2.classList.remove("button__color");
//    btn3.classList.remove("button__color");
//    btn4.classList.remove("button__color");
//    btn5.classList.remove("button__color");

// }

// function circlebtn2(){
//     const temp = index + 1 * 280;
//    carousel.style.transform = `translatex(-${temp}px)`
//     btn1.classList.remove("button__color");
//     btn2.classList.add("button__color");
//     btn3.classList.remove("button__color");
//     btn4.classList.remove("button__color");
//     btn5.classList.remove("button__color");

//  }

//  function circlebtn3(){
//     const temp = index + 2 * 280;
//    carousel.style.transform = `translatex(-${temp}px)`
//     btn1.classList.remove("button__color");
//     btn2.classList.remove("button__color");
//     btn3.classList.add("button__color");
//     btn4.classList.remove("button__color");
//     btn5.classList.remove("button__color");

//  }

//  function circlebtn4(){
//     const temp = index + 3 * 280;
//    carousel.style.transform = `translatex(-${temp}px)`
//     btn1.classList.remove("button__color");
//     btn2.classList.remove("button__color");
//     btn3.classList.remove("button__color");
//     btn4.classList.add("button__color");
//     btn5.classList.remove("button__color");

//  }

//  function circlebtn5(){
//     const temp = index + 4 * 280;
//    carousel.style.transform = `translatex(-${temp}px)`
//     btn1.classList.remove("button__color");
//     btn2.classList.remove("button__color");
//     btn3.classList.remove("button__color");
//     btn4.classList.remove("button__color");
//     btn5.classList.add("button__color");

//  }


//  function withtime(){
//      let temp = ++index * 280;
//     if( index >= 4 && index){
//         index -= 4
//     }else {
//    carousel.style.transform = `translatex(-${temp}px)`
// }

//  }

//  setInterval(withtime, 3000);


// btn1.addEventListener("click", circlebtn1);
// btn2.addEventListener("click", circlebtn2);
// btn3.addEventListener("click", circlebtn3);
// btn4.addEventListener("click", circlebtn4);
// btn5.addEventListener("click", circlebtn5);


const carousel = document.querySelector(".carousel");
const carouselButtons = document.querySelectorAll(".carouselbutton");
let interval = null;
let index = 0;
function addInterval() {
    if (interval)
        clearInterval(interval);
    interval = setInterval(() => {
        index++;
        carousel.style.transform = `translatex(-${(index + 0.2) * 280}px)`
    }, 3000);
}
addInterval();
document.addEventListener("click", e => {
    if (e.target.classList.contains("carouselbutton")) {
        for (let i = 0; i < carouselButtons.length; ++i) {
            carouselButtons[i].classList.remove("button__color");
        }
        e.target.classList.add("button__color");
        const buttonIndex = Number(e.target.dataset.index);
        index = buttonIndex;
        carousel.style.transform = `translatex(-${(buttonIndex + 0.2) * 280}px)`
        addInterval();
    }
})


console.log("Test");
