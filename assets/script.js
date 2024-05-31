document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('imcForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let gender = document.getElementById('gender').value;
        let height = parseFloat(document.getElementById('height').value) / 100;
        let weight = parseFloat(document.getElementById('weight').value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert('Por favor, insira valores válidos.');
            return;
        }

        let loader = document.getElementById('loader');
        
        loader.style.display = 'block';

        setTimeout(function() {
            let imc = weight / (height * height);
            let classification = '';

            if (imc < 18.5) {
                classification = 'Abaixo do peso';
            } else if (imc < 24.9) {
                classification = 'Peso normal';
            } else if (imc < 29.9) {
                classification = 'Sobrepeso';
            } else {
                classification = 'Obesidade';
            }

            let resultText = `Seu IMC é ${imc.toFixed(2)} (${classification}).`;

            document.getElementById('result').textContent = resultText;
            
            loader.style.display = 'none';
        }, 400);
    });
});
