let meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

for (let i = 1; i <= 31; i++){
    let optionElement = document.createElement('option');
    optionElement.value = i;
    optionElement.innerHTML = i;
    document.querySelector('#data-dia').appendChild(optionElement);
}

for (let i = 0; i <= 11; i++){
    let optionElement = document.createElement('option');
    optionElement.value = i;
    optionElement.innerHTML = meses[i];
    document.querySelector('#data-mes').appendChild(optionElement);
}

for (let i = 1900; i <= 2021; i++){
    let optionElement = document.createElement('option');
    optionElement.value = i;
    optionElement.innerHTML = i;
    document.querySelector('#data-ano').appendChild(optionElement);
}