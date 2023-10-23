window.onload = function() {
    cargarTareasDesdeLocalStorage();
};

function cargarTareasDesdeLocalStorage() {
    var tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    if (tareas.length > 0) {
        var lista = document.getElementById('listaTextos');

        tareas.forEach(function(tarea) {
            agregarTareaALista(tarea);
        });

        contador = tareas.length + 1;
    }
}

function guardarTareaEnLocalStorage(tarea) {
    var tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    tareas.push(tarea);

    localStorage.setItem('tareas', JSON.stringify(tareas));
}

function eliminarTarea(elemento) {
    var tareaTexto = elemento.parentElement.firstChild.textContent;
    var tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    var nuevaLista = tareas.filter(function(tarea) {
        return tarea !== tareaTexto;
    });

    localStorage.setItem('tareas', JSON.stringify(nuevaLista));
    elemento.parentElement.remove();
}
