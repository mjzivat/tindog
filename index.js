import dogsData from './data.js'
import Dog from './Dog.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
document.getElementById('accept-btn').addEventListener('click', accept)
document.getElementById('reject-btn').addEventListener('click', reject)

render()

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    if (currentDogIndex < 2) {
        currentDogIndex+=1
        currentDog = new Dog(dogsData[currentDogIndex])
        render()
    } else if (currentDogIndex >= 2) {
        document.getElementById('card').innerHTML = `
                <div class='container'>
                    <span class='no-dogs'>There are no more dogs in your area...</span>
                </div>
        `
    }
}

function accept() {
    currentDog.setMatchStatus(true)
    setTimeout(getNewDog, 2000)
}

function reject() {
    currentDog.setMatchStatus(false)
    setTimeout(getNewDog, 2000)
}
