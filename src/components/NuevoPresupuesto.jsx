import { useState } from "react";

import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {

    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();
        const numPresupuesto = Number(presupuesto);
        if(!numPresupuesto || numPresupuesto < 0) {
            setMensaje("No es un presupuesto valido");
        }else {
            setMensaje("")
        }
    }

    return (
        <>
            <div className="contenedor-presupuesto contenedor sombra">
                <form className="formulario" onSubmit={handlePresupuesto}>
                    <div className="campo">
                        <label>Definir presupuesto</label>
                        <input 
                            type="number"
                            placeholder="Añade tu presupuesto"
                            className="nuevo-presupuesto"
                            value={presupuesto}
                            onChange={e => setPresupuesto(e.target.value)}
                        />
                    </div>

                    <input type="submit"  value="Añadir" />

                    {mensaje && (
                        <Mensaje
                            tipo="error"
                        >{mensaje}</Mensaje>
                    )}
                </form>
            </div>
        </>
    )
};

export default NuevoPresupuesto;