function onc(i){
    var i = i.value;
    document.getElementById('op').value += i;
}

function clr(){
    document.getElementById('op').value = "";
}

function ans(){
    var e = document.getElementById('op').value;
    var a = eval(e);
    document.getElementById('op').value = a;
}