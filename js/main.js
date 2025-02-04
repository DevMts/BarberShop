import { Carrosel } from './modules/carrossel.js';
import { NewMap } from './modules/mapa.js';
import { iniciarLoader } from './modules/loader.js';
import { FormHandler } from './modules/form.js';


// Inicializar carrosséis
const header = new Carrosel(".mySwiper", ".headerInfos");
header.iniciar();

const feedback = new Carrosel(".mySwiper2", ".fourSectionInfos");
feedback.iniciar();

// Inicializar mapa
const localMap = new NewMap(-21.1303, -42.3674, 15);
localMap.init();

// Inicializar loader
iniciarLoader();
console.log('carregou');

const formHandler = new FormHandler('.formGroup input, .formGroup textarea');
