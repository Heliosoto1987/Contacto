const input = document.querySelector('#input1');
const modal = document.querySelector('.modal');
let reciver = '';
let acumulador = 0;

function valueInput() {
    modal.classList.add('hidden');
    reciver = input.value
    return reciver
} 


function timer() {
    reciver = input.value
    acumulador += 1
    if (acumulador >= 5 && acumulador < 8) {
        console.log(reciver)
        modal.classList.remove('hidden')
        btn.classList.add('center')
        input.classList.add('hidden')
        btn.innerHTML = `${reciver} Gracias por ver mi blog, Abajo puedes darle a los botones de contacto.`;
    }else if(acumulador > 9){
        modal.classList.add('hidden')
    }
}

function callbacks() {
    valueInput()
    setInterval(timer, 1000)
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', callbacks)
