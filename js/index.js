const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const audio = document.getElementById("audio");
const play = document.getElementById("play");
const pause = document.getElementById("pause");


play.addEventListener("click",(e)=>{
    pause.style.display = "flex";
    play.style.display = "none";
    audio.play();
});

pause.addEventListener("click",(e)=>{
    pause.style.display = "none";
    play.style.display = "flex";
    audio.pause();
});

window.onload = function() {

    if (ctx) {
        draw(ctx);
    } else {
        console.error('El navegador no soporta Canvas.');
    }

};

function draw(ctx){
    dibujarFondo(ctx);
    drawFlower(ctx);
}

function drawFlower(ctx) {

    
    dibujarTallo(ctx);    
    dibujarHoja(ctx, 140, 90, 5, 15, -30);
    dibujarHoja(ctx, 160, 100, 5, 15, 30);
    dibujarSuelo(ctx);
    
    // Dibujar los petalos
    const numeroPetalos = 10;
    const radioPetalo = 20;
    for (let i = 0; i < numeroPetalos; i++) {
        const angulo = (i * 2 * Math.PI) / numeroPetalos;
        const x = 150 + radioPetalo * Math.cos(angulo);
        const y = 40 + radioPetalo * Math.sin(angulo);
        dibujarPetalo(ctx, x, y, 10, 10, angulo);
    }
    dibujarCentro(ctx, 150, 40, 10);

}

function dibujarTallo(ctx){
    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(150, 140);
    ctx.strokeStyle = '#228B22';
    ctx.lineWidth = 10;
    ctx.stroke();
}

function dibujarHoja(ctx, x, y, ancho, alto, rotacion) {
    ctx.save(); // Guardar el estado actual del contexto
    ctx.translate(x, y); // Mover el origen al punto (x, y)
    ctx.rotate((rotacion * Math.PI) / 180); // Rotar según el ángulo dado

    ctx.beginPath();
    ctx.ellipse(0, 0, ancho, alto, 0, 0, 2 * Math.PI);
    ctx.fillStyle = '#32CD32'; // Verde claro
    ctx.fill();
    ctx.strokeStyle = '#228B22'; // Verde oscuro
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore(); // Restaurar el estado original del contexto
}

function dibujarCentro(ctx, x, y, radio){
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, 2 * Math.PI);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 3;
    ctx.stroke();
}

function dibujarPetalo(ctx, x, y, ancho, alto, angulo){
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angulo);

    ctx.beginPath();
    ctx.ellipse(0, 0, ancho, alto, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
}

function dibujarSuelo(ctx){
    ctx.beginPath();
    ctx.moveTo(0, 145);
    ctx.lineTo(300, 145);
    ctx.strokeStyle = '#15bd1d';
    ctx.lineWidth = 10;
    ctx.stroke();
}

function dibujarFondo(ctx){
    cielo(ctx);
    pasto(ctx);
}

function cielo(ctx){
    ctx.beginPath();
    ctx.fillStyle = '#0390fc';
    ctx.fillRect(0,0,300,100);
    ctx.lineWidth = 10;
    ctx.stroke();
}

function pasto(ctx){
    ctx.beginPath();
    ctx.fillStyle = '#03fc41';
    ctx.fillRect(0,100,300,50);
    ctx.lineWidth = 10;
    ctx.stroke();
}