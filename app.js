// para oobtener funciones de otros archivos de el mismo espacio de trabajo
const readLineSync = require("readline-sync");

//pedimos el modulo de lista_estudiantes
const { mostrarListaEstudiantes } = require("./lista_estudiantes");

const registrarEstudiantes = () => {
  const cantidadEstudiantes = readLineSync.question(
    "Ingresar la cantidad de estudiantes"
  );
  const estudiantes = [];
  for (let i = 0; i < cantidadEstudiantes; i++) {
    const nombre = readLineSync.question(
      `ingrese el nombre del estudiante ${i}:`
    );
    const edad = readLineSync.question(`ingrese la edad ${nombre}:`);

    const estudiante = {
      nombre,
      edad,
    };
    estudiantes.push(estudiante);
  }
  mostrarListaEstudiantes(estudiantes);
};

registrarEstudiantes();
