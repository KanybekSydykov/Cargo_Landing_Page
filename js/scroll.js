let banner = document.getElementById('banner');
let navbar = document.getElementById('navbar');
let ul = [...document.querySelector('.navbar-nav').children];
let logo = document.querySelector('.logo');
let svg = document.querySelector('.bi-caret-up-fill')
let scrollBtn = document.querySelector('.scrollTop')

let bannerHeight = banner.clientHeight;
let navbarHeight = navbar.clientHeight;

console.log(window.innerWidth);

window.addEventListener('scroll', (e) => {
    if(banner.getBoundingClientRect().bottom < 0 ){
        navbar.classList.add('add-bg');
        ul.map(li=>{
            li.children[0].classList.remove('s-link')
            li.children[0].classList.add('c-link')
            logo.style.filter= "invert(0)"
            scrollBtn.style.display="flex"
        })
    } else if (navbar.classList.contains('add-bg')){
        navbar.classList.remove('add-bg')
        ul.map(li=>{
            li.children[0].classList.add('s-link')
            li.children[0].classList.remove('c-link')
            logo.style.filter= "invert(1)"
            scrollBtn.style.display='none'
        })
    }
},{
    passive:true
})


scrollBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.scrollTo(0,0)
})



