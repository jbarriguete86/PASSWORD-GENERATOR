const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("result-1")
let password2 = document.getElementById("result-2")
let count = 0
console.log(password1)
console.log(password2)

function generatePassword(){
    count++
    let passwordLength = prompt("How long should the password be?")
    if (count === 0){
for (let i = 0 ; i < passwordLength ; i++) {
    password1.textContent += characters[randomize()]
    password2.textContent += characters[randomize()]
}   
} else {
    password1.textContent = ""
    password2.textContent = ""
    for (let i = 0 ; i < passwordLength ; i++) {
    password1.textContent += characters[randomize()]
    password2.textContent += characters[randomize()]
}  
}
}

function randomize(){
    let random = Math.floor(Math.random()* characters.length)
    return random
}



