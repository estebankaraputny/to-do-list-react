import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../acess/style/tarea.css"


const Tarea = ({ texto, completada, id, completarTarea, eliminarTarea }) =>{
    return(
        <div className={completada ? "tareaContenedor completada" : "tareaContenedor"}>
            <div 
            className="tareaTexto"
            onClick={() => completarTarea(id)}
            >
                {texto}
            </div>
            <div 
            className="contentIconsTareas"
            onClick={() => eliminarTarea(id)}
            >
                <AiOutlineCloseCircle className="tareaIcon"  />
            </div>
        </div>
    )
}

export default Tarea;