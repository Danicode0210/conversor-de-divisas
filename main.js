
 const cargarMonedas = () =>  {
    let  moneda = ['Elige tu Moneda','Peso colombiano']; //array
    let select = document.getElementById("moneda"); //Seleccionamos el select
    for(let i=0; i < moneda.length; i++){ 
        let option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = moneda[i]; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
}
cargarMonedas();



const conversion = () => {
    
let valorSelect = document.getElementById("moneda").value
let valor = document.getElementById("valor").value 
if(valorSelect == 'Peso colombiano'){
  let dolar = 3790;
  let resultado = valor * dolar
  resultado = resultado.toString()
 alert(`Tus dolares en pesos colombianos equivalen a ` + resultado)
 
}

}
