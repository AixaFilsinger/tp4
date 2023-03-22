//let opcion = ["piedra", "papel", "tijera"];
let opcion = [0, 1, 2];
let eleccionUsuario = parseInt(prompt("Elija 0 = Piedra, 2= papel, 3= tijera"));;
let eleccioncompu= Math.ceil(Math.random() *3);




if(eleccionUsuario == 0){//el usuario eligio piedra 
    if(opcion[eleccioncompu] == 1){//si la maquina eligio papel 
        document.write('<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>');
    }else{
        if(opcion[eleccioncompu] == 2){
            document.write('<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>');
        }else{
            if(opcion[eleccioncompu] == 0){
                document.write('<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>');
            }
        }
    } 
}

if(eleccionUsuario == 1){//el usuario eligio papel 
    if(opcion[eleccioncompu] == 2){
        document.write('<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>');
    }else{
        if(opcion[eleccioncompu] == 0){
            document.write('<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>');
            
        }else{
            if(opcion[eleccioncompu] == 1){
                document.write('<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>'); 
            }
        }
    }
}

if(eleccionUsuario == 2) {//el usuario eligio tijera 
    if(opcion[eleccioncompu] == 1){
        document.write('<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>');
    
    }else{
        if(opcion[eleccioncompu] == 0){
            document.write('<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>'); 
        }else{
            if(opcion[eleccionMaquina] == 2) {
                document.write('<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>');
            }
        }
    }
}
