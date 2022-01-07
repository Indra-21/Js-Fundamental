$(document).ready(function body(){
    setTimeout(() => {
    $.ajax({
       url : 'https://jsonplaceholder.typicode.com/users' ,
       type : 'get',
       dataType : 'json',
       data : {get_param : 'value'},
       success : function (data){
           let open = "<tbody>";
           let close = "</tbody>";
           
           data.forEach((i) => {
            open += `
              <tr>
                <td>${i["id"]}</td>
                <td>${i["name"]}</td>
                <td>${i["username"]}</td>
                <td>${i["email"]}</td>
                <td>${i["address"].street+", "+i["address"].suite+", "+i["address"].city}</td>
                <td>${i["company"].name}</td>
              </tr>
            `;
          });
       
    
          document.getElementsByTagName("tbody")[0].innerHTML += open;
    
          return open + close;
           
       }
       
    });

    }, 800);
    
    });

    export { body };