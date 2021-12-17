function tabelBody(values) {
    let pembuka = "<tbody class='table-light'>";
    let penutup = "</tbody>";

    values.forEach((i) => { //penjelasan nya sama di atas
      pembuka += `
        <tr>
          <td>${i[0]}</td>
          <td>${i[1]}</td>
          <td>${i[2]}</td>
          <td>${i[3]}</td>
          <td>${i[4]}</td>
        </tr>
      `;
    });

    return pembuka + penutup;
  }

  export {tabelBody};