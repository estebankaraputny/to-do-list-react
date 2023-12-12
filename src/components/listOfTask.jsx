import React, { useState } from "react";
import "../acess/style/listaDeTareas.css"
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
            <Form 
                onSubmit={agregarTarea}
            />
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
