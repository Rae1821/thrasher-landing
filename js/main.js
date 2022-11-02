
//toggle dark mode/light mode


//Animations
function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if(elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active'); 
        }    else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);

//to check the scroll position on page load
reveal();


//Scroll To Top Button
const btn = document.getElementById('btn-to-top');

//when user scrolls down 20px from top of page show button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

//when the button is clicked, scroll to the top of the page
btn.addEventListener('click', backToTop);

function backToTop() {
    document.body.scrollTop = 0; //for Safari
    document.documentElement.scrollTop = 0; //for Chrome, Firefox, IE, and Opera
}


// Sidenav with content pushed to the right
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById('main').style.marginLeft = "250px";
}

// set the width of the side nav to 0 and the left margin of the page content to 0 
function closeNav() {
    document.getElementById('mySidenav').style.width = "0";
    document.getElementById('main').style.marginLeft = "0";
}