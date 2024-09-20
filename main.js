import botonenviar from "./componentes/botonenviar.js";
import contenedorTareas from "./componentes/contenedorTareas.js"
import crearTareacontenedor from "./componentes/crearTareaContenedor.js";
import titulo from "./componentes/titulo.js";
import tareaInput from "./componentes/tareaInput.js";
import tarea from "./clases/tarea.js";
import botoneliminartodas from "./componentes/botoneliminartodas.js";
const mitarea = new tarea("hola mundo");
mitarea.texto = "Ricardo";


const root = document.getElementById("root")

root.append(mitarea.etiqueta);
root.append(titulo);
root.append(tareaInput);
root.append(botonenviar);
root.append(botoneliminartodas);
root.append(contenedorTareas);
root.append(crearTareacontenedor);



 
