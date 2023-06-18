document.getElementById("equationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    var discriminante = Math.pow(b, 2) - 4 * a * c;

    var x1, x2;
    if (discriminante > 0) {
        x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    } else if (discriminante === 0) {
        x1 = x2 = -b / (2 * a);
    } else {
        x1 = NaN;
        x2 = NaN;
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <h3>Resultado:</h3>
        <p>Raiz 1 (x1): ${x1}</p>
        <p>Raiz 2 (x2): ${x2}</p>
    `;
    resultado.style.display = "block";
});