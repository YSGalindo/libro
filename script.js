class Libro {
  constructor(titulo, autor, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.leido = false;
  }

  marcarComoLeido() {
    this.leido = true;
  }

  marcarComoNoLeido() {
    this.leido = false;
  }

  informacion() {
    const estadoLeido = this.leido ? "Sí" : "No";
    return `Título: ${this.titulo}, Autor: ${this.autor}, Género: ${this.genero}, Leído: ${estadoLeido}`;
  }
}

// Crear instancias de la clase Libro
const libro1 = new Libro(
  "El señor de los anillos",
  "J.R.R. Tolkien",
  "Fantasía"
);
const libro2 = new Libro("1984", "George Orwell", "Ciencia Ficción");

// Marcar uno de los libros como leído
libro1.marcarComoLeido();

// Mostrar la información de ambos libros en el HTML
document.getElementById("libro1").innerHTML = `<h2>${
  libro1.titulo
}</h2><p>Autor: ${libro1.autor}</p><p>Género: ${libro1.genero}</p><p>Leído: ${
  libro1.leido ? "Sí" : "No"
}</p>`;
document.getElementById("libro2").innerHTML = `<h2>${
  libro2.titulo
}</h2><p>Autor: ${libro2.autor}</p><p>Género: ${libro2.genero}</p><p>Leído: ${
  libro2.leido ? "Sí" : "No"
}</p>`;
