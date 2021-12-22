class Table   {
    constructor(render) {
      this.initRender = render;
    }

    tabelHeader(data) {
        let open = "<thead class='table table-dark'><tr>";
        let close = "</tr></thead>";
        data.forEach((i) => {
          open += `<th>${i}</th>`;
        });
    
        return open + close;
      }

    tabelBody(data) {
        let open = "<tbody>";
        let close = "</tbody>";
    
        data.forEach((j) => {
          open += `
            <tr>
              <td>${j[0]}</td>
              <td>${j[1]}</td>
              <td>${j[2]}</td>
              <td>${j[3]}</td>
              <td>${j[4]}</td>
            </tr>
          `;
        });
    
        return open + close;
      }
    
    render(element) {
        let table =
          "<table class='table table-hover'>" +
          this.tabelHeader(this.initRender.columns) +
          this.tabelBody(this.initRender.data) +
          "</table>";
        element.innerHTML = table;
      }
    
  }

  export { Table };