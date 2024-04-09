/* /* 1. Cree una aplicación que muestre un cuadrado gris. Debería tener un "Cambiar",
que al hacer clic en él, el color de relleno del cuadrado debería cambiar a azul claro.
Funciones adicionales:
al hacer clic nuevamente, el color del cuadrado debería cambiar a rojo.
Asegúrate de que cada vez que haya un cambio de color, el nombre del color aparezca 
dentro del cuadrado. */
let boton = document.getElementById("buttonChange");
let cont = 1;

boton.addEventListener("click", (event) => {
  let square = document.getElementById("colorSquare");
  let text = document.getElementById("textColorSquare");

  console.log(cont);
  if (cont % 3 == 1) {
    square.classList.replace("bg-gray-400", "bg-blue-200");
    text.innerHTML = "AZUL";
    cont++;
  } else if (cont % 3 == 2) {
    square.classList.replace("bg-blue-200", "bg-red-200");
    text.innerHTML = "ROJO";
    cont++;
  } else {
    square.classList.replace("bg-red-200", "bg-gray-400");
    text.innerHTML = "GRIS";
    cont++;
  }
});

/* 2. Cree una aplicación que muestre un cuadrado gris. Debe tener un ingreso de texto, y al escribir en él, lo que se está escribiendo debe aparecer impreso dentro del cuadrado.

Funciones adicionales:
Crea un botón para borrar el contenido del cuadrado. */

let inputOne = document.getElementById("inputOne");
let botonOne = document.getElementById("resetButton");
console.log(botonOne);
let contenedorOne = document.querySelector("#conteinerOne");

inputOne.addEventListener("keyup", (e) => {
  //tmb puedo usar input en vez de keyup
  contenedorOne.textContent = e.target.value;
});

botonOne.addEventListener("click", (e) => {
  contenedorOne.textContent = "";
  inputOne.value = "";
});

//3. Cree una aplicación que calcule el índice de masa corporal. Cuando presiona el botón "calcular",
//debería mostrar el resultado en la entrada correspondiente. */

const botImc = document.querySelector("#botImc");
let inputPeso = document.getElementById("inputPeso");
let inputEstatura = document.getElementById("inputEstatura");
let resultadoIMC = document.getElementById("resultadoIMC");

botImc.addEventListener("click", (e) => {
  resultadoIMC.textContent = (inputPeso.value/(inputEstatura.value/100)**2).toFixed(2)
})

// 4. Cree una aplicación de conversión de moneda.
// Tomando por defecto 1 dólar = 500 (peso argentino, chileno, uruguayo, etc.).
// El usuario debe poder ingresar un monto en moneda local y debe ser convertido a su equivalente en dólares.
// Características adicionales:
// El programa también debe poder convertir de dólares a moneda local y también debe incluirse un botón para borrar las entradas.

let botConv = document.getElementById('botConv')
let botReset= document.getElementById('botReset')
let inputDolares= document.getElementById('inputDolares')
let inputPesos = document.getElementById('inputPesos')
let rdoDolar = document.getElementById('rdoDolar')
let rdoPesos = document.getElementById('rdoPesos')

botConv.addEventListener("click", (e) =>{
   
    console.log(inputPesos.value)
  

    if (inputDolares.value > 0 ){
        rdoPesos.textContent= `Equivalen a ${inputDolares.value* 500} pesos`

    }else if(inputPesos.value > 0){
        rdoDolar.textContent= ` Equivalen a ${ inputPesos.value / 500 } dolares`

    }else{alert('Los numeros ingresados no son validos')}
})

botReset.addEventListener("click", (e) => {
    inputDolares.value = "";
    inputPesos.value = "";
    rdoDolar.textContent=""
    rdoPesos.textContent=""
  });