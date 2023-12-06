const input = document.querySelector('.screen')
const buttons = document.querySelectorAll("button");


buttons.forEach(button => {
    buttonValue = button.innerText
    
    button.addEventListener("click",(e) => {
        
        if (button.innerText === '=') {
            if(!input.value){
                input.value = "0";
            }
            input.value = eval(input.value);
        }else if(button.innerText === 'AC'){
            input.value = "";
        }
        else if (button.innerText === "Del") {
       
          input.value = input.value.slice(0,input.value.length -1);
          
        } else {
          console.log(button.innerText);

          input.value += button.innerText;
        }
    });
    


})
