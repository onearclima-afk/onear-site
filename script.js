const services = document.querySelectorAll('.service');
window.addEventListener('scroll', () => {
    services.forEach(service => {
        const top = service.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if(top < screenHeight - 50) service.classList.add('show');
    });
});