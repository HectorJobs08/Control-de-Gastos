import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({ 
    presupuesto,
    isValidPresupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {
    return (
        <>
            <header>
                <h1>Planificador de Gastos</h1>
                { isValidPresupuesto ?  (
                    <ControlPresupuesto 
                        presupuesto={presupuesto}
                    />
                ) : (
                    <NuevoPresupuesto 
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                )}
                
            </header>
        </>
    )
};

export default Header;