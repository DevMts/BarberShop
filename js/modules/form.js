export class FormHandler {
    constructor(selector) {
        this.fields = document.querySelectorAll(selector);
        this.init();
    }

    init() {
        this.fields.forEach(field => {
            const label = field.previousElementSibling; // Captura o label antes do input ou textarea
            if (!label) return; // Garante que o label existe antes de modificar

            field.addEventListener('focus', () => this.activateLabel(label));
            field.addEventListener('blur', () => this.deactivateLabel(field, label));

            // Se o campo já tiver texto ao carregar a página, mantém o label ativo
            if (field.value.trim() !== '') {
                this.activateLabel(label);
            }
        });
    }

    activateLabel(label) {
        label.classList.add('active');
    }

    deactivateLabel(field, label) {
        if (field.value.trim() === '') {
            label.classList.remove('active');
        }
    }
}

