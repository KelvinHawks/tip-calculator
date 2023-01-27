let billTotalInput = document.getElementById('input-value')
let tipInput = document.getElementById('input-tip')
let calculatedCost = document.getElementById('total-cost-per-person')

const incrementBtn = document.querySelector('.increment')
const decrementBtn = document.querySelector('.decrement')
const numberOfPeople = document.querySelector('#no-of-people')
// incrementBtn.onclick = () => totalInput()

let total = 1

// add no of people

incrementBtn.onclick = () => {
    total = total + 1
    numberOfPeople.innerText = total
    totalInput()

}

//substract no of people

decrementBtn.onclick = () => {
    total = total - 1
    numberOfPeople.innerText = total

    if(total <= 0){
        numberOfPeople.innerText = 1
    }
    totalInput()
}

//calculate total

function totalInput(){
    const totalPerPerson = (parseInt(billTotalInput.value) + ((parseInt(tipInput.value)/100)*billTotalInput.value)) / total
    calculatedCost.innerText = '$'+ parseFloat(totalPerPerson.toFixed(2)) 

    if(total <= 0){
        calculatedCost.innerText = '$' + (parseInt(billTotalInput.value) + ((parseInt(tipInput.value)/100)*billTotalInput.value))
    }
}