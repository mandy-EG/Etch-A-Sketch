// Variables de Creacion de Celdas

function crearCeldas() {
    const size = document.getElementById('input').value;
    const container = document.getElementById('container-juego');
    
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 1; i <= (size * size); i++) {
        const celda = document.createElement('celda');
        celda.classList.add('celda');
        container.appendChild(celda);
        celda.addEventListener('mouseover', () => { colorBlack(celda) });
    }

    const hola = "hola"
}

function colorBlack(celda) {
    celda.style.backgroundColor = 'black';
}

function colorRandom(celda) {
    let colores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray'];
    let colorRandom = colores[Math.floor(Math.random() * colores.length)];
    celda.style.backgroundColor = colorRandom;
}

let modo = 'negro';
function controlarModoColor() {
    const btnColorNegro = document.getElementById('colorNegro');
    const btnColorRandom = document.getElementById('colorRandom');
    const celdas = document.querySelectorAll('.celda');

    btnColorNegro.addEventListener('click', () => { modo = 'negro' });
    btnColorRandom.addEventListener('click', () => { modo = 'random' });

    celdas.forEach(celda => {
        celda.addEventListener('mouseover', () => {
            if (modo === 'random') {
                colorRandom(celda)
            }
            else if (modo === 'negro') {
                colorBlack(celda)
            }
        })
    })
}

function reiniciarColores() {
    for (const celda of document.querySelectorAll('.celda')) {
        celda.style.backgroundColor = 'white';
    }
}

crearCeldas();
controlarModoColor();