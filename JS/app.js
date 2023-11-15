const SI = "si";
const NO = "no";
const SALIR = "salir";
const ERROR = true;

let precioBasico = 500;
let precioEstandard = 1000;
let precioAvanzado = 1500;
let precioCotizacion = 0;
let opcionVersion;
let nombreVersion;

let cantidadUsuarios = 0;
let totalPresupuesto = 0;

let nombrecompleto;
let existeError = false;
let salir;

do{
        existeError = false;
        nombrecompleto = prompt('Bienvenido a MoxiERP! \n Ingrese nombre y apellido del contacto. \n');
        if (nombrecompleto === ""){
                alert('Valor Incorrecto!');
                existeError = true;
        }
}while(existeError && nombrecompleto !== null)

if (nombrecompleto !== null)
{
        do {
                do {
                        existeError = false;
                        opcionVersion = prompt(`Bienvenido/a ${nombrecompleto}` + '\n'
                                + 'Ingrese el tipo de versión del sistema: \n'
                                + '1 = Basic \n'
                                + '2 = Standard \n'
                                + '3 = Advanced \n');
                        switch (opcionVersion) {
                                case null: break;
                                case '1': precioCotizacion = precioBasico;
                                        nombreVersion = "Basic";
                                        break;
                                case '2': precioCotizacion = precioEstandard;
                                        nombreVersion = "Standard";
                                        break;
                                case '3': precioCotizacion = precioAvanzado;
                                        nombreVersion = "Advanced";
                                        break;
                                default: alert('La versión ingresada es incorrecta.');
                                        existeError = true;
                                        break;
                        debugger;
                        }
                } while (existeError && opcionVersion !== null)
        
                if (opcionVersion !== null)
                {
                        do {
                                cantidadUsuarios = parseInt(prompt('Ingrese el número de usuarios: '));
                                if (Number.isInteger(cantidadUsuarios)) {
                                        totalPresupuesto = precioCotizacion * cantidadUsuarios;
                                        existeError = false;
                                }
                                else {
                                        existeError = true;
                                        alert('Valor Incorrecto!');
                                }
                        } while (existeError && opcionVersion !== null)
                
                        alert(`La cotización para la versión ${nombreVersion} y ${cantidadUsuarios} usuarios es de $${totalPresupuesto}`);
                
                        do{
                                existeError = false;
                                salir = prompt('Desea realizar otra cotización? si/no');
                                if (salir === ""){
                                        alert('Valor Incorrecto!');
                                        existeError = true;
                                }
                                if (salir !== null){
                                        salir = salir.toLowerCase();
                                }
                        }while(existeError && salir !== null)    
                }
        } while (salir !== NO && salir !== null && opcionVersion !== null)
        alert(`Muchas gracias ${nombrecompleto} por visitarnos.`);
}
else
        alert(`Muchas gracias por visitarnos.`);




