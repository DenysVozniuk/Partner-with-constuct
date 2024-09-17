var header = document.querySelector(".header");
var navBtn = document.querySelector("#main-screen-nav-btn");
var buttonScrollDown = document.querySelector('.main-screen-btn-scroll-down');
var aboutSection = document.querySelector(".about");
var headerMobileMenu = document.querySelector(".header-nav-elements");
var headerFixed = document.querySelector(".menu-content");
var mainScreenSection = document.querySelector('.main-screen-section');


navBtn.onclick = function() {
   
    if(!navBtn.classList.contains('active')){
            navBtn.classList.add('active');
            document.body.style = "overflow: hidden;";
            if(headerMobileMenu.classList.contains('close'))
            {headerMobileMenu.classList.remove('close');}

            headerMobileMenu.classList.add('open');

            if(headerFixed.classList.contains('header-fixed'))
            {
                headerFixed.classList.add('d-none');
            }
    }
    else  // button click to close mobile menu
    {
        navBtn.classList.remove('active');
        document.body.removeAttribute('style');
        headerMobileMenu.classList.remove('open');
        headerMobileMenu.classList.add('close');
        headerFixed.classList.remove('d-none');
    }
};

var mediaQuery = window.matchMedia('(min-width: 941px)');
if (matchMedia){
    mediaQuery.addListener(changes);
    changes(mediaQuery);
}
function changes (mediaQuery){
    if(mediaQuery.matches)   // more than 940 px
    {
        if(navBtn.classList.contains('active'))
        {navBtn.classList.remove('active');}
        
        if(header.classList.contains('hidden'))
        {header.classList.remove('hidden');}
        
        document.body.removeAttribute('style');

        if (headerMobileMenu.classList.contains('close'))
        {headerMobileMenu.classList.remove('close');}

        else if (headerMobileMenu.classList.contains('open'))
        {headerMobileMenu.classList.remove('open');}
    }
    else    // less than 941px
    {
        if(!header.classList.contains('hidden'))
        {header.classList.add('hidden');}
    }
}


function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

buttonScrollDown.addEventListener('click', function() {
    scrollTo(aboutSection);
});

window.addEventListener('scroll', function showHeader () {
    if(!mediaQuery.matches)   // less than 940 px
    {
        if(window.pageYOffset >= mainScreenSection.clientHeight) {
            headerFixed.classList.add('header-fixed');
            // navBtn.style = "top: 23px; position: fixed;";
            navBtn.classList.add('btn-fixed');
           // document.body.style.paddingTop = 29 + 'px';
        }
        else
        {
            headerFixed.classList.remove('header-fixed');
            // navBtn.removeAttribute('style');
            navBtn.classList.remove('btn-fixed');
            document.body.removeAttribute('style');
        }
    }
});

