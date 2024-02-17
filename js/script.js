/* change backgroud of navbar when scroll */
let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navbarDiv.classList.add('navbar-cng')
    } else {
        navbarDiv.classList.remove('navbar-cng')
    }
})

const navbarCollapse = document.getElementById('navbar-collapse')
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');

// show navbar
navbarShowBtn.addEventListener('click', () => {

    navbarCollapse.classList.add('navbar-collapse-rmw')
})

// hide navbar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapse.classList.remove('navbar-collapse-rmw')
})
// hide when click inside collapse
document.addEventListener('click', (e) => {
    if (e.target.id != 'navbar-collapse' && e.target.id != 'navbar-show-btn' && e.target.parentElement.id != 'navbar-show-btn') {
        navbarCollapse.classList.remove('navbar-collapse-rmw')
    }
})