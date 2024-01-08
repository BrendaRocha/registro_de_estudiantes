const mostrarListaEstudiantes = (estudiantes) => {
  console.log("lista de estudiantes registrados:");
  estudiantes.forEach((estudiante) => {
    console.log(`Nombre: ${estudiante.nombre} Edad: ${estudiante.edad}`);
  });
};

module.exports = { mostrarListaEstudiantes };
