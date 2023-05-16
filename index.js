let arr = document.getElementsByTagName("button");
let display = document.getElementById("inputbox");


for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", (e) => {
    let btnValue = e.target.innerHTML;

    if (e.target.innerHTML === "=") {
        let lastchar=display.value.charAt(display.value.length-1);
        if(lastchar === '+' || lastchar === '-' || lastchar === '*' || lastchar === '/' || lastchar === '%'){
           alert('please enter proper expression');
        }
        else{
            display.value=eval(display.value);

        }
    } else if (btnValue === "AC") {
      display.value = "";
    } else if (btnValue === "DEL") {
        display.value= display.value.substring(0,display.value.length-1);
    }
    
    else{
        display.value += btnValue;
    }
  });
}
