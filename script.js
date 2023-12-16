function checkTheme() {
    const savedTheme = localStorage.getItem('siteTheme');
    document.body.classList.toggle('dark-theme', savedTheme === 'dark');

    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
        servicesSection.classList.toggle('dark-theme', document.body.classList.contains('dark-theme'));
    }
}

function showServiceInfo(infoId) {
    const allInfos = document.querySelectorAll('.service-info');
    allInfos.forEach(info => {
        info.classList.remove('active');
        info.style.opacity = 0;
    });

    const selectedInfo = document.getElementById(infoId);
    selectedInfo.classList.add('active');

    setTimeout(() => {
        selectedInfo.style.opacity = 1;
    }, 100); // Adjust the delay if needed
}

function redirectToSite(url) {
    window.location.href = url;
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuBtn = document.querySelector('.menu-btn-container'); // modified selector

    navMenu.style.left = navMenu.style.left === '0px' ? '-250px' : '0px';

    menuBtn.classList.toggle('change');
}

document.addEventListener('DOMContentLoaded', checkTheme);
