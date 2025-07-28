document.getElementById("formularioTMB").addEventListener("submit", function(e) {
    e.preventDefault();
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const idade = parseInt(document.getElementById("idade").value);

    let tmb;

    if (sexo === "masculino") {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    }

    else if (sexo === "feminino") {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
    }

    else {
        tmb = null;
    }

    const divResultado = document.getElementById("resultado");

    if (tmb) {
        divResultado.textContent = `Sua TMB é ${tmb.toFixed(2)} kcal/dia.`
    }

    else {
        divResultado.textContent = "Por favor, preencha todos os campos corretamente."
    }
});