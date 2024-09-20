import botonenviar from "./botonenviar.js";
import contenedorTareas from "./contenedorTareas.js";


function agregarTarea(input){
    const targeta = document.createElement("div");
    targeta.id="target";
    targeta.style=`
        margin: 12px;
        display: flex;
        align-items: center; 
        gap: 8px;
    `
    const textoTarea = input.value.trim();
    const parrafoTarea = document.createElement("p")
    parrafoTarea.style=`
        font-size: 1.5rem;
    `
    parrafoTarea.textContent = textoTarea;

    const botonactualizar = document.createElement("button");
    botonactualizar.textContent = "Actualizar";
    botonactualizar.style=`
        color: white;
        background-color: green;
        border: 1px solid gray;
        cursor: pointer;

    `
    botonactualizar.addEventListener("click", ()=> Actualizartarea(input, parrafoTarea));


    const tachartarea = document.createElement("input");
    tachartarea.type = "checkbox";
    tachartarea.id = "check"

    tachartarea.addEventListener("change", () => tareatachada(tachartarea, parrafoTarea));


    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "eliminar";
    botonEliminar.style=`
        color: white;
        background-color: red;
        border: 1px solid gray;
        cursor: pointer;
    `


    botonEliminar.addEventListener("click", () => eliminarTarea(targeta));
    targeta.append(tachartarea, parrafoTarea, botonactualizar, botonEliminar );
    contenedorTareas.append(targeta);


    



    input.value = null; //Elimina el contenido del input
}

function tareatachada(input, tarea){
    if (input.checked){
        tarea.style=`
        font-size: 1.5rem;
        text-decoration: line-through;
        `;
    } else {
        tarea.style=`
        font-size: 1.5rem;
        `
    }
}

function Actualizartarea(nuevatarea, tarea){
    tarea.textContent=nuevatarea.value;
    nuevatarea.value = "";
    nuevatarea.placeholder = "Tarea actualizada"

    setTimeout(()=>{
        nuevatarea.placeholder = "ingresa tu tarea"
    },3000);

}

function eliminarTarea(targetatarea) {
    targetatarea.remove();
}

function eliminartodaslastareas(){
    contenedorTareas.innerHTML="";
    alert("todas las tareas seran eliminadas...");
}



export { agregarTarea, eliminarTarea, eliminartodaslastareas}
