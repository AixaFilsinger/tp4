class Libro {
    constructor(isbn, titulo, autor, num_Paginas) {
      this.isbn = isbn;
      this.titulo = titulo;
      this.autor = autor;
      this.num_Paginas = num_Paginas;
    }
  
    getIsbn() {
      return this.isbn;
    }
  
    setIsbn(newIsbn) {
      this.isbn = newIsbn;
    }
  
    getTitulo() {
      return this.titulo;
    }
  
    setTitulo(newTitulo) {
      this.titulo = newTitulo;
    }
  
    getAutor() {
      return this.autor;
    }
  
    setAutor(newAutor) {
      this.autor = newAutor;
    }
  
    getNumeroPaginas() {
      return this.num_Paginas;
    }
  
    setNumeroPaginas(newNPaginas) {
      this.num_Paginas = newNPaginas;
    }
  
    mostrar(){
      document.write(`<h2>El libro: ${this.titulo} con ISBN ${this.isbn}, creado por el autor/a ${this.autor} tiene ${this.num_Paginas} paginas.</h2>`);
  
    }
  }
  function mayorPaginas(lib1,lib2){
      if(lib1.num_Paginas > lib2.num_Paginas){
          document.write(`<h2>${lib1.titulo} tiene ${lib1.num_Paginas} paginas por lo tanto es el mayor</h2>`);
      }else{
          document.write(`<h2>${lib2.titulo} tiene ${lib2.num_Paginas} paginas por lo tanto es el mayor</h2>`);
      }
  }
  
  let libro1 = new Libro(	45698,'La casa de los espiritus','Isabelle Allende', 468);
  let libro2 = new Libro(78965,'La isla bajo el mar','Isabelle Allende ', 320);
  
  libro1.mostrar();
  libro2.mostrar();
  
  mayorPaginas(libro1, libro2);