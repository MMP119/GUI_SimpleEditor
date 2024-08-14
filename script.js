// Inicializa CodeMirror en el textarea con id 'codeInput'
var editor = CodeMirror.fromTextArea(document.getElementById('codeInput'), {
    lineNumbers: true,
    mode: "javascript",
    theme: "dracula",
    viewportMargin: Infinity, // asegura que todo el contenido sea visible
});

// Inicializa CodeMirror en el textarea con id 'consoleOutput'
var consoleEditor = CodeMirror.fromTextArea(document.getElementById('consoleOutput'), {
    lineNumbers: false,
    mode: "text/plain",
    theme: "dracula",
    readOnly: true,
    viewportMargin: Infinity,
});

//funcion para el boton 'open', abre un archivo
document.getElementById('openButton').addEventListener('click', function() {
    var input = document.createElement('input'); //crea un input
    input.type = 'file';    //tipo file
    input.onchange = e => { //cuando cambia el input
        var file = e.target.files[0]; //obtiene el archivo
        var reader = new FileReader(); //crea un lector de archivos
        reader.readAsText(file,'UTF-8'); //lee el archivo
        reader.onload = readerEvent => { //cuando termina de leer
            var content = readerEvent.target.result; //obtiene el contenido
            editor.setValue(content); //pone el contenido en el editor
        }
    }
    input.click(); //hace click en el input
});


// función para el botón 'Run'
document.getElementById('runButton').addEventListener('click', function() {
    var code = editor.getValue();
    // poner el código en la consola de salida
    consoleEditor.setValue(code);
});

// función para el botón 'Clear'
document.getElementById('clearButton').addEventListener('click', function() {
    editor.setValue('');
    consoleEditor.setValue('');
});
