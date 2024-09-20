class tarea {
    #etiqueta = document.createElement("p");
    constructor(texto){
        this.#etiqueta.textContent = texto;
    }

    get etiqueta(){  //get = conseguir o traer
        return this.#etiqueta;
    } 

    set texto(nuevotext) {
        if (nuevotext == ""){
            return;
        }
        this.etiqueta.textContent = nuevotext
    }
}




export default tarea;

//set asignar