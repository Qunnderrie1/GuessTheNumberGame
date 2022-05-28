const userValue = document.querySelector("input")
const guessBtn = document.querySelector("button")




guessBtn.addEventListener('click' , ()=>{

    userValue.value.trim();

    let rand = Math.floor(Math.random() * 10 + 1)
    console.log(rand)
    console.log(userValue.value)

    if(userValue.value == rand){
        alert("You Win!!!")
       
    }
    if(userValue.value = ""){
        alert("Please enter a value")
    }

})
