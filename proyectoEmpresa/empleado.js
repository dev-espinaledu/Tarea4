let protegido = new WeakMap();

class Empleado{
    nombreE;
    #salario;
    constructor(nombreE, salario) {
        this.nombreE = nombreE;
        this.#salario = salario;
        this.obtenerSalario = () => {
            return this.#salario
        }
    }
    obtenerInformacion() {
        console.log(`Información del empleado: ${this.nombreE}, salario ${this.#salario}`);
    }
}
export default Empleado;