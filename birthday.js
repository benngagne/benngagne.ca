// a little birthday present to myself
// copyright 2022 benn

function getAge(dateString) {
    let today = new Date()
    let birthDate = new Date(dateString)
    let age = today.getFullYear() - birthDate.getFullYear()
    let month = today.getMonth() - birthDate.getMonth()
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    return age
}

let ageSpan = document.getElementById("age")
let birthDate = "2001/09/30"
ageSpan.innerHTML = getAge(birthDate)

if ((new Date().getMonth() === new Date(birthDate).getMonth()) && (new Date().getDate() === new Date(birthDate).getDate())) {
    console.log("happy birthday benn")
    document.getElementById("name").children[0].innerHTML = "birthday boi"
}