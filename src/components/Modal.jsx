import CerrarBtn from '../assets/img/cerrar.svg';

const Modal = ({ animateModal, onCloseModal }) => {

    const handleOnnSubmit = (e) => {
        e.preventDefault();
    };
    
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={CerrarBtn} 
                    alt="cerrarBtn"
                    onClick={onCloseModal}
                />
            </div>

            <form
                onSubmit={handleOnnSubmit}
                className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}
            >
                <legend>Nuevo Gasto</legend>
                <div className="campo">
                    <label htmlFor="nombre">Concepto</label>
                    <input 
                        id="nombre"
                        type="text"
                        placeholder="Añade nombre de gasto"
                    />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input 
                        id="cantidad"
                        type="number"
                        placeholder="Añade cantidad de gasto ej. 300"
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select 
                        name="categoria" 
                        id="categoria"
                    >
                        <option value="" disabled selected>-- Seleccione Categoria --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="varios">Gastos Varios</option>
                        <option value="salud">Salud</option>
                        <option value="entretenimiento">Entretenimiento</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input 
                    type="submit" 
                    value="Añadir Gasto"
                />
            </form>
        </div>
    )
};

export default Modal;