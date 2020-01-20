// Your code goes here

//easter egg- change title on dbl click
const changeTitle =
document.querySelector ('.logo-heading');

changeTitle.addEventListener('dblclick', () => {
    changeTitle.textContent = "Let's Go For a Ride!"
});

//make content destination img larger & small on mouse leave/enter
const newDestinationImg = document.querySelector('.content-destination img');
newDestinationImg.addEventListener('mouseenter', () => {
    newDestinationImg.style.transform = "scale(1.5)";
    newDestinationImg.style.transition ="all .7s";
});

newDestinationImg.addEventListener('mouseleave', () => {
    newDestinationImg.style.transform = 'scale(1)'
});


//change nav color when click
const navColor = document.querySelectorAll('.nav-link')

const navTitle = (event) => {
    // console.log ('element', event.target)
    event.target.style.color = 'blue'
}
navColor.forEach(title => {
    title.addEventListener('click', navTitle)
});

//change color of h2 on click
const h2Color = document.querySelectorAll('.containter home .text-content h2')

const h2Change = (event) => {
    // console.log ('element', event.target)
    event.target.style.color = 'hot pink'
}
h2Color.forEach(title => {
    title.addEventListener('click', h2Change)
});

//change color of p on click

//change background of div
const body = document.querySelector('body');
body.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = '#40e0d0';
})

// const containerHome = document.querySelector('.container home');
// containerHome.addEventListener('dblclick', (event) => {
//     event.target.style.backgroundColor = 'yellow';
//     event.stopPropagation();
// })

// const intro = document.querySelector('.intro');
// intro.addEventListener('dblclick', (event) {
//     event.stopPropagation()
//     intro.style.backgroundColor = "pink";
// })

//nest 2 similar events & prevent propagation

//stop nav from refreshing








