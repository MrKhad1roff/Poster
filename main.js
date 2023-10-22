const clouds = [...document.querySelectorAll('.header__cloud')]
const boat = document.querySelector('.header__boat')



window.addEventListener('scroll', () => {
    console.log(this.scrollY)

    clouds.forEach((cloud) => {
        let speed = cloud.getAttribute("data-speed")
        cloud.style.transform = `translateX(${this.scrollY * speed}px)`


        speedBoat = boat.getAttribute('data-speed')
        boat.style.transform = `translateX(${this.scrollY * speedBoat}px)`

        console.log(speed)
    })
});

// Typing

const title = document.querySelector('.header__title')
//console.log(title)
const text = title.innerHTML;  //parallax effect 
console.log(text.length);

title.innerHTML = null;

function str(x = 0) {
    title.innerHTML = title.innerHTML + text[x];
    x++;

    if (x < text.length) {
        setTimeout(() => {
            str(x)
        }, 200);

    
    }

}

str();









const main = document.querySelector(".main")
const enter = document.querySelector(".enter")
const fire =document.querySelector(".fire")
const home = document.querySelector(".home")

enter.addEventListener('click', ()=>{
    main.style.display = 'block'
    fire.classList.add('active')
    enter.innerHTML = 'Go Lower 👇'

    setTimeout(() => {
        fire.classList.remove('active')
    }, 2000);
})
