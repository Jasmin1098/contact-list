let contactos = [
"Cristian Monge", 
"Liccy Lopez", 
"Humberto Diaz",
"Abilio Lopez",
"Maria Ponce"
];

function agregarContacto(nombre){
    contactos.push(nombre);
}

function eliminarContacto(nombre){
    const index = contactos.indexOf(nombre);
    if(index !== -1){
        contactos.splice(index, 1);
    }
}

function imprimirContactos(){
    for (let i=0; i < contactos.length; i++){
        console.log(contactos[i]);
    }
}

console.log("Contactos: ");
imprimirContactos();
