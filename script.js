function run() { 
const submit = document.querySelector(".submit"),
newGame = document.querySelector(".new"),
result = document.querySelector("#result");
let randomNumber = Math.floor(Math.random() * 100),
previousValue = document.querySelector(".previous-value"),
data = [];
submit.addEventListener("click",(e)=> {
    e.preventDefault();
    const inputValue = document.querySelector("#guess").value
    const userValue = parseInt(inputValue);
    if (isNaN(userValue)) {
        result.innerHTML = "Please enter a number";
    }else if(userValue > 0 && userValue < 101){
        data.push(userValue);
        previousValue.innerHTML = `Previous values : ${data.join(", ")}`
    if(userValue > randomNumber){
        result.innerHTML = "You guessed too high!";
    }
    else if (userValue < randomNumber) {
        result.innerHTML = "You guessed too low!";    
    }
    else {
        result.innerHTML = "You guessed correctly!";
        submit.disabled = true;
        newGame.disabled = false;
        data = [];
        previousValue.innerHTML = '';
        randomNumber = Math.floor(Math.random() * 100);
    }
    }else{
        result.innerHTML = "Please enter a number between 1 and 100";
    }
    
})
newGame.addEventListener("click",()=>{
    submit.disabled = false;
    newGame.disabled = true;
    result.innerHTML = "";
})
}
run();
