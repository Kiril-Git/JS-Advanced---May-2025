function sumTable() {

    let sumTdEl = document.getElementById('sum')
    let priceTdEls = document.querySelectorAll('table tr td:nth-of-type(2):not(#sum)');

    let sum = 0;

    for (let el of priceTdEls) {

        let price = Number(el.textContent);

        sum += price

    }

    sumTdEl.textContent = sum;
}