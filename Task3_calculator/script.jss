let d = document.getElementById("display");

function app(value){
    d.value += value;
}

function clr(){
    d.value = "";
}

function del(){
    d.value = d.value.slice(0,-1);
}

function calc(){
    try{
        d.value = eval(d.value);
    }
    catch{
        d.value = "Error";
    }
}
