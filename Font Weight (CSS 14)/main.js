let weightLabel = document.querySelector('label[for="weight"]');
let weightInput = document.querySelector('#weight');
let sampleText = document.querySelector('.sample');

function update() {
    weightLabel.textContent = `font-weight: ${weightInput.value};`;
    sampleText.style.fontWeight = weightInput.value;
}

weightInput.addEventListener('input', update);

update();