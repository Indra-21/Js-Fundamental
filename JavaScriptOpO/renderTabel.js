function  render(element) { //membuat kerangka tabel dan menggenerate data 
    let kerangkaTabel =
      "<table class='table table-dark table-hover'>" +
      this.tabelHeader(this.inisial.columns) +
      this.tabelBody(this.inisial.data) +
      "</table>";
    element.innerHTML = kerangkaTabel;
  }

  export { render };