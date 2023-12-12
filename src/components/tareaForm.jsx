import React, { useState } from "react"
import "../acess/style/tareaForm.css"
import { v4 as uuidv4 } from "uuid"


const Form = (props) => {
    
    const [input, setInput] = useState("");
    
    const manerjarCambio = e => {
        setInput(e.target.value);
    }

    const manejarEnvio = e =>{

        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }


    return(
        <form className="tareaForm" onSubmit={manejarEnvio}>
            <input
                className="tareaInput"
                type="text"
                placeholder="Escribe una tarea"
                name="texto"
                onChange={manerjarCambio}
            />
            <button 
                className="tareaButton"
                
            >
                Agregar tarea
            </button>
        </form>
    )
}


export default Form;