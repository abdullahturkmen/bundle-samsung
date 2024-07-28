// script.js
export const trackScroll = () => {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const pageWidth = window.innerWidth
        const navbarLogo = document.querySelector('#navbar-logo')
        const logoImage = navbarLogo.querySelector('img');


        if (scrollTop > 5) {
            document.getElementById('navbar-description').style.display = "none";
        } else {
            document.getElementById('navbar-description').style.display = "block";
        }


        if (pageWidth > 767) {

            if (scrollTop > 5) {
                logoImage.style.height = "80px";
            } else {
                logoImage.style.height = "160px";
            }
        }
        else{
            if (scrollTop > 5) {
                logoImage.src = "./assets/img/mobil-logo@2x.png";
                setTimeout(() => {
                    logoImage.style.height = "60px";
                }, 100);
                navbarLogo.classList.add('justify-start')
                navbarLogo.classList.remove('justify-center')
            } else {
                logoImage.src = "./assets/img/logo@2x.png";
                setTimeout(() => {
                    logoImage.style.height = "160px";
                }, 100);
                navbarLogo.classList.add('justify-center')
                navbarLogo.classList.remove('justify-start')
            }
        }
    });
};
