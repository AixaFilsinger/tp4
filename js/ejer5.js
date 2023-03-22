class Personas {
    constructor(nombre, edad, dni, sexo, peso, altura, fechaNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.fechaNacimiento = fechaNacimiento;
    }
  
    getNombre() {
      return this.nombre;
    }
    setNombre(newNombre) {
      this.nombre = newNombre;
    }
    getEdad() {
      return this.edad;
    }
    setdad(newEdad) {
      this.edad = newEdad;
    }
    getDNI() {
      return this.dni;
    }
    setDNI(newDNI) {
      this.dni = newDNI;
    }
    getSexo() {
      return this.sexo;
    }
    setSexo(newSexo) {
      this.sexo = newSexo;
    }
    getPeso() {
      return this.peso;
    }
    setPeso(newPeso) {
      this.peso = newPeso;
    }
    getAltura() {
      return this.altura;
    }
    setAltura(newAltura) {
      this.altura = newAltura;
    }
    getNacimiento() {
      return this.fechaNacimiento;
    }
    setNacimiento(newNacimiento) {
      this.fechaNacimiento = newNacimiento;
    }
  
    mostrarGeneracion() {
       let anio_nacimiento = this.fechaNacimiento;
  
      if (anio_nacimiento >= 1994 && anio_nacimiento <= 2010) {
        document.write(
          "Pertece a la generacion Z su rasgo caracteristico es: Irreverancia"
        );
      } else {
        if (anio_nacimiento >= 1981 && anio_nacimiento <= 1993) {
          document.write(
            "Pertece a la generacion Y su rasgo caracteristico es: Frustración"
          );
        } else {
          if (anio_nacimiento >= 1969 && anio_nacimiento <= 1980) {
            document.write(
              "Pertece a la generacion X su rasgo caracteristico es: Obsesión por el éxito"
            );
          } else {
            if (anio_nacimiento >= 1949 && anio_nacimiento <= 1968) {
              document.write(
                "Pertece a la generacion BabyBoom su rasgo caracteristico es: Ambición"
              );
            } else {
              if (anio_nacimiento >= 1930 && anio_nacimiento <= 1948) {
                document.write(
                  "Pertece a la generacion Silent Generation su rasgo caracteristico es: Austeridad"
                );
              }
            }
          }
        }
      }
    }
  
    esMayorDeEdad(){
      if(this.edad >= 18){
          document.write(`<h2>${this.nombre} usted tiene ${this.edad} años. Es mayor de edad.</h2>`);
      }else{
          document.write(`<h2>${this.nombre} usted tiene ${this.edad} años. Es menor de edad.</h2>`);
      }
   }
  
     mostrarDatos (){
      document.write(`<ul>
          <li>Nombre: ${this.nombre}</li>
          <li>Edad: ${this.edad}</li>
          <li>Año de nacimiento: ${this.fechaNacimiento}</li>
          <li>DNI: ${this.dni}</li>
          <li>Sexo: ${this.sexo}</li>
          <li>Peso: ${this.peso} kg</li>
          <li>Altura: ${this.altura} cm</li>
          </ul>`);
      }
  
      generadorDNI(){
          this.dni = Math.floor((Math.random() * (99999999 - 10000000 + 1)) + 10000000);
      }
   }
  
   let persona1 = new Personas('Aixa',23,42008592,'M',79,1.65,1999);
  persona1.mostrarDatos();
  persona1.mostrarGeneracion();
  persona1.esMayorDeEdad();
  persona1.generadorDNI();
  persona1.mostrarDatos();