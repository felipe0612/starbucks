// fazer esta função 2° (Ela troca a imagem do sorvete grande)

function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

// Fazer esta função 3° (Ela troca a cor do cículo)
function changeCircleColor(color) {
    const circulo =document.querySelector('.circulo');
    circulo.style.background = color;
}

// Fazer esta função 1° (Ela altera o estado Ativo/Desativo)

function toggleMenu() {
    var menuToogle = document.querySelector('.toggle'); // Cria uma variável e usa o DOM para selecionar a classe (.toggle)
    var links = document.querySelector('.links'); // Cria uma variável e usa o DOM para selecionar a classe (.links)
    menuToogle.classList.toggle('active'); // troca o estado da classe (.toggle) para ativo
    links.classList.toggle('active'); // troca o estado da classe (.links) para ativo
}
