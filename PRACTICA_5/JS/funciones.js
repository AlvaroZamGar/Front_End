function agregarTexto() {
    var texto = document.getElementById('texto').value;
    if (texto.trim() !== '') {
        var tarea = new Tarea(texto);
        var nombreTarea = tarea.mostrarInformacion();

        guardarTareaEnLocalStorage(nombreTarea);
        agregarTareaALista(nombreTarea);

        document.getElementById('texto').value = '';
    }
}

function agregarTareaALista(tarea) {
    var lista = document.getElementById('listaTextos');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(tarea));

    var btnEliminar = document.createElement('button');
    btnEliminar.appendChild(document.createTextNode('Eliminar'));
    btnEliminar.className = 'btn btn-danger btn-sm float-right';
    btnEliminar.onclick = function() {
        eliminarTarea(this);
    };

    li.appendChild(btnEliminar);
    li.className = 'list-group-item';
    lista.appendChild(li);
}

