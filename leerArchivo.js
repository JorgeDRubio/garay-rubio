var fs = require('fs');

fs.readFile('alumnos.json', 'utf8',(err, data) => {
    if (err) throw err;



    //Lo parseamos para convertirlo en objeto
    var types = JSON.parse(data);


    //Y lo recorremos
    for(x=0; x<types.length; x++) {
        console.log(types[x].Nombre);
        console.log(types[x].email);
        console.log(types[x].genero);
        console.log(types[x].calificaciones);
        console.log(types[x].promedio);
        console.log(types[x].email);
        console.log(types[x].fecha_nac);
        console.log(types[x].activo);

    }


  });
