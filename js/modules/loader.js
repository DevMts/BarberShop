export function iniciarLoader() {
    addEventListener('load', () => {
        document.querySelector('main')?.classList.remove('off');
        document.querySelector('header')?.classList.remove('off');
        document.querySelector('footer')?.classList.remove('off');
        document.querySelector('.loader')?.classList.add('off');
    });
}
