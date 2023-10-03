// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#kopimenu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const kopi = document.querySelector('#kopimenu');

document.addEventListener('click', function(e){
    if(!kopi.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})