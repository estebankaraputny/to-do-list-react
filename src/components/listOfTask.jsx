import React, { useState } from "react";
import "../acess/style/listaDeTareas.css"
import { AiOutlineCloseCircle } from "react-icons/ai";
import Form from "./tareaForm";
import Tarea from "./tarea";


const ListaDeTareas = () =>{

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareaActualizadas = [tarea, ...tareas]
            setTareas(tareaActualizadas);
        } else{
            alert("La tarea esta vacía")
        }
    }

    const eliminarTarea = id => {
        const tareaActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareaActualizadas);
    }

    const completarTarea = id => {
        const tareaActualizadas = tareas.map( tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }

            return tarea;
        });

        setTareas(tareaActualizadas);
    }

    return(
        <>
            <div className="contentFormInfo">
                <div className="Contform">
                    <Form 
                        onSubmit={agregarTarea}
                    />
                </div>
                <div className="contentInstru">
                    <p>1. Agrega una nueva tarea</p>
                    <p>2. Clic sobre la tarea para marcar como finalizada</p>
                    <p>3. Clic en el icono <AiOutlineCloseCircle/> para eliminar</p>
                    <p>4. Las tareas finalizadas se sombrean de color verde y se tacha su contenido</p>
                </div>
            </div>
            <div className="taskListContainer">
                {
                    tareas.map((tarea) => 
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    )
                }
            </div>
        </>
    )
}


export default ListaDeTareas;
