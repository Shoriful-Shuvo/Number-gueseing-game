let headingOne = document.querySelector(".headingOne")
let inputOne = document.querySelector(".inputOne")
let buttonOne = document.querySelector(".buttonOne")
let error = document.querySelector(".error")


let allone = document.querySelector(".allone")
let alltwo = document.querySelector(".alltwo")
let allthree = document.querySelector(".allthree")
let allFour = document.querySelector(".allFour")
let allFive = document.querySelector(".allFive")
let allSix = document.querySelector(".allSix")
let Chance = document.querySelector(".Chance")

let headingTwo = document.querySelector(".headingTwo")
let inputTwo = document.querySelector(".inputTwo")
let buttonTwo = document.querySelector(".buttonTwo")
let errorTwo = document.querySelector(".errorTwo")


let headingThree = document.querySelector(".headingThree")
let inputThree = document.querySelector(".inputThree")
let buttonThree = document.querySelector(".buttonThree")
let errorThree = document.querySelector(".errorThree")


let headingFour = document.querySelector(".headingFour")
let inputFour = document.querySelector(".inputFour")
let buttonFour = document.querySelector(".buttonFour")
let errorFour = document.querySelector(".errorFour")


let headingFive = document.querySelector(".headingFive")
let headingSix = document.querySelector(".headingSix")


let count = 5

buttonOne.addEventListener("click",()=>{
    if (!inputOne.value) {
        error.innerHTML ="Pleae Enter Something"
        error.style.display ="block"
        
    }else if (!isNaN(inputOne.value)) {

        error.innerHTML ="Please Enter your name not number"
        error.style.display ="block"

    }else{
        error.style.display ="none"

        alltwo.style.display ="block"
        allone.style.display ="none"
        
        
    }
    
})

buttonTwo.addEventListener("click",()=>{
    if (!inputTwo.value) {

        errorTwo.innerHTML = "Pleae Enter Something"
        errorTwo.style.display ="block"

    }else if (isNaN(inputTwo.value)) {
        errorTwo.innerHTML = "Pleae Enter a Number"
        errorTwo.style.display ="block"

    }else if (!(inputTwo.value <=10 && inputTwo.value>0)) {
        errorTwo.innerHTML = "Pleae Enter a Number 1 to 10"
        errorTwo.style.display ="block"
                
    }
    else{
        errorTwo.style.display ="none"
        alltwo.style.display ="none"
        allthree.style.display ="block"
        
    }

})


buttonThree.addEventListener("click",()=>{
    if (!inputThree.value) {
        errorThree.innerHTML ="Pleae Enter Something"
        errorThree.style.display ="block"
        
    }else if (!isNaN(inputThree.value)) {

        errorThree.innerHTML ="Please Enter your name not number"
        errorThree.style.display ="block"

    }else{
        errorThree.style.display ="none"
        allthree.style.display ="none"
        allFour.style.display ="block"
        Chance.innerHTML =`Chance :${count}`
       
    }
    
})


buttonFour.addEventListener("click",()=>{
    if (!inputFour.value) {
        

        errorFour.innerHTML = "Pleae Enter Something"
        errorFour.style.display ="block"

    }else if (isNaN(inputFour.value)) {
        errorFour.innerHTML = "Pleae Enter a Number"
        errorFour.style.display ="block"

    }else if (!(inputFour.value <=10 && inputFour.value>0)) {
        errorFour.innerHTML = "Pleae Enter a Number 1 to 10"
        errorFour.style.display ="block"
                
    }
    else{
        
        errorFour.style.display ="none"
        if (count>1) {
            count--
            Chance.innerHTML =`Chance :${count}`
            if (inputTwo.value==inputFour.value) {
                allFour.style.display = "none"
                headingFive.innerHTML =`${inputThree.value} is the Winner `
            
            }
        }else{
            count =0
            Chance.innerHTML =`Chance :${count}`
            allFour.style.display = "none"
            headingSix.innerHTML =`${inputOne.value} is the Winner `
           
        }
       
      
        
    }

})


