import Empleado from "./empleado.js";

class Departamento{
    constructor(nombreD) {
        this.nombreD = nombreD;
        this.empleados = []
    }
    agregarEmpleados(nombreE) {
        this.empleados.push(nombreE);
    }
    listarEmpleados() {
        this.empleados.forEach(empleado =>
            console.log(empleado.nombreE)
        )
    }
}
export default Departamento;