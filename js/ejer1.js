let auto = {
    color:"negro",
    marca:"fiat",
    modelo:2011,
    encender: function (){
        document.write("<br>El auto esta encencido");
    },

    apagar:    function(){
        document.write("<br>El auto esta apagado ")
    }

}

document.write('Color: '+ auto.color);
document.write('<br>Marca: '+ auto.marca);
document.write('<br>Modelo: '+ auto.modelo);

// invocar a un metodo
auto.encender();
auto.apagar();