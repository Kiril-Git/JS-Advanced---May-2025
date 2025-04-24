function extractText() {


    let liElements = document.querySelectorAll('li');

    const items = Array.from(liElements)
        .map(el => el.textContent)

    console.log(items);

    let resultTextArea = document.getElementById('result');

    resultTextArea.value = items.join('\n')
}