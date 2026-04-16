// Плавный скролл и кнопка наверх
window.addEventListener('scroll', function() {
    const btn = document.getElementById('go-top');
    if (window.scrollY > 300) btn.style.display = 'block';
    else btn.style.display = 'none';
});
document.getElementById('go-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Добавим консольное приветствие
console.log('Добро пожаловать в ПИЗДОС! Осторожно, длинный контент.');