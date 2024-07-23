import Departamento from "./departamento.js";

class Empresa{
    constructor(nombre) {
        this.nombre = nombre;
        this.departamentos = [];
    }
    agregarDepartamento(nombreD) {
        this.departamentos.push(nombreD);
    }
    listarDepartamentos() {
        this.departamentos.forEach(departamento =>
            console.log(departamento.nombreD)
        )
    }
}
export default Empresa;