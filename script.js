function Consultorio (nombre){
        this.nombre = nombre,
        this.pacientes = []
}


function Paciente (nombre, edad, rut, diagnostico){
    this.nombre = nombre,
    this.edad = edad,
    this.rut = rut,
    this.diagnostico = diagnostico
}


Paciente.prototype.getNombre = function() {
    return this.nombre;
}
Paciente.prototype.getEdad = function() {
    return this.edad;
}
Paciente.prototype.getRut = function() {
    return this.rut;
} 
Paciente.prototype.getDiagnostico = function() {
    return this.diagnostico;
}


Paciente.prototype.setNombre = function(nombre){
    return this.nombre = nombre;
}
Paciente.prototype.setEdad = function(edad){
    return this.edad = edad;
}
Paciente.prototype.setRut = function(rut){
    return this.rut = rut;
}
Paciente.prototype.setDiagnostico = function(diagnostico){
    return this.diagnostico = diagnostico;
}


Consultorio.prototype.addPacientes = function(paciente){
    this.pacientes.push(paciente)
}

Consultorio.prototype.mostrarPacientes = function(){
    this.pacientes.map(function(people){
        console.log([people.nombre, people.edad, people.rut, people.diagnostico])
    })
}

Consultorio.prototype.buscarPacientes = function(paciente){
    const array = this.pacientes.filter(people => people.nombre.toUpperCase().indexOf(paciente.toUpperCase()) > -1);
    if (array.length != 0) { 
        return console.log("El paciente: "+array[0].nombre+" / Edad: "+array[0].edad+" / Rut: "+array[0].rut+" / Diagnostico: "+array[0].diagnostico);
    } 
    else return console.log("No existen coincidencias...");
}


const PacienteA = new Paciente ('Ana Zurita', '55', '10064486-k', 'Migraña');
const PacienteB = new Paciente ('Alejandro Gaete', '58', '9937737-2', 'Tendinitis');
const PacienteC = new Paciente ('Hugo Manosalva', '38', '15687249-8', 'Colon Irritable')

const consultorio= new Consultorio ('Consultorio Villa Caupolicán');
consultorio.addPacientes(PacienteA)
consultorio.addPacientes(PacienteB)
consultorio.addPacientes(PacienteC)


console.log(consultorio);



/* const array = [PacienteA, PacienteB, PacienteC];
console.log(array); */


console.log(consultorio.mostrarPacientes());

consultorio.buscarPacientes('Ana Zurita')

