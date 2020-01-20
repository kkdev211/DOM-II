// Your code goes here

// 1 easter egg- change title on dbl click
const changeTitle =
document.querySelector ('.logo-heading');

changeTitle.addEventListener('dblclick', () => {
    changeTitle.textContent = "Let's Go For a Ride!"
});

//2 make content destination img larger & small on mouse leave/enter
const newDestinationImg = document.querySelector('.content-destination img');
newDestinationImg.addEventListener('mouseenter', () => {
    newDestinationImg.style.transform = "scale(1.5)";
    newDestinationImg.style.transition ="all .7s";
});

newDestinationImg.addEventListener('mouseleave', () => {
    newDestinationImg.style.transform = 'scale(1)'
});


//3 change nav color when click
const navColor = document.querySelectorAll('.nav-link')

const navTitle = (event) => {
    // console.log ('element', event.target)
    event.target.style.color = 'purple'
}
navColor.forEach(title => {
    title.addEventListener('click', navTitle)
});

//4 change color of h2 on click
const h2Color = document.querySelectorAll('.home .content-section .text-content h2')

const h2Change = (event) => {
    // console.log ('element', event.target)
    event.target.style.color = 'hotpink'
}
h2Color.forEach(title => {
    title.addEventListener('click', h2Change)
});



// 5 change background of div
//nest 2 similar events & prevent propagation
const body = document.querySelector('body');
body.addEventListener('click', (event) => {
    event.target.style.backgroundColor = '#40e0d0';
})

const containerHome = document.querySelector('.container .intro');
containerHome.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'yellow';
    event.stopPropagation();
})

const letsGo = document.querySelector('.container .content-section');
letsGo.addEventListener('click', (event) => {
    event.target.style.backgroundColor = '#AFEEEE';
    event.stopPropagation();
})

//6 focus

// 7 select

//8 keydown

//9 resize

//10 change image
const changeImage = document.querySelector('.container .intro img');
changeImage.addEventListener('dblclick', () => {
    changeImage.src = https://www.pexels.com/photo/blurred-background-bus-combi-miniature-385998/
});


//stop nav from refreshing

const stopRefresh =document.getElementById("nav").addEventListener("click", function(event){
    event.preventDefault()
  });






