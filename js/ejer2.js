let dineroA;
let cuenta = {
  titular: "Alex",
  saldo: 200,

  Ingresar: function (dinero) {
    document.write(
      `Su saldo era:${
        this.saldo
      }, usted ingresa: ${dinero}. Su saldo auctual es: ${this.saldo + dinero}`
    );
    document.write("<br>");
  },

  Extraer: function (dinero) {
    if (this.saldo == 0) {
      alert(`No se puede extraer dinero su saldo es: ${this.saldo}`);
    } else if (this.saldo < dinero) {
      alert(
        `No se puede extraer dinero su saldo es insuficiente. Saldo: ${this.saldo}`
      );
    } else {
      document.write(
        `Extrajo: ${dinero}, su saldo en cuenta es: ${this.saldo - dinero}`
      );
    }
  },
  Informar: function (dinero) {
    document.write(
      `La cuenta a nombre: ${this.titular}, tiene un saldo de: ${this.saldo }`
    );
    document.write("<br>");
  },
};

let accion = parseInt(
  prompt("Presione 1 si desea ingresar dinero y 2 si desea extraer:")
);

if (accion < 1 || accion > 2) {
  alert("Por favor ingrese el numero 1 o 2 no se permite ningun otro valor");
} else {
  if (accion >= 1 || accion <= 2) {
    switch (accion) {
      case 1:
        cuenta.Informar();
        dineroA = parseFloat(prompt("Ingrese la cantidad de dinero"));
        cuenta.Ingresar(dineroA);
        

        break;
      case 2:
        cuenta.Informar(dineroA);
        dineroA = parseFloat(prompt("Ingrese la cantidad de dinero"));
        cuenta.Extraer(dineroA);

        break;
    }
  }
}
