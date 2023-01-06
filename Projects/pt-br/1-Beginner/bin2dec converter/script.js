function check() {
    let input = document.getElementById('inputNumber').value
    if (input.includes(2) || input.includes(3) || input.includes(4) || input.includes(5) || input.includes(6) || input.includes(7) || input.includes(8) || input.includes(9)) {
        error()
    }else {
        convert()
    }
}
  
function error() {
    alert('Only 1 and 0')
}
   
function convert() {
    let input = document.getElementById('inputNumber').value
    arrayInput = [...input]
    arrayInput.reverse()
    let soma = 0
    vezes = 0
    for (i = 0; i < arrayInput.length; i++) {
        let parteUm = 2**i
        let parteDois = parteUm * arrayInput[i]
        soma += parteDois
    }
    console.log(`A soma dos valores da array é ${soma}`)
    document.getElementById('outputNumber').innerText = soma
}