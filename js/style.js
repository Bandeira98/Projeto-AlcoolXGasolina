function calcular() {
    const alcool = parseFloat(document.getElementById('alcool').value);
    const gasolina = parseFloat(document.getElementById('gasolina').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(alcool) || isNaN(gasolina)) {
      resultado.innerText = 'Por favor, preencha os dois valores!';
      return;
    }

    const relacao = alcool / gasolina;

    if (relacao < 0.7) {
      resultado.innerText = ' Melhor abastecer com ÁLCOOL!';
    } else {
      resultado.innerText = ' Melhor abastecer com GASOLINA!';
    }
  }

  function limpar() {
    document.getElementById('alcool').value = '';
    document.getElementById('gasolina').value = '';
    document.getElementById('resultado').innerText = '';
  }