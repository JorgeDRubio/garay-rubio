var fs = require('fs');

fs.readFile('alumnos.json', 'utf8',(err, data) => {
    if (err) throw err;

    var renglon = data.split("\n")
    var cadena = ""
    for(var i=0;i<renglon.length;i++) {
        var datos = renglon[i].split(",")
        cadena+='Registro ' + (i+1) + '\n' +
                'Nombre: '+datos[0] + '\n' +
                'Correo: '+datos[1] + '\n' +
                'Genero: '+datos[2] + '\n' +
                'Calificaciones' + '\n' +
                'Matematicas: '+datos[3] + '\n' +
                'Español: '+datos[4] + '\n' +
                'Promedio: '+datos[5] + '\n' +
                'Fecha de Nacimiento: '+datos[6] + '\n' +
                'Activo: '+datos[7] + '\n'
    }
    console.log(cadena)
  });
