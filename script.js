//Escribir una lista de usuarios con los siguientes datos: nombre, número 
//de documento, contraseña y tipo de usuario. El tipo de usuario será: 1: 
//administrador, 2: cliente. Guardarla en un array de objetos.

//alert ("Estoy enlazada")

const userList = [
    {
        name: "Miguel Mendoza",
        id: 2905175,
        password: "1234",
        userType: 1, //tipo de usuario: administrador
    },

    {
        name: "Gesiel Gimenez",
        id: 1531206,
        password: "4321",
        userType: 2, //tipo de usuario: cliente
    }
]

const validacion = () => {
    let validation = true; // para utilizarla mas adelante en un condicional
    let user = {};
    while (validation) { //Este while se comienza a ejecutar de forma inmediata ya que tenemos validation como true y cumple con la condicion
        const Ide = parseInt(prompt("Digite su identificación: ")); //si no colocamos el parseInt lo ingresado queda como texto y necesitamos un numero
        const passwordU = prompt("Digite su contraseña: "); //la contraseña está como texto en el array, no es necesario agregar parseInt

        userList.forEach(element => {
            if (element.id == Ide && element.password == passwordU) {
                user = element;
                validation = false; //salgo del while porque np necesito que se siga cumpliendo la petición de información
            }
        });
        if (validation == true) {
            alert("el usurio no existe o su contraseña es incorrecta");
        };
    };
    return user; //retorno usuario porque de allí necesitare el tipo de usuario para ejecutar las siguientes funcionalidades
}

let disponibleCajero = [  //si el usuario es administrador solicita el siguiente proceso, carga de billetes por denominacion
    {
        cantidad: 0,
        denominacion: 100000,
    },
    {
        cantidad: 0,
        denominacion: 50000,
    },
    {
        cantidad: 0,
        denominacion: 20000,
    },
    {
        cantidad: 0,
        denominacion: 10000,
    },
    {
        cantidad: 0,
        denominacion: 5000,
    }
];

const cajero = (disponibleCajero, usuario) => {
    if (usuario.userType == 1) {
        let sumaToltal = 0;
        disponibleCajero.forEach(element => {
            element.cantidad += parseInt(prompt("Usted es usuario tipo administrador, ingrese la cantidad de billetes de " + element.denominacion + ": "));
            const totalPorDenominacion = element.cantidad * element.denominacion;
            console.log("La cantidad de billetes de " + element.denominacion + " es " + totalPorDenominacion + "Cantidad de billetes disponibles: " + element.cantidad + " . ");
            sumaToltal += totalPorDenominacion;
        });
        console.log("La suma total de bileltes es " + sumaToltal + ".")

    }

    else if (usuario.userType == 2) {
        let sumaTotal = 0;
        disponibleCajero.forEach(element => {
            const totalPorDenominacion = element.cantidad * element.denominacion; //calculo cuanto dinero hay en total y poder cumplir las condiciones linea 83
            sumaTotal += totalPorDenominacion; //la suma es acumulada por que no siempre se va a mantener la misma cantidad
        });

        if (sumaTotal == 0) { //Si la primera persona que ingresa es cliente no hay dinero cargado, por lo tanto muestra en consola en siguiente mensaje
            console.log("Cajero en mantenimiento, por favor vuelva pronto. ");
        } else if (suma > 0) {
            let cantidadRetirar = parseInt(prompt("Ingrese la cantidad a retirar: "));
            console.log("La cantidad a retirar es " + cantidadRetirar + " . ");
            if (cantidadRetirar <= sumaTotal) {

                let cantidadRetirar = 0;
                disponibleCajero.forEach(element => {
                    const billetesNecesarios = Math.floor(cantidadRetirar / element.denominacion);
                    let disponible
                    if (billetesNecesarios <= element.cantidad) {
                        if (cantidad >= element.denominacion * billetesNecesarios) {
                            cantidadRetirar -= element.denominacion * billetesNecesarios;
                            element.cantidad -= billetesNecesarios;
                            cantidadRetirar += element.denominacion * billetesNecesarios;
                            console.log("Se entregaron " + billetesNecesarios + " de " + element.denominacion + " . ");
                        }
                    } else if (billetesNecesarios > element.cantidad) {
                        if (cantidadRetirar >= element.denominacion * element.cantidad) {
                            console.log("Se entregaron " + element.cantidad + " de " + element.denominacion + " . ");
                            cantidad.Entregar += element.denominacion * element.cantidad;
                            cantidad.Retirar -= element.denominacion * element.cantidad;
                            element.cantidad -= element.cantidad;
                        }

                    }
                })

                console.log("La cantidad que el cajero pudo entregar fue " + cantidadRetirar + " falto entregar " + cantidadRetirar + " . ");

                let dineroDisponible = 0;
                disponibleCajero.forEach(element => {
                    const totalPorDenominacion = element.cantidad * element.demominacion;
                    console.log("La suma de billetes de " + element.denominacion + "restante en el cajero: " + totalPorDenominacion + "Cantidad restante de Billetes: " + element.cantidad + " . ");
                    dineroDisponible += totalPorDenominacion;


                });

            } else if (cantidadRetirar > sumaTotal) {
                console.log(" El cajero no cuenta con fondos suficientes para realizar la transacción");
            }

        }


    }


    const newUser = prompt("¿Quiere ingresar un nuevo usuario: Si o No");
    return newUser
}

//llamamos las funciones para poder colocar a corer el código

let newUser = "Si";
while (newUser == "Si"){
const usuario = validacion();
newUser = cajero(disponibleCajero, usuario);

}
