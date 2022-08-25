//import fetch from "node-fetch";
const API = 'http://localhost:3000/api/products';

function postData(urlApi,data){
    const response = fetch(urlApi,{
        method:'POST',
        mode:'cors',
        credentials:'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    });
    return response;
}

let botonAgregarProducto=document.getElementById("botonAgregarProducto");
botonAgregarProducto.addEventListener('click', ()=> {
    let codigo=parseInt((document.getElementById("codigo")).value);
    let producto=document.getElementById("producto").value;
    let precio=parseFloat(document.getElementById("precio").value);
    alert("Clic");
    const data={
        "codigo": codigo,
        "producto": producto,
        "precio": precio
     }

    postData(`${API}`,data)
    .then(response => response.json())
    .then(data=> alert(`Se agrego${data}`))
})

