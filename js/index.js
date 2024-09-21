const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = function() {

    if (ctx) {
        dibujarFlor(ctx);
    } else {
        console.error('El navegador no soporta Canvas.');
    }
};

function dibujarFlor(ctx) {
    dibujarTallo(ctx);

    dibujarCentro(ctx, 100, 100, 30);

    const numeroPetalos = 10;
    const radioPetalo = 56;
    for (let i = 0; i < numeroPetalos; i++) {
        const angulo = (i * 2 * Math.PI) / numeroPetalos;
        const x = 100 + radioPetalo * Math.cos(angulo);
        const y = 100 + radioPetalo * Math.sin(angulo);
        dibujarPetalo(ctx, x, y, 40, 20, angulo);
    }
}

function dibujarTallo(ctx) {
    ctx.beginPath();
    ctx.moveTo(100, 350);
    ctx.lineTo(100, 150);
    ctx.strokeStyle = '#228B22';
    ctx.lineWidth = 10;
    ctx.stroke();
}

function dibujarCentro(ctx, x, y, radio) {
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, 2 * Math.PI);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 3;
    ctx.stroke();
}

function dibujarPetalo(ctx, x, y, ancho, alto, angulo) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angulo);

    ctx.beginPath();
    ctx.ellipse(0, 0, ancho, alto, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 2;

    ctx.restore();
}