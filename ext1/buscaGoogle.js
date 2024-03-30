//buscaGoogle.js
//Buscamos el input text llamado q y le escribimos programador novato
document.querySelector('input[name="q"]').value="financial-management.ltd";
//Creamos el evento click
var evt = new MouseEvent('click', {
    bubbles: true,
  cancelable: true,
  view: window
});
//Si no se cancela el evento lo ejecutamos
var canceled = !document.querySelector('input[name="btnK"]').dispatchEvent(evt);