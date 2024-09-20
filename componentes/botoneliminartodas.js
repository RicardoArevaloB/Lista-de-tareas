import {eliminartodaslastareas} from "../componentes/funcionesTareas.js";

const botoneliminartodas = document.createElement("button");
botoneliminartodas.id = ("delteall")

botoneliminartodas.textContent="Eliminar todas las tareas";

botoneliminartodas.addEventListener("click", eliminartodaslastareas);

export default botoneliminartodas;

