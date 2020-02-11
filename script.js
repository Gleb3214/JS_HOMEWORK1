function adres(){
    document.location.href = 'http://yandex.ru/';
}

var block = document.getElementById("wrapper");

function changeColor(){
    if(block.style.backgroundColor == "red"){
        block.style.backgroundColor = "green"
    }
    else{
        block.style.backgroundColor = "red"
    }
}

function button3(){
    $("div.wrapper:empty").text("!!!!!!");
}

