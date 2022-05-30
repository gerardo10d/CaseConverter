let botonUpper = document.getElementById("upper-case");
let botonLower = document.getElementById("lower-case");
let botonProper = document.getElementById("proper-case");
let botonSentence = document.getElementById("sentence-case");
let botonSave = document.getElementById("save-text-file");
let textArea = document.querySelector('textarea');

botonUpper.addEventListener("click", function (){
    let texto = textArea.value;
    textArea.value = texto.toUpperCase();
})

botonLower.addEventListener("click", function (){
    let texto = textArea.value;
    textArea.value = texto.toLowerCase();
})

botonProper.addEventListener("click", function (){
    let texto = textArea.value;
    textArea.value = texto.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');
})

botonSentence.addEventListener("click", function (){
    let texto = textArea.value;
    textArea.value = texto.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
})

botonSave.addEventListener("click", function () {
    let texto = textArea.value;
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(texto));
    element.setAttribute('download', "text.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
})