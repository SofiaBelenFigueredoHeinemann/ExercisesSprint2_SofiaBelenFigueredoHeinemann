let boton = document.getElementById('boton')
let grafiti = document.getElementById('grafiti')
let colorInput = document.getElementById("colorInput")
let input = document.getElementById('input')
let color
let texto

input.addEventListener('keyup', (event) => texto = event.target.value)

colorInput.addEventListener("change", (event) => color = event.target.value)
// grafiti.lastChild.classList.add(`bg-[${event.target.value}]`)

boton.addEventListener('click', (event) => {
  event.preventDefault()
  grafiti.innerHTML += `<div class="text-xl flex flex-wrap break-all items-center justify-center w-[200px] h-[200px] p-4 bg-[${color}]">${texto}</div>`
  // grafiti.innerText = texto
})
//falta ver como bloquear el envio solo con el boton submit.





//4. Add an "X inside a span with class "close" in each new div, to add the functionality to remove that graffiti.
document.addEventListener('DOMContentLoaded', function() {
      const closeButtons = document.querySelectorAll('.close');
      closeButtons.forEach(button => {
        button.addEventListener('click', function() {
          const graffiti = this.parentElement;
          graffiti.remove();
        });
      });
    });


//5. Add a checkbox type input to the form and modify the script so that the div that is created has the class: .poster (NOT italic font), or .graffiti (italic font) Extra - When submitting, the form inputs must return to the initial values.







