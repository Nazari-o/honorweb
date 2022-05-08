const body = document.getElementById("body");
const menuOpenBtn = document.querySelector('.menu');
const menuCloseBtn = document.querySelector('.close');
const leftMenu = document.querySelector('.left-drop-menu');
const whiteWatch = document.querySelector('.whiteWatch');
const blackWatch = document.querySelector('.blackWatch');
const pinkWatch = document.querySelector('.pinkWatch');
const currentWatch = document.querySelector('.current-watch');
const arrow = document.querySelector('.arrow');
const menuImg = document.querySelector('.menu-img');
const logoImg = document.querySelector('.logo-img');
const leftLogoImg = document.querySelector('.left-menu-logo');

menuOpenBtn.addEventListener('click', function () {
    leftMenu.style.display = "block";
});

menuCloseBtn.addEventListener('click', () => {
    leftMenu.style.display = "none";
});



whiteWatch.addEventListener('click', () => {
    currentWatch.src = 'images/white-watches.png';
});

blackWatch.addEventListener('click', () => {
    currentWatch.src = 'images/black-watches.png';
});

pinkWatch.addEventListener('click', () => {
    currentWatch.src = 'images/watches.png';
});




//  functiion to change background color and other styling 


let changeScheme = () => {
    arrow.addEventListener('click', () => {
        body.classList.toggle('white-scheme');
        arrow.src = "images/black-arrow.png";
        menuImg.src = "images/black-menu.png";
        leftLogoImg.src = "images/logo.png";
        menuCloseBtn.src = "images/close.png";

        if (logoImg.src === ("images/black-logo.png")) {
            logoImg.src = "images/logo.png";
        } else {
            logoImg.src = "images/black-logo.png";
        }
    });
};

changeScheme()









