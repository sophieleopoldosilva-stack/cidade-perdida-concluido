const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');

        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        const proximo = document.getElementById(proximoPasso);

        if (proximo) {
            atual.classList.remove('ativo');
            proximo.classList.add('ativo');
        }
    });
});