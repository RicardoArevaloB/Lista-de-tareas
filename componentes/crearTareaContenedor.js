import tareaInput from "./tareaInput.js";
import botonenviar from "./botonenviar.js";
import { agregarTarea } from "./funcionesTareas.js";




const crearTareacontenedor = document.createElement("div");

botonenviar.addEventListener("click", () => agregarTarea (tareaInput));

crearTareacontenedor.append(tareaInput);
crearTareacontenedor.append(botonenviar);

export default crearTareacontenedor;
