class Rectangulo{
    constructor(altura, ancho){
      this.altura = altura;
      this.ancho = ancho;
    }

    mostrarDescripcion() {
        alert(`Alto: ${this.alto} Ancho: ${this.ancho}`);
      }
  
    modificarAltura(){
      let nuevaAltura = parseInt(prompt(`Ingrese la altura de su rectangulo`));  
      if(!isNaN(nuevaAltura)){
        this.altura = nuevaAltura;
      }else{
        alert('Ingrese solo un numero entero');
      }
    }
  
    modificarAncho(){
        let nuevoAncho = parseInt(prompt(`Ingrese el ancho de su rectangulo`));  
        if(!isNaN(nuevoAncho)){
          this.ancho = nuevoAncho;
        }else{
          alert('Ingrese solo un numero entero');
        }
      }
  
    
  
    sacarPerimetro() {
      let perimetro = 2 * (this.altura + this.ancho);
      return alert(` El Perimetro es: ${perimetro}`);
    }
  
    sacarArea() {
      let area = this.altura * this.ancho; 
      return alert(`El Area es: ${area}`);;
    }
  }
  
  let rectangulo1 = new Rectangulo(12, 24);

  rectangulo1.mostrarDescripcion();

  rectangulo1.sacarArea();
   rectangulo1.sacarPerimetro();
