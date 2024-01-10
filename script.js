function dis(value){
document.getElementById("display").value += value;
}

function clr(){
    document.getElementById("display").value = '';
}

function equal(){
    let result = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(result);
    } catch (error) {
        document.getElementById("display").value = 'error';
    }
}

function del(){
    let Delete = document.getElementById("display").value;
    document.getElementById("display").value = Delete.slice(0, -1);
}

function myFunction(event){
    if(event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9' || event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/' || event.key == '%' || event.key == '=')
    document.getElementById("display").value +=event.key;
}
