class Carrosel {
    constructor(containerSelector, slideSelector) {
        this.container = document.querySelector(containerSelector);
        this.slides = document.querySelectorAll(slideSelector);
        this.swiper = null; // Armazena a instância do Swiper
    }

    adicionarSlides() {
        this.slides.forEach(element => element.classList.add('swiper-slide'));
    }

    removerSlides() {
        this.slides.forEach(element => element.classList.remove('swiper-slide'));
    }

    iniciarCarrosel() {
        if (this.swiper) this.swiper.destroy(true, true); // Remove instância anterior, se existir

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
            if (this.swiper) this.swiper.destroy(true, true); // Remove o Swiper quando não for necessário
            this.removerSlides();
        }
    }

    iniciar() {
        document.addEventListener("DOMContentLoaded", () => this.verificarTela());
        window.addEventListener("resize", () => this.verificarTela());
    }
}

const header = new Carrosel(".mySwiper", ".headerInfos");
header.iniciar();
const feedback = new Carrosel(".mySwiper2", ".fourSectionInfos");
feedback.iniciar();

document.querySelectorAll('.formGroup input, .formGroup textarea').forEach(element => {
    const label = element.previousElementSibling; // Captura o label antes do input ou textarea

    element.addEventListener('focus', () => {
        label.classList.add('active'); // Adiciona a classe quando o campo recebe foco
    });

    element.addEventListener('blur', () => {
        if (element.value.trim() === '') {
            label.classList.remove('active'); // Remove a classe se o campo estiver vazio
        }
    });

    // Se o campo já tiver texto ao carregar a página, coloca o label no topo automaticamente
    if (element.value.trim() !== '') {
        label.classList.add('active');
    }
});

const map = L.map('map').setView([-21.1303, -42.3674], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  

// Adicionar um marcador
L.marker([-21.1303, -42.3674]).addTo(map)
    .bindPopup('Estamos aqui')
    .openPopup();
