//se crea el arreglo con los datos de los contactos

let contactos = [
  {
    id: 1,
    nombres: "Cristian",
    apellidos: "Monge",
    telefono: "87451236",
    ubicaciones: [
      {
        ciudad: "San Pedro Sula",
        direccion: "Residencial Las Lomas",
      },
    ],
  },
  {
    id: 2,
    nombres: "Liccy",
    apellidos: "Lopez",
    telefono: "95236598",
    ubicaciones: [
      {
        ciudad: "Pimienta",
        direccion: "Col Las Acacias",
      },
    ],
  },
  {
    id: 3,
    nombres: "Humberto",
    apellidos: "Diaz",
    telefono: "85129273",
    ubicaciones: [
      {
        ciudad: "Villanueva",
        direccion: "Col Gracias a Dios",
      },
    ],
  },
  {
    id: 4,
    nombres: "Abilio",
    apellidos: "Lopez",
    telefono: "33698754",
    ubicaciones: [
      {
        ciudad: "Tegucigalpa",
        direccion: "Santa Lucia",
      },
    ],
  },
  {
    id: 5,
    nombres: "Maria",
    apellidos: "Ponce",
    telefono: "25504785",
    ubicaciones: [
      {
        ciudad: "Pimienta",
        direccion: "El Centro",
      },
    ],
  },
];

// se crean las funciones
function agregarContacto(contacto) {
  contactos.push(contacto);
}

function eliminarContacto(id) {
  const index = contactos.findIndex((contacto) => contacto.id == id);
  if (index !== -1) {
    contactos.splice(index, 1);
  }
}

function imprimirContactos() {
  for (let i = 0; i < contactos.length; i++) {
    const contacto = contactos[i];
    console.log("ID:", contacto.id);
    console.log("Nombres:", contacto.nombres);
    console.log("Apellidos:", contacto.apellidos);
    console.log("Telefono:", contacto.telefono);
    console.log("Ubicaciones:");
    for (let j = 0; j < contacto.ubicaciones.length; j++) {
      const ubicacion = contacto.ubicaciones[j];
      console.log("  Ciudad:", ubicacion.ciudad);
      console.log("  Direccion:", ubicacion.direccion);
    }
    console.log("--------------------");
  }
}

//se mandan a llamar las funciones creadas
console.log("Lista de Contactos: ");
imprimirContactos();

console.log("Agregar un nuevo contacto");
agregarContacto({
  id: 6,
  nombres: "Enrique",
  apellidos: "Avelar",
  telefono: "98758936",
  ubicaciones: [
    {
      ciudad: "San Pedro Sula",
      direccion: "Colonia Las Mesetas",
    },
  ],
});

console.log("Contactos Actuales:");
imprimirContactos();

console.log("Se elimina un contacto...");
eliminarContacto(2);

console.log("Contactos Actuales:");
imprimirContactos();
