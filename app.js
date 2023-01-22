var output = document.getElementById('Output');
var button = document.querySelectorAll('button');
var inputVal = '';

for(input of button){
    input.addEventListener("click", (e) => {
        screenText = e.target.innerText;
        
        if(screenText == 'X'){
            screenText = '*';
            inputVal += screenText;
            output.value = inputVal;
        }

        else if(screenText == 'AC'){
            inputVal = "";
            output.value = inputVal;
        }

        else if(screenText == '←'){
            var value = document.getElementById("Output").value;
            document.getElementById("Output").value = value.substr(0, value.length - 1);
        }

        else if(screenText == '='){
            output.value = eval(inputVal);
        }

        else{
            inputVal += screenText;
            output.value = inputVal
        }

    });
}