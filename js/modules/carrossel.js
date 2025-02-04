export class Carrosel {
    constructor(containerSelector, slideSelector) {
        this.container = document.querySelector(containerSelector);
        this.slides = document.querySelectorAll(slideSelector);
        this.swiper = null;
    }

    adicionarSlides() {
        this.slides.forEach(element => element.classList.add('swiper-slide'));
    }

    removerSlides() {
        this.slides.forEach(element => element.classList.remove('swiper-slide'));
    }

    iniciarCarrosel() {
        if (this.swiper) this.swiper.destroy(true, true);

        this.adicionarSlides();

        this.swiper = new Swiper(this.container, {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    verificarTela() {
        if (window.innerWidth < 768) {
            this.iniciarCarrosel();
        } else {
            if (this.swiper) this.swiper.destroy(true, true);
            this.removerSlides();
        }
    }

    iniciar() {
        document.addEventListener("DOMContentLoaded", () => this.verificarTela());
        window.addEventListener("resize", () => this.verificarTela());
    }
}
