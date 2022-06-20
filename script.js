const textArea = document.querySelector('textarea');
const upperCaseButton = document.querySelector('#upper-case');
const lowerCaseButton = document.querySelector('#lower-case');
const properCaseButton = document.querySelector('#proper-case');
const sentenceCaseButton = document.querySelector('#sentence-case');
const saveAsTxtButton = document.querySelector('#save-text-file')

upperCaseButton.addEventListener('click', () => {
    textArea.value = textArea.value.toUpperCase();
});

lowerCaseButton.addEventListener('click', () => {
    textArea.value = textArea.value.toLowerCase();
});

properCaseButton.addEventListener('click', () => {
    const words = textArea.value.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    textArea.value = words.join(' ');
});

sentenceCaseButton.addEventListener('click', () => {
    const sentences = textArea.value.split('. ');
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i][0].toUpperCase() + sentences[i].slice(1).toLowerCase();
    }
    textArea.value = sentences.join('. ');
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
saveAsTxtButton.addEventListener("click", function() {
    let text = textArea.value;
    let filename = "text.txt"
    download(filename, text);
}, false);