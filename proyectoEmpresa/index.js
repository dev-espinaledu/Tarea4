import Empresa from "./empresa.js";
import Departamento from "./departamento.js";
import Empleado from "./empleado.js";

// Nombre empresa
let miEmpresa = new Empresa('TechCorp');

//Departamentos
let desarrollo = new Departamento("Desarrollo")
miEmpresa.agregarDepartamento(desarrollo);
let marketing = new Departamento("Marketing")
miEmpresa.agregarDepartamento(marketing);
let rh = new Departamento("RH");
miEmpresa.agregarDepartamento(rh);

miEmpresa.listarDepartamentos();

//Empleados
let empleado1 = new Empleado("Johan Salázar", 2000000)
desarrollo.agregarEmpleados(empleado1);
marketing.agregarEmpleados(empleado1);
let empleado2 = new Empleado("Pedro Martínez", 4000000)
rh.agregarEmpleados(empleado2);
let empleado3 = new Empleado("Steve McTominay", 4200000)
marketing.agregarEmpleados(empleado3);

desarrollo.listarEmpleados();
marketing.listarEmpleados();
rh.listarEmpleados();

//Información empleados
empleado1.obtenerInformacion();
empleado2.obtenerInformacion();
empleado3.obtenerInformacion();