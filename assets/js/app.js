/*=======Background scroll nav======*/

const scrollNav = () => {
    const navigation = document.getElementById('header');
    if(this.scrollY >= 50){
        navigation.classList.add('scroll__nav');
    }else{
        navigation.classList.remove('scroll__nav');
    }
}
window.addEventListener('scroll', scrollNav);

/*======Swiper Config=====*/
var swiperResidence = new Swiper('.residence__container', {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=====Value====*/

const accordionItem = document.querySelectorAll('.value__accordion__item');

accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.value__accordion__header');

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion__open');
        toggleItem(item);
        if(openItem && openItem !== item){
            toggleItem(openItem)
        }
    });
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value__accordion__content');

    if(item.classList.contains('accordion__open')){
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion__open');
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion__open');
    }
}

/*====Scroll Section====*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active__link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active__link')
        }
    })
}

window.addEventListener('scroll', scrollActive);

/*===Button scroll up===*/

const scrollUp = () => {
    const buttonScroll = document.getElementById('scroll-up');
    if(this.scrollY >= 350) buttonScroll.classList.add('show__scroll');
    else buttonScroll.classList.remove('show__scroll');
    
}

window.addEventListener('scroll', scrollUp);

/*===Scroll Reveal===*/

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 500,
    delay: 200,
    //reset: true
});

scrollReveal.reveal(`.home__title, .residence__container, .subscribe__container, .footer__container`)
scrollReveal.reveal(`.home__display p`, {delay: 250})
scrollReveal.reveal(`.home__search`, {delay: 300})
scrollReveal.reveal(`.home__value`, {delay: 400})
scrollReveal.reveal(`.home__img`, {delay: 500, origin: 'bottom'})
scrollReveal.reveal(`.logo__image`, {interval: 50})
scrollReveal.reveal(`.value__img, .contact__content`, {origin: 'left'})
scrollReveal.reveal(`.value__content, .contact__image`, {origin: 'right'})





